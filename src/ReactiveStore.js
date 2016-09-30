import { Subject } from 'rxjs-es/Subject';
import { Observable } from 'rxjs-es/Observable';
import 'rxjs-es/add/operator/map';
import 'rxjs-es/add/operator/mergeMap';
import 'rxjs-es/add/operator/filter';
import 'rxjs-es/add/operator/do';
import 'rxjs-es/add/operator/distinct';
import 'rxjs-es/add/operator/delay';
import 'rxjs-es/add/operator/debounce';
import isAction from './isAction.js';
import { $$MIDDLEWARES, $$STATE, $$CONTEXT, ACTION_ASSIGN_STATE } from './constants.js';
import isPlainObject from 'lodash/isPlainObject';
import forEach from 'lodash/forEach';
import depose from './depose.js';
import assignState from './assignState.js';
import { actionAssignState } from './actionFactories.js';
import debug from './debug.js';

/**
 * Subject.prototype.action - Puts to sequence an action and remembers this token
 *
 * @param  {object} action
 * @param  {function} [callback]
 */
Subject.prototype.action = function(action, callback) {
  if ("undefined"===typeof this.actions) this.actions = {};
  if ("undefined"===typeof this.actions[action.type]) this.actions[action.type] = [];
  this.actions[action.type].push(callback);
  this.next(Object.freeze(action));
}


/**
 * Subject.prototype.actionRelease - Release an action and execute token
 *
 * @param  {type} action description
 * @return {type}        description
 */
Subject.prototype.actionRelease = function(actionName) {
  if (this.actions[actionName]) {
    let cb = this.actions[actionName].pop();
    if ("function"===typeof cb) {
      cb();
    }
  }
}

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
export default class ReactiveStore {
  constructor(defaultState, middlewares, context) {
    this[$$MIDDLEWARES] = {};
    this[$$STATE] = defaultState||{};
    this[$$CONTEXT] = context||this;
    this.actions = actions;
    this.Observable = Observable;
    this.Subject = Subject;
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
      this[$$MIDDLEWARES][actionName] = new Subject();
      this[$$MIDDLEWARES][actionName].depose = depose.withAction(actionName, this);
    }

    var depositeObservable = middleware(this[$$MIDDLEWARES][actionName], this, this[$$CONTEXT]);
    if (depositeObservable instanceof Observable) {
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
    if (process.env.NODE_ENV=='development') {
      console.debug('action', action.type);
    }
    debug(isAction(action), 'ReactiveStore prototype\'s method dispatch(action) requires an action object');
    if (this[$$MIDDLEWARES][action.type]) {
      this[$$MIDDLEWARES][action.type].action(action, callback);
    }
    else {
      debug(false, `Unknown action with type '${action.type}'`);
    }
  }

  getState() {
    return this[$$STATE];
  }
}
