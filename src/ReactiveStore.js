
if (process.env.NODE_ENV==='development') console.debug('Reactive-middleware in development mode. To build production use NODE_ENV=production option in command line.');

import isAction from './isAction.js';
import isObservable from './isObservable.js';
import { $$MIDDLEWARES, $$STATE, $$CONTEXT, ACTION_ASSIGN_STATE } from './constants.js';
import isPlainObject from './isPlainObject';
import forEach from './forEach';
import depose from './depose.js';
import assignState from './assignState.js';
import { actionAssignState } from './actionFactories.js';
import debug from './debug.js';

/**
 * errorHandler for deposit observer
 *
 * @private
 * @param  {(Error|string)} e description
 */
function errorHandler(e) {
  throw e instanceof Error ? e : new Error(e);
}

/**
 * errorHandler for deposit observer
 *
 * @private
 * @param  {(string|number)} actionName
 */
function completeHandler(actionName) {
  console.log(`Action ${actionName} exhausted.`)
}


/**
 * disposeObservable - call dispose method of observable
 *
 * @param  {Observable} observable
 */
function disposeObservable(observable) {
  observable.dispose();
}


/**
 * createUnsubcriber - factory of unsubscriber
 *
 * @param  {Array} unsubscribeItems
 * @return {function}
 */
function createUnsubcriber(unsubscribeItems) {
  return function unsubscribe() {
    unsubscribeItems.forEach(disposeObservable);
    unsubscribeItems = null;
  }
}

const actions = {
  assignState: actionAssignState
}

/**
 * Reactive store
 */
class ReactiveStore {
  constructor(defaultState, middlewares, context) {
    this[$$MIDDLEWARES] = {};
    this[$$STATE] = defaultState||{};
    this[$$CONTEXT] = context||this;
    this.actions = actions;
    this.Rx = ReactiveStore.Rx;
    if (isPlainObject(middlewares)) {
      forEach(middlewares, (middleware, actionName) => {
        this.registerMiddleware(actionName, middleware);
      });
    }
    /**
     * Define fixed middlewares
     */
     this.registerMiddleware(ACTION_ASSIGN_STATE, assignState.bind(this));
  }

  /**
   * registerMiddleware
   *
   * @param  {string} actionName
   * @param  {function|Array} middlewares
   */
  registerMiddleware(actionName, middleware) {
    if (!this[$$MIDDLEWARES][actionName]) {
      this[$$MIDDLEWARES][actionName] = new this.Rx.Subject();
      this[$$MIDDLEWARES][actionName].depose = depose.withAction(actionName, this);
    }

    var depositeObservable = middleware.call(this[$$CONTEXT], this[$$MIDDLEWARES][actionName], this, this[$$CONTEXT]);
    if (isObservable(depositeObservable)) {
      return depositeObservable.subscribe(this[$$MIDDLEWARES][actionName].depose, errorHandler, completeHandler.bind(this, actionName));
    } else {
      if (process.env.NODE_ENV==='development') console.log(middleware.toString());
      throw new Error('Middleware must return instance of Observable, but middleware returns '+(typeof depositeObservable));
    }
  }


  /**
   * dispatch - Takes an action object and puts to the sequences observable by middlewares
   *
   * @param  {object} action Object with special format
   * @token  {(function)} [callback] Callback function
   * @return {type}        description
   */
  dispatch(action, callback) {
    debug(isAction(action), 'ReactiveStore prototype\'s method dispatch(action) requires an action object');
    if (process.env.NODE_ENV==='development') {
      var info = [];
      for (var prop in action) {
        if (action.hasOwnProperty(prop)&&prop!=='type') {
          info.push(prop+': '+JSON.stringify(action[prop]));
        }
      }
      console.log("%c"+action.type+': '+info.join(', '), "color:gray;font-size:80%;");
    }
    
    if (this[$$MIDDLEWARES][action.type]) {
      this[$$MIDDLEWARES][action.type].action(action, callback);
    }
    else {
      debug(false, `Unknown action with type '${action.type}'`);
    }
  }

  getState() {
    return (process.env.NODE_ENV==='development') ? Object.freeze(Object.assign({}, this[$$STATE])) : this[$$STATE];
  }
}

ReactiveStore.setRx = function(Rx) {
  /**
   * Subject.prototype.action - Puts to sequence an action and remembers this token
   *
   * @param  {object} action
   * @param  {function} [callback]
   */
  var nextMethodName = "function"===typeof Rx.Subject.prototype.next?'next':'onNext';
  Rx.Subject.prototype.action = function(action, callback) {
    if ("undefined"===typeof this.actions) this.actions = {};
    if ("undefined"===typeof this.actions[action.type]) this.actions[action.type] = [];
    this.actions[action.type].push(callback);
    this[nextMethodName](Object.freeze(action));
  }


  /**
   * Subject.prototype.actionRelease - Release an action and execute token
   *
   * @param  {type} action description
   * @return {type}        description
   */
  Rx.Subject.prototype.actionRelease = function(actionName) {
    if (this.actions[actionName]) {
      let cb = this.actions[actionName].pop();
      if ("function"===typeof cb) {
        cb();
      }
    }
  }

  ReactiveStore.Rx = Rx;
};

export default ReactiveStore;
