(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["rm"] = factory();
	else
		root["rm"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.ReactiveStore = exports.actionAssignState = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.createStore = createStore;

	var _ReactiveStore = __webpack_require__(2);

	var _ReactiveStore2 = _interopRequireDefault(_ReactiveStore);

	var _actionFactories = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if ("object" !== (typeof Rx === 'undefined' ? 'undefined' : _typeof(Rx))) {
	  throw new Error('Reactive-middleware requires RxJs >=4.*. Run `bower install rxjs --save` to get it.');
	}

	_ReactiveStore2.default.setRx(Rx);

	function createStore(defaultState, middlewares) {
	  return new _ReactiveStore2.default(defaultState, middlewares);
	}

	exports.actionAssignState = _actionFactories.actionAssignState;
	exports.ReactiveStore = _ReactiveStore2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isAction = __webpack_require__(3);

	var _isAction2 = _interopRequireDefault(_isAction);

	var _isObservable = __webpack_require__(5);

	var _isObservable2 = _interopRequireDefault(_isObservable);

	var _constants = __webpack_require__(6);

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _forEach = __webpack_require__(7);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _depose = __webpack_require__(8);

	var _depose2 = _interopRequireDefault(_depose);

	var _assignState = __webpack_require__(11);

	var _assignState2 = _interopRequireDefault(_assignState);

	var _actionFactories = __webpack_require__(12);

	var _debug = __webpack_require__(13);

	var _debug2 = _interopRequireDefault(_debug);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	if (false) console.debug('Reactive-middleware in development mode. To build production use NODE_ENV=production option in command line.');

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
	  console.log('Action ' + actionName + ' exhausted.');
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
	  };
	}

	/**
	 * applyState - Call all subscribed handlers
	 */
	function applyState() {
	  var _iteratorNormalCompletion = true;
	  var _didIteratorError = false;
	  var _iteratorError = undefined;

	  try {
	    for (var _iterator = this[_constants.$$SUBSCRIBERS][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	      var sub = _step.value;

	      sub.handler(this[_constants.$$STATE]);
	    }
	  } catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	  } finally {
	    try {
	      if (!_iteratorNormalCompletion && _iterator.return) {
	        _iterator.return();
	      }
	    } finally {
	      if (_didIteratorError) {
	        throw _iteratorError;
	      }
	    }
	  }
	}

	function nextSubscribeId(context) {
	  return context[_constants.$$SUBSCRIBE_CURRENT_ID] = isNaN(++context[_constants.$$SUBSCRIBE_CURRENT_ID]) ? 1 : context[_constants.$$SUBSCRIBE_CURRENT_ID];
	}

	var actions = {
	  assignState: _actionFactories.actionAssignState
	};

	/**
	 * Reactive store
	 */

	var ReactiveStore = function () {
	  function ReactiveStore(defaultState, middlewares, context) {
	    var _this = this;

	    _classCallCheck(this, ReactiveStore);

	    this[_constants.$$MIDDLEWARES] = {};
	    this[_constants.$$STATE] = defaultState || {};
	    this[_constants.$$CONTEXT] = context || this;
	    this[_constants.$$SUBSCRIBERS] = [];
	    this.actions = actions;
	    this.Rx = ReactiveStore.Rx;
	    if ((0, _isPlainObject2.default)(middlewares)) {
	      (0, _forEach2.default)(middlewares, function (middleware, actionName) {
	        _this.registerMiddleware(actionName, middleware);
	      });
	    }
	    /**
	     * Define fixed middlewares
	     */
	    this.registerMiddleware(_constants.ACTION_ASSIGN_STATE, function () {
	      var _this2 = this;

	      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }

	      return _assignState2.default.apply(this, args).do(function () {
	        applyState.call(_this2);
	      });
	    });
	    /**
	     *
	     */
	    this.dispatch = this[_constants.$$DISPATCH].bind(this);
	  }

	  /**
	   * registerMiddleware
	   *
	   * @param  {string} actionName
	   * @param  {function|Array} middlewares
	   */


	  _createClass(ReactiveStore, [{
	    key: 'registerMiddleware',
	    value: function registerMiddleware(actionName, middleware) {
	      if (!this[_constants.$$MIDDLEWARES][actionName]) {
	        this[_constants.$$MIDDLEWARES][actionName] = new this.Rx.Subject();
	        this[_constants.$$MIDDLEWARES][actionName].depose = _depose2.default.withAction(actionName, this);
	      }

	      var depositeObservable = middleware.call(this[_constants.$$CONTEXT], this[_constants.$$MIDDLEWARES][actionName], this, this[_constants.$$CONTEXT]);
	      if ((0, _isObservable2.default)(depositeObservable)) {
	        return depositeObservable.subscribe(this[_constants.$$MIDDLEWARES][actionName].depose, errorHandler, completeHandler.bind(this, actionName));
	      } else {
	        if (false) console.log(middleware.toString());
	        throw new Error('Middleware must return instance of Observable, but middleware returns ' + (typeof depositeObservable === 'undefined' ? 'undefined' : _typeof(depositeObservable)));
	      }
	    }

	    /**
	     * dispatch - Takes an action object and puts to the sequences observable by middlewares
	     *
	     * @param  {object} action Object with special format
	     * @token  {(function)} [callback] Callback function
	     * @return {type}        description
	     */

	  }, {
	    key: _constants.$$DISPATCH,
	    value: function value(action, callback) {
	      (0, _debug2.default)((0, _isAction2.default)(action), 'ReactiveStore prototype\'s method dispatch(action) requires an action object');
	      if (false) {
	        var info = [];
	        for (var prop in action) {
	          if (action.hasOwnProperty(prop) && prop !== 'type') {
	            info.push(prop + ': ' + JSON.stringify(action[prop]));
	          }
	        }
	        console.log("%c" + action.type + ': ' + info.join(', '), "color:gray;font-size:80%;");
	      }

	      if (this[_constants.$$MIDDLEWARES][action.type]) {
	        this[_constants.$$MIDDLEWARES][action.type].action(action, callback);
	      } else {
	        (0, _debug2.default)(false, 'Unknown action with type \'' + action.type + '\'');
	      }
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return  false ? Object.freeze(Object.assign({}, this[_constants.$$STATE])) : this[_constants.$$STATE];
	    }

	    /**
	     * Subscribe to state change event
	     *
	     * @param  {function} handler
	     * @return {function} Unsubscribe
	     */

	  }, {
	    key: 'subscribe',
	    value: function subscribe(handler) {
	      var _this3 = this;

	      var id = nextSubscribeId(this);
	      this[_constants.$$SUBSCRIBERS].push({
	        id: id,
	        handler: handler
	      });

	      return function () {
	        for (var index = 0; index < _this3[_constants.$$SUBSCRIBERS].length; ++index) {
	          if (_this3[_constants.$$SUBSCRIBERS][index].id === id) {
	            _this3[_constants.$$SUBSCRIBERS].splice(index, 1);
	          }
	        }
	      };
	    }
	  }]);

	  return ReactiveStore;
	}();

	ReactiveStore.setRx = function (Rx) {
	  /**
	   * Subject.prototype.action - Puts to sequence an action and remembers this token
	   *
	   * @param  {object} action
	   * @param  {function} [callback]
	   */
	  var nextMethodName = "function" === typeof Rx.Subject.prototype.next ? 'next' : 'onNext';
	  Rx.Subject.prototype.action = function (action, callback) {
	    if ("undefined" === typeof this.actions) this.actions = {};
	    if ("undefined" === typeof this.actions[action.type]) this.actions[action.type] = [];
	    this.actions[action.type].push(callback);
	    this[nextMethodName](Object.freeze(action));
	  };

	  /**
	   * Subject.prototype.actionRelease - Release an action and execute token
	   *
	   * @param  {type} action description
	   * @return {type}        description
	   */
	  Rx.Subject.prototype.actionRelease = function (actionName) {
	    if (this.actions[actionName]) {
	      var cb = this.actions[actionName].pop();
	      if ("function" === typeof cb) {
	        cb();
	      }
	    }
	  };

	  ReactiveStore.Rx = Rx;
	};

	exports.default = ReactiveStore;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAction;

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * isAction - validate action
	 *
	 * @param  {object} action
	 * @return {boolean}
	 */
	function isAction(action) {
	  return (0, _isPlainObject2.default)(action) && action.hasOwnProperty('type');
	}
	module.exports = exports['default'];

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = isPlainObject;
	function isPlainObject(object) {
		return object.constructor === Object;
	}
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isObservable;
	/**
	 * isObservable
	 *
	 * @param  {object} observable
	 * @return {boolean}
	 */
	function isObservable(observable) {
	  return "object" === (typeof observable === "undefined" ? "undefined" : _typeof(observable)) && "function" === typeof observable.subscribe;
	}
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $$STATE = exports.$$STATE = Symbol('state');
	var $$MIDDLEWARES = exports.$$MIDDLEWARES = Symbol('middlewares');
	var $$CONTEXT = exports.$$CONTEXT = Symbol('context');
	var $$SUBSCRIBERS = exports.$$SUBSCRIBERS = Symbol('subscribers');
	var $$SUBSCRIBE_CURRENT_ID = exports.$$SUBSCRIBE_CURRENT_ID = Symbol('subscribe-current-id');
	var $$DISPATCH = exports.$$DISPATCH = Symbol('dispatch');
	var ACTION_ASSIGN_STATE = exports.ACTION_ASSIGN_STATE = 'ACTION_ASSIGN_STATE';

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = forEach;
	function forEach(subject, handler) {
		if (subject instanceof Array) {
			subject.forEach(handler);
		} else {
			for (var prop in subject) {
				if (subject.hasOwnProperty(prop)) {
					handler(subject[prop], prop);
				}
			}
		}
	}
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = depose;

	var _isAction = __webpack_require__(3);

	var _isAction2 = _interopRequireDefault(_isAction);

	var _isPromise = __webpack_require__(9);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _DepositToken = __webpack_require__(10);

	var _DepositToken2 = _interopRequireDefault(_DepositToken);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * depose - Handler for middleware result sequencies
	 *
	 * @private
	 * @param  {type} deposit description
	 * @return {type}         description
	 */
	function depose(token, deposit) {
	  if ("undefined" === typeof deposit) {
	    token.done();
	  } else if (deposit instanceof Array) {
	    deposit.forEach(depose.bind(this, token.mutate(deposit.length)));
	  } else if ((0, _isAction2.default)(deposit)) {
	    if (!Object.isFrozen(deposit)) {
	      if (false) {
	        token.__addDevStepAction(deposit);
	      }
	      this.dispatch(deposit, token.done.bind(token));
	    } else {
	      // ignore previous action
	      token.done();
	    }
	  } else if ((0, _isPromise2.default)(deposit)) {
	    var deposeUp = depose.bind(this, token);
	    deposit.then(deposeUp).catch(deposeUp);
	  } else if (deposit instanceof Error) {
	    token.done();
	    throw deposit;
	  } else if ("function" === typeof deposit) {
	    depose.call(this, token, deposit.call(this));
	  } else if ("object" === (typeof deposit === 'undefined' ? 'undefined' : _typeof(deposit)) && "function" === typeof deposit.subscribe) {
	    debugger;
	    deposit.subscribe(depose.bind(this, token.up()), token.done.bind(token), token.done.bind(token));
	  } else {
	    token.done();
	  }
	}

	depose.withAction = function withAction(actionName, producer) {
	  var token = new _DepositToken2.default(actionName, producer);
	  return function (deposit) {
	    depose.call(producer, token.up(), deposit);
	  };
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = isPromise;
	function isPromise(promiseLike) {
	  return "object" === (typeof promiseLike === "undefined" ? "undefined" : _typeof(promiseLike)) && "function" === typeof promiseLike.then && "function" === typeof promiseLike.catch;
	}
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(6);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DepositToken = function () {
	  function DepositToken(actionName, producer) {
	    _classCallCheck(this, DepositToken);

	    if (false) {
	      this.__historyStepsCount = [];
	      this.__historyActions = [];
	    }
	    this.actionName = actionName;
	    this.iterations = 0;
	    this.producer = producer;
	  }

	  _createClass(DepositToken, [{
	    key: 'up',
	    value: function up(increase) {
	      this.iterations += increase || 1;
	      return this;
	    }
	  }, {
	    key: 'mutate',
	    value: function mutate(to) {
	      var from = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

	      this.iterations += to - from;
	      return this;
	    }
	  }, {
	    key: 'done',
	    value: function done() {
	      this.iterations--;
	      if (false) {
	        this.__historyStepsCount++;
	      }
	      if (this.iterations === 0) {
	        if (false) {
	          //console.log("%c"+[this.actionName].concat(this.__historyActions).join(' : '), "color:gray;font-size:80%;");
	          this.__historyStepsCount = [];
	          this.__historyActions = [];
	        }
	        this.producer[_constants.$$MIDDLEWARES][this.actionName].actionRelease(this.actionName);
	      }
	    }
	  }, {
	    key: '__addDevStepAction',
	    value: function __addDevStepAction(action) {
	      this.__historyActions.push(action.type);
	    }
	  }]);

	  return DepositToken;
	}();

	exports.default = DepositToken;
	module.exports = exports['default'];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = assignState;

	var _constants = __webpack_require__(6);

	var _isPlainObject = __webpack_require__(4);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * assign state
	 *
	 * @private
	 * @param  {Observable} source
	 */
	function assignState(source) {
	  var _this = this;

	  return source.do(function (action) {
	    Object.assign(_this[_constants.$$STATE], (0, _isPlainObject2.default)(action.state) ? action.state : {});
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actionAssignState = actionAssignState;

	var _constants = __webpack_require__(6);

	/**
	 * actionAssignState - Force update provider state
	 *
	 * @param {object} state Object to assign
	 */
	function actionAssignState(state) {
	  return {
	    type: _constants.ACTION_ASSIGN_STATE,
	    state: state
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = debug;
	function debug(expression, failMessage) {
	  var result = void 0;
	  if ("function" === typeof expression) {
	    result = expression();
	  } else {
	    result = expression;
	  }
	  if (!result) throw failMessage instanceof Error ? failMessage : new Error(failMessage);
	}
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;