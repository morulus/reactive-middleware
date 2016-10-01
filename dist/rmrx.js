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
	exports.createStore = createStore;

	var _Rx = __webpack_require__(2);

	var _Rx2 = _interopRequireDefault(_Rx);

	var _ReactiveStore = __webpack_require__(329);

	var _ReactiveStore2 = _interopRequireDefault(_ReactiveStore);

	var _actionFactories = __webpack_require__(450);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_ReactiveStore2.default.setRx(_Rx2.default);

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

	var _Subject = __webpack_require__(3);

	var _Observable = __webpack_require__(4);

	__webpack_require__(20);

	__webpack_require__(24);

	__webpack_require__(27);

	__webpack_require__(39);

	__webpack_require__(43);

	__webpack_require__(46);

	__webpack_require__(48);

	__webpack_require__(51);

	__webpack_require__(59);

	__webpack_require__(62);

	__webpack_require__(65);

	__webpack_require__(67);

	__webpack_require__(69);

	__webpack_require__(72);

	__webpack_require__(81);

	__webpack_require__(84);

	__webpack_require__(86);

	__webpack_require__(90);

	__webpack_require__(92);

	__webpack_require__(94);

	__webpack_require__(97);

	__webpack_require__(100);

	__webpack_require__(103);

	__webpack_require__(106);

	__webpack_require__(110);

	__webpack_require__(113);

	__webpack_require__(115);

	__webpack_require__(117);

	__webpack_require__(119);

	__webpack_require__(121);

	__webpack_require__(123);

	__webpack_require__(129);

	__webpack_require__(131);

	__webpack_require__(133);

	__webpack_require__(134);

	__webpack_require__(135);

	__webpack_require__(137);

	__webpack_require__(140);

	__webpack_require__(143);

	__webpack_require__(145);

	__webpack_require__(147);

	__webpack_require__(149);

	__webpack_require__(151);

	__webpack_require__(153);

	__webpack_require__(155);

	__webpack_require__(157);

	__webpack_require__(159);

	__webpack_require__(161);

	__webpack_require__(163);

	__webpack_require__(165);

	__webpack_require__(167);

	__webpack_require__(169);

	__webpack_require__(171);

	__webpack_require__(173);

	__webpack_require__(176);

	__webpack_require__(178);

	__webpack_require__(180);

	__webpack_require__(182);

	__webpack_require__(184);

	__webpack_require__(187);

	__webpack_require__(192);

	__webpack_require__(194);

	__webpack_require__(196);

	__webpack_require__(198);

	__webpack_require__(200);

	__webpack_require__(202);

	__webpack_require__(204);

	__webpack_require__(206);

	__webpack_require__(208);

	__webpack_require__(210);

	__webpack_require__(212);

	__webpack_require__(215);

	__webpack_require__(216);

	__webpack_require__(217);

	__webpack_require__(218);

	__webpack_require__(219);

	__webpack_require__(221);

	__webpack_require__(223);

	__webpack_require__(227);

	__webpack_require__(228);

	__webpack_require__(229);

	__webpack_require__(231);

	__webpack_require__(234);

	__webpack_require__(236);

	__webpack_require__(238);

	__webpack_require__(241);

	__webpack_require__(243);

	__webpack_require__(245);

	__webpack_require__(246);

	__webpack_require__(247);

	__webpack_require__(249);

	__webpack_require__(251);

	__webpack_require__(253);

	__webpack_require__(255);

	__webpack_require__(257);

	__webpack_require__(259);

	__webpack_require__(261);

	__webpack_require__(263);

	__webpack_require__(265);

	__webpack_require__(267);

	__webpack_require__(269);

	__webpack_require__(271);

	__webpack_require__(273);

	__webpack_require__(275);

	__webpack_require__(284);

	__webpack_require__(286);

	__webpack_require__(288);

	__webpack_require__(290);

	__webpack_require__(292);

	__webpack_require__(294);

	__webpack_require__(296);

	__webpack_require__(298);

	__webpack_require__(300);

	__webpack_require__(302);

	__webpack_require__(304);

	__webpack_require__(306);

	__webpack_require__(308);

	__webpack_require__(310);

	__webpack_require__(312);

	__webpack_require__(314);

	__webpack_require__(316);

	__webpack_require__(318);

	__webpack_require__(320);

	__webpack_require__(322);

	__webpack_require__(324);

	__webpack_require__(326);

	__webpack_require__(327);

	var _Subscription = __webpack_require__(9);

	var _Subscriber = __webpack_require__(7);

	var _AsyncSubject = __webpack_require__(23);

	var _ReplaySubject = __webpack_require__(125);

	var _BehaviorSubject = __webpack_require__(240);

	// import { MulticastObservable } from 'rxjs-es/observable/MulticastObservable';
	// import { ConnectableObservable } from 'rxjs-es/observable/ConnectableObservable';
	// import { Notification } from 'rxjs-es/Notification';
	// import { EmptyError } from 'rxjs-es/util/EmptyError';
	// import { ArgumentOutOfRangeError } from 'rxjs-es/util/ArgumentOutOfRangeError';
	// import { ObjectUnsubscribedError } from 'rxjs-es/util/ObjectUnsubscribedError';
	// import { UnsubscriptionError } from 'rxjs-es/util/UnsubscriptionError';
	// import { TimeInterval } from 'rxjs-es/operator/timeInterval';
	// import { Timestamp } from 'rxjs-es/operator/timestamp';
	// import { TestScheduler } from 'rxjs-es/testing/TestScheduler';
	// import { VirtualTimeScheduler } from 'rxjs-es/scheduler/VirtualTimeScheduler';
	// import { AjaxResponse, AjaxError, AjaxTimeoutError } from 'rxjs-es/observable/dom/AjaxObservable';
	// import { asap } from 'rxjs-es/scheduler/asap';
	// import { async } from 'rxjs-es/scheduler/async';
	// import { queue } from 'rxjs-es/scheduler/queue';
	// import { animationFrame } from 'rxjs-es/scheduler/animationFrame';
	// import { $$rxSubscriber as rxSubscriber } from 'rxjs-es/symbol/rxSubscriber';
	// import { $$iterator as iterator } from 'rxjs-es/symbol/iterator';
	// import { $$observable as observable } from 'rxjs-es/symbol/observable';
	// /* tslint:enable:no-unused-variable */
	// /**
	//  * @typedef {Object} Rx.Scheduler
	//  * @property {Scheduler} queue Schedules on a queue in the current event frame
	//  * (trampoline scheduler). Use this for iteration operations.
	//  * @property {Scheduler} asap Schedules on the micro task queue, which uses the
	//  * fastest transport mechanism available, either Node.js' `process.nextTick()`
	//  * or Web Worker MessageChannel or setTimeout or others. Use this for
	//  * asynchronous conversions.
	//  * @property {Scheduler} async Schedules work with `setInterval`. Use this for
	//  * time-based operations.
	//  * @property {Scheduler} animationFrame Schedules work with `requestAnimationFrame`.
	//  * Use this for synchronizing with the platform's painting
	//  */
	// let Scheduler = {
	//     asap,
	//     queue,
	//     animationFrame,
	//     async
	// };
	// *
	//  * @typedef {Object} Rx.Symbol
	//  * @property {Symbol|string} rxSubscriber A symbol to use as a property name to
	//  * retrieve an "Rx safe" Observer from an object. "Rx safety" can be defined as
	//  * an object that has all of the traits of an Rx Subscriber, including the
	//  * ability to add and remove subscriptions to the subscription chain and
	//  * guarantees involving event triggering (can't "next" after unsubscription,
	//  * etc).
	//  * @property {Symbol|string} observable A symbol to use as a property name to
	//  * retrieve an Observable as defined by the [ECMAScript "Observable" spec](https://github.com/zenparsing/es-observable).
	//  * @property {Symbol|string} iterator The ES6 symbol to use as a property name
	//  * to retrieve an iterator from an object.

	// let Symbol = {
	//     rxSubscriber,
	//     observable,
	//     iterator
	// };

	//# sourceMappingURL=Rx.js.map

	/* tslint:disable:no-unused-variable */
	// Subject imported before Observable to bypass circular dependency issue since
	// Subject extends Observable and Observable references Subject in it's
	// definition
	exports.default = {
		Observable: _Observable.Observable,
		Subject: _Subject.Subject,
		Subscription: _Subscription.Subscription,
		AsyncSubject: _AsyncSubject.AsyncSubject,
		ReplaySubject: _ReplaySubject.ReplaySubject,
		BehaviorSubject: _BehaviorSubject.BehaviorSubject
	};
	/* tslint:disable:no-unused-variable */

	// import 'rxjs-es/add/observable/dom/ajax';
	// import 'rxjs-es/add/observable/dom/webSocket';

	/* tslint:enable:no-unused-variable */

	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AnonymousSubject = exports.Subject = exports.SubjectSubscriber = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _Subscriber2 = __webpack_require__(7);

	var _Subscription = __webpack_require__(9);

	var _ObjectUnsubscribedError = __webpack_require__(18);

	var _SubjectSubscription = __webpack_require__(19);

	var _rxSubscriber = __webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class SubjectSubscriber<T>
	 */
	var SubjectSubscriber = exports.SubjectSubscriber = function (_Subscriber) {
	    _inherits(SubjectSubscriber, _Subscriber);

	    function SubjectSubscriber(destination) {
	        _classCallCheck(this, SubjectSubscriber);

	        var _this = _possibleConstructorReturn(this, (SubjectSubscriber.__proto__ || Object.getPrototypeOf(SubjectSubscriber)).call(this, destination));

	        _this.destination = destination;
	        return _this;
	    }

	    return SubjectSubscriber;
	}(_Subscriber2.Subscriber);
	/**
	 * @class Subject<T>
	 */


	var Subject = exports.Subject = function (_Observable) {
	    _inherits(Subject, _Observable);

	    function Subject() {
	        _classCallCheck(this, Subject);

	        var _this2 = _possibleConstructorReturn(this, (Subject.__proto__ || Object.getPrototypeOf(Subject)).call(this));

	        _this2.observers = [];
	        _this2.closed = false;
	        _this2.isStopped = false;
	        _this2.hasError = false;
	        _this2.thrownError = null;
	        return _this2;
	    }

	    _createClass(Subject, [{
	        key: _rxSubscriber.$$rxSubscriber,
	        value: function value() {
	            return new SubjectSubscriber(this);
	        }
	    }, {
	        key: 'lift',
	        value: function lift(operator) {
	            var subject = new AnonymousSubject(this, this);
	            subject.operator = operator;
	            return subject;
	        }
	    }, {
	        key: 'next',
	        value: function next(value) {
	            if (this.closed) {
	                throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
	            }
	            if (!this.isStopped) {
	                var observers = this.observers;

	                var len = observers.length;
	                var copy = observers.slice();
	                for (var i = 0; i < len; i++) {
	                    copy[i].next(value);
	                }
	            }
	        }
	    }, {
	        key: 'error',
	        value: function error(err) {
	            if (this.closed) {
	                throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
	            }
	            this.hasError = true;
	            this.thrownError = err;
	            this.isStopped = true;
	            var observers = this.observers;

	            var len = observers.length;
	            var copy = observers.slice();
	            for (var i = 0; i < len; i++) {
	                copy[i].error(err);
	            }
	            this.observers.length = 0;
	        }
	    }, {
	        key: 'complete',
	        value: function complete() {
	            if (this.closed) {
	                throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
	            }
	            this.isStopped = true;
	            var observers = this.observers;

	            var len = observers.length;
	            var copy = observers.slice();
	            for (var i = 0; i < len; i++) {
	                copy[i].complete();
	            }
	            this.observers.length = 0;
	        }
	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            this.isStopped = true;
	            this.closed = true;
	            this.observers = null;
	        }
	    }, {
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            if (this.closed) {
	                throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
	            } else if (this.hasError) {
	                subscriber.error(this.thrownError);
	                return _Subscription.Subscription.EMPTY;
	            } else if (this.isStopped) {
	                subscriber.complete();
	                return _Subscription.Subscription.EMPTY;
	            } else {
	                this.observers.push(subscriber);
	                return new _SubjectSubscription.SubjectSubscription(this, subscriber);
	            }
	        }
	    }, {
	        key: 'asObservable',
	        value: function asObservable() {
	            var observable = new _Observable2.Observable();
	            observable.source = this;
	            return observable;
	        }
	    }]);

	    return Subject;
	}(_Observable2.Observable);

	Subject.create = function (destination, source) {
	    return new AnonymousSubject(destination, source);
	};
	/**
	 * @class AnonymousSubject<T>
	 */

	var AnonymousSubject = exports.AnonymousSubject = function (_Subject) {
	    _inherits(AnonymousSubject, _Subject);

	    function AnonymousSubject(destination, source) {
	        _classCallCheck(this, AnonymousSubject);

	        var _this3 = _possibleConstructorReturn(this, (AnonymousSubject.__proto__ || Object.getPrototypeOf(AnonymousSubject)).call(this));

	        _this3.destination = destination;
	        _this3.source = source;
	        return _this3;
	    }

	    _createClass(AnonymousSubject, [{
	        key: 'next',
	        value: function next(value) {
	            var destination = this.destination;

	            if (destination && destination.next) {
	                destination.next(value);
	            }
	        }
	    }, {
	        key: 'error',
	        value: function error(err) {
	            var destination = this.destination;

	            if (destination && destination.error) {
	                this.destination.error(err);
	            }
	        }
	    }, {
	        key: 'complete',
	        value: function complete() {
	            var destination = this.destination;

	            if (destination && destination.complete) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var source = this.source;

	            if (source) {
	                return this.source.subscribe(subscriber);
	            } else {
	                return _Subscription.Subscription.EMPTY;
	            }
	        }
	    }]);

	    return AnonymousSubject;
	}(Subject);
	//# sourceMappingURL=Subject.js.map

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Observable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _root = __webpack_require__(5);

	var _toSubscriber = __webpack_require__(6);

	var _observable = __webpack_require__(17);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = exports.Observable = function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        _classCallCheck(this, Observable);

	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */


	    _createClass(Observable, [{
	        key: 'lift',
	        value: function lift(operator) {
	            var observable = new Observable();
	            observable.source = this;
	            observable.operator = operator;
	            return observable;
	        }
	        /**
	         * Registers handlers for handling emitted values, error and completions from the observable, and
	         *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	         * @method subscribe
	         * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	         *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	         * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	         *  the error will be thrown as unhandled
	         * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	         * @return {ISubscription} a subscription reference to the registered handlers
	         */

	    }, {
	        key: 'subscribe',
	        value: function subscribe(observerOrNext, error, complete) {
	            var operator = this.operator;

	            var sink = (0, _toSubscriber.toSubscriber)(observerOrNext, error, complete);
	            if (operator) {
	                operator.call(sink, this);
	            } else {
	                sink.add(this._subscribe(sink));
	            }
	            if (sink.syncErrorThrowable) {
	                sink.syncErrorThrowable = false;
	                if (sink.syncErrorThrown) {
	                    throw sink.syncErrorValue;
	                }
	            }
	            return sink;
	        }
	        /**
	         * @method forEach
	         * @param {Function} next a handler for each value emitted by the observable
	         * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	         * @return {Promise} a promise that either resolves on observable completion or
	         *  rejects with the handled error
	         */

	    }, {
	        key: 'forEach',
	        value: function forEach(next, PromiseCtor) {
	            var _this = this;

	            if (!PromiseCtor) {
	                if (_root.root.Rx && _root.root.Rx.config && _root.root.Rx.config.Promise) {
	                    PromiseCtor = _root.root.Rx.config.Promise;
	                } else if (_root.root.Promise) {
	                    PromiseCtor = _root.root.Promise;
	                }
	            }
	            if (!PromiseCtor) {
	                throw new Error('no Promise impl found');
	            }
	            return new PromiseCtor(function (resolve, reject) {
	                var subscription = _this.subscribe(function (value) {
	                    if (subscription) {
	                        // if there is a subscription, then we can surmise
	                        // the next handling is asynchronous. Any errors thrown
	                        // need to be rejected explicitly and unsubscribe must be
	                        // called manually
	                        try {
	                            next(value);
	                        } catch (err) {
	                            reject(err);
	                            subscription.unsubscribe();
	                        }
	                    } else {
	                        // if there is NO subscription, then we're getting a nexted
	                        // value synchronously during subscription. We can just call it.
	                        // If it errors, Observable's `subscribe` will ensure the
	                        // unsubscription logic is called, then synchronously rethrow the error.
	                        // After that, Promise will trap the error and send it
	                        // down the rejection path.
	                        next(value);
	                    }
	                }, reject, resolve);
	            });
	        }
	    }, {
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            return this.source.subscribe(subscriber);
	        }
	        /**
	         * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	         * @method Symbol.observable
	         * @return {Observable} this instance of the observable
	         */

	    }, {
	        key: _observable.$$observable,
	        value: function value() {
	            return this;
	        }
	    }]);

	    return Observable;
	}();
	// HACK: Since TypeScript inherits static properties too, we have to
	// fight against TypeScript here so Subject can have a different static create signature
	/**
	 * Creates a new cold Observable by calling the Observable constructor
	 * @static true
	 * @owner Observable
	 * @method create
	 * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	 * @return {Observable} a new cold observable
	 */


	Observable.create = function (subscribe) {
	    return new Observable(subscribe);
	};
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 5 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	var root = exports.root = objectTypes[typeof self === 'undefined' ? 'undefined' : _typeof(self)] && self || objectTypes[typeof window === 'undefined' ? 'undefined' : _typeof(window)] && window;
	var freeGlobal = objectTypes[typeof global === 'undefined' ? 'undefined' : _typeof(global)] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toSubscriber = toSubscriber;

	var _Subscriber = __webpack_require__(7);

	var _rxSubscriber = __webpack_require__(16);

	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof _Subscriber.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[_rxSubscriber.$$rxSubscriber]) {
	            return nextOrObserver[_rxSubscriber.$$rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new _Subscriber.Subscriber();
	    }
	    return new _Subscriber.Subscriber(nextOrObserver, error, complete);
	}
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Subscriber = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _isFunction = __webpack_require__(8);

	var _Subscription2 = __webpack_require__(9);

	var _Observer = __webpack_require__(15);

	var _rxSubscriber = __webpack_require__(16);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = exports.Subscriber = function (_Subscription) {
	    _inherits(Subscriber, _Subscription);

	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _classCallCheck(this, Subscriber);

	        var _this = _possibleConstructorReturn(this, (Subscriber.__proto__ || Object.getPrototypeOf(Subscriber)).call(this));

	        _this.syncErrorValue = null;
	        _this.syncErrorThrown = false;
	        _this.syncErrorThrowable = false;
	        _this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                _this.destination = _Observer.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    _this.destination = _Observer.empty;
	                    break;
	                }
	                if ((typeof destinationOrNext === 'undefined' ? 'undefined' : _typeof(destinationOrNext)) === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        _this.destination = destinationOrNext;
	                        _this.destination.add(_this);
	                    } else {
	                        _this.syncErrorThrowable = true;
	                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                _this.syncErrorThrowable = true;
	                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
	                break;
	        }
	        return _this;
	    }

	    _createClass(Subscriber, [{
	        key: _rxSubscriber.$$rxSubscriber,
	        value: function value() {
	            return this;
	        }
	        /**
	         * A static factory for a Subscriber, given a (potentially partial) definition
	         * of an Observer.
	         * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	         * @param {function(e: ?any): void} [error] The `error` callback of an
	         * Observer.
	         * @param {function(): void} [complete] The `complete` callback of an
	         * Observer.
	         * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	         * Observer represented by the given arguments.
	         */

	    }, {
	        key: 'next',

	        /**
	         * The {@link Observer} callback to receive notifications of type `next` from
	         * the Observable, with a value. The Observable may call this method 0 or more
	         * times.
	         * @param {T} [value] The `next` value.
	         * @return {void}
	         */
	        value: function next(value) {
	            if (!this.isStopped) {
	                this._next(value);
	            }
	        }
	        /**
	         * The {@link Observer} callback to receive notifications of type `error` from
	         * the Observable, with an attached {@link Error}. Notifies the Observer that
	         * the Observable has experienced an error condition.
	         * @param {any} [err] The `error` exception.
	         * @return {void}
	         */

	    }, {
	        key: 'error',
	        value: function error(err) {
	            if (!this.isStopped) {
	                this.isStopped = true;
	                this._error(err);
	            }
	        }
	        /**
	         * The {@link Observer} callback to receive a valueless notification of type
	         * `complete` from the Observable. Notifies the Observer that the Observable
	         * has finished sending push-based notifications.
	         * @return {void}
	         */

	    }, {
	        key: 'complete',
	        value: function complete() {
	            if (!this.isStopped) {
	                this.isStopped = true;
	                this._complete();
	            }
	        }
	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            if (this.closed) {
	                return;
	            }
	            this.isStopped = true;
	            _get(Subscriber.prototype.__proto__ || Object.getPrototypeOf(Subscriber.prototype), 'unsubscribe', this).call(this);
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.destination.next(value);
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.destination.error(err);
	            this.unsubscribe();
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.destination.complete();
	            this.unsubscribe();
	        }
	    }], [{
	        key: 'create',
	        value: function create(next, error, complete) {
	            var subscriber = new Subscriber(next, error, complete);
	            subscriber.syncErrorThrowable = false;
	            return subscriber;
	        }
	    }]);

	    return Subscriber;
	}(_Subscription2.Subscription);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SafeSubscriber = function (_Subscriber) {
	    _inherits(SafeSubscriber, _Subscriber);

	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _classCallCheck(this, SafeSubscriber);

	        var _this2 = _possibleConstructorReturn(this, (SafeSubscriber.__proto__ || Object.getPrototypeOf(SafeSubscriber)).call(this));

	        _this2._parent = _parent;
	        var next = void 0;
	        var context = _this2;
	        if ((0, _isFunction.isFunction)(observerOrNext)) {
	            next = observerOrNext;
	        } else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if ((0, _isFunction.isFunction)(context.unsubscribe)) {
	                _this2.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = _this2.unsubscribe.bind(_this2);
	        }
	        _this2._context = context;
	        _this2._next = next;
	        _this2._error = error;
	        _this2._complete = complete;
	        return _this2;
	    }

	    _createClass(SafeSubscriber, [{
	        key: 'next',
	        value: function next(value) {
	            if (!this.isStopped && this._next) {
	                var _parent = this._parent;

	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._next, value);
	                } else if (this.__tryOrSetError(_parent, this._next, value)) {
	                    this.unsubscribe();
	                }
	            }
	        }
	    }, {
	        key: 'error',
	        value: function error(err) {
	            if (!this.isStopped) {
	                var _parent = this._parent;

	                if (this._error) {
	                    if (!_parent.syncErrorThrowable) {
	                        this.__tryOrUnsub(this._error, err);
	                        this.unsubscribe();
	                    } else {
	                        this.__tryOrSetError(_parent, this._error, err);
	                        this.unsubscribe();
	                    }
	                } else if (!_parent.syncErrorThrowable) {
	                    this.unsubscribe();
	                    throw err;
	                } else {
	                    _parent.syncErrorValue = err;
	                    _parent.syncErrorThrown = true;
	                    this.unsubscribe();
	                }
	            }
	        }
	    }, {
	        key: 'complete',
	        value: function complete() {
	            if (!this.isStopped) {
	                var _parent = this._parent;

	                if (this._complete) {
	                    if (!_parent.syncErrorThrowable) {
	                        this.__tryOrUnsub(this._complete);
	                        this.unsubscribe();
	                    } else {
	                        this.__tryOrSetError(_parent, this._complete);
	                        this.unsubscribe();
	                    }
	                } else {
	                    this.unsubscribe();
	                }
	            }
	        }
	    }, {
	        key: '__tryOrUnsub',
	        value: function __tryOrUnsub(fn, value) {
	            try {
	                fn.call(this._context, value);
	            } catch (err) {
	                this.unsubscribe();
	                throw err;
	            }
	        }
	    }, {
	        key: '__tryOrSetError',
	        value: function __tryOrSetError(parent, fn, value) {
	            try {
	                fn.call(this._context, value);
	            } catch (err) {
	                parent.syncErrorValue = err;
	                parent.syncErrorThrown = true;
	                return true;
	            }
	            return false;
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var _parent = this._parent;

	            this._context = null;
	            this._parent = null;
	            _parent.unsubscribe();
	        }
	    }]);

	    return SafeSubscriber;
	}(Subscriber);
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isFunction = isFunction;
	function isFunction(x) {
	    return typeof x === 'function';
	}
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Subscription = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isArray = __webpack_require__(10);

	var _isObject = __webpack_require__(11);

	var _isFunction = __webpack_require__(8);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _UnsubscriptionError = __webpack_require__(14);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = exports.Subscription = function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        _classCallCheck(this, Subscription);

	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.closed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */


	    _createClass(Subscription, [{
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            var hasErrors = false;
	            var errors = void 0;
	            if (this.closed) {
	                return;
	            }
	            this.closed = true;
	            var _unsubscribe = this._unsubscribe;
	            var _subscriptions = this._subscriptions;

	            this._subscriptions = null;
	            if ((0, _isFunction.isFunction)(_unsubscribe)) {
	                var trial = (0, _tryCatch.tryCatch)(_unsubscribe).call(this);
	                if (trial === _errorObject.errorObject) {
	                    hasErrors = true;
	                    (errors = errors || []).push(_errorObject.errorObject.e);
	                }
	            }
	            if ((0, _isArray.isArray)(_subscriptions)) {
	                var index = -1;
	                var len = _subscriptions.length;
	                while (++index < len) {
	                    var sub = _subscriptions[index];
	                    if ((0, _isObject.isObject)(sub)) {
	                        var _trial = (0, _tryCatch.tryCatch)(sub.unsubscribe).call(sub);
	                        if (_trial === _errorObject.errorObject) {
	                            hasErrors = true;
	                            errors = errors || [];
	                            var err = _errorObject.errorObject.e;
	                            if (err instanceof _UnsubscriptionError.UnsubscriptionError) {
	                                errors = errors.concat(err.errors);
	                            } else {
	                                errors.push(err);
	                            }
	                        }
	                    }
	                }
	            }
	            if (hasErrors) {
	                throw new _UnsubscriptionError.UnsubscriptionError(errors);
	            }
	        }
	        /**
	         * Adds a tear down to be called during the unsubscribe() of this
	         * Subscription.
	         *
	         * If the tear down being added is a subscription that is already
	         * unsubscribed, is the same reference `add` is being called on, or is
	         * `Subscription.EMPTY`, it will not be added.
	         *
	         * If this subscription is already in an `closed` state, the passed
	         * tear down logic will be executed immediately.
	         *
	         * @param {TeardownLogic} teardown The additional logic to execute on
	         * teardown.
	         * @return {Subscription} Returns the Subscription used or created to be
	         * added to the inner subscriptions list. This Subscription can be used with
	         * `remove()` to remove the passed teardown logic from the inner subscriptions
	         * list.
	         */

	    }, {
	        key: 'add',
	        value: function add(teardown) {
	            if (!teardown || teardown === Subscription.EMPTY) {
	                return Subscription.EMPTY;
	            }
	            if (teardown === this) {
	                return this;
	            }
	            var sub = teardown;
	            switch (typeof teardown === 'undefined' ? 'undefined' : _typeof(teardown)) {
	                case 'function':
	                    sub = new Subscription(teardown);
	                case 'object':
	                    if (sub.closed || typeof sub.unsubscribe !== 'function') {
	                        break;
	                    } else if (this.closed) {
	                        sub.unsubscribe();
	                    } else {
	                        (this._subscriptions || (this._subscriptions = [])).push(sub);
	                    }
	                    break;
	                default:
	                    throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	            }
	            return sub;
	        }
	        /**
	         * Removes a Subscription from the internal list of subscriptions that will
	         * unsubscribe during the unsubscribe process of this Subscription.
	         * @param {Subscription} subscription The subscription to remove.
	         * @return {void}
	         */

	    }, {
	        key: 'remove',
	        value: function remove(subscription) {
	            // HACK: This might be redundant because of the logic in `add()`
	            if (subscription == null || subscription === this || subscription === Subscription.EMPTY) {
	                return;
	            }
	            var subscriptions = this._subscriptions;
	            if (subscriptions) {
	                var subscriptionIndex = subscriptions.indexOf(subscription);
	                if (subscriptionIndex !== -1) {
	                    subscriptions.splice(subscriptionIndex, 1);
	                }
	            }
	        }
	    }]);

	    return Subscription;
	}();

	Subscription.EMPTY = function (empty) {
	    empty.closed = true;
	    return empty;
	}(new Subscription());
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var isArray = exports.isArray = Array.isArray || function (x) {
	  return x && typeof x.length === 'number';
	};
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.isObject = isObject;
	function isObject(x) {
	    return x != null && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object';
	}
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.tryCatch = tryCatch;

	var _errorObject = __webpack_require__(13);

	var tryCatchTarget = void 0;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    } catch (e) {
	        _errorObject.errorObject.e = e;
	        return _errorObject.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 13 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// typeof any so that it we don't have to cast when comparing a result to the error object
	var errorObject = exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = exports.UnsubscriptionError = function (_Error) {
	    _inherits(UnsubscriptionError, _Error);

	    function UnsubscriptionError(errors) {
	        _classCallCheck(this, UnsubscriptionError);

	        var _this = _possibleConstructorReturn(this, (UnsubscriptionError.__proto__ || Object.getPrototypeOf(UnsubscriptionError)).call(this));

	        _this.errors = errors;
	        var err = Error.call(_this, errors ? errors.length + ' errors occurred during unsubscription:\n  ' + errors.map(function (err, i) {
	            return i + 1 + ') ' + err.toString();
	        }).join('\n  ') : '');
	        _this.name = err.name = 'UnsubscriptionError';
	        _this.stack = err.stack;
	        _this.message = err.message;
	        return _this;
	    }

	    return UnsubscriptionError;
	}(Error);
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var empty = exports.empty = {
	    closed: true,
	    next: function next(value) {},
	    error: function error(err) {
	        throw err;
	    },
	    complete: function complete() {}
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.$$rxSubscriber = undefined;

	var _root = __webpack_require__(5);

	var _Symbol = _root.root.Symbol;
	var $$rxSubscriber = exports.$$rxSubscriber = typeof _Symbol === 'function' && typeof _Symbol.for === 'function' ? _Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.$$observable = undefined;
	exports.getSymbolObservable = getSymbolObservable;

	var _root = __webpack_require__(5);

	function getSymbolObservable(context) {
	    var $$observable = void 0;
	    var _Symbol = context.Symbol;
	    if (typeof _Symbol === 'function') {
	        if (_Symbol.observable) {
	            $$observable = _Symbol.observable;
	        } else {
	            $$observable = _Symbol('observable');
	            _Symbol.observable = $$observable;
	        }
	    } else {
	        $$observable = '@@observable';
	    }
	    return $$observable;
	}
	var $$observable = exports.$$observable = getSymbolObservable(_root.root);
	//# sourceMappingURL=observable.js.map

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = exports.ObjectUnsubscribedError = function (_Error) {
	    _inherits(ObjectUnsubscribedError, _Error);

	    function ObjectUnsubscribedError() {
	        var _this;

	        _classCallCheck(this, ObjectUnsubscribedError);

	        var err = (_this = _possibleConstructorReturn(this, (ObjectUnsubscribedError.__proto__ || Object.getPrototypeOf(ObjectUnsubscribedError)).call(this, 'object unsubscribed')), _this);
	        _this.name = err.name = 'ObjectUnsubscribedError';
	        _this.stack = err.stack;
	        _this.message = err.message;
	        return _this;
	    }

	    return ObjectUnsubscribedError;
	}(Error);
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SubjectSubscription = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Subscription2 = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = exports.SubjectSubscription = function (_Subscription) {
	    _inherits(SubjectSubscription, _Subscription);

	    function SubjectSubscription(subject, subscriber) {
	        _classCallCheck(this, SubjectSubscription);

	        var _this = _possibleConstructorReturn(this, (SubjectSubscription.__proto__ || Object.getPrototypeOf(SubjectSubscription)).call(this));

	        _this.subject = subject;
	        _this.subscriber = subscriber;
	        _this.closed = false;
	        return _this;
	    }

	    _createClass(SubjectSubscription, [{
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            if (this.closed) {
	                return;
	            }
	            this.closed = true;
	            var subject = this.subject;
	            var observers = subject.observers;
	            this.subject = null;
	            if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
	                return;
	            }
	            var subscriberIndex = observers.indexOf(this.subscriber);
	            if (subscriberIndex !== -1) {
	                observers.splice(subscriberIndex, 1);
	            }
	        }
	    }]);

	    return SubjectSubscription;
	}(_Subscription2.Subscription);
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _bindCallback = __webpack_require__(21);

	_Observable.Observable.bindCallback = _bindCallback.bindCallback;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bindCallback = undefined;

	var _BoundCallbackObservable = __webpack_require__(22);

	var bindCallback = exports.bindCallback = _BoundCallbackObservable.BoundCallbackObservable.create;
	//# sourceMappingURL=bindCallback.js.map

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BoundCallbackObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _AsyncSubject = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var BoundCallbackObservable = exports.BoundCallbackObservable = function (_Observable) {
	    _inherits(BoundCallbackObservable, _Observable);

	    function BoundCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _classCallCheck(this, BoundCallbackObservable);

	        var _this = _possibleConstructorReturn(this, (BoundCallbackObservable.__proto__ || Object.getPrototypeOf(BoundCallbackObservable)).call(this));

	        _this.callbackFunc = callbackFunc;
	        _this.selector = selector;
	        _this.args = args;
	        _this.scheduler = scheduler;
	        return _this;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Converts a callback API to a function that returns an Observable.
	     *
	     * <span class="informal">Give it a function `f` of type `f(x, callback)` and
	     * it will return a function `g` that when called as `g(x)` will output an
	     * Observable.</span>
	     *
	     * `bindCallback` is not an operator because its input and output are not
	     * Observables. The input is a function `func` with some parameters, but the
	     * last parameter must be a callback function that `func` calls when it is
	     * done. The output of `bindCallback` is a function that takes the same
	     * parameters as `func`, except the last one (the callback). When the output
	     * function is called with arguments, it will return an Observable where the
	     * results will be delivered to.
	     *
	     * @example <caption>Convert jQuery's getJSON to an Observable API</caption>
	     * // Suppose we have jQuery.getJSON('/my/url', callback)
	     * var getJSONAsObservable = Rx.Observable.bindCallback(jQuery.getJSON);
	     * var result = getJSONAsObservable('/my/url');
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link bindNodeCallback}
	     * @see {@link from}
	     * @see {@link fromPromise}
	     *
	     * @param {function} func Function with a callback as the last parameter.
	     * @param {function} selector A function which takes the arguments from the
	     * callback and maps those a value to emit on the output Observable.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
	     * callbacks.
	     * @return {function(...params: *): Observable} A function which returns the
	     * Observable that delivers the same values the callback would deliver.
	     * @static true
	     * @name bindCallback
	     * @owner Observable
	     */


	    _createClass(BoundCallbackObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var callbackFunc = this.callbackFunc;
	            var args = this.args;
	            var scheduler = this.scheduler;
	            var subject = this.subject;
	            if (!scheduler) {
	                if (!subject) {
	                    subject = this.subject = new _AsyncSubject.AsyncSubject();
	                    var handler = function handlerFn() {
	                        var source = handlerFn.source;
	                        var selector = source.selector;
	                        var subject = source.subject;

	                        for (var _len = arguments.length, innerArgs = Array(_len), _key = 0; _key < _len; _key++) {
	                            innerArgs[_key] = arguments[_key];
	                        }

	                        if (selector) {
	                            var _result = (0, _tryCatch.tryCatch)(selector).apply(this, innerArgs);
	                            if (_result === _errorObject.errorObject) {
	                                subject.error(_errorObject.errorObject.e);
	                            } else {
	                                subject.next(_result);
	                                subject.complete();
	                            }
	                        } else {
	                            subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                            subject.complete();
	                        }
	                    };
	                    // use named function instance to avoid closure.
	                    handler.source = this;
	                    var result = (0, _tryCatch.tryCatch)(callbackFunc).apply(this, args.concat(handler));
	                    if (result === _errorObject.errorObject) {
	                        subject.error(_errorObject.errorObject.e);
	                    }
	                }
	                return subject.subscribe(subscriber);
	            } else {
	                return scheduler.schedule(BoundCallbackObservable.dispatch, 0, { source: this, subscriber: subscriber });
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(func) {
	            var selector = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
	            var scheduler = arguments[2];

	            return function () {
	                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    args[_key2] = arguments[_key2];
	                }

	                return new BoundCallbackObservable(func, selector, args, scheduler);
	            };
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var self = this;
	            var source = state.source;
	            var subscriber = state.subscriber;
	            var callbackFunc = source.callbackFunc;
	            var args = source.args;
	            var scheduler = source.scheduler;

	            var subject = source.subject;
	            if (!subject) {
	                subject = source.subject = new _AsyncSubject.AsyncSubject();
	                var handler = function handlerFn() {
	                    var source = handlerFn.source;
	                    var selector = source.selector;
	                    var subject = source.subject;

	                    for (var _len3 = arguments.length, innerArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                        innerArgs[_key3] = arguments[_key3];
	                    }

	                    if (selector) {
	                        var _result2 = (0, _tryCatch.tryCatch)(selector).apply(this, innerArgs);
	                        if (_result2 === _errorObject.errorObject) {
	                            self.add(scheduler.schedule(dispatchError, 0, { err: _errorObject.errorObject.e, subject: subject }));
	                        } else {
	                            self.add(scheduler.schedule(dispatchNext, 0, { value: _result2, subject: subject }));
	                        }
	                    } else {
	                        var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                        self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	                    }
	                };
	                // use named function to pass values in without closure
	                handler.source = source;
	                var result = (0, _tryCatch.tryCatch)(callbackFunc).apply(this, args.concat(handler));
	                if (result === _errorObject.errorObject) {
	                    subject.error(_errorObject.errorObject.e);
	                }
	            }
	            self.add(subject.subscribe(subscriber));
	        }
	    }]);

	    return BoundCallbackObservable;
	}(_Observable2.Observable);

	function dispatchNext(arg) {
	    var value = arg.value;
	    var subject = arg.subject;

	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(arg) {
	    var err = arg.err;
	    var subject = arg.subject;

	    subject.error(err);
	}
	//# sourceMappingURL=BoundCallbackObservable.js.map

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AsyncSubject = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Subject2 = __webpack_require__(3);

	var _Subscription = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class AsyncSubject<T>
	 */
	var AsyncSubject = exports.AsyncSubject = function (_Subject) {
	    _inherits(AsyncSubject, _Subject);

	    function AsyncSubject() {
	        var _ref;

	        _classCallCheck(this, AsyncSubject);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_ref = AsyncSubject.__proto__ || Object.getPrototypeOf(AsyncSubject)).call.apply(_ref, [this].concat(args)));

	        _this.value = null;
	        _this.hasNext = false;
	        _this.hasCompleted = false;
	        return _this;
	    }

	    _createClass(AsyncSubject, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            if (this.hasCompleted && this.hasNext) {
	                subscriber.next(this.value);
	                subscriber.complete();
	                return _Subscription.Subscription.EMPTY;
	            } else if (this.hasError) {
	                subscriber.error(this.thrownError);
	                return _Subscription.Subscription.EMPTY;
	            }
	            return _get(AsyncSubject.prototype.__proto__ || Object.getPrototypeOf(AsyncSubject.prototype), '_subscribe', this).call(this, subscriber);
	        }
	    }, {
	        key: 'next',
	        value: function next(value) {
	            if (!this.hasCompleted) {
	                this.value = value;
	                this.hasNext = true;
	            }
	        }
	    }, {
	        key: 'complete',
	        value: function complete() {
	            this.hasCompleted = true;
	            if (this.hasNext) {
	                _get(AsyncSubject.prototype.__proto__ || Object.getPrototypeOf(AsyncSubject.prototype), 'next', this).call(this, this.value);
	            }
	            _get(AsyncSubject.prototype.__proto__ || Object.getPrototypeOf(AsyncSubject.prototype), 'complete', this).call(this);
	        }
	    }]);

	    return AsyncSubject;
	}(_Subject2.Subject);
	//# sourceMappingURL=AsyncSubject.js.map

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _bindNodeCallback = __webpack_require__(25);

	_Observable.Observable.bindNodeCallback = _bindNodeCallback.bindNodeCallback;
	//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.bindNodeCallback = undefined;

	var _BoundNodeCallbackObservable = __webpack_require__(26);

	var bindNodeCallback = exports.bindNodeCallback = _BoundNodeCallbackObservable.BoundNodeCallbackObservable.create;
	//# sourceMappingURL=bindNodeCallback.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BoundNodeCallbackObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _AsyncSubject = __webpack_require__(23);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var BoundNodeCallbackObservable = exports.BoundNodeCallbackObservable = function (_Observable) {
	    _inherits(BoundNodeCallbackObservable, _Observable);

	    function BoundNodeCallbackObservable(callbackFunc, selector, args, scheduler) {
	        _classCallCheck(this, BoundNodeCallbackObservable);

	        var _this = _possibleConstructorReturn(this, (BoundNodeCallbackObservable.__proto__ || Object.getPrototypeOf(BoundNodeCallbackObservable)).call(this));

	        _this.callbackFunc = callbackFunc;
	        _this.selector = selector;
	        _this.args = args;
	        _this.scheduler = scheduler;
	        return _this;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Converts a Node.js-style callback API to a function that returns an
	     * Observable.
	     *
	     * <span class="informal">It's just like {@link bindCallback}, but the
	     * callback is expected to be of type `callback(error, result)`.</span>
	     *
	     * `bindNodeCallback` is not an operator because its input and output are not
	     * Observables. The input is a function `func` with some parameters, but the
	     * last parameter must be a callback function that `func` calls when it is
	     * done. The callback function is expected to follow Node.js conventions,
	     * where the first argument to the callback is an error, while remaining
	     * arguments are the callback result. The output of `bindNodeCallback` is a
	     * function that takes the same parameters as `func`, except the last one (the
	     * callback). When the output function is called with arguments, it will
	     * return an Observable where the results will be delivered to.
	     *
	     * @example <caption>Read a file from the filesystem and get the data as an Observable</caption>
	     * import * as fs from 'fs';
	     * var readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile);
	     * var result = readFileAsObservable('./roadNames.txt', 'utf8');
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link bindCallback}
	     * @see {@link from}
	     * @see {@link fromPromise}
	     *
	     * @param {function} func Function with a callback as the last parameter.
	     * @param {function} selector A function which takes the arguments from the
	     * callback and maps those a value to emit on the output Observable.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
	     * callbacks.
	     * @return {function(...params: *): Observable} A function which returns the
	     * Observable that delivers the same values the Node.js callback would
	     * deliver.
	     * @static true
	     * @name bindNodeCallback
	     * @owner Observable
	     */


	    _createClass(BoundNodeCallbackObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var callbackFunc = this.callbackFunc;
	            var args = this.args;
	            var scheduler = this.scheduler;
	            var subject = this.subject;
	            if (!scheduler) {
	                if (!subject) {
	                    subject = this.subject = new _AsyncSubject.AsyncSubject();
	                    var handler = function handlerFn() {
	                        var source = handlerFn.source;
	                        var selector = source.selector;
	                        var subject = source.subject;

	                        for (var _len = arguments.length, innerArgs = Array(_len), _key = 0; _key < _len; _key++) {
	                            innerArgs[_key] = arguments[_key];
	                        }

	                        var err = innerArgs.shift();
	                        if (err) {
	                            subject.error(err);
	                        } else if (selector) {
	                            var _result = (0, _tryCatch.tryCatch)(selector).apply(this, innerArgs);
	                            if (_result === _errorObject.errorObject) {
	                                subject.error(_errorObject.errorObject.e);
	                            } else {
	                                subject.next(_result);
	                                subject.complete();
	                            }
	                        } else {
	                            subject.next(innerArgs.length === 1 ? innerArgs[0] : innerArgs);
	                            subject.complete();
	                        }
	                    };
	                    // use named function instance to avoid closure.
	                    handler.source = this;
	                    var result = (0, _tryCatch.tryCatch)(callbackFunc).apply(this, args.concat(handler));
	                    if (result === _errorObject.errorObject) {
	                        subject.error(_errorObject.errorObject.e);
	                    }
	                }
	                return subject.subscribe(subscriber);
	            } else {
	                return scheduler.schedule(dispatch, 0, { source: this, subscriber: subscriber });
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(func) {
	            var selector = arguments.length <= 1 || arguments[1] === undefined ? undefined : arguments[1];
	            var scheduler = arguments[2];

	            return function () {
	                for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	                    args[_key2] = arguments[_key2];
	                }

	                return new BoundNodeCallbackObservable(func, selector, args, scheduler);
	            };
	        }
	    }]);

	    return BoundNodeCallbackObservable;
	}(_Observable2.Observable);

	function dispatch(state) {
	    var self = this;
	    var source = state.source;
	    var subscriber = state.subscriber;
	    // XXX: cast to `any` to access to the private field in `source`.

	    var callbackFunc = source.callbackFunc;
	    var args = source.args;
	    var scheduler = source.scheduler;

	    var subject = source.subject;
	    if (!subject) {
	        subject = source.subject = new _AsyncSubject.AsyncSubject();
	        var handler = function handlerFn() {
	            var source = handlerFn.source;
	            var selector = source.selector;
	            var subject = source.subject;

	            for (var _len3 = arguments.length, innerArgs = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	                innerArgs[_key3] = arguments[_key3];
	            }

	            var err = innerArgs.shift();
	            if (err) {
	                subject.error(err);
	            } else if (selector) {
	                var _result2 = (0, _tryCatch.tryCatch)(selector).apply(this, innerArgs);
	                if (_result2 === _errorObject.errorObject) {
	                    self.add(scheduler.schedule(dispatchError, 0, { err: _errorObject.errorObject.e, subject: subject }));
	                } else {
	                    self.add(scheduler.schedule(dispatchNext, 0, { value: _result2, subject: subject }));
	                }
	            } else {
	                var value = innerArgs.length === 1 ? innerArgs[0] : innerArgs;
	                self.add(scheduler.schedule(dispatchNext, 0, { value: value, subject: subject }));
	            }
	        };
	        // use named function to pass values in without closure
	        handler.source = source;
	        var result = (0, _tryCatch.tryCatch)(callbackFunc).apply(this, args.concat(handler));
	        if (result === _errorObject.errorObject) {
	            subject.error(_errorObject.errorObject.e);
	        }
	    }
	    self.add(subject.subscribe(subscriber));
	}
	function dispatchNext(arg) {
	    var value = arg.value;
	    var subject = arg.subject;

	    subject.next(value);
	    subject.complete();
	}
	function dispatchError(arg) {
	    var err = arg.err;
	    var subject = arg.subject;

	    subject.error(err);
	}
	//# sourceMappingURL=BoundNodeCallbackObservable.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _combineLatest = __webpack_require__(28);

	_Observable.Observable.combineLatest = _combineLatest.combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.combineLatest = combineLatest;

	var _isScheduler = __webpack_require__(29);

	var _isArray = __webpack_require__(10);

	var _ArrayObservable = __webpack_require__(30);

	var _combineLatest = __webpack_require__(33);

	/* tslint:enable:max-line-length */
	/**
	 * Combines multiple Observables to create an Observable whose values are
	 * calculated from the latest values of each of its input Observables.
	 *
	 * <span class="informal">Whenever any input Observable emits a value, it
	 * computes a formula using the latest values from all the inputs, then emits
	 * the output of that formula.</span>
	 *
	 * <img src="./img/combineLatest.png" width="100%">
	 *
	 * `combineLatest` combines the values from all the Observables passed as
	 * arguments. This is done by subscribing to each Observable, in order, and
	 * collecting an array of each of the most recent values any time any of the
	 * input Observables emits, then either taking that array and passing it as
	 * arguments to an optional `project` function and emitting the return value of
	 * that, or just emitting the array of recent values directly if there is no
	 * `project` function.
	 *
	 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
	 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
	 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
	 * var bmi = Rx.Observable.combineLatest(weight, height, (w, h) => w / (h * h));
	 * bmi.subscribe(x => console.log('BMI is ' + x));
	 *
	 * @see {@link combineAll}
	 * @see {@link merge}
	 * @see {@link withLatestFrom}
	 *
	 * @param {Observable} observable1 An input Observable to combine with the
	 * source Observable.
	 * @param {Observable} observable2 An input Observable to combine with the
	 * source Observable. More than one input Observables may be given as argument.
	 * @param {function} [project] An optional function to project the values from
	 * the combined latest values into a new value on the output Observable.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
	 * each input Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @static true
	 * @name combineLatest
	 * @owner Observable
	 */
	function combineLatest() {
	    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
	        observables[_key] = arguments[_key];
	    }

	    var project = null;
	    var scheduler = null;
	    if ((0, _isScheduler.isScheduler)(observables[observables.length - 1])) {
	        scheduler = observables.pop();
	    }
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
	        observables = observables[0];
	    }
	    return new _ArrayObservable.ArrayObservable(observables, scheduler).lift(new _combineLatest.CombineLatestOperator(project));
	}
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isScheduler = isScheduler;
	function isScheduler(value) {
	    return value && typeof value.schedule === 'function';
	}
	//# sourceMappingURL=isScheduler.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ArrayObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _ScalarObservable = __webpack_require__(31);

	var _EmptyObservable = __webpack_require__(32);

	var _isScheduler = __webpack_require__(29);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayObservable = exports.ArrayObservable = function (_Observable) {
	    _inherits(ArrayObservable, _Observable);

	    function ArrayObservable(array, scheduler) {
	        _classCallCheck(this, ArrayObservable);

	        var _this = _possibleConstructorReturn(this, (ArrayObservable.__proto__ || Object.getPrototypeOf(ArrayObservable)).call(this));

	        _this.array = array;
	        _this.scheduler = scheduler;
	        if (!scheduler && array.length === 1) {
	            _this._isScalar = true;
	            _this.value = array[0];
	        }
	        return _this;
	    }

	    _createClass(ArrayObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var index = 0;
	            var array = this.array;
	            var count = array.length;
	            var scheduler = this.scheduler;
	            if (scheduler) {
	                return scheduler.schedule(ArrayObservable.dispatch, 0, {
	                    array: array, index: index, count: count, subscriber: subscriber
	                });
	            } else {
	                for (var i = 0; i < count && !subscriber.closed; i++) {
	                    subscriber.next(array[i]);
	                }
	                subscriber.complete();
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(array, scheduler) {
	            return new ArrayObservable(array, scheduler);
	        }
	        /**
	         * Creates an Observable that emits some values you specify as arguments,
	         * immediately one after the other, and then emits a complete notification.
	         *
	         * <span class="informal">Emits the arguments you provide, then completes.
	         * </span>
	         *
	         * <img src="./img/of.png" width="100%">
	         *
	         * This static operator is useful for creating a simple Observable that only
	         * emits the arguments given, and the complete notification thereafter. It can
	         * be used for composing with other Observables, such as with {@link concat}.
	         * By default, it uses a `null` Scheduler, which means the `next`
	         * notifications are sent synchronously, although with a different Scheduler
	         * it is possible to determine when those notifications will be delivered.
	         *
	         * @example <caption>Emit 10, 20, 30, then 'a', 'b', 'c', then start ticking every second.</caption>
	         * var numbers = Rx.Observable.of(10, 20, 30);
	         * var letters = Rx.Observable.of('a', 'b', 'c');
	         * var interval = Rx.Observable.interval(1000);
	         * var result = numbers.concat(letters).concat(interval);
	         * result.subscribe(x => console.log(x));
	         *
	         * @see {@link create}
	         * @see {@link empty}
	         * @see {@link never}
	         * @see {@link throw}
	         *
	         * @param {...T} values Arguments that represent `next` values to be emitted.
	         * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	         * the emissions of the `next` notifications.
	         * @return {Observable<T>} An Observable that emits each given input value.
	         * @static true
	         * @name of
	         * @owner Observable
	         */

	    }, {
	        key: 'of',
	        value: function of() {
	            for (var _len = arguments.length, array = Array(_len), _key = 0; _key < _len; _key++) {
	                array[_key] = arguments[_key];
	            }

	            var scheduler = array[array.length - 1];
	            if ((0, _isScheduler.isScheduler)(scheduler)) {
	                array.pop();
	            } else {
	                scheduler = null;
	            }
	            var len = array.length;
	            if (len > 1) {
	                return new ArrayObservable(array, scheduler);
	            } else if (len === 1) {
	                return new _ScalarObservable.ScalarObservable(array[0], scheduler);
	            } else {
	                return new _EmptyObservable.EmptyObservable(scheduler);
	            }
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var array = state.array;
	            var index = state.index;
	            var count = state.count;
	            var subscriber = state.subscriber;

	            if (index >= count) {
	                subscriber.complete();
	                return;
	            }
	            subscriber.next(array[index]);
	            if (subscriber.closed) {
	                return;
	            }
	            state.index = index + 1;
	            this.schedule(state);
	        }
	    }]);

	    return ArrayObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=ArrayObservable.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ScalarObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ScalarObservable = exports.ScalarObservable = function (_Observable) {
	    _inherits(ScalarObservable, _Observable);

	    function ScalarObservable(value, scheduler) {
	        _classCallCheck(this, ScalarObservable);

	        var _this = _possibleConstructorReturn(this, (ScalarObservable.__proto__ || Object.getPrototypeOf(ScalarObservable)).call(this));

	        _this.value = value;
	        _this.scheduler = scheduler;
	        _this._isScalar = true;
	        if (scheduler) {
	            _this._isScalar = false;
	        }
	        return _this;
	    }

	    _createClass(ScalarObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var value = this.value;
	            var scheduler = this.scheduler;
	            if (scheduler) {
	                return scheduler.schedule(ScalarObservable.dispatch, 0, {
	                    done: false, value: value, subscriber: subscriber
	                });
	            } else {
	                subscriber.next(value);
	                if (!subscriber.closed) {
	                    subscriber.complete();
	                }
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(value, scheduler) {
	            return new ScalarObservable(value, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var done = state.done;
	            var value = state.value;
	            var subscriber = state.subscriber;

	            if (done) {
	                subscriber.complete();
	                return;
	            }
	            subscriber.next(value);
	            if (subscriber.closed) {
	                return;
	            }
	            state.done = true;
	            this.schedule(state);
	        }
	    }]);

	    return ScalarObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=ScalarObservable.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.EmptyObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var EmptyObservable = exports.EmptyObservable = function (_Observable) {
	    _inherits(EmptyObservable, _Observable);

	    function EmptyObservable(scheduler) {
	        _classCallCheck(this, EmptyObservable);

	        var _this = _possibleConstructorReturn(this, (EmptyObservable.__proto__ || Object.getPrototypeOf(EmptyObservable)).call(this));

	        _this.scheduler = scheduler;
	        return _this;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits a complete notification.
	     *
	     * <span class="informal">Just emits 'complete', and nothing else.
	     * </span>
	     *
	     * <img src="./img/empty.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the complete notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then complete.</caption>
	     * var result = Rx.Observable.empty().startWith(7);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Map and flatten only odd numbers to the sequence 'a', 'b', 'c'</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x % 2 === 1 ? Rx.Observable.of('a', 'b', 'c') : Rx.Observable.empty()
	     * );
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link never}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the complete notification.
	     * @return {Observable} An "empty" Observable: emits only the complete
	     * notification.
	     * @static true
	     * @name empty
	     * @owner Observable
	     */


	    _createClass(EmptyObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var scheduler = this.scheduler;
	            if (scheduler) {
	                return scheduler.schedule(EmptyObservable.dispatch, 0, { subscriber: subscriber });
	            } else {
	                subscriber.complete();
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(scheduler) {
	            return new EmptyObservable(scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(arg) {
	            var subscriber = arg.subscriber;

	            subscriber.complete();
	        }
	    }]);

	    return EmptyObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=EmptyObservable.js.map

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.CombineLatestSubscriber = exports.CombineLatestOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.combineLatest = combineLatest;

	var _ArrayObservable = __webpack_require__(30);

	var _isArray = __webpack_require__(10);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var none = {};
	/**
	 * Combines multiple Observables to create an Observable whose values are
	 * calculated from the latest values of each of its input Observables.
	 *
	 * <span class="informal">Whenever any input Observable emits a value, it
	 * computes a formula using the latest values from all the inputs, then emits
	 * the output of that formula.</span>
	 *
	 * <img src="./img/combineLatest.png" width="100%">
	 *
	 * `combineLatest` combines the values from this Observable with values from
	 * Observables passed as arguments. This is done by subscribing to each
	 * Observable, in order, and collecting an array of each of the most recent
	 * values any time any of the input Observables emits, then either taking that
	 * array and passing it as arguments to an optional `project` function and
	 * emitting the return value of that, or just emitting the array of recent
	 * values directly if there is no `project` function.
	 *
	 * @example <caption>Dynamically calculate the Body-Mass Index from an Observable of weight and one for height</caption>
	 * var weight = Rx.Observable.of(70, 72, 76, 79, 75);
	 * var height = Rx.Observable.of(1.76, 1.77, 1.78);
	 * var bmi = weight.combineLatest(height, (w, h) => w / (h * h));
	 * bmi.subscribe(x => console.log('BMI is ' + x));
	 *
	 * @see {@link combineAll}
	 * @see {@link merge}
	 * @see {@link withLatestFrom}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {function} [project] An optional function to project the values from
	 * the combined latest values into a new value on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method combineLatest
	 * @owner Observable
	 */
	function combineLatest() {
	    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
	        observables[_key] = arguments[_key];
	    }

	    var project = null;
	    if (typeof observables[observables.length - 1] === 'function') {
	        project = observables.pop();
	    }
	    // if the first and only other argument besides the resultSelector is an array
	    // assume it's been called with `combineLatest([obs1, obs2, obs3], project)`
	    if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return new _ArrayObservable.ArrayObservable(observables).lift(new CombineLatestOperator(project));
	}
	/* tslint:enable:max-line-length */

	var CombineLatestOperator = exports.CombineLatestOperator = function () {
	    function CombineLatestOperator(project) {
	        _classCallCheck(this, CombineLatestOperator);

	        this.project = project;
	    }

	    _createClass(CombineLatestOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new CombineLatestSubscriber(subscriber, this.project));
	        }
	    }]);

	    return CombineLatestOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var CombineLatestSubscriber = exports.CombineLatestSubscriber = function (_OuterSubscriber) {
	    _inherits(CombineLatestSubscriber, _OuterSubscriber);

	    function CombineLatestSubscriber(destination, project) {
	        _classCallCheck(this, CombineLatestSubscriber);

	        var _this = _possibleConstructorReturn(this, (CombineLatestSubscriber.__proto__ || Object.getPrototypeOf(CombineLatestSubscriber)).call(this, destination));

	        _this.project = project;
	        _this.active = 0;
	        _this.values = [];
	        _this.observables = [];
	        return _this;
	    }

	    _createClass(CombineLatestSubscriber, [{
	        key: '_next',
	        value: function _next(observable) {
	            this.values.push(none);
	            this.observables.push(observable);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var observables = this.observables;
	            var len = observables.length;
	            if (len === 0) {
	                this.destination.complete();
	            } else {
	                this.active = len;
	                this.toRespond = len;
	                for (var i = 0; i < len; i++) {
	                    var observable = observables[i];
	                    this.add((0, _subscribeToResult.subscribeToResult)(this, observable, observable, i));
	                }
	            }
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(unused) {
	            if ((this.active -= 1) === 0) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            var values = this.values;
	            var oldVal = values[outerIndex];
	            var toRespond = !this.toRespond ? 0 : oldVal === none ? --this.toRespond : this.toRespond;
	            values[outerIndex] = innerValue;
	            if (toRespond === 0) {
	                if (this.project) {
	                    this._tryProject(values);
	                } else {
	                    this.destination.next(values.slice());
	                }
	            }
	        }
	    }, {
	        key: '_tryProject',
	        value: function _tryProject(values) {
	            var result = void 0;
	            try {
	                result = this.project.apply(this, values);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.destination.next(result);
	        }
	    }]);

	    return CombineLatestSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.OuterSubscriber = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Subscriber2 = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var OuterSubscriber = exports.OuterSubscriber = function (_Subscriber) {
	    _inherits(OuterSubscriber, _Subscriber);

	    function OuterSubscriber() {
	        _classCallCheck(this, OuterSubscriber);

	        return _possibleConstructorReturn(this, (OuterSubscriber.__proto__ || Object.getPrototypeOf(OuterSubscriber)).apply(this, arguments));
	    }

	    _createClass(OuterSubscriber, [{
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.destination.next(innerValue);
	        }
	    }, {
	        key: 'notifyError',
	        value: function notifyError(error, innerSub) {
	            this.destination.error(error);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            this.destination.complete();
	        }
	    }]);

	    return OuterSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=OuterSubscriber.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.subscribeToResult = subscribeToResult;

	var _root = __webpack_require__(5);

	var _isArray = __webpack_require__(10);

	var _isPromise = __webpack_require__(36);

	var _Observable = __webpack_require__(4);

	var _iterator = __webpack_require__(37);

	var _InnerSubscriber = __webpack_require__(38);

	var _observable = __webpack_require__(17);

	function subscribeToResult(outerSubscriber, result, outerValue, outerIndex) {
	    var destination = new _InnerSubscriber.InnerSubscriber(outerSubscriber, outerValue, outerIndex);
	    if (destination.closed) {
	        return null;
	    }
	    if (result instanceof _Observable.Observable) {
	        if (result._isScalar) {
	            destination.next(result.value);
	            destination.complete();
	            return null;
	        } else {
	            return result.subscribe(destination);
	        }
	    }
	    if ((0, _isArray.isArray)(result)) {
	        for (var i = 0, len = result.length; i < len && !destination.closed; i++) {
	            destination.next(result[i]);
	        }
	        if (!destination.closed) {
	            destination.complete();
	        }
	    } else if ((0, _isPromise.isPromise)(result)) {
	        result.then(function (value) {
	            if (!destination.closed) {
	                destination.next(value);
	                destination.complete();
	            }
	        }, function (err) {
	            return destination.error(err);
	        }).then(null, function (err) {
	            // Escaping the Promise trap: globally throw unhandled errors
	            _root.root.setTimeout(function () {
	                throw err;
	            });
	        });
	        return destination;
	    } else if (typeof result[_iterator.$$iterator] === 'function') {
	        var iterator = result[_iterator.$$iterator]();
	        do {
	            var item = iterator.next();
	            if (item.done) {
	                destination.complete();
	                break;
	            }
	            destination.next(item.value);
	            if (destination.closed) {
	                break;
	            }
	        } while (true);
	    } else if (typeof result[_observable.$$observable] === 'function') {
	        var obs = result[_observable.$$observable]();
	        if (typeof obs.subscribe !== 'function') {
	            destination.error(new Error('invalid observable'));
	        } else {
	            return obs.subscribe(new _InnerSubscriber.InnerSubscriber(outerSubscriber, outerValue, outerIndex));
	        }
	    } else {
	        destination.error(new TypeError('unknown type returned'));
	    }
	    return null;
	}
	//# sourceMappingURL=subscribeToResult.js.map

/***/ },
/* 36 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isPromise = isPromise;
	function isPromise(value) {
	    return value && typeof value.subscribe !== 'function' && typeof value.then === 'function';
	}
	//# sourceMappingURL=isPromise.js.map

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.$$iterator = undefined;

	var _root = __webpack_require__(5);

	var $$iterator = exports.$$iterator = void 0;
	var _Symbol = _root.root.Symbol;
	if (typeof _Symbol === 'function') {
	    if (_Symbol.iterator) {
	        exports.$$iterator = $$iterator = _Symbol.iterator;
	    } else if (typeof _Symbol.for === 'function') {
	        exports.$$iterator = $$iterator = _Symbol.for('iterator');
	    }
	} else {
	    if (_root.root.Set && typeof new _root.root.Set()['@@iterator'] === 'function') {
	        // Bug for mozilla version
	        exports.$$iterator = $$iterator = '@@iterator';
	    } else if (_root.root.Map) {
	        // es6-shim specific logic
	        var keys = Object.getOwnPropertyNames(_root.root.Map.prototype);
	        for (var i = 0; i < keys.length; ++i) {
	            var key = keys[i];
	            if (key !== 'entries' && key !== 'size' && _root.root.Map.prototype[key] === _root.root.Map.prototype['entries']) {
	                exports.$$iterator = $$iterator = key;
	                break;
	            }
	        }
	    } else {
	        exports.$$iterator = $$iterator = '@@iterator';
	    }
	}
	//# sourceMappingURL=iterator.js.map

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.InnerSubscriber = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Subscriber2 = __webpack_require__(7);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var InnerSubscriber = exports.InnerSubscriber = function (_Subscriber) {
	    _inherits(InnerSubscriber, _Subscriber);

	    function InnerSubscriber(parent, outerValue, outerIndex) {
	        _classCallCheck(this, InnerSubscriber);

	        var _this = _possibleConstructorReturn(this, (InnerSubscriber.__proto__ || Object.getPrototypeOf(InnerSubscriber)).call(this));

	        _this.parent = parent;
	        _this.outerValue = outerValue;
	        _this.outerIndex = outerIndex;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(InnerSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.parent.notifyNext(this.outerValue, value, this.outerIndex, this.index++, this);
	        }
	    }, {
	        key: '_error',
	        value: function _error(error) {
	            this.parent.notifyError(error, this);
	            this.unsubscribe();
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.parent.notifyComplete(this);
	            this.unsubscribe();
	        }
	    }]);

	    return InnerSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=InnerSubscriber.js.map

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _concat = __webpack_require__(40);

	_Observable.Observable.concat = _concat.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.concat = undefined;

	var _concat = __webpack_require__(41);

	var concat = exports.concat = _concat.concatStatic;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.concat = concat;
	exports.concatStatic = concatStatic;

	var _isScheduler = __webpack_require__(29);

	var _ArrayObservable = __webpack_require__(30);

	var _mergeAll = __webpack_require__(42);

	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins this Observable with multiple other Observables by subscribing to them
	 * one at a time, starting with the source, and merging their results into the
	 * output Observable. Will wait for each Observable to complete before moving
	 * on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = timer.concat(sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = timer1.concat(timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} other An input Observable to concatenate after the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @method concat
	 * @owner Observable
	 */
	function concat() {
	    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
	        observables[_key] = arguments[_key];
	    }

	    return concatStatic.apply(undefined, [this].concat(observables));
	}
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which sequentially emits all values from every
	 * given input Observable after the current Observable.
	 *
	 * <span class="informal">Concatenates multiple Observables together by
	 * sequentially emitting their values, one Observable after the other.</span>
	 *
	 * <img src="./img/concat.png" width="100%">
	 *
	 * Joins multiple Observables together by subscribing to them one at a time and
	 * merging their results into the output Observable. Will wait for each
	 * Observable to complete before moving on to the next.
	 *
	 * @example <caption>Concatenate a timer counting from 0 to 3 with a synchronous sequence from 1 to 10</caption>
	 * var timer = Rx.Observable.interval(1000).take(4);
	 * var sequence = Rx.Observable.range(1, 10);
	 * var result = Rx.Observable.concat(timer, sequence);
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Concatenate 3 Observables</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var result = Rx.Observable.concat(timer1, timer2, timer3);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 *
	 * @param {Observable} input1 An input Observable to concatenate with others.
	 * @param {Observable} input2 An input Observable to concatenate with others.
	 * More than one input Observables may be given as argument.
	 * @param {Scheduler} [scheduler=null] An optional Scheduler to schedule each
	 * Observable subscription on.
	 * @return {Observable} All values of each passed Observable merged into a
	 * single Observable, in order, in serial fashion.
	 * @static true
	 * @name concat
	 * @owner Observable
	 */
	function concatStatic() {
	    var scheduler = null;

	    for (var _len2 = arguments.length, observables = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        observables[_key2] = arguments[_key2];
	    }

	    var args = observables;
	    if ((0, _isScheduler.isScheduler)(args[observables.length - 1])) {
	        scheduler = args.pop();
	    }
	    return new _ArrayObservable.ArrayObservable(observables, scheduler).lift(new _mergeAll.MergeAllOperator(1));
	}
	//# sourceMappingURL=concat.js.map

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MergeAllSubscriber = exports.MergeAllOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.mergeAll = mergeAll;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Converts a higher-order Observable into a first-order Observable which
	 * concurrently delivers all values that are emitted on the inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables.</span>
	 *
	 * <img src="./img/mergeAll.png" width="100%">
	 *
	 * `mergeAll` subscribes to an Observable that emits Observables, also known as
	 * a higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, it subscribes to that and delivers all the values from the
	 * inner Observable on the output Observable. The output Observable only
	 * completes once all inner Observables have completed. Any error delivered by
	 * a inner Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Spawn a new interval Observable for each click event, and blend their outputs as one Observable</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var firstOrder = higherOrder.mergeAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @example <caption>Count from 0 to 9 every second for each click, but only allow 2 concurrent timers</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000).take(10));
	 * var firstOrder = higherOrder.mergeAll(2);
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link merge}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of inner
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits values coming from all the
	 * inner Observables emitted by the source Observable.
	 * @method mergeAll
	 * @owner Observable
	 */
	function mergeAll() {
	    var concurrent = arguments.length <= 0 || arguments[0] === undefined ? Number.POSITIVE_INFINITY : arguments[0];

	    return this.lift(new MergeAllOperator(concurrent));
	}

	var MergeAllOperator = exports.MergeAllOperator = function () {
	    function MergeAllOperator(concurrent) {
	        _classCallCheck(this, MergeAllOperator);

	        this.concurrent = concurrent;
	    }

	    _createClass(MergeAllOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new MergeAllSubscriber(observer, this.concurrent));
	        }
	    }]);

	    return MergeAllOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var MergeAllSubscriber = exports.MergeAllSubscriber = function (_OuterSubscriber) {
	    _inherits(MergeAllSubscriber, _OuterSubscriber);

	    function MergeAllSubscriber(destination, concurrent) {
	        _classCallCheck(this, MergeAllSubscriber);

	        var _this = _possibleConstructorReturn(this, (MergeAllSubscriber.__proto__ || Object.getPrototypeOf(MergeAllSubscriber)).call(this, destination));

	        _this.concurrent = concurrent;
	        _this.hasCompleted = false;
	        _this.buffer = [];
	        _this.active = 0;
	        return _this;
	    }

	    _createClass(MergeAllSubscriber, [{
	        key: '_next',
	        value: function _next(observable) {
	            if (this.active < this.concurrent) {
	                this.active++;
	                this.add((0, _subscribeToResult.subscribeToResult)(this, observable));
	            } else {
	                this.buffer.push(observable);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.hasCompleted = true;
	            if (this.active === 0 && this.buffer.length === 0) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            var buffer = this.buffer;
	            this.remove(innerSub);
	            this.active--;
	            if (buffer.length > 0) {
	                this._next(buffer.shift());
	            } else if (this.active === 0 && this.hasCompleted) {
	                this.destination.complete();
	            }
	        }
	    }]);

	    return MergeAllSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _defer = __webpack_require__(44);

	_Observable.Observable.defer = _defer.defer;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defer = undefined;

	var _DeferObservable = __webpack_require__(45);

	var defer = exports.defer = _DeferObservable.DeferObservable.create;
	//# sourceMappingURL=defer.js.map

/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DeferObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _subscribeToResult = __webpack_require__(35);

	var _OuterSubscriber2 = __webpack_require__(34);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var DeferObservable = exports.DeferObservable = function (_Observable) {
	    _inherits(DeferObservable, _Observable);

	    function DeferObservable(observableFactory) {
	        _classCallCheck(this, DeferObservable);

	        var _this = _possibleConstructorReturn(this, (DeferObservable.__proto__ || Object.getPrototypeOf(DeferObservable)).call(this));

	        _this.observableFactory = observableFactory;
	        return _this;
	    }
	    /**
	     * Creates an Observable that, on subscribe, calls an Observable factory to
	     * make an Observable for each new Observer.
	     *
	     * <span class="informal">Creates the Observable lazily, that is, only when it
	     * is subscribed.
	     * </span>
	     *
	     * <img src="./img/defer.png" width="100%">
	     *
	     * `defer` allows you to create the Observable only when the Observer
	     * subscribes, and create a fresh Observable for each Observer. It waits until
	     * an Observer subscribes to it, and then it generates an Observable,
	     * typically with an Observable factory function. It does this afresh for each
	     * subscriber, so although each subscriber may think it is subscribing to the
	     * same Observable, in fact each subscriber gets its own individual
	     * Observable.
	     *
	     * @example <caption>Subscribe to either an Observable of clicks or an Observable of interval, at random</caption>
	     * var clicksOrInterval = Rx.Observable.defer(function () {
	     *   if (Math.random() > 0.5) {
	     *     return Rx.Observable.fromEvent(document, 'click');
	     *   } else {
	     *     return Rx.Observable.interval(1000);
	     *   }
	     * });
	     * clicksOrInterval.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     *
	     * @param {function(): Observable|Promise} observableFactory The Observable
	     * factory function to invoke for each Observer that subscribes to the output
	     * Observable. May also return a Promise, which will be converted on the fly
	     * to an Observable.
	     * @return {Observable} An Observable whose Observers' subscriptions trigger
	     * an invocation of the given Observable factory function.
	     * @static true
	     * @name defer
	     * @owner Observable
	     */


	    _createClass(DeferObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            return new DeferSubscriber(subscriber, this.observableFactory);
	        }
	    }], [{
	        key: 'create',
	        value: function create(observableFactory) {
	            return new DeferObservable(observableFactory);
	        }
	    }]);

	    return DeferObservable;
	}(_Observable2.Observable);

	var DeferSubscriber = function (_OuterSubscriber) {
	    _inherits(DeferSubscriber, _OuterSubscriber);

	    function DeferSubscriber(destination, factory) {
	        _classCallCheck(this, DeferSubscriber);

	        var _this2 = _possibleConstructorReturn(this, (DeferSubscriber.__proto__ || Object.getPrototypeOf(DeferSubscriber)).call(this, destination));

	        _this2.factory = factory;
	        _this2.tryDefer();
	        return _this2;
	    }

	    _createClass(DeferSubscriber, [{
	        key: 'tryDefer',
	        value: function tryDefer() {
	            try {
	                this._callFactory();
	            } catch (err) {
	                this._error(err);
	            }
	        }
	    }, {
	        key: '_callFactory',
	        value: function _callFactory() {
	            var result = this.factory();
	            if (result) {
	                this.add((0, _subscribeToResult.subscribeToResult)(this, result));
	            }
	        }
	    }]);

	    return DeferSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=DeferObservable.js.map

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _empty = __webpack_require__(47);

	_Observable.Observable.empty = _empty.empty;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.empty = undefined;

	var _EmptyObservable = __webpack_require__(32);

	var empty = exports.empty = _EmptyObservable.EmptyObservable.create;
	//# sourceMappingURL=empty.js.map

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _forkJoin = __webpack_require__(49);

	_Observable.Observable.forkJoin = _forkJoin.forkJoin;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.forkJoin = undefined;

	var _ForkJoinObservable = __webpack_require__(50);

	var forkJoin = exports.forkJoin = _ForkJoinObservable.ForkJoinObservable.create;
	//# sourceMappingURL=forkJoin.js.map

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ForkJoinObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _EmptyObservable = __webpack_require__(32);

	var _isArray = __webpack_require__(10);

	var _subscribeToResult = __webpack_require__(35);

	var _OuterSubscriber2 = __webpack_require__(34);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ForkJoinObservable = exports.ForkJoinObservable = function (_Observable) {
	    _inherits(ForkJoinObservable, _Observable);

	    function ForkJoinObservable(sources, resultSelector) {
	        _classCallCheck(this, ForkJoinObservable);

	        var _this = _possibleConstructorReturn(this, (ForkJoinObservable.__proto__ || Object.getPrototypeOf(ForkJoinObservable)).call(this));

	        _this.sources = sources;
	        _this.resultSelector = resultSelector;
	        return _this;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * @param sources
	     * @return {any}
	     * @static true
	     * @name forkJoin
	     * @owner Observable
	     */


	    _createClass(ForkJoinObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            return new ForkJoinSubscriber(subscriber, this.sources, this.resultSelector);
	        }
	    }], [{
	        key: 'create',
	        value: function create() {
	            for (var _len = arguments.length, sources = Array(_len), _key = 0; _key < _len; _key++) {
	                sources[_key] = arguments[_key];
	            }

	            if (sources === null || arguments.length === 0) {
	                return new _EmptyObservable.EmptyObservable();
	            }
	            var resultSelector = null;
	            if (typeof sources[sources.length - 1] === 'function') {
	                resultSelector = sources.pop();
	            }
	            // if the first and only other argument besides the resultSelector is an array
	            // assume it's been called with `forkJoin([obs1, obs2, obs3], resultSelector)`
	            if (sources.length === 1 && (0, _isArray.isArray)(sources[0])) {
	                sources = sources[0];
	            }
	            if (sources.length === 0) {
	                return new _EmptyObservable.EmptyObservable();
	            }
	            return new ForkJoinObservable(sources, resultSelector);
	        }
	    }]);

	    return ForkJoinObservable;
	}(_Observable2.Observable);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ForkJoinSubscriber = function (_OuterSubscriber) {
	    _inherits(ForkJoinSubscriber, _OuterSubscriber);

	    function ForkJoinSubscriber(destination, sources, resultSelector) {
	        _classCallCheck(this, ForkJoinSubscriber);

	        var _this2 = _possibleConstructorReturn(this, (ForkJoinSubscriber.__proto__ || Object.getPrototypeOf(ForkJoinSubscriber)).call(this, destination));

	        _this2.sources = sources;
	        _this2.resultSelector = resultSelector;
	        _this2.completed = 0;
	        _this2.haveValues = 0;
	        var len = sources.length;
	        _this2.total = len;
	        _this2.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            var source = sources[i];
	            var innerSubscription = (0, _subscribeToResult.subscribeToResult)(_this2, source, null, i);
	            if (innerSubscription) {
	                innerSubscription.outerIndex = i;
	                _this2.add(innerSubscription);
	            }
	        }
	        return _this2;
	    }

	    _createClass(ForkJoinSubscriber, [{
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.values[outerIndex] = innerValue;
	            if (!innerSub._hasValue) {
	                innerSub._hasValue = true;
	                this.haveValues++;
	            }
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            var destination = this.destination;
	            var haveValues = this.haveValues;
	            var resultSelector = this.resultSelector;
	            var values = this.values;

	            var len = values.length;
	            if (!innerSub._hasValue) {
	                destination.complete();
	                return;
	            }
	            this.completed++;
	            if (this.completed !== len) {
	                return;
	            }
	            if (haveValues === len) {
	                var value = resultSelector ? resultSelector.apply(this, values) : values;
	                destination.next(value);
	            }
	            destination.complete();
	        }
	    }]);

	    return ForkJoinSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=ForkJoinObservable.js.map

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _from = __webpack_require__(52);

	_Observable.Observable.from = _from.from;
	//# sourceMappingURL=from.js.map

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.from = undefined;

	var _FromObservable = __webpack_require__(53);

	var from = exports.from = _FromObservable.FromObservable.create;
	//# sourceMappingURL=from.js.map

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FromObservable = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isArray = __webpack_require__(10);

	var _isPromise = __webpack_require__(36);

	var _PromiseObservable = __webpack_require__(54);

	var _IteratorObservable = __webpack_require__(55);

	var _ArrayObservable = __webpack_require__(30);

	var _ArrayLikeObservable = __webpack_require__(56);

	var _iterator = __webpack_require__(37);

	var _Observable2 = __webpack_require__(4);

	var _observeOn = __webpack_require__(57);

	var _observable = __webpack_require__(17);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var isArrayLike = function isArrayLike(x) {
	    return x && typeof x.length === 'number';
	};
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */

	var FromObservable = exports.FromObservable = function (_Observable) {
	    _inherits(FromObservable, _Observable);

	    function FromObservable(ish, scheduler) {
	        _classCallCheck(this, FromObservable);

	        var _this = _possibleConstructorReturn(this, (FromObservable.__proto__ || Object.getPrototypeOf(FromObservable)).call(this, null));

	        _this.ish = ish;
	        _this.scheduler = scheduler;
	        return _this;
	    }
	    /**
	     * Creates an Observable from an Array, an array-like object, a Promise, an
	     * iterable object, or an Observable-like object.
	     *
	     * <span class="informal">Converts almost anything to an Observable.</span>
	     *
	     * <img src="./img/from.png" width="100%">
	     *
	     * Convert various other objects and data types into Observables. `from`
	     * converts a Promise or an array-like or an
	     * [iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
	     * object into an Observable that emits the items in that promise or array or
	     * iterable. A String, in this context, is treated as an array of characters.
	     * Observable-like objects (contains a function named with the ES2015 Symbol
	     * for Observable) can also be converted through this operator.
	     *
	     * @example <caption>Converts an array to an Observable</caption>
	     * var array = [10, 20, 30];
	     * var result = Rx.Observable.from(array);
	     * result.subscribe(x => console.log(x));
	     *
	     * @example <caption>Convert an infinite iterable (from a generator) to an Observable</caption>
	     * function* generateDoubles(seed) {
	     *   var i = seed;
	     *   while (true) {
	     *     yield i;
	     *     i = 2 * i; // double it
	     *   }
	     * }
	     *
	     * var iterator = generateDoubles(3);
	     * var result = Rx.Observable.from(iterator).take(10);
	     * result.subscribe(x => console.log(x));
	     *
	     * @see {@link create}
	     * @see {@link fromEvent}
	     * @see {@link fromEventPattern}
	     * @see {@link fromPromise}
	     *
	     * @param {ObservableInput<T>} ish A subscribable object, a Promise, an
	     * Observable-like, an Array, an iterable or an array-like object to be
	     * converted.
	     * @param {Scheduler} [scheduler] The scheduler on which to schedule the
	     * emissions of values.
	     * @return {Observable<T>} The Observable whose values are originally from the
	     * input object that was converted.
	     * @static true
	     * @name from
	     * @owner Observable
	     */


	    _createClass(FromObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var ish = this.ish;
	            var scheduler = this.scheduler;
	            if (scheduler == null) {
	                return ish[_observable.$$observable]().subscribe(subscriber);
	            } else {
	                return ish[_observable.$$observable]().subscribe(new _observeOn.ObserveOnSubscriber(subscriber, scheduler, 0));
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(ish, scheduler) {
	            if (ish != null) {
	                if (typeof ish[_observable.$$observable] === 'function') {
	                    if (ish instanceof _Observable2.Observable && !scheduler) {
	                        return ish;
	                    }
	                    return new FromObservable(ish, scheduler);
	                } else if ((0, _isArray.isArray)(ish)) {
	                    return new _ArrayObservable.ArrayObservable(ish, scheduler);
	                } else if ((0, _isPromise.isPromise)(ish)) {
	                    return new _PromiseObservable.PromiseObservable(ish, scheduler);
	                } else if (typeof ish[_iterator.$$iterator] === 'function' || typeof ish === 'string') {
	                    return new _IteratorObservable.IteratorObservable(ish, scheduler);
	                } else if (isArrayLike(ish)) {
	                    return new _ArrayLikeObservable.ArrayLikeObservable(ish, scheduler);
	                }
	            }
	            throw new TypeError((ish !== null && (typeof ish === 'undefined' ? 'undefined' : _typeof(ish)) || ish) + ' is not observable');
	        }
	    }]);

	    return FromObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=FromObservable.js.map

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PromiseObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _root = __webpack_require__(5);

	var _Observable2 = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var PromiseObservable = exports.PromiseObservable = function (_Observable) {
	    _inherits(PromiseObservable, _Observable);

	    function PromiseObservable(promise, scheduler) {
	        _classCallCheck(this, PromiseObservable);

	        var _this = _possibleConstructorReturn(this, (PromiseObservable.__proto__ || Object.getPrototypeOf(PromiseObservable)).call(this));

	        _this.promise = promise;
	        _this.scheduler = scheduler;
	        return _this;
	    }
	    /**
	     * Converts a Promise to an Observable.
	     *
	     * <span class="informal">Returns an Observable that just emits the Promise's
	     * resolved value, then completes.</span>
	     *
	     * Converts an ES2015 Promise or a Promises/A+ spec compliant Promise to an
	     * Observable. If the Promise resolves with a value, the output Observable
	     * emits that resolved value as a `next`, and then completes. If the Promise
	     * is rejected, then the output Observable emits the corresponding Error.
	     *
	     * @example <caption>Convert the Promise returned by Fetch to an Observable</caption>
	     * var result = Rx.Observable.fromPromise(fetch('http://myserver.com/'));
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link bindCallback}
	     * @see {@link from}
	     *
	     * @param {Promise<T>} promise The promise to be converted.
	     * @param {Scheduler} [scheduler] An optional Scheduler to use for scheduling
	     * the delivery of the resolved value (or the rejection).
	     * @return {Observable<T>} An Observable which wraps the Promise.
	     * @static true
	     * @name fromPromise
	     * @owner Observable
	     */


	    _createClass(PromiseObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var _this2 = this;

	            var promise = this.promise;
	            var scheduler = this.scheduler;
	            if (scheduler == null) {
	                if (this._isScalar) {
	                    if (!subscriber.closed) {
	                        subscriber.next(this.value);
	                        subscriber.complete();
	                    }
	                } else {
	                    promise.then(function (value) {
	                        _this2.value = value;
	                        _this2._isScalar = true;
	                        if (!subscriber.closed) {
	                            subscriber.next(value);
	                            subscriber.complete();
	                        }
	                    }, function (err) {
	                        if (!subscriber.closed) {
	                            subscriber.error(err);
	                        }
	                    }).then(null, function (err) {
	                        // escape the promise trap, throw unhandled errors
	                        _root.root.setTimeout(function () {
	                            throw err;
	                        });
	                    });
	                }
	            } else {
	                if (this._isScalar) {
	                    if (!subscriber.closed) {
	                        return scheduler.schedule(dispatchNext, 0, { value: this.value, subscriber: subscriber });
	                    }
	                } else {
	                    promise.then(function (value) {
	                        _this2.value = value;
	                        _this2._isScalar = true;
	                        if (!subscriber.closed) {
	                            subscriber.add(scheduler.schedule(dispatchNext, 0, { value: value, subscriber: subscriber }));
	                        }
	                    }, function (err) {
	                        if (!subscriber.closed) {
	                            subscriber.add(scheduler.schedule(dispatchError, 0, { err: err, subscriber: subscriber }));
	                        }
	                    }).then(null, function (err) {
	                        // escape the promise trap, throw unhandled errors
	                        _root.root.setTimeout(function () {
	                            throw err;
	                        });
	                    });
	                }
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(promise, scheduler) {
	            return new PromiseObservable(promise, scheduler);
	        }
	    }]);

	    return PromiseObservable;
	}(_Observable2.Observable);

	function dispatchNext(arg) {
	    var value = arg.value;
	    var subscriber = arg.subscriber;

	    if (!subscriber.closed) {
	        subscriber.next(value);
	        subscriber.complete();
	    }
	}
	function dispatchError(arg) {
	    var err = arg.err;
	    var subscriber = arg.subscriber;

	    if (!subscriber.closed) {
	        subscriber.error(err);
	    }
	}
	//# sourceMappingURL=PromiseObservable.js.map

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IteratorObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _root = __webpack_require__(5);

	var _Observable2 = __webpack_require__(4);

	var _iterator = __webpack_require__(37);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IteratorObservable = exports.IteratorObservable = function (_Observable) {
	    _inherits(IteratorObservable, _Observable);

	    function IteratorObservable(iterator, scheduler) {
	        _classCallCheck(this, IteratorObservable);

	        var _this = _possibleConstructorReturn(this, (IteratorObservable.__proto__ || Object.getPrototypeOf(IteratorObservable)).call(this));

	        _this.scheduler = scheduler;
	        if (iterator == null) {
	            throw new Error('iterator cannot be null.');
	        }
	        _this.iterator = getIterator(iterator);
	        return _this;
	    }

	    _createClass(IteratorObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var index = 0;
	            var iterator = this.iterator;
	            var scheduler = this.scheduler;

	            if (scheduler) {
	                return scheduler.schedule(IteratorObservable.dispatch, 0, {
	                    index: index, iterator: iterator, subscriber: subscriber
	                });
	            } else {
	                do {
	                    var result = iterator.next();
	                    if (result.done) {
	                        subscriber.complete();
	                        break;
	                    } else {
	                        subscriber.next(result.value);
	                    }
	                    if (subscriber.closed) {
	                        break;
	                    }
	                } while (true);
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(iterator, scheduler) {
	            return new IteratorObservable(iterator, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var index = state.index;
	            var hasError = state.hasError;
	            var iterator = state.iterator;
	            var subscriber = state.subscriber;

	            if (hasError) {
	                subscriber.error(state.error);
	                return;
	            }
	            var result = iterator.next();
	            if (result.done) {
	                subscriber.complete();
	                return;
	            }
	            subscriber.next(result.value);
	            state.index = index + 1;
	            if (subscriber.closed) {
	                return;
	            }
	            this.schedule(state);
	        }
	    }]);

	    return IteratorObservable;
	}(_Observable2.Observable);

	var StringIterator = function () {
	    function StringIterator(str) {
	        var idx = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var len = arguments.length <= 2 || arguments[2] === undefined ? str.length : arguments[2];

	        _classCallCheck(this, StringIterator);

	        this.str = str;
	        this.idx = idx;
	        this.len = len;
	    }

	    _createClass(StringIterator, [{
	        key: _iterator.$$iterator,
	        value: function value() {
	            return this;
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            return this.idx < this.len ? {
	                done: false,
	                value: this.str.charAt(this.idx++)
	            } : {
	                done: true,
	                value: undefined
	            };
	        }
	    }]);

	    return StringIterator;
	}();

	var ArrayIterator = function () {
	    function ArrayIterator(arr) {
	        var idx = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var len = arguments.length <= 2 || arguments[2] === undefined ? toLength(arr) : arguments[2];

	        _classCallCheck(this, ArrayIterator);

	        this.arr = arr;
	        this.idx = idx;
	        this.len = len;
	    }

	    _createClass(ArrayIterator, [{
	        key: _iterator.$$iterator,
	        value: function value() {
	            return this;
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            return this.idx < this.len ? {
	                done: false,
	                value: this.arr[this.idx++]
	            } : {
	                done: true,
	                value: undefined
	            };
	        }
	    }]);

	    return ArrayIterator;
	}();

	function getIterator(obj) {
	    var i = obj[_iterator.$$iterator];
	    if (!i && typeof obj === 'string') {
	        return new StringIterator(obj);
	    }
	    if (!i && obj.length !== undefined) {
	        return new ArrayIterator(obj);
	    }
	    if (!i) {
	        throw new TypeError('object is not iterable');
	    }
	    return obj[_iterator.$$iterator]();
	}
	var maxSafeInteger = Math.pow(2, 53) - 1;
	function toLength(o) {
	    var len = +o.length;
	    if (isNaN(len)) {
	        return 0;
	    }
	    if (len === 0 || !numberIsFinite(len)) {
	        return len;
	    }
	    len = sign(len) * Math.floor(Math.abs(len));
	    if (len <= 0) {
	        return 0;
	    }
	    if (len > maxSafeInteger) {
	        return maxSafeInteger;
	    }
	    return len;
	}
	function numberIsFinite(value) {
	    return typeof value === 'number' && _root.root.isFinite(value);
	}
	function sign(value) {
	    var valueAsNumber = +value;
	    if (valueAsNumber === 0) {
	        return valueAsNumber;
	    }
	    if (isNaN(valueAsNumber)) {
	        return valueAsNumber;
	    }
	    return valueAsNumber < 0 ? -1 : 1;
	}
	//# sourceMappingURL=IteratorObservable.js.map

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ArrayLikeObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _ScalarObservable = __webpack_require__(31);

	var _EmptyObservable = __webpack_require__(32);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ArrayLikeObservable = exports.ArrayLikeObservable = function (_Observable) {
	    _inherits(ArrayLikeObservable, _Observable);

	    function ArrayLikeObservable(arrayLike, scheduler) {
	        _classCallCheck(this, ArrayLikeObservable);

	        var _this = _possibleConstructorReturn(this, (ArrayLikeObservable.__proto__ || Object.getPrototypeOf(ArrayLikeObservable)).call(this));

	        _this.arrayLike = arrayLike;
	        _this.scheduler = scheduler;
	        if (!scheduler && arrayLike.length === 1) {
	            _this._isScalar = true;
	            _this.value = arrayLike[0];
	        }
	        return _this;
	    }

	    _createClass(ArrayLikeObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var index = 0;
	            var arrayLike = this.arrayLike;
	            var scheduler = this.scheduler;

	            var length = arrayLike.length;
	            if (scheduler) {
	                return scheduler.schedule(ArrayLikeObservable.dispatch, 0, {
	                    arrayLike: arrayLike, index: index, length: length, subscriber: subscriber
	                });
	            } else {
	                for (var i = 0; i < length && !subscriber.closed; i++) {
	                    subscriber.next(arrayLike[i]);
	                }
	                subscriber.complete();
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(arrayLike, scheduler) {
	            var length = arrayLike.length;
	            if (length === 0) {
	                return new _EmptyObservable.EmptyObservable();
	            } else if (length === 1) {
	                return new _ScalarObservable.ScalarObservable(arrayLike[0], scheduler);
	            } else {
	                return new ArrayLikeObservable(arrayLike, scheduler);
	            }
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var arrayLike = state.arrayLike;
	            var index = state.index;
	            var length = state.length;
	            var subscriber = state.subscriber;

	            if (subscriber.closed) {
	                return;
	            }
	            if (index >= length) {
	                subscriber.complete();
	                return;
	            }
	            subscriber.next(arrayLike[index]);
	            state.index = index + 1;
	            this.schedule(state);
	        }
	    }]);

	    return ArrayLikeObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=ArrayLikeObservable.js.map

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ObserveOnMessage = exports.ObserveOnSubscriber = exports.ObserveOnOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.observeOn = observeOn;

	var _Subscriber2 = __webpack_require__(7);

	var _Notification = __webpack_require__(58);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @see {@link Notification}
	 *
	 * @param scheduler
	 * @param delay
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method observeOn
	 * @owner Observable
	 */
	function observeOn(scheduler) {
	    var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    return this.lift(new ObserveOnOperator(scheduler, delay));
	}

	var ObserveOnOperator = exports.ObserveOnOperator = function () {
	    function ObserveOnOperator(scheduler) {
	        var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	        _classCallCheck(this, ObserveOnOperator);

	        this.scheduler = scheduler;
	        this.delay = delay;
	    }

	    _createClass(ObserveOnOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new ObserveOnSubscriber(subscriber, this.scheduler, this.delay));
	        }
	    }]);

	    return ObserveOnOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ObserveOnSubscriber = exports.ObserveOnSubscriber = function (_Subscriber) {
	    _inherits(ObserveOnSubscriber, _Subscriber);

	    function ObserveOnSubscriber(destination, scheduler) {
	        var delay = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	        _classCallCheck(this, ObserveOnSubscriber);

	        var _this = _possibleConstructorReturn(this, (ObserveOnSubscriber.__proto__ || Object.getPrototypeOf(ObserveOnSubscriber)).call(this, destination));

	        _this.scheduler = scheduler;
	        _this.delay = delay;
	        return _this;
	    }

	    _createClass(ObserveOnSubscriber, [{
	        key: 'scheduleMessage',
	        value: function scheduleMessage(notification) {
	            this.add(this.scheduler.schedule(ObserveOnSubscriber.dispatch, this.delay, new ObserveOnMessage(notification, this.destination)));
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.scheduleMessage(_Notification.Notification.createNext(value));
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.scheduleMessage(_Notification.Notification.createError(err));
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.scheduleMessage(_Notification.Notification.createComplete());
	        }
	    }], [{
	        key: 'dispatch',
	        value: function dispatch(arg) {
	            var notification = arg.notification;
	            var destination = arg.destination;

	            notification.observe(destination);
	        }
	    }]);

	    return ObserveOnSubscriber;
	}(_Subscriber2.Subscriber);

	var ObserveOnMessage = exports.ObserveOnMessage = function ObserveOnMessage(notification, destination) {
	    _classCallCheck(this, ObserveOnMessage);

	    this.notification = notification;
	    this.destination = destination;
	};
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Notification = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Represents a push-based event or value that an {@link Observable} can emit.
	 * This class is particularly useful for operators that manage notifications,
	 * like {@link materialize}, {@link dematerialize}, {@link observeOn}, and
	 * others. Besides wrapping the actual delivered value, it also annotates it
	 * with metadata of, for instance, what type of push message it is (`next`,
	 * `error`, or `complete`).
	 *
	 * @see {@link materialize}
	 * @see {@link dematerialize}
	 * @see {@link observeOn}
	 *
	 * @class Notification<T>
	 */
	var Notification = exports.Notification = function () {
	    function Notification(kind, value, exception) {
	        _classCallCheck(this, Notification);

	        this.kind = kind;
	        this.value = value;
	        this.exception = exception;
	        this.hasValue = kind === 'N';
	    }
	    /**
	     * Delivers to the given `observer` the value wrapped by this Notification.
	     * @param {Observer} observer
	     * @return
	     */


	    _createClass(Notification, [{
	        key: 'observe',
	        value: function observe(observer) {
	            switch (this.kind) {
	                case 'N':
	                    return observer.next && observer.next(this.value);
	                case 'E':
	                    return observer.error && observer.error(this.exception);
	                case 'C':
	                    return observer.complete && observer.complete();
	            }
	        }
	        /**
	         * Given some {@link Observer} callbacks, deliver the value represented by the
	         * current Notification to the correctly corresponding callback.
	         * @param {function(value: T): void} next An Observer `next` callback.
	         * @param {function(err: any): void} [error] An Observer `error` callback.
	         * @param {function(): void} [complete] An Observer `complete` callback.
	         * @return {any}
	         */

	    }, {
	        key: 'do',
	        value: function _do(next, error, complete) {
	            var kind = this.kind;
	            switch (kind) {
	                case 'N':
	                    return next && next(this.value);
	                case 'E':
	                    return error && error(this.exception);
	                case 'C':
	                    return complete && complete();
	            }
	        }
	        /**
	         * Takes an Observer or its individual callback functions, and calls `observe`
	         * or `do` methods accordingly.
	         * @param {Observer|function(value: T): void} nextOrObserver An Observer or
	         * the `next` callback.
	         * @param {function(err: any): void} [error] An Observer `error` callback.
	         * @param {function(): void} [complete] An Observer `complete` callback.
	         * @return {any}
	         */

	    }, {
	        key: 'accept',
	        value: function accept(nextOrObserver, error, complete) {
	            if (nextOrObserver && typeof nextOrObserver.next === 'function') {
	                return this.observe(nextOrObserver);
	            } else {
	                return this.do(nextOrObserver, error, complete);
	            }
	        }
	        /**
	         * Returns a simple Observable that just delivers the notification represented
	         * by this Notification instance.
	         * @return {any}
	         */

	    }, {
	        key: 'toObservable',
	        value: function toObservable() {
	            var kind = this.kind;
	            switch (kind) {
	                case 'N':
	                    return _Observable.Observable.of(this.value);
	                case 'E':
	                    return _Observable.Observable.throw(this.exception);
	                case 'C':
	                    return _Observable.Observable.empty();
	            }
	            throw new Error('unexpected notification kind value');
	        }
	        /**
	         * A shortcut to create a Notification instance of the type `next` from a
	         * given value.
	         * @param {T} value The `next` value.
	         * @return {Notification<T>} The "next" Notification representing the
	         * argument.
	         */

	    }], [{
	        key: 'createNext',
	        value: function createNext(value) {
	            if (typeof value !== 'undefined') {
	                return new Notification('N', value);
	            }
	            return this.undefinedValueNotification;
	        }
	        /**
	         * A shortcut to create a Notification instance of the type `error` from a
	         * given error.
	         * @param {any} [err] The `error` exception.
	         * @return {Notification<T>} The "error" Notification representing the
	         * argument.
	         */

	    }, {
	        key: 'createError',
	        value: function createError(err) {
	            return new Notification('E', undefined, err);
	        }
	        /**
	         * A shortcut to create a Notification instance of the type `complete`.
	         * @return {Notification<any>} The valueless "complete" Notification.
	         */

	    }, {
	        key: 'createComplete',
	        value: function createComplete() {
	            return this.completeNotification;
	        }
	    }]);

	    return Notification;
	}();

	Notification.completeNotification = new Notification('C');
	Notification.undefinedValueNotification = new Notification('N', undefined);
	//# sourceMappingURL=Notification.js.map

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _fromEvent = __webpack_require__(60);

	_Observable.Observable.fromEvent = _fromEvent.fromEvent;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fromEvent = undefined;

	var _FromEventObservable = __webpack_require__(61);

	var fromEvent = exports.fromEvent = _FromEventObservable.FromEventObservable.create;
	//# sourceMappingURL=fromEvent.js.map

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FromEventObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _tryCatch = __webpack_require__(12);

	var _isFunction = __webpack_require__(8);

	var _errorObject = __webpack_require__(13);

	var _Subscription = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function isNodeStyleEventEmmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addListener === 'function' && typeof sourceObj.removeListener === 'function';
	}
	function isJQueryStyleEventEmitter(sourceObj) {
	    return !!sourceObj && typeof sourceObj.on === 'function' && typeof sourceObj.off === 'function';
	}
	function isNodeList(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object NodeList]';
	}
	function isHTMLCollection(sourceObj) {
	    return !!sourceObj && sourceObj.toString() === '[object HTMLCollection]';
	}
	function isEventTarget(sourceObj) {
	    return !!sourceObj && typeof sourceObj.addEventListener === 'function' && typeof sourceObj.removeEventListener === 'function';
	}
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */

	var FromEventObservable = exports.FromEventObservable = function (_Observable) {
	    _inherits(FromEventObservable, _Observable);

	    function FromEventObservable(sourceObj, eventName, selector, options) {
	        _classCallCheck(this, FromEventObservable);

	        var _this = _possibleConstructorReturn(this, (FromEventObservable.__proto__ || Object.getPrototypeOf(FromEventObservable)).call(this));

	        _this.sourceObj = sourceObj;
	        _this.eventName = eventName;
	        _this.selector = selector;
	        _this.options = options;
	        return _this;
	    }
	    /* tslint:enable:max-line-length */
	    /**
	     * Creates an Observable that emits events of a specific type coming from the
	     * given event target.
	     *
	     * <span class="informal">Creates an Observable from DOM events, or Node
	     * EventEmitter events or others.</span>
	     *
	     * <img src="./img/fromEvent.png" width="100%">
	     *
	     * Creates an Observable by attaching an event listener to an "event target",
	     * which may be an object with `addEventListener` and `removeEventListener`,
	     * a Node.js EventEmitter, a jQuery style EventEmitter, a NodeList from the
	     * DOM, or an HTMLCollection from the DOM. The event handler is attached when
	     * the output Observable is subscribed, and removed when the Subscription is
	     * unsubscribed.
	     *
	     * @example <caption>Emits clicks happening on the DOM document</caption>
	     * var clicks = Rx.Observable.fromEvent(document, 'click');
	     * clicks.subscribe(x => console.log(x));
	     *
	     * @see {@link from}
	     * @see {@link fromEventPattern}
	     *
	     * @param {EventTargetLike} target The DOMElement, event target, Node.js
	     * EventEmitter, NodeList or HTMLCollection to attach the event handler to.
	     * @param {string} eventName The event name of interest, being emitted by the
	     * `target`.
	     * @parm {EventListenerOptions} [options] Options to pass through to addEventListener
	     * @param {SelectorMethodSignature<T>} [selector] An optional function to
	     * post-process results. It takes the arguments from the event handler and
	     * should return a single value.
	     * @return {Observable<T>}
	     * @static true
	     * @name fromEvent
	     * @owner Observable
	     */


	    _createClass(FromEventObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var sourceObj = this.sourceObj;
	            var eventName = this.eventName;
	            var options = this.options;
	            var selector = this.selector;
	            var handler = selector ? function () {
	                var result = (0, _tryCatch.tryCatch)(selector).apply(undefined, arguments);
	                if (result === _errorObject.errorObject) {
	                    subscriber.error(_errorObject.errorObject.e);
	                } else {
	                    subscriber.next(result);
	                }
	            } : function (e) {
	                return subscriber.next(e);
	            };
	            FromEventObservable.setupSubscription(sourceObj, eventName, handler, subscriber, options);
	        }
	    }], [{
	        key: 'create',
	        value: function create(target, eventName, options, selector) {
	            if ((0, _isFunction.isFunction)(options)) {
	                selector = options;
	                options = undefined;
	            }
	            return new FromEventObservable(target, eventName, selector, options);
	        }
	    }, {
	        key: 'setupSubscription',
	        value: function setupSubscription(sourceObj, eventName, handler, subscriber, options) {
	            var unsubscribe = void 0;
	            if (isNodeList(sourceObj) || isHTMLCollection(sourceObj)) {
	                for (var i = 0, len = sourceObj.length; i < len; i++) {
	                    FromEventObservable.setupSubscription(sourceObj[i], eventName, handler, subscriber, options);
	                }
	            } else if (isEventTarget(sourceObj)) {
	                (function () {
	                    var source = sourceObj;
	                    sourceObj.addEventListener(eventName, handler, options);
	                    unsubscribe = function unsubscribe() {
	                        return source.removeEventListener(eventName, handler);
	                    };
	                })();
	            } else if (isJQueryStyleEventEmitter(sourceObj)) {
	                (function () {
	                    var source = sourceObj;
	                    sourceObj.on(eventName, handler);
	                    unsubscribe = function unsubscribe() {
	                        return source.off(eventName, handler);
	                    };
	                })();
	            } else if (isNodeStyleEventEmmitter(sourceObj)) {
	                (function () {
	                    var source = sourceObj;
	                    sourceObj.addListener(eventName, handler);
	                    unsubscribe = function unsubscribe() {
	                        return source.removeListener(eventName, handler);
	                    };
	                })();
	            }
	            subscriber.add(new _Subscription.Subscription(unsubscribe));
	        }
	    }]);

	    return FromEventObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=FromEventObservable.js.map

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _fromEventPattern = __webpack_require__(63);

	_Observable.Observable.fromEventPattern = _fromEventPattern.fromEventPattern;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fromEventPattern = undefined;

	var _FromEventPatternObservable = __webpack_require__(64);

	var fromEventPattern = exports.fromEventPattern = _FromEventPatternObservable.FromEventPatternObservable.create;
	//# sourceMappingURL=fromEventPattern.js.map

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FromEventPatternObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _Subscription = __webpack_require__(9);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var FromEventPatternObservable = exports.FromEventPatternObservable = function (_Observable) {
	    _inherits(FromEventPatternObservable, _Observable);

	    function FromEventPatternObservable(addHandler, removeHandler, selector) {
	        _classCallCheck(this, FromEventPatternObservable);

	        var _this = _possibleConstructorReturn(this, (FromEventPatternObservable.__proto__ || Object.getPrototypeOf(FromEventPatternObservable)).call(this));

	        _this.addHandler = addHandler;
	        _this.removeHandler = removeHandler;
	        _this.selector = selector;
	        return _this;
	    }
	    /**
	     * Creates an Observable from an API based on addHandler/removeHandler
	     * functions.
	     *
	     * <span class="informal">Converts any addHandler/removeHandler API to an
	     * Observable.</span>
	     *
	     * <img src="./img/fromEventPattern.png" width="100%">
	     *
	     * Creates an Observable by using the `addHandler` and `removeHandler`
	     * functions to add and remove the handlers, with an optional selector
	     * function to project the event arguments to a result. The `addHandler` is
	     * called when the output Observable is subscribed, and `removeHandler` is
	     * called when the Subscription is unsubscribed.
	     *
	     * @example <caption>Emits clicks happening on the DOM document</caption>
	     * function addClickHandler(handler) {
	     *   document.addEventListener('click', handler);
	     * }
	     *
	     * function removeClickHandler(handler) {
	     *   document.removeEventListener('click', handler);
	     * }
	     *
	     * var clicks = Rx.Observable.fromEventPattern(
	     *   addClickHandler,
	     *   removeClickHandler
	     * );
	     * clicks.subscribe(x => console.log(x));
	     *
	     * @see {@link from}
	     * @see {@link fromEvent}
	     *
	     * @param {function(handler: Function): any} addHandler A function that takes
	     * a `handler` function as argument and attaches it somehow to the actual
	     * source of events.
	     * @param {function(handler: Function): void} removeHandler A function that
	     * takes a `handler` function as argument and removes it in case it was
	     * previously attached using `addHandler`.
	     * @param {function(...args: any): T} [selector] An optional function to
	     * post-process results. It takes the arguments from the event handler and
	     * should return a single value.
	     * @return {Observable<T>}
	     * @static true
	     * @name fromEventPattern
	     * @owner Observable
	     */


	    _createClass(FromEventPatternObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var _this2 = this;

	            var removeHandler = this.removeHandler;
	            var handler = !!this.selector ? function () {
	                for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	                    args[_key] = arguments[_key];
	                }

	                _this2._callSelector(subscriber, args);
	            } : function (e) {
	                subscriber.next(e);
	            };
	            this._callAddHandler(handler, subscriber);
	            subscriber.add(new _Subscription.Subscription(function () {
	                //TODO: determine whether or not to forward to error handler
	                removeHandler(handler);
	            }));
	        }
	    }, {
	        key: '_callSelector',
	        value: function _callSelector(subscriber, args) {
	            try {
	                var result = this.selector.apply(this, _toConsumableArray(args));
	                subscriber.next(result);
	            } catch (e) {
	                subscriber.error(e);
	            }
	        }
	    }, {
	        key: '_callAddHandler',
	        value: function _callAddHandler(handler, errorSubscriber) {
	            try {
	                this.addHandler(handler);
	            } catch (e) {
	                errorSubscriber.error(e);
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(addHandler, removeHandler, selector) {
	            return new FromEventPatternObservable(addHandler, removeHandler, selector);
	        }
	    }]);

	    return FromEventPatternObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=FromEventPatternObservable.js.map

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _fromPromise = __webpack_require__(66);

	_Observable.Observable.fromPromise = _fromPromise.fromPromise;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.fromPromise = undefined;

	var _PromiseObservable = __webpack_require__(54);

	var fromPromise = exports.fromPromise = _PromiseObservable.PromiseObservable.create;
	//# sourceMappingURL=fromPromise.js.map

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _GenerateObservable = __webpack_require__(68);

	_Observable.Observable.generate = _GenerateObservable.GenerateObservable.create;
	//# sourceMappingURL=generate.js.map

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GenerateObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _isScheduler = __webpack_require__(29);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var selfSelector = function selfSelector(value) {
	    return value;
	};
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */

	var GenerateObservable = exports.GenerateObservable = function (_Observable) {
	    _inherits(GenerateObservable, _Observable);

	    function GenerateObservable(initialState, condition, iterate, resultSelector, scheduler) {
	        _classCallCheck(this, GenerateObservable);

	        var _this = _possibleConstructorReturn(this, (GenerateObservable.__proto__ || Object.getPrototypeOf(GenerateObservable)).call(this));

	        _this.initialState = initialState;
	        _this.condition = condition;
	        _this.iterate = iterate;
	        _this.resultSelector = resultSelector;
	        _this.scheduler = scheduler;
	        return _this;
	    }

	    _createClass(GenerateObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var state = this.initialState;
	            if (this.scheduler) {
	                return this.scheduler.schedule(GenerateObservable.dispatch, 0, {
	                    subscriber: subscriber,
	                    iterate: this.iterate,
	                    condition: this.condition,
	                    resultSelector: this.resultSelector,
	                    state: state });
	            }
	            var condition = this.condition;
	            var resultSelector = this.resultSelector;
	            var iterate = this.iterate;

	            do {
	                if (condition) {
	                    var conditionResult = void 0;
	                    try {
	                        conditionResult = condition(state);
	                    } catch (err) {
	                        subscriber.error(err);
	                        return;
	                    }
	                    if (!conditionResult) {
	                        subscriber.complete();
	                        break;
	                    }
	                }
	                var value = void 0;
	                try {
	                    value = resultSelector(state);
	                } catch (err) {
	                    subscriber.error(err);
	                    return;
	                }
	                subscriber.next(value);
	                if (subscriber.closed) {
	                    break;
	                }
	                try {
	                    state = iterate(state);
	                } catch (err) {
	                    subscriber.error(err);
	                    return;
	                }
	            } while (true);
	        }
	    }], [{
	        key: 'create',
	        value: function create(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler) {
	            if (arguments.length == 1) {
	                return new GenerateObservable(initialStateOrOptions.initialState, initialStateOrOptions.condition, initialStateOrOptions.iterate, initialStateOrOptions.resultSelector || selfSelector, initialStateOrOptions.scheduler);
	            }
	            if (resultSelectorOrObservable === undefined || (0, _isScheduler.isScheduler)(resultSelectorOrObservable)) {
	                return new GenerateObservable(initialStateOrOptions, condition, iterate, selfSelector, resultSelectorOrObservable);
	            }
	            return new GenerateObservable(initialStateOrOptions, condition, iterate, resultSelectorOrObservable, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var subscriber = state.subscriber;
	            var condition = state.condition;

	            if (subscriber.closed) {
	                return;
	            }
	            if (state.needIterate) {
	                try {
	                    state.state = state.iterate(state.state);
	                } catch (err) {
	                    subscriber.error(err);
	                    return;
	                }
	            } else {
	                state.needIterate = true;
	            }
	            if (condition) {
	                var conditionResult = void 0;
	                try {
	                    conditionResult = condition(state.state);
	                } catch (err) {
	                    subscriber.error(err);
	                    return;
	                }
	                if (!conditionResult) {
	                    subscriber.complete();
	                    return;
	                }
	                if (subscriber.closed) {
	                    return;
	                }
	            }
	            var value = void 0;
	            try {
	                value = state.resultSelector(state.state);
	            } catch (err) {
	                subscriber.error(err);
	                return;
	            }
	            if (subscriber.closed) {
	                return;
	            }
	            subscriber.next(value);
	            if (subscriber.closed) {
	                return;
	            }
	            return this.schedule(state);
	        }
	    }]);

	    return GenerateObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=GenerateObservable.js.map

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _if2 = __webpack_require__(70);

	_Observable.Observable.if = _if2._if;
	//# sourceMappingURL=if.js.map

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._if = undefined;

	var _IfObservable = __webpack_require__(71);

	var _if = exports._if = _IfObservable.IfObservable.create;
	//# sourceMappingURL=if.js.map

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IfObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _subscribeToResult = __webpack_require__(35);

	var _OuterSubscriber2 = __webpack_require__(34);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IfObservable = exports.IfObservable = function (_Observable) {
	    _inherits(IfObservable, _Observable);

	    function IfObservable(condition, thenSource, elseSource) {
	        _classCallCheck(this, IfObservable);

	        var _this = _possibleConstructorReturn(this, (IfObservable.__proto__ || Object.getPrototypeOf(IfObservable)).call(this));

	        _this.condition = condition;
	        _this.thenSource = thenSource;
	        _this.elseSource = elseSource;
	        return _this;
	    }

	    _createClass(IfObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var condition = this.condition;
	            var thenSource = this.thenSource;
	            var elseSource = this.elseSource;

	            return new IfSubscriber(subscriber, condition, thenSource, elseSource);
	        }
	    }], [{
	        key: 'create',
	        value: function create(condition, thenSource, elseSource) {
	            return new IfObservable(condition, thenSource, elseSource);
	        }
	    }]);

	    return IfObservable;
	}(_Observable2.Observable);

	var IfSubscriber = function (_OuterSubscriber) {
	    _inherits(IfSubscriber, _OuterSubscriber);

	    function IfSubscriber(destination, condition, thenSource, elseSource) {
	        _classCallCheck(this, IfSubscriber);

	        var _this2 = _possibleConstructorReturn(this, (IfSubscriber.__proto__ || Object.getPrototypeOf(IfSubscriber)).call(this, destination));

	        _this2.condition = condition;
	        _this2.thenSource = thenSource;
	        _this2.elseSource = elseSource;
	        _this2.tryIf();
	        return _this2;
	    }

	    _createClass(IfSubscriber, [{
	        key: 'tryIf',
	        value: function tryIf() {
	            var condition = this.condition;
	            var thenSource = this.thenSource;
	            var elseSource = this.elseSource;

	            var result = void 0;
	            try {
	                result = condition();
	                var source = result ? thenSource : elseSource;
	                if (source) {
	                    this.add((0, _subscribeToResult.subscribeToResult)(this, source));
	                } else {
	                    this._complete();
	                }
	            } catch (err) {
	                this._error(err);
	            }
	        }
	    }]);

	    return IfSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=IfObservable.js.map

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _interval = __webpack_require__(73);

	_Observable.Observable.interval = _interval.interval;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.interval = undefined;

	var _IntervalObservable = __webpack_require__(74);

	var interval = exports.interval = _IntervalObservable.IntervalObservable.create;
	//# sourceMappingURL=interval.js.map

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.IntervalObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isNumeric = __webpack_require__(75);

	var _Observable2 = __webpack_require__(4);

	var _async = __webpack_require__(76);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var IntervalObservable = exports.IntervalObservable = function (_Observable) {
	    _inherits(IntervalObservable, _Observable);

	    function IntervalObservable() {
	        var period = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _async.async : arguments[1];

	        _classCallCheck(this, IntervalObservable);

	        var _this = _possibleConstructorReturn(this, (IntervalObservable.__proto__ || Object.getPrototypeOf(IntervalObservable)).call(this));

	        _this.period = period;
	        _this.scheduler = scheduler;
	        if (!(0, _isNumeric.isNumeric)(period) || period < 0) {
	            _this.period = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            _this.scheduler = _async.async;
	        }
	        return _this;
	    }
	    /**
	     * Creates an Observable that emits sequential numbers every specified
	     * interval of time, on a specified Scheduler.
	     *
	     * <span class="informal">Emits incremental numbers periodically in time.
	     * </span>
	     *
	     * <img src="./img/interval.png" width="100%">
	     *
	     * `interval` returns an Observable that emits an infinite sequence of
	     * ascending integers, with a constant interval of time of your choosing
	     * between those emissions. The first emission is not sent immediately, but
	     * only after the first period has passed. By default, this operator uses the
	     * `async` Scheduler to provide a notion of time, but you may pass any
	     * Scheduler to it.
	     *
	     * @example <caption>Emits ascending numbers, one every second (1000ms)</caption>
	     * var numbers = Rx.Observable.interval(1000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link timer}
	     * @see {@link delay}
	     *
	     * @param {number} [period=0] The interval size in milliseconds (by default)
	     * or the time unit determined by the scheduler's clock.
	     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
	     * the emission of values, and providing a notion of "time".
	     * @return {Observable} An Observable that emits a sequential number each time
	     * interval.
	     * @static true
	     * @name interval
	     * @owner Observable
	     */


	    _createClass(IntervalObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var index = 0;
	            var period = this.period;
	            var scheduler = this.scheduler;
	            subscriber.add(scheduler.schedule(IntervalObservable.dispatch, period, {
	                index: index, subscriber: subscriber, period: period
	            }));
	        }
	    }], [{
	        key: 'create',
	        value: function create() {
	            var period = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	            var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _async.async : arguments[1];

	            return new IntervalObservable(period, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var index = state.index;
	            var subscriber = state.subscriber;
	            var period = state.period;

	            subscriber.next(index);
	            if (subscriber.closed) {
	                return;
	            }
	            state.index += 1;
	            this.schedule(state, period);
	        }
	    }]);

	    return IntervalObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=IntervalObservable.js.map

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isNumeric = isNumeric;

	var _isArray = __webpack_require__(10);

	function isNumeric(val) {
	    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
	    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
	    // subtraction forces infinities to NaN
	    // adding 1 corrects loss of precision from parseFloat (#15100)
	    return !(0, _isArray.isArray)(val) && val - parseFloat(val) + 1 >= 0;
	}
	;
	//# sourceMappingURL=isNumeric.js.map

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.async = undefined;

	var _AsyncAction = __webpack_require__(77);

	var _AsyncScheduler = __webpack_require__(79);

	var async = exports.async = new _AsyncScheduler.AsyncScheduler(_AsyncAction.AsyncAction);
	//# sourceMappingURL=async.js.map

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AsyncAction = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _root = __webpack_require__(5);

	var _Action2 = __webpack_require__(78);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsyncAction = exports.AsyncAction = function (_Action) {
	    _inherits(AsyncAction, _Action);

	    function AsyncAction(scheduler, work) {
	        _classCallCheck(this, AsyncAction);

	        var _this = _possibleConstructorReturn(this, (AsyncAction.__proto__ || Object.getPrototypeOf(AsyncAction)).call(this, scheduler, work));

	        _this.scheduler = scheduler;
	        _this.work = work;
	        _this.pending = false;
	        return _this;
	    }

	    _createClass(AsyncAction, [{
	        key: 'schedule',
	        value: function schedule(state) {
	            var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	            if (this.closed) {
	                return this;
	            }
	            // Always replace the current state with the new state.
	            this.state = state;
	            // Set the pending flag indicating that this action has been scheduled, or
	            // has recursively rescheduled itself.
	            this.pending = true;
	            var id = this.id;
	            var scheduler = this.scheduler;
	            //
	            // Important implementation note:
	            //
	            // Actions only execute once by default, unless rescheduled from within the
	            // scheduled callback. This allows us to implement single and repeat
	            // actions via the same code path, without adding API surface area, as well
	            // as mimic traditional recursion but across asynchronous boundaries.
	            //
	            // However, JS runtimes and timers distinguish between intervals achieved by
	            // serial `setTimeout` calls vs. a single `setInterval` call. An interval of
	            // serial `setTimeout` calls can be individually delayed, which delays
	            // scheduling the next `setTimeout`, and so on. `setInterval` attempts to
	            // guarantee the interval callback will be invoked more precisely to the
	            // interval period, regardless of load.
	            //
	            // Therefore, we use `setInterval` to schedule single and repeat actions.
	            // If the action reschedules itself with the same delay, the interval is not
	            // canceled. If the action doesn't reschedule, or reschedules with a
	            // different delay, the interval will be canceled after scheduled callback
	            // execution.
	            //
	            if (id != null) {
	                this.id = this.recycleAsyncId(scheduler, id, delay);
	            }
	            this.delay = delay;
	            // If this action has already an async Id, don't request a new one.
	            this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
	            return this;
	        }
	    }, {
	        key: 'requestAsyncId',
	        value: function requestAsyncId(scheduler, id) {
	            var delay = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	            return _root.root.setInterval(scheduler.flush.bind(scheduler, this), delay);
	        }
	    }, {
	        key: 'recycleAsyncId',
	        value: function recycleAsyncId(scheduler, id) {
	            var delay = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	            // If this action is rescheduled with the same delay time, don't clear the interval id.
	            if (delay !== null && this.delay === delay) {
	                return id;
	            }
	            // Otherwise, if the action's delay time is different from the current delay,
	            // clear the interval id
	            return _root.root.clearInterval(id) && undefined || undefined;
	        }
	        /**
	         * Immediately executes this action and the `work` it contains.
	         * @return {any}
	         */

	    }, {
	        key: 'execute',
	        value: function execute(state, delay) {
	            if (this.closed) {
	                return new Error('executing a cancelled action');
	            }
	            this.pending = false;
	            var error = this._execute(state, delay);
	            if (error) {
	                return error;
	            } else if (this.pending === false && this.id != null) {
	                // Dequeue if the action didn't reschedule itself. Don't call
	                // unsubscribe(), because the action could reschedule later.
	                // For example:
	                // ```
	                // scheduler.schedule(function doWork(counter) {
	                //   /* ... I'm a busy worker bee ... */
	                //   var originalAction = this;
	                //   /* wait 100ms before rescheduling the action */
	                //   setTimeout(function () {
	                //     originalAction.schedule(counter + 1);
	                //   }, 100);
	                // }, 1000);
	                // ```
	                this.id = this.recycleAsyncId(this.scheduler, this.id, null);
	            }
	        }
	    }, {
	        key: '_execute',
	        value: function _execute(state, delay) {
	            var errored = false;
	            var errorValue = undefined;
	            try {
	                this.work(state);
	            } catch (e) {
	                errored = true;
	                errorValue = !!e && e || new Error(e);
	            }
	            if (errored) {
	                this.unsubscribe();
	                return errorValue;
	            }
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var id = this.id;
	            var scheduler = this.scheduler;
	            var actions = scheduler.actions;
	            var index = actions.indexOf(this);
	            this.work = null;
	            this.delay = null;
	            this.state = null;
	            this.pending = false;
	            this.scheduler = null;
	            if (index !== -1) {
	                actions.splice(index, 1);
	            }
	            if (id != null) {
	                this.id = this.recycleAsyncId(scheduler, id, null);
	            }
	        }
	    }]);

	    return AsyncAction;
	}(_Action2.Action);
	//# sourceMappingURL=AsyncAction.js.map

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Action = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Subscription2 = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * A unit of work to be executed in a {@link Scheduler}. An action is typically
	 * created from within a Scheduler and an RxJS user does not need to concern
	 * themselves about creating and manipulating an Action.
	 *
	 * ```ts
	 * class Action<T> extends Subscription {
	 *   new (scheduler: Scheduler, work: (state?: T) => void);
	 *   schedule(state?: T, delay: number = 0): Subscription;
	 * }
	 * ```
	 *
	 * @class Action<T>
	 */
	var Action = exports.Action = function (_Subscription) {
	    _inherits(Action, _Subscription);

	    function Action(scheduler, work) {
	        _classCallCheck(this, Action);

	        return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this));
	    }
	    /**
	     * Schedules this action on its parent Scheduler for execution. May be passed
	     * some context object, `state`. May happen at some point in the future,
	     * according to the `delay` parameter, if specified.
	     * @param {T} [state] Some contextual data that the `work` function uses when
	     * called by the Scheduler.
	     * @param {number} [delay] Time to wait before executing the work, where the
	     * time unit is implicit and defined by the Scheduler.
	     * @return {void}
	     */


	    _createClass(Action, [{
	        key: 'schedule',
	        value: function schedule(state) {
	            var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	            return this;
	        }
	    }]);

	    return Action;
	}(_Subscription2.Subscription);
	//# sourceMappingURL=Action.js.map

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AsyncScheduler = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Scheduler2 = __webpack_require__(80);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AsyncScheduler = exports.AsyncScheduler = function (_Scheduler) {
	    _inherits(AsyncScheduler, _Scheduler);

	    function AsyncScheduler() {
	        var _ref;

	        _classCallCheck(this, AsyncScheduler);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        var _this = _possibleConstructorReturn(this, (_ref = AsyncScheduler.__proto__ || Object.getPrototypeOf(AsyncScheduler)).call.apply(_ref, [this].concat(args)));

	        _this.actions = [];
	        /**
	         * A flag to indicate whether the Scheduler is currently executing a batch of
	         * queued actions.
	         * @type {boolean}
	         */
	        _this.active = false;
	        /**
	         * An internal ID used to track the latest asynchronous task such as those
	         * coming from `setTimeout`, `setInterval`, `requestAnimationFrame`, and
	         * others.
	         * @type {any}
	         */
	        _this.scheduled = undefined;
	        return _this;
	    }

	    _createClass(AsyncScheduler, [{
	        key: 'flush',
	        value: function flush(action) {
	            var actions = this.actions;

	            if (this.active) {
	                actions.push(action);
	                return;
	            }
	            var error = void 0;
	            this.active = true;
	            do {
	                if (error = action.execute(action.state, action.delay)) {
	                    break;
	                }
	            } while (action = actions.shift()); // exhaust the scheduler queue
	            this.active = false;
	            if (error) {
	                while (action = actions.shift()) {
	                    action.unsubscribe();
	                }
	                throw error;
	            }
	        }
	    }]);

	    return AsyncScheduler;
	}(_Scheduler2.Scheduler);
	//# sourceMappingURL=AsyncScheduler.js.map

/***/ },
/* 80 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * An execution context and a data structure to order tasks and schedule their
	 * execution. Provides a notion of (potentially virtual) time, through the
	 * `now()` getter method.
	 *
	 * Each unit of work in a Scheduler is called an {@link Action}.
	 *
	 * ```ts
	 * class Scheduler {
	 *   now(): number;
	 *   schedule(work, delay?, state?): Subscription;
	 * }
	 * ```
	 *
	 * @class Scheduler
	 */
	var Scheduler = exports.Scheduler = function () {
	    function Scheduler(SchedulerAction) {
	        var now = arguments.length <= 1 || arguments[1] === undefined ? Scheduler.now : arguments[1];

	        _classCallCheck(this, Scheduler);

	        this.SchedulerAction = SchedulerAction;
	        this.now = now;
	    }
	    /**
	     * Schedules a function, `work`, for execution. May happen at some point in
	     * the future, according to the `delay` parameter, if specified. May be passed
	     * some context object, `state`, which will be passed to the `work` function.
	     *
	     * The given arguments will be processed an stored as an Action object in a
	     * queue of actions.
	     *
	     * @param {function(state: ?T): ?Subscription} work A function representing a
	     * task, or some unit of work to be executed by the Scheduler.
	     * @param {number} [delay] Time to wait before executing the work, where the
	     * time unit is implicit and defined by the Scheduler itself.
	     * @param {T} [state] Some contextual data that the `work` function uses when
	     * called by the Scheduler.
	     * @return {Subscription} A subscription in order to be able to unsubscribe
	     * the scheduled work.
	     */


	    _createClass(Scheduler, [{
	        key: "schedule",
	        value: function schedule(work) {
	            var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var state = arguments[2];

	            return new this.SchedulerAction(this, work).schedule(state, delay);
	        }
	    }]);

	    return Scheduler;
	}();

	Scheduler.now = Date.now ? Date.now : function () {
	    return +new Date();
	};
	//# sourceMappingURL=Scheduler.js.map

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _merge = __webpack_require__(82);

	_Observable.Observable.merge = _merge.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.merge = undefined;

	var _merge = __webpack_require__(83);

	var merge = exports.merge = _merge.mergeStatic;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.merge = merge;
	exports.mergeStatic = mergeStatic;

	var _ArrayObservable = __webpack_require__(30);

	var _mergeAll = __webpack_require__(42);

	var _isScheduler = __webpack_require__(29);

	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (either the source or an
	 * Observable given as argument), and simply forwards (without doing any
	 * transformation) all the values from all the input Observables to the output
	 * Observable. The output Observable only completes once all input Observables
	 * have completed. Any error delivered by an input Observable will be immediately
	 * emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = clicks.merge(timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = timer1.merge(timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} other An input Observable to merge with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @method merge
	 * @owner Observable
	 */
	function merge() {
	    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
	        observables[_key] = arguments[_key];
	    }

	    observables.unshift(this);
	    return mergeStatic.apply(this, observables);
	}
	/* tslint:enable:max-line-length */
	/**
	 * Creates an output Observable which concurrently emits all values from every
	 * given input Observable.
	 *
	 * <span class="informal">Flattens multiple Observables together by blending
	 * their values into one Observable.</span>
	 *
	 * <img src="./img/merge.png" width="100%">
	 *
	 * `merge` subscribes to each given input Observable (as arguments), and simply
	 * forwards (without doing any transformation) all the values from all the input
	 * Observables to the output Observable. The output Observable only completes
	 * once all input Observables have completed. Any error delivered by an input
	 * Observable will be immediately emitted on the output Observable.
	 *
	 * @example <caption>Merge together two Observables: 1s interval and clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var clicksOrTimer = Rx.Observable.merge(clicks, timer);
	 * clicksOrTimer.subscribe(x => console.log(x));
	 *
	 * @example <caption>Merge together 3 Observables, but only 2 run concurrently</caption>
	 * var timer1 = Rx.Observable.interval(1000).take(10);
	 * var timer2 = Rx.Observable.interval(2000).take(6);
	 * var timer3 = Rx.Observable.interval(500).take(10);
	 * var concurrent = 2; // the argument
	 * var merged = Rx.Observable.merge(timer1, timer2, timer3, concurrent);
	 * merged.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 *
	 * @param {Observable} input1 An input Observable to merge with others.
	 * @param {Observable} input2 An input Observable to merge with others.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for managing
	 * concurrency of input Observables.
	 * @return {Observable} an Observable that emits items that are the result of
	 * every input Observable.
	 * @static true
	 * @name merge
	 * @owner Observable
	 */
	function mergeStatic() {
	    var concurrent = Number.POSITIVE_INFINITY;
	    var scheduler = null;

	    for (var _len2 = arguments.length, observables = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        observables[_key2] = arguments[_key2];
	    }

	    var last = observables[observables.length - 1];
	    if ((0, _isScheduler.isScheduler)(last)) {
	        scheduler = observables.pop();
	        if (observables.length > 1 && typeof observables[observables.length - 1] === 'number') {
	            concurrent = observables.pop();
	        }
	    } else if (typeof last === 'number') {
	        concurrent = observables.pop();
	    }
	    if (observables.length === 1) {
	        return observables[0];
	    }
	    return new _ArrayObservable.ArrayObservable(observables, scheduler).lift(new _mergeAll.MergeAllOperator(concurrent));
	}
	//# sourceMappingURL=merge.js.map

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _race = __webpack_require__(85);

	_Observable.Observable.race = _race.raceStatic;
	//# sourceMappingURL=race.js.map

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RaceSubscriber = exports.RaceOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.race = race;
	exports.raceStatic = raceStatic;

	var _isArray = __webpack_require__(10);

	var _ArrayObservable = __webpack_require__(30);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that mirrors the first source Observable to emit an item
	 * from the combination of this Observable and supplied Observables
	 * @param {...Observables} ...observables sources used to race for which Observable emits first.
	 * @return {Observable} an Observable that mirrors the output of the first Observable to emit an item.
	 * @method race
	 * @owner Observable
	 */
	function race() {
	    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
	        observables[_key] = arguments[_key];
	    }

	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1 && (0, _isArray.isArray)(observables[0])) {
	        observables = observables[0];
	    }
	    observables.unshift(this);
	    return raceStatic.apply(this, observables);
	}
	function raceStatic() {
	    for (var _len2 = arguments.length, observables = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        observables[_key2] = arguments[_key2];
	    }

	    // if the only argument is an array, it was most likely called with
	    // `pair([obs1, obs2, ...])`
	    if (observables.length === 1) {
	        if ((0, _isArray.isArray)(observables[0])) {
	            observables = observables[0];
	        } else {
	            return observables[0];
	        }
	    }
	    return new _ArrayObservable.ArrayObservable(observables).lift(new RaceOperator());
	}

	var RaceOperator = exports.RaceOperator = function () {
	    function RaceOperator() {
	        _classCallCheck(this, RaceOperator);
	    }

	    _createClass(RaceOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new RaceSubscriber(subscriber));
	        }
	    }]);

	    return RaceOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var RaceSubscriber = exports.RaceSubscriber = function (_OuterSubscriber) {
	    _inherits(RaceSubscriber, _OuterSubscriber);

	    function RaceSubscriber(destination) {
	        _classCallCheck(this, RaceSubscriber);

	        var _this = _possibleConstructorReturn(this, (RaceSubscriber.__proto__ || Object.getPrototypeOf(RaceSubscriber)).call(this, destination));

	        _this.hasFirst = false;
	        _this.observables = [];
	        _this.subscriptions = [];
	        return _this;
	    }

	    _createClass(RaceSubscriber, [{
	        key: '_next',
	        value: function _next(observable) {
	            this.observables.push(observable);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var observables = this.observables;
	            var len = observables.length;
	            if (len === 0) {
	                this.destination.complete();
	            } else {
	                for (var i = 0; i < len; i++) {
	                    var observable = observables[i];
	                    var subscription = (0, _subscribeToResult.subscribeToResult)(this, observable, observable, i);
	                    if (this.subscriptions) {
	                        this.subscriptions.push(subscription);
	                        this.add(subscription);
	                    }
	                }
	                this.observables = null;
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            if (!this.hasFirst) {
	                this.hasFirst = true;
	                for (var i = 0; i < this.subscriptions.length; i++) {
	                    if (i !== outerIndex) {
	                        var subscription = this.subscriptions[i];
	                        subscription.unsubscribe();
	                        this.remove(subscription);
	                    }
	                }
	                this.subscriptions = null;
	            }
	            this.destination.next(innerValue);
	        }
	    }]);

	    return RaceSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=race.js.map

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _never = __webpack_require__(87);

	_Observable.Observable.never = _never.never;
	//# sourceMappingURL=never.js.map

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.never = undefined;

	var _NeverObservable = __webpack_require__(88);

	var never = exports.never = _NeverObservable.NeverObservable.create;
	//# sourceMappingURL=never.js.map

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.NeverObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _noop = __webpack_require__(89);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var NeverObservable = exports.NeverObservable = function (_Observable) {
	    _inherits(NeverObservable, _Observable);

	    function NeverObservable() {
	        _classCallCheck(this, NeverObservable);

	        return _possibleConstructorReturn(this, (NeverObservable.__proto__ || Object.getPrototypeOf(NeverObservable)).call(this));
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer.
	     *
	     * <span class="informal">An Observable that never emits anything.</span>
	     *
	     * <img src="./img/never.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that emits
	     * neither values nor errors nor the completion notification. It can be used
	     * for testing purposes or for composing with other Observables. Please not
	     * that by never emitting a complete notification, this Observable keeps the
	     * subscription from being disposed automatically. Subscriptions need to be
	     * manually disposed.
	     *
	     * @example <caption>Emit the number 7, then never emit anything else (not even complete).</caption>
	     * function info() {
	     *   console.log('Will not be called');
	     * }
	     * var result = Rx.Observable.never().startWith(7);
	     * result.subscribe(x => console.log(x), info, info);
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link of}
	     * @see {@link throw}
	     *
	     * @return {Observable} A "never" Observable: never emits anything.
	     * @static true
	     * @name never
	     * @owner Observable
	     */


	    _createClass(NeverObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            (0, _noop.noop)();
	        }
	    }], [{
	        key: 'create',
	        value: function create() {
	            return new NeverObservable();
	        }
	    }]);

	    return NeverObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=NeverObservable.js.map

/***/ },
/* 89 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.noop = noop;
	/* tslint:disable:no-empty */
	function noop() {}
	//# sourceMappingURL=noop.js.map

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _of = __webpack_require__(91);

	_Observable.Observable.of = _of.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.of = undefined;

	var _ArrayObservable = __webpack_require__(30);

	var of = exports.of = _ArrayObservable.ArrayObservable.of;
	//# sourceMappingURL=of.js.map

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _onErrorResumeNext = __webpack_require__(93);

	_Observable.Observable.onErrorResumeNext = _onErrorResumeNext.onErrorResumeNextStatic;
	//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.onErrorResumeNext = onErrorResumeNext;
	exports.onErrorResumeNextStatic = onErrorResumeNextStatic;

	var _FromObservable = __webpack_require__(53);

	var _isArray = __webpack_require__(10);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function onErrorResumeNext() {
	    for (var _len = arguments.length, nextSources = Array(_len), _key = 0; _key < _len; _key++) {
	        nextSources[_key] = arguments[_key];
	    }

	    if (nextSources.length === 1 && (0, _isArray.isArray)(nextSources[0])) {
	        nextSources = nextSources[0];
	    }
	    return this.lift(new OnErrorResumeNextOperator(nextSources));
	}
	/* tslint:enable:max-line-length */
	function onErrorResumeNextStatic() {
	    for (var _len2 = arguments.length, nextSources = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        nextSources[_key2] = arguments[_key2];
	    }

	    var source = null;
	    if (nextSources.length === 1 && (0, _isArray.isArray)(nextSources[0])) {
	        nextSources = nextSources[0];
	    }
	    source = nextSources.shift();
	    return new _FromObservable.FromObservable(source, null).lift(new OnErrorResumeNextOperator(nextSources));
	}

	var OnErrorResumeNextOperator = function () {
	    function OnErrorResumeNextOperator(nextSources) {
	        _classCallCheck(this, OnErrorResumeNextOperator);

	        this.nextSources = nextSources;
	    }

	    _createClass(OnErrorResumeNextOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new OnErrorResumeNextSubscriber(subscriber, this.nextSources));
	        }
	    }]);

	    return OnErrorResumeNextOperator;
	}();

	var OnErrorResumeNextSubscriber = function (_OuterSubscriber) {
	    _inherits(OnErrorResumeNextSubscriber, _OuterSubscriber);

	    function OnErrorResumeNextSubscriber(destination, nextSources) {
	        _classCallCheck(this, OnErrorResumeNextSubscriber);

	        var _this = _possibleConstructorReturn(this, (OnErrorResumeNextSubscriber.__proto__ || Object.getPrototypeOf(OnErrorResumeNextSubscriber)).call(this, destination));

	        _this.destination = destination;
	        _this.nextSources = nextSources;
	        return _this;
	    }

	    _createClass(OnErrorResumeNextSubscriber, [{
	        key: 'notifyError',
	        value: function notifyError(error, innerSub) {
	            this.subscribeToNextSource();
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            this.subscribeToNextSource();
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.subscribeToNextSource();
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.subscribeToNextSource();
	        }
	    }, {
	        key: 'subscribeToNextSource',
	        value: function subscribeToNextSource() {
	            var next = this.nextSources.shift();
	            if (next) {
	                this.add((0, _subscribeToResult.subscribeToResult)(this, next));
	            } else {
	                this.destination.complete();
	            }
	        }
	    }]);

	    return OnErrorResumeNextSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _pairs = __webpack_require__(95);

	_Observable.Observable.pairs = _pairs.pairs;
	//# sourceMappingURL=pairs.js.map

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pairs = undefined;

	var _PairsObservable = __webpack_require__(96);

	var pairs = exports.pairs = _PairsObservable.PairsObservable.create;
	//# sourceMappingURL=pairs.js.map

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.PairsObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function dispatch(state) {
	    var obj = state.obj;
	    var keys = state.keys;
	    var length = state.length;
	    var index = state.index;
	    var subscriber = state.subscriber;

	    if (index === length) {
	        subscriber.complete();
	        return;
	    }
	    var key = keys[index];
	    subscriber.next([key, obj[key]]);
	    state.index = index + 1;
	    this.schedule(state);
	}
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */

	var PairsObservable = exports.PairsObservable = function (_Observable) {
	    _inherits(PairsObservable, _Observable);

	    function PairsObservable(obj, scheduler) {
	        _classCallCheck(this, PairsObservable);

	        var _this = _possibleConstructorReturn(this, (PairsObservable.__proto__ || Object.getPrototypeOf(PairsObservable)).call(this));

	        _this.obj = obj;
	        _this.scheduler = scheduler;
	        _this.keys = Object.keys(obj);
	        return _this;
	    }
	    /**
	     * Convert an object into an observable sequence of [key, value] pairs
	     * using an optional Scheduler to enumerate the object.
	     *
	     * @example <caption>Converts a javascript object to an Observable</caption>
	     * var obj = {
	     *   foo: 42,
	     *   bar: 56,
	     *   baz: 78
	     * };
	     *
	     * var source = Rx.Observable.pairs(obj);
	     *
	     * var subscription = source.subscribe(
	     *   function (x) {
	     *     console.log('Next: %s', x);
	     *   },
	     *   function (err) {
	     *     console.log('Error: %s', err);
	     *   },
	     *   function () {
	     *     console.log('Completed');
	     *   });
	     *
	     * @param {Object} obj The object to inspect and turn into an
	     * Observable sequence.
	     * @param {Scheduler} [scheduler] An optional Scheduler to run the
	     * enumeration of the input sequence on.
	     * @returns {(Observable<Array<string | T>>)} An observable sequence of
	     * [key, value] pairs from the object.
	     */


	    _createClass(PairsObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var keys = this.keys;
	            var scheduler = this.scheduler;

	            var length = keys.length;
	            if (scheduler) {
	                return scheduler.schedule(dispatch, 0, {
	                    obj: this.obj, keys: keys, length: length, index: 0, subscriber: subscriber
	                });
	            } else {
	                for (var idx = 0; idx < length; idx++) {
	                    var key = keys[idx];
	                    subscriber.next([key, this.obj[key]]);
	                }
	                subscriber.complete();
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(obj, scheduler) {
	            return new PairsObservable(obj, scheduler);
	        }
	    }]);

	    return PairsObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=PairsObservable.js.map

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _range = __webpack_require__(98);

	_Observable.Observable.range = _range.range;
	//# sourceMappingURL=range.js.map

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.range = undefined;

	var _RangeObservable = __webpack_require__(99);

	var range = exports.range = _RangeObservable.RangeObservable.create;
	//# sourceMappingURL=range.js.map

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.RangeObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var RangeObservable = exports.RangeObservable = function (_Observable) {
	    _inherits(RangeObservable, _Observable);

	    function RangeObservable(start, count, scheduler) {
	        _classCallCheck(this, RangeObservable);

	        var _this = _possibleConstructorReturn(this, (RangeObservable.__proto__ || Object.getPrototypeOf(RangeObservable)).call(this));

	        _this.start = start;
	        _this._count = count;
	        _this.scheduler = scheduler;
	        return _this;
	    }
	    /**
	     * Creates an Observable that emits a sequence of numbers within a specified
	     * range.
	     *
	     * <span class="informal">Emits a sequence of numbers in a range.</span>
	     *
	     * <img src="./img/range.png" width="100%">
	     *
	     * `range` operator emits a range of sequential integers, in order, where you
	     * select the `start` of the range and its `length`. By default, uses no
	     * Scheduler and just delivers the notifications synchronously, but may use
	     * an optional Scheduler to regulate those deliveries.
	     *
	     * @example <caption>Emits the numbers 1 to 10</caption>
	     * var numbers = Rx.Observable.range(1, 10);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link timer}
	     * @see {@link interval}
	     *
	     * @param {number} [start=0] The value of the first integer in the sequence.
	     * @param {number} [count=0] The number of sequential integers to generate.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emissions of the notifications.
	     * @return {Observable} An Observable of numbers that emits a finite range of
	     * sequential integers.
	     * @static true
	     * @name range
	     * @owner Observable
	     */


	    _createClass(RangeObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var index = 0;
	            var start = this.start;
	            var count = this._count;
	            var scheduler = this.scheduler;
	            if (scheduler) {
	                return scheduler.schedule(RangeObservable.dispatch, 0, {
	                    index: index, count: count, start: start, subscriber: subscriber
	                });
	            } else {
	                do {
	                    if (index++ >= count) {
	                        subscriber.complete();
	                        break;
	                    }
	                    subscriber.next(start++);
	                    if (subscriber.closed) {
	                        break;
	                    }
	                } while (true);
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create() {
	            var start = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	            var count = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var scheduler = arguments[2];

	            return new RangeObservable(start, count, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var start = state.start;
	            var index = state.index;
	            var count = state.count;
	            var subscriber = state.subscriber;

	            if (index >= count) {
	                subscriber.complete();
	                return;
	            }
	            subscriber.next(start);
	            if (subscriber.closed) {
	                return;
	            }
	            state.index = index + 1;
	            state.start = start + 1;
	            this.schedule(state);
	        }
	    }]);

	    return RangeObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=RangeObservable.js.map

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _using = __webpack_require__(101);

	_Observable.Observable.using = _using.using;
	//# sourceMappingURL=using.js.map

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.using = undefined;

	var _UsingObservable = __webpack_require__(102);

	var using = exports.using = _UsingObservable.UsingObservable.create;
	//# sourceMappingURL=using.js.map

/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.UsingObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _subscribeToResult = __webpack_require__(35);

	var _OuterSubscriber2 = __webpack_require__(34);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var UsingObservable = exports.UsingObservable = function (_Observable) {
	    _inherits(UsingObservable, _Observable);

	    function UsingObservable(resourceFactory, observableFactory) {
	        _classCallCheck(this, UsingObservable);

	        var _this = _possibleConstructorReturn(this, (UsingObservable.__proto__ || Object.getPrototypeOf(UsingObservable)).call(this));

	        _this.resourceFactory = resourceFactory;
	        _this.observableFactory = observableFactory;
	        return _this;
	    }

	    _createClass(UsingObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var resourceFactory = this.resourceFactory;
	            var observableFactory = this.observableFactory;

	            var resource = void 0;
	            try {
	                resource = resourceFactory();
	                return new UsingSubscriber(subscriber, resource, observableFactory);
	            } catch (err) {
	                subscriber.error(err);
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(resourceFactory, observableFactory) {
	            return new UsingObservable(resourceFactory, observableFactory);
	        }
	    }]);

	    return UsingObservable;
	}(_Observable2.Observable);

	var UsingSubscriber = function (_OuterSubscriber) {
	    _inherits(UsingSubscriber, _OuterSubscriber);

	    function UsingSubscriber(destination, resource, observableFactory) {
	        _classCallCheck(this, UsingSubscriber);

	        var _this2 = _possibleConstructorReturn(this, (UsingSubscriber.__proto__ || Object.getPrototypeOf(UsingSubscriber)).call(this, destination));

	        _this2.resource = resource;
	        _this2.observableFactory = observableFactory;
	        destination.add(resource);
	        _this2.tryUse();
	        return _this2;
	    }

	    _createClass(UsingSubscriber, [{
	        key: 'tryUse',
	        value: function tryUse() {
	            try {
	                var source = this.observableFactory.call(this, this.resource);
	                if (source) {
	                    this.add((0, _subscribeToResult.subscribeToResult)(this, source));
	                }
	            } catch (err) {
	                this._error(err);
	            }
	        }
	    }]);

	    return UsingSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=UsingObservable.js.map

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _throw2 = __webpack_require__(104);

	_Observable.Observable.throw = _throw2._throw;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports._throw = undefined;

	var _ErrorObservable = __webpack_require__(105);

	var _throw = exports._throw = _ErrorObservable.ErrorObservable.create;
	//# sourceMappingURL=throw.js.map

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ErrorObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var ErrorObservable = exports.ErrorObservable = function (_Observable) {
	    _inherits(ErrorObservable, _Observable);

	    function ErrorObservable(error, scheduler) {
	        _classCallCheck(this, ErrorObservable);

	        var _this = _possibleConstructorReturn(this, (ErrorObservable.__proto__ || Object.getPrototypeOf(ErrorObservable)).call(this));

	        _this.error = error;
	        _this.scheduler = scheduler;
	        return _this;
	    }
	    /**
	     * Creates an Observable that emits no items to the Observer and immediately
	     * emits an error notification.
	     *
	     * <span class="informal">Just emits 'error', and nothing else.
	     * </span>
	     *
	     * <img src="./img/throw.png" width="100%">
	     *
	     * This static operator is useful for creating a simple Observable that only
	     * emits the error notification. It can be used for composing with other
	     * Observables, such as in a {@link mergeMap}.
	     *
	     * @example <caption>Emit the number 7, then emit an error.</caption>
	     * var result = Rx.Observable.throw(new Error('oops!')).startWith(7);
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @example <caption>Map and flattens numbers to the sequence 'a', 'b', 'c', but throw an error for 13</caption>
	     * var interval = Rx.Observable.interval(1000);
	     * var result = interval.mergeMap(x =>
	     *   x === 13 ?
	     *     Rx.Observable.throw('Thirteens are bad') :
	     *     Rx.Observable.of('a', 'b', 'c')
	     * );
	     * result.subscribe(x => console.log(x), e => console.error(e));
	     *
	     * @see {@link create}
	     * @see {@link empty}
	     * @see {@link never}
	     * @see {@link of}
	     *
	     * @param {any} error The particular Error to pass to the error notification.
	     * @param {Scheduler} [scheduler] A {@link Scheduler} to use for scheduling
	     * the emission of the error notification.
	     * @return {Observable} An error Observable: emits only the error notification
	     * using the given error argument.
	     * @static true
	     * @name throw
	     * @owner Observable
	     */


	    _createClass(ErrorObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var error = this.error;
	            var scheduler = this.scheduler;
	            if (scheduler) {
	                return scheduler.schedule(ErrorObservable.dispatch, 0, {
	                    error: error, subscriber: subscriber
	                });
	            } else {
	                subscriber.error(error);
	            }
	        }
	    }], [{
	        key: 'create',
	        value: function create(error, scheduler) {
	            return new ErrorObservable(error, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(arg) {
	            var error = arg.error;
	            var subscriber = arg.subscriber;

	            subscriber.error(error);
	        }
	    }]);

	    return ErrorObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=ErrorObservable.js.map

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _timer = __webpack_require__(107);

	_Observable.Observable.timer = _timer.timer;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.timer = undefined;

	var _TimerObservable = __webpack_require__(108);

	var timer = exports.timer = _TimerObservable.TimerObservable.create;
	//# sourceMappingURL=timer.js.map

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TimerObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isNumeric = __webpack_require__(75);

	var _Observable2 = __webpack_require__(4);

	var _async = __webpack_require__(76);

	var _isScheduler = __webpack_require__(29);

	var _isDate = __webpack_require__(109);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var TimerObservable = exports.TimerObservable = function (_Observable) {
	    _inherits(TimerObservable, _Observable);

	    function TimerObservable() {
	        var dueTime = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	        var period = arguments[1];
	        var scheduler = arguments[2];

	        _classCallCheck(this, TimerObservable);

	        var _this = _possibleConstructorReturn(this, (TimerObservable.__proto__ || Object.getPrototypeOf(TimerObservable)).call(this));

	        _this.period = -1;
	        _this.dueTime = 0;
	        if ((0, _isNumeric.isNumeric)(period)) {
	            _this.period = Number(period) < 1 && 1 || Number(period);
	        } else if ((0, _isScheduler.isScheduler)(period)) {
	            scheduler = period;
	        }
	        if (!(0, _isScheduler.isScheduler)(scheduler)) {
	            scheduler = _async.async;
	        }
	        _this.scheduler = scheduler;
	        _this.dueTime = (0, _isDate.isDate)(dueTime) ? +dueTime - _this.scheduler.now() : dueTime;
	        return _this;
	    }
	    /**
	     * Creates an Observable that starts emitting after an `initialDelay` and
	     * emits ever increasing numbers after each `period` of time thereafter.
	     *
	     * <span class="informal">Its like {@link interval}, but you can specify when
	     * should the emissions start.</span>
	     *
	     * <img src="./img/timer.png" width="100%">
	     *
	     * `timer` returns an Observable that emits an infinite sequence of ascending
	     * integers, with a constant interval of time, `period` of your choosing
	     * between those emissions. The first emission happens after the specified
	     * `initialDelay`. The initial delay may be a {@link Date}. By default, this
	     * operator uses the `async` Scheduler to provide a notion of time, but you
	     * may pass any Scheduler to it. If `period` is not specified, the output
	     * Observable emits only one value, `0`. Otherwise, it emits an infinite
	     * sequence.
	     *
	     * @example <caption>Emits ascending numbers, one every second (1000ms), starting after 3 seconds</caption>
	     * var numbers = Rx.Observable.timer(3000, 1000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @example <caption>Emits one number after five seconds</caption>
	     * var numbers = Rx.Observable.timer(5000);
	     * numbers.subscribe(x => console.log(x));
	     *
	     * @see {@link interval}
	     * @see {@link delay}
	     *
	     * @param {number|Date} initialDelay The initial delay time to wait before
	     * emitting the first value of `0`.
	     * @param {number} [period] The period of time between emissions of the
	     * subsequent numbers.
	     * @param {Scheduler} [scheduler=async] The Scheduler to use for scheduling
	     * the emission of values, and providing a notion of "time".
	     * @return {Observable} An Observable that emits a `0` after the
	     * `initialDelay` and ever increasing numbers after each `period` of time
	     * thereafter.
	     * @static true
	     * @name timer
	     * @owner Observable
	     */


	    _createClass(TimerObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var index = 0;
	            var period = this.period;
	            var dueTime = this.dueTime;
	            var scheduler = this.scheduler;

	            return scheduler.schedule(TimerObservable.dispatch, dueTime, {
	                index: index, period: period, subscriber: subscriber
	            });
	        }
	    }], [{
	        key: 'create',
	        value: function create() {
	            var initialDelay = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
	            var period = arguments[1];
	            var scheduler = arguments[2];

	            return new TimerObservable(initialDelay, period, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var index = state.index;
	            var period = state.period;
	            var subscriber = state.subscriber;

	            var action = this;
	            subscriber.next(index);
	            if (subscriber.closed) {
	                return;
	            } else if (period === -1) {
	                return subscriber.complete();
	            }
	            state.index = index + 1;
	            action.schedule(state, period);
	        }
	    }]);

	    return TimerObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=TimerObservable.js.map

/***/ },
/* 109 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.isDate = isDate;
	function isDate(value) {
	    return value instanceof Date && !isNaN(+value);
	}
	//# sourceMappingURL=isDate.js.map

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _zip = __webpack_require__(111);

	_Observable.Observable.zip = _zip.zip;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.zip = undefined;

	var _zip = __webpack_require__(112);

	var zip = exports.zip = _zip.zipStatic;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ZipSubscriber = exports.ZipOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.zipProto = zipProto;
	exports.zipStatic = zipStatic;

	var _ArrayObservable = __webpack_require__(30);

	var _isArray = __webpack_require__(10);

	var _Subscriber2 = __webpack_require__(7);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	var _iterator2 = __webpack_require__(37);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @param observables
	 * @return {Observable<R>}
	 * @method zip
	 * @owner Observable
	 */
	function zipProto() {
	    for (var _len = arguments.length, observables = Array(_len), _key = 0; _key < _len; _key++) {
	        observables[_key] = arguments[_key];
	    }

	    observables.unshift(this);
	    return zipStatic.apply(this, observables);
	}
	/* tslint:enable:max-line-length */
	/**
	 * @param observables
	 * @return {Observable<R>}
	 * @static true
	 * @name zip
	 * @owner Observable
	 */
	function zipStatic() {
	    for (var _len2 = arguments.length, observables = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	        observables[_key2] = arguments[_key2];
	    }

	    var project = observables[observables.length - 1];
	    if (typeof project === 'function') {
	        observables.pop();
	    }
	    return new _ArrayObservable.ArrayObservable(observables).lift(new ZipOperator(project));
	}

	var ZipOperator = exports.ZipOperator = function () {
	    function ZipOperator(project) {
	        _classCallCheck(this, ZipOperator);

	        this.project = project;
	    }

	    _createClass(ZipOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new ZipSubscriber(subscriber, this.project));
	        }
	    }]);

	    return ZipOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ZipSubscriber = exports.ZipSubscriber = function (_Subscriber) {
	    _inherits(ZipSubscriber, _Subscriber);

	    function ZipSubscriber(destination, project) {
	        var values = arguments.length <= 2 || arguments[2] === undefined ? Object.create(null) : arguments[2];

	        _classCallCheck(this, ZipSubscriber);

	        var _this = _possibleConstructorReturn(this, (ZipSubscriber.__proto__ || Object.getPrototypeOf(ZipSubscriber)).call(this, destination));

	        _this.index = 0;
	        _this.iterators = [];
	        _this.active = 0;
	        _this.project = typeof project === 'function' ? project : null;
	        _this.values = values;
	        return _this;
	    }

	    _createClass(ZipSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var iterators = this.iterators;
	            var index = this.index++;
	            if ((0, _isArray.isArray)(value)) {
	                iterators.push(new StaticArrayIterator(value));
	            } else if (typeof value[_iterator2.$$iterator] === 'function') {
	                iterators.push(new StaticIterator(value[_iterator2.$$iterator]()));
	            } else {
	                iterators.push(new ZipBufferIterator(this.destination, this, value, index));
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var iterators = this.iterators;
	            var len = iterators.length;
	            this.active = len;
	            for (var i = 0; i < len; i++) {
	                var iterator = iterators[i];
	                if (iterator.stillUnsubscribed) {
	                    this.add(iterator.subscribe(iterator, i));
	                } else {
	                    this.active--; // not an observable
	                }
	            }
	        }
	    }, {
	        key: 'notifyInactive',
	        value: function notifyInactive() {
	            this.active--;
	            if (this.active === 0) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'checkIterators',
	        value: function checkIterators() {
	            var iterators = this.iterators;
	            var len = iterators.length;
	            var destination = this.destination;
	            // abort if not all of them have values
	            for (var i = 0; i < len; i++) {
	                var iterator = iterators[i];
	                if (typeof iterator.hasValue === 'function' && !iterator.hasValue()) {
	                    return;
	                }
	            }
	            var shouldComplete = false;
	            var args = [];
	            for (var _i = 0; _i < len; _i++) {
	                var _iterator = iterators[_i];
	                var result = _iterator.next();
	                // check to see if it's completed now that you've gotten
	                // the next value.
	                if (_iterator.hasCompleted()) {
	                    shouldComplete = true;
	                }
	                if (result.done) {
	                    destination.complete();
	                    return;
	                }
	                args.push(result.value);
	            }
	            if (this.project) {
	                this._tryProject(args);
	            } else {
	                destination.next(args);
	            }
	            if (shouldComplete) {
	                destination.complete();
	            }
	        }
	    }, {
	        key: '_tryProject',
	        value: function _tryProject(args) {
	            var result = void 0;
	            try {
	                result = this.project.apply(this, args);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.destination.next(result);
	        }
	    }]);

	    return ZipSubscriber;
	}(_Subscriber2.Subscriber);

	var StaticIterator = function () {
	    function StaticIterator(iterator) {
	        _classCallCheck(this, StaticIterator);

	        this.iterator = iterator;
	        this.nextResult = iterator.next();
	    }

	    _createClass(StaticIterator, [{
	        key: 'hasValue',
	        value: function hasValue() {
	            return true;
	        }
	    }, {
	        key: 'next',
	        value: function next() {
	            var result = this.nextResult;
	            this.nextResult = this.iterator.next();
	            return result;
	        }
	    }, {
	        key: 'hasCompleted',
	        value: function hasCompleted() {
	            var nextResult = this.nextResult;
	            return nextResult && nextResult.done;
	        }
	    }]);

	    return StaticIterator;
	}();

	var StaticArrayIterator = function () {
	    function StaticArrayIterator(array) {
	        _classCallCheck(this, StaticArrayIterator);

	        this.array = array;
	        this.index = 0;
	        this.length = 0;
	        this.length = array.length;
	    }

	    _createClass(StaticArrayIterator, [{
	        key: _iterator2.$$iterator,
	        value: function value() {
	            return this;
	        }
	    }, {
	        key: 'next',
	        value: function next(value) {
	            var i = this.index++;
	            var array = this.array;
	            return i < this.length ? { value: array[i], done: false } : { value: null, done: true };
	        }
	    }, {
	        key: 'hasValue',
	        value: function hasValue() {
	            return this.array.length > this.index;
	        }
	    }, {
	        key: 'hasCompleted',
	        value: function hasCompleted() {
	            return this.array.length === this.index;
	        }
	    }]);

	    return StaticArrayIterator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ZipBufferIterator = function (_OuterSubscriber) {
	    _inherits(ZipBufferIterator, _OuterSubscriber);

	    function ZipBufferIterator(destination, parent, observable, index) {
	        _classCallCheck(this, ZipBufferIterator);

	        var _this2 = _possibleConstructorReturn(this, (ZipBufferIterator.__proto__ || Object.getPrototypeOf(ZipBufferIterator)).call(this, destination));

	        _this2.parent = parent;
	        _this2.observable = observable;
	        _this2.index = index;
	        _this2.stillUnsubscribed = true;
	        _this2.buffer = [];
	        _this2.isComplete = false;
	        return _this2;
	    }

	    _createClass(ZipBufferIterator, [{
	        key: _iterator2.$$iterator,
	        value: function value() {
	            return this;
	        }
	        // NOTE: there is actually a name collision here with Subscriber.next and Iterator.next
	        //    this is legit because `next()` will never be called by a subscription in this case.

	    }, {
	        key: 'next',
	        value: function next() {
	            var buffer = this.buffer;
	            if (buffer.length === 0 && this.isComplete) {
	                return { value: null, done: true };
	            } else {
	                return { value: buffer.shift(), done: false };
	            }
	        }
	    }, {
	        key: 'hasValue',
	        value: function hasValue() {
	            return this.buffer.length > 0;
	        }
	    }, {
	        key: 'hasCompleted',
	        value: function hasCompleted() {
	            return this.buffer.length === 0 && this.isComplete;
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            if (this.buffer.length > 0) {
	                this.isComplete = true;
	                this.parent.notifyInactive();
	            } else {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.buffer.push(innerValue);
	            this.parent.checkIterators();
	        }
	    }, {
	        key: 'subscribe',
	        value: function subscribe(value, index) {
	            return (0, _subscribeToResult.subscribeToResult)(this, this.observable, this, index);
	        }
	    }]);

	    return ZipBufferIterator;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=zip.js.map

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _buffer = __webpack_require__(114);

	_Observable.Observable.prototype.buffer = _buffer.buffer;
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.buffer = buffer;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Buffers the source Observable values until `closingNotifier` emits.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * that array only when another Observable emits.</span>
	 *
	 * <img src="./img/buffer.png" width="100%">
	 *
	 * Buffers the incoming Observable values until the given `closingNotifier`
	 * Observable emits a value, at which point it emits the buffer on the output
	 * Observable and starts a new buffer internally, awaiting the next time
	 * `closingNotifier` emits.
	 *
	 * @example <caption>On every click, emit array of most recent interval events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var interval = Rx.Observable.interval(1000);
	 * var buffered = interval.buffer(clicks);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link window}
	 *
	 * @param {Observable<any>} closingNotifier An Observable that signals the
	 * buffer to be emitted on the output Observable.
	 * @return {Observable<T[]>} An Observable of buffers, which are arrays of
	 * values.
	 * @method buffer
	 * @owner Observable
	 */
	function buffer(closingNotifier) {
	    return this.lift(new BufferOperator(closingNotifier));
	}

	var BufferOperator = function () {
	    function BufferOperator(closingNotifier) {
	        _classCallCheck(this, BufferOperator);

	        this.closingNotifier = closingNotifier;
	    }

	    _createClass(BufferOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new BufferSubscriber(subscriber, this.closingNotifier));
	        }
	    }]);

	    return BufferOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var BufferSubscriber = function (_OuterSubscriber) {
	    _inherits(BufferSubscriber, _OuterSubscriber);

	    function BufferSubscriber(destination, closingNotifier) {
	        _classCallCheck(this, BufferSubscriber);

	        var _this = _possibleConstructorReturn(this, (BufferSubscriber.__proto__ || Object.getPrototypeOf(BufferSubscriber)).call(this, destination));

	        _this.buffer = [];
	        _this.add((0, _subscribeToResult.subscribeToResult)(_this, closingNotifier));
	        return _this;
	    }

	    _createClass(BufferSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.buffer.push(value);
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            var buffer = this.buffer;
	            this.buffer = [];
	            this.destination.next(buffer);
	        }
	    }]);

	    return BufferSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=buffer.js.map

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _bufferCount = __webpack_require__(116);

	_Observable.Observable.prototype.bufferCount = _bufferCount.bufferCount;
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.bufferCount = bufferCount;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Buffers the source Observable values until the size hits the maximum
	 * `bufferSize` given.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * that array only when its size reaches `bufferSize`.</span>
	 *
	 * <img src="./img/bufferCount.png" width="100%">
	 *
	 * Buffers a number of values from the source Observable by `bufferSize` then
	 * emits the buffer and clears it, and starts a new buffer each
	 * `startBufferEvery` values. If `startBufferEvery` is not provided or is
	 * `null`, then new buffers are started immediately at the start of the source
	 * and when each buffer closes and is emitted.
	 *
	 * @example <caption>Emit the last two click events as an array</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferCount(2);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @example <caption>On every click, emit the last two click events as an array</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferCount(2, 1);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link pairwise}
	 * @see {@link windowCount}
	 *
	 * @param {number} bufferSize The maximum size of the buffer emitted.
	 * @param {number} [startBufferEvery] Interval at which to start a new buffer.
	 * For example if `startBufferEvery` is `2`, then a new buffer will be started
	 * on every other value from the source. A new buffer is started at the
	 * beginning of the source by default.
	 * @return {Observable<T[]>} An Observable of arrays of buffered values.
	 * @method bufferCount
	 * @owner Observable
	 */
	function bufferCount(bufferSize) {
	    var startBufferEvery = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

	    return this.lift(new BufferCountOperator(bufferSize, startBufferEvery));
	}

	var BufferCountOperator = function () {
	    function BufferCountOperator(bufferSize, startBufferEvery) {
	        _classCallCheck(this, BufferCountOperator);

	        this.bufferSize = bufferSize;
	        this.startBufferEvery = startBufferEvery;
	    }

	    _createClass(BufferCountOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new BufferCountSubscriber(subscriber, this.bufferSize, this.startBufferEvery));
	        }
	    }]);

	    return BufferCountOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var BufferCountSubscriber = function (_Subscriber) {
	    _inherits(BufferCountSubscriber, _Subscriber);

	    function BufferCountSubscriber(destination, bufferSize, startBufferEvery) {
	        _classCallCheck(this, BufferCountSubscriber);

	        var _this = _possibleConstructorReturn(this, (BufferCountSubscriber.__proto__ || Object.getPrototypeOf(BufferCountSubscriber)).call(this, destination));

	        _this.bufferSize = bufferSize;
	        _this.startBufferEvery = startBufferEvery;
	        _this.buffers = [[]];
	        _this.count = 0;
	        return _this;
	    }

	    _createClass(BufferCountSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var count = this.count += 1;
	            var destination = this.destination;
	            var bufferSize = this.bufferSize;
	            var startBufferEvery = this.startBufferEvery == null ? bufferSize : this.startBufferEvery;
	            var buffers = this.buffers;
	            var len = buffers.length;
	            var remove = -1;
	            if (count % startBufferEvery === 0) {
	                buffers.push([]);
	            }
	            for (var i = 0; i < len; i++) {
	                var buffer = buffers[i];
	                buffer.push(value);
	                if (buffer.length === bufferSize) {
	                    remove = i;
	                    destination.next(buffer);
	                }
	            }
	            if (remove !== -1) {
	                buffers.splice(remove, 1);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var destination = this.destination;
	            var buffers = this.buffers;
	            while (buffers.length > 0) {
	                var buffer = buffers.shift();
	                if (buffer.length > 0) {
	                    destination.next(buffer);
	                }
	            }
	            _get(BufferCountSubscriber.prototype.__proto__ || Object.getPrototypeOf(BufferCountSubscriber.prototype), '_complete', this).call(this);
	        }
	    }]);

	    return BufferCountSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=bufferCount.js.map

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _bufferTime = __webpack_require__(118);

	_Observable.Observable.prototype.bufferTime = _bufferTime.bufferTime;
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.bufferTime = bufferTime;

	var _async = __webpack_require__(76);

	var _Subscriber2 = __webpack_require__(7);

	var _isScheduler = __webpack_require__(29);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Buffers the source Observable values for a specific time period.
	 *
	 * <span class="informal">Collects values from the past as an array, and emits
	 * those arrays periodically in time.</span>
	 *
	 * <img src="./img/bufferTime.png" width="100%">
	 *
	 * Buffers values from the source for a specific time duration `bufferTimeSpan`.
	 * Unless the optional argument `bufferCreationInterval` is given, it emits and
	 * resets the buffer every `bufferTimeSpan` milliseconds. If
	 * `bufferCreationInterval` is given, this operator opens the buffer every
	 * `bufferCreationInterval` milliseconds and closes (emits and resets) the
	 * buffer every `bufferTimeSpan` milliseconds. When the optional argument
	 * `maxBufferSize` is specified, the buffer will be closed either after
	 * `bufferTimeSpan` milliseconds or when it contains `maxBufferSize` elements.
	 *
	 * @example <caption>Every second, emit an array of the recent click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferTime(1000);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @example <caption>Every 5 seconds, emit the click events from the next 2 seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferTime(2000, 5000);
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferToggle}
	 * @see {@link bufferWhen}
	 * @see {@link windowTime}
	 *
	 * @param {number} bufferTimeSpan The amount of time to fill each buffer array.
	 * @param {number} [bufferCreationInterval] The interval at which to start new
	 * buffers.
	 * @param {number} [maxBufferSize] The maximum buffer size.
	 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
	 * intervals that determine buffer boundaries.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferTime
	 * @owner Observable
	 */
	function bufferTime(bufferTimeSpan) {
	    var length = arguments.length;
	    var scheduler = _async.async;
	    if ((0, _isScheduler.isScheduler)(arguments[arguments.length - 1])) {
	        scheduler = arguments[arguments.length - 1];
	        length--;
	    }
	    var bufferCreationInterval = null;
	    if (length >= 2) {
	        bufferCreationInterval = arguments[1];
	    }
	    var maxBufferSize = Number.POSITIVE_INFINITY;
	    if (length >= 3) {
	        maxBufferSize = arguments[2];
	    }
	    return this.lift(new BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler));
	}

	var BufferTimeOperator = function () {
	    function BufferTimeOperator(bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
	        _classCallCheck(this, BufferTimeOperator);

	        this.bufferTimeSpan = bufferTimeSpan;
	        this.bufferCreationInterval = bufferCreationInterval;
	        this.maxBufferSize = maxBufferSize;
	        this.scheduler = scheduler;
	    }

	    _createClass(BufferTimeOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new BufferTimeSubscriber(subscriber, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
	        }
	    }]);

	    return BufferTimeOperator;
	}();

	var Context = function Context() {
	    _classCallCheck(this, Context);

	    this.buffer = [];
	};
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var BufferTimeSubscriber = function (_Subscriber) {
	    _inherits(BufferTimeSubscriber, _Subscriber);

	    function BufferTimeSubscriber(destination, bufferTimeSpan, bufferCreationInterval, maxBufferSize, scheduler) {
	        _classCallCheck(this, BufferTimeSubscriber);

	        var _this = _possibleConstructorReturn(this, (BufferTimeSubscriber.__proto__ || Object.getPrototypeOf(BufferTimeSubscriber)).call(this, destination));

	        _this.bufferTimeSpan = bufferTimeSpan;
	        _this.bufferCreationInterval = bufferCreationInterval;
	        _this.maxBufferSize = maxBufferSize;
	        _this.scheduler = scheduler;
	        _this.contexts = [];
	        var context = _this.openContext();
	        _this.timespanOnly = bufferCreationInterval == null || bufferCreationInterval < 0;
	        if (_this.timespanOnly) {
	            var timeSpanOnlyState = { subscriber: _this, context: context, bufferTimeSpan: bufferTimeSpan };
	            _this.add(context.closeAction = scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
	        } else {
	            var closeState = { subscriber: _this, context: context };
	            var creationState = { bufferTimeSpan: bufferTimeSpan, bufferCreationInterval: bufferCreationInterval, subscriber: _this, scheduler: scheduler };
	            _this.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, closeState));
	            _this.add(scheduler.schedule(dispatchBufferCreation, bufferCreationInterval, creationState));
	        }
	        return _this;
	    }

	    _createClass(BufferTimeSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var contexts = this.contexts;
	            var len = contexts.length;
	            var filledBufferContext = void 0;
	            for (var i = 0; i < len; i++) {
	                var context = contexts[i];
	                var buffer = context.buffer;
	                buffer.push(value);
	                if (buffer.length == this.maxBufferSize) {
	                    filledBufferContext = context;
	                }
	            }
	            if (filledBufferContext) {
	                this.onBufferFull(filledBufferContext);
	            }
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.contexts.length = 0;
	            _get(BufferTimeSubscriber.prototype.__proto__ || Object.getPrototypeOf(BufferTimeSubscriber.prototype), '_error', this).call(this, err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var contexts = this.contexts;
	            var destination = this.destination;

	            while (contexts.length > 0) {
	                var context = contexts.shift();
	                destination.next(context.buffer);
	            }
	            _get(BufferTimeSubscriber.prototype.__proto__ || Object.getPrototypeOf(BufferTimeSubscriber.prototype), '_complete', this).call(this);
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            this.contexts = null;
	        }
	    }, {
	        key: 'onBufferFull',
	        value: function onBufferFull(context) {
	            this.closeContext(context);
	            var closeAction = context.closeAction;
	            closeAction.unsubscribe();
	            this.remove(closeAction);
	            if (this.timespanOnly) {
	                context = this.openContext();
	                var bufferTimeSpan = this.bufferTimeSpan;
	                var timeSpanOnlyState = { subscriber: this, context: context, bufferTimeSpan: bufferTimeSpan };
	                this.add(context.closeAction = this.scheduler.schedule(dispatchBufferTimeSpanOnly, bufferTimeSpan, timeSpanOnlyState));
	            }
	        }
	    }, {
	        key: 'openContext',
	        value: function openContext() {
	            var context = new Context();
	            this.contexts.push(context);
	            return context;
	        }
	    }, {
	        key: 'closeContext',
	        value: function closeContext(context) {
	            this.destination.next(context.buffer);
	            var contexts = this.contexts;
	            var spliceIndex = contexts ? contexts.indexOf(context) : -1;
	            if (spliceIndex >= 0) {
	                contexts.splice(contexts.indexOf(context), 1);
	            }
	        }
	    }]);

	    return BufferTimeSubscriber;
	}(_Subscriber2.Subscriber);

	function dispatchBufferTimeSpanOnly(state) {
	    var subscriber = state.subscriber;
	    var prevContext = state.context;
	    if (prevContext) {
	        subscriber.closeContext(prevContext);
	    }
	    if (!subscriber.closed) {
	        state.context = subscriber.openContext();
	        state.context.closeAction = this.schedule(state, state.bufferTimeSpan);
	    }
	}
	function dispatchBufferCreation(state) {
	    var bufferCreationInterval = state.bufferCreationInterval;
	    var bufferTimeSpan = state.bufferTimeSpan;
	    var subscriber = state.subscriber;
	    var scheduler = state.scheduler;

	    var context = subscriber.openContext();
	    var action = this;
	    if (!subscriber.closed) {
	        subscriber.add(context.closeAction = scheduler.schedule(dispatchBufferClose, bufferTimeSpan, { subscriber: subscriber, context: context }));
	        action.schedule(state, bufferCreationInterval);
	    }
	}
	function dispatchBufferClose(arg) {
	    var subscriber = arg.subscriber;
	    var context = arg.context;

	    subscriber.closeContext(context);
	}
	//# sourceMappingURL=bufferTime.js.map

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _bufferToggle = __webpack_require__(120);

	_Observable.Observable.prototype.bufferToggle = _bufferToggle.bufferToggle;
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.bufferToggle = bufferToggle;

	var _Subscription = __webpack_require__(9);

	var _subscribeToResult = __webpack_require__(35);

	var _OuterSubscriber2 = __webpack_require__(34);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Buffers the source Observable values starting from an emission from
	 * `openings` and ending when the output of `closingSelector` emits.
	 *
	 * <span class="informal">Collects values from the past as an array. Starts
	 * collecting only when `opening` emits, and calls the `closingSelector`
	 * function to get an Observable that tells when to close the buffer.</span>
	 *
	 * <img src="./img/bufferToggle.png" width="100%">
	 *
	 * Buffers values from the source by opening the buffer via signals from an
	 * Observable provided to `openings`, and closing and sending the buffers when
	 * a Subscribable or Promise returned by the `closingSelector` function emits.
	 *
	 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var openings = Rx.Observable.interval(1000);
	 * var buffered = clicks.bufferToggle(openings, i =>
	 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
	 * );
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferWhen}
	 * @see {@link windowToggle}
	 *
	 * @param {SubscribableOrPromise<O>} openings A Subscribable or Promise of notifications to start new
	 * buffers.
	 * @param {function(value: O): SubscribableOrPromise} closingSelector A function that takes
	 * the value emitted by the `openings` observable and returns a Subscribable or Promise,
	 * which, when it emits, signals that the associated buffer should be emitted
	 * and cleared.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferToggle
	 * @owner Observable
	 */
	function bufferToggle(openings, closingSelector) {
	    return this.lift(new BufferToggleOperator(openings, closingSelector));
	}

	var BufferToggleOperator = function () {
	    function BufferToggleOperator(openings, closingSelector) {
	        _classCallCheck(this, BufferToggleOperator);

	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }

	    _createClass(BufferToggleOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new BufferToggleSubscriber(subscriber, this.openings, this.closingSelector));
	        }
	    }]);

	    return BufferToggleOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var BufferToggleSubscriber = function (_OuterSubscriber) {
	    _inherits(BufferToggleSubscriber, _OuterSubscriber);

	    function BufferToggleSubscriber(destination, openings, closingSelector) {
	        _classCallCheck(this, BufferToggleSubscriber);

	        var _this = _possibleConstructorReturn(this, (BufferToggleSubscriber.__proto__ || Object.getPrototypeOf(BufferToggleSubscriber)).call(this, destination));

	        _this.openings = openings;
	        _this.closingSelector = closingSelector;
	        _this.contexts = [];
	        _this.add((0, _subscribeToResult.subscribeToResult)(_this, openings));
	        return _this;
	    }

	    _createClass(BufferToggleSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var contexts = this.contexts;
	            var len = contexts.length;
	            for (var i = 0; i < len; i++) {
	                contexts[i].buffer.push(value);
	            }
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            var contexts = this.contexts;
	            while (contexts.length > 0) {
	                var context = contexts.shift();
	                context.subscription.unsubscribe();
	                context.buffer = null;
	                context.subscription = null;
	            }
	            this.contexts = null;
	            _get(BufferToggleSubscriber.prototype.__proto__ || Object.getPrototypeOf(BufferToggleSubscriber.prototype), '_error', this).call(this, err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var contexts = this.contexts;
	            while (contexts.length > 0) {
	                var context = contexts.shift();
	                this.destination.next(context.buffer);
	                context.subscription.unsubscribe();
	                context.buffer = null;
	                context.subscription = null;
	            }
	            this.contexts = null;
	            _get(BufferToggleSubscriber.prototype.__proto__ || Object.getPrototypeOf(BufferToggleSubscriber.prototype), '_complete', this).call(this);
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            outerValue ? this.closeBuffer(outerValue) : this.openBuffer(innerValue);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            this.closeBuffer(innerSub.context);
	        }
	    }, {
	        key: 'openBuffer',
	        value: function openBuffer(value) {
	            try {
	                var closingSelector = this.closingSelector;
	                var closingNotifier = closingSelector.call(this, value);
	                if (closingNotifier) {
	                    this.trySubscribe(closingNotifier);
	                }
	            } catch (err) {
	                this._error(err);
	            }
	        }
	    }, {
	        key: 'closeBuffer',
	        value: function closeBuffer(context) {
	            var contexts = this.contexts;
	            if (contexts && context) {
	                var buffer = context.buffer;
	                var subscription = context.subscription;

	                this.destination.next(buffer);
	                contexts.splice(contexts.indexOf(context), 1);
	                this.remove(subscription);
	                subscription.unsubscribe();
	            }
	        }
	    }, {
	        key: 'trySubscribe',
	        value: function trySubscribe(closingNotifier) {
	            var contexts = this.contexts;
	            var buffer = [];
	            var subscription = new _Subscription.Subscription();
	            var context = { buffer: buffer, subscription: subscription };
	            contexts.push(context);
	            var innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, closingNotifier, context);
	            if (!innerSubscription || innerSubscription.closed) {
	                this.closeBuffer(context);
	            } else {
	                innerSubscription.context = context;
	                this.add(innerSubscription);
	                subscription.add(innerSubscription);
	            }
	        }
	    }]);

	    return BufferToggleSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=bufferToggle.js.map

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _bufferWhen = __webpack_require__(122);

	_Observable.Observable.prototype.bufferWhen = _bufferWhen.bufferWhen;
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.bufferWhen = bufferWhen;

	var _Subscription = __webpack_require__(9);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Buffers the source Observable values, using a factory function of closing
	 * Observables to determine when to close, emit, and reset the buffer.
	 *
	 * <span class="informal">Collects values from the past as an array. When it
	 * starts collecting values, it calls a function that returns an Observable that
	 * tells when to close the buffer and restart collecting.</span>
	 *
	 * <img src="./img/bufferWhen.png" width="100%">
	 *
	 * Opens a buffer immediately, then closes the buffer when the observable
	 * returned by calling `closingSelector` function emits a value. When it closes
	 * the buffer, it immediately opens a new buffer and repeats the process.
	 *
	 * @example <caption>Emit an array of the last clicks every [1-5] random seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var buffered = clicks.bufferWhen(() =>
	 *   Rx.Observable.interval(1000 + Math.random() * 4000)
	 * );
	 * buffered.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 * @see {@link bufferTime}
	 * @see {@link bufferToggle}
	 * @see {@link windowWhen}
	 *
	 * @param {function(): Observable} closingSelector A function that takes no
	 * arguments and returns an Observable that signals buffer closure.
	 * @return {Observable<T[]>} An observable of arrays of buffered values.
	 * @method bufferWhen
	 * @owner Observable
	 */
	function bufferWhen(closingSelector) {
	    return this.lift(new BufferWhenOperator(closingSelector));
	}

	var BufferWhenOperator = function () {
	    function BufferWhenOperator(closingSelector) {
	        _classCallCheck(this, BufferWhenOperator);

	        this.closingSelector = closingSelector;
	    }

	    _createClass(BufferWhenOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new BufferWhenSubscriber(subscriber, this.closingSelector));
	        }
	    }]);

	    return BufferWhenOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var BufferWhenSubscriber = function (_OuterSubscriber) {
	    _inherits(BufferWhenSubscriber, _OuterSubscriber);

	    function BufferWhenSubscriber(destination, closingSelector) {
	        _classCallCheck(this, BufferWhenSubscriber);

	        var _this = _possibleConstructorReturn(this, (BufferWhenSubscriber.__proto__ || Object.getPrototypeOf(BufferWhenSubscriber)).call(this, destination));

	        _this.closingSelector = closingSelector;
	        _this.subscribing = false;
	        _this.openBuffer();
	        return _this;
	    }

	    _createClass(BufferWhenSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.buffer.push(value);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var buffer = this.buffer;
	            if (buffer) {
	                this.destination.next(buffer);
	            }
	            _get(BufferWhenSubscriber.prototype.__proto__ || Object.getPrototypeOf(BufferWhenSubscriber.prototype), '_complete', this).call(this);
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            this.buffer = null;
	            this.subscribing = false;
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.openBuffer();
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            if (this.subscribing) {
	                this.complete();
	            } else {
	                this.openBuffer();
	            }
	        }
	    }, {
	        key: 'openBuffer',
	        value: function openBuffer() {
	            var closingSubscription = this.closingSubscription;

	            if (closingSubscription) {
	                this.remove(closingSubscription);
	                closingSubscription.unsubscribe();
	            }
	            var buffer = this.buffer;
	            if (this.buffer) {
	                this.destination.next(buffer);
	            }
	            this.buffer = [];
	            var closingNotifier = (0, _tryCatch.tryCatch)(this.closingSelector)();
	            if (closingNotifier === _errorObject.errorObject) {
	                this.error(_errorObject.errorObject.e);
	            } else {
	                closingSubscription = new _Subscription.Subscription();
	                this.closingSubscription = closingSubscription;
	                this.add(closingSubscription);
	                this.subscribing = true;
	                closingSubscription.add((0, _subscribeToResult.subscribeToResult)(this, closingNotifier));
	                this.subscribing = false;
	            }
	        }
	    }]);

	    return BufferWhenSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=bufferWhen.js.map

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _cache = __webpack_require__(124);

	_Observable.Observable.prototype.cache = _cache.cache;
	//# sourceMappingURL=cache.js.map

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.cache = cache;

	var _Observable = __webpack_require__(4);

	var _ReplaySubject = __webpack_require__(125);

	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {Observable<any>}
	 * @method cache
	 * @owner Observable
	 */
	function cache() {
	    var bufferSize = arguments.length <= 0 || arguments[0] === undefined ? Number.POSITIVE_INFINITY : arguments[0];
	    var windowTime = arguments.length <= 1 || arguments[1] === undefined ? Number.POSITIVE_INFINITY : arguments[1];
	    var scheduler = arguments[2];

	    var subject = void 0;
	    var source = this;
	    var refs = 0;
	    var outerSub = void 0;
	    var getSubject = function getSubject() {
	        subject = new _ReplaySubject.ReplaySubject(bufferSize, windowTime, scheduler);
	        return subject;
	    };
	    return new _Observable.Observable(function (observer) {
	        if (!subject) {
	            subject = getSubject();
	            outerSub = source.subscribe(function (value) {
	                return subject.next(value);
	            }, function (err) {
	                var s = subject;
	                subject = null;
	                s.error(err);
	            }, function () {
	                return subject.complete();
	            });
	        }
	        refs++;
	        if (!subject) {
	            subject = getSubject();
	        }
	        var innerSub = subject.subscribe(observer);
	        return function () {
	            refs--;
	            if (innerSub) {
	                innerSub.unsubscribe();
	            }
	            if (refs === 0) {
	                outerSub.unsubscribe();
	            }
	        };
	    });
	}
	//# sourceMappingURL=cache.js.map

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ReplaySubject = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Subject2 = __webpack_require__(3);

	var _queue = __webpack_require__(126);

	var _observeOn = __webpack_require__(57);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class ReplaySubject<T>
	 */
	var ReplaySubject = exports.ReplaySubject = function (_Subject) {
	    _inherits(ReplaySubject, _Subject);

	    function ReplaySubject() {
	        var bufferSize = arguments.length <= 0 || arguments[0] === undefined ? Number.POSITIVE_INFINITY : arguments[0];
	        var windowTime = arguments.length <= 1 || arguments[1] === undefined ? Number.POSITIVE_INFINITY : arguments[1];
	        var scheduler = arguments[2];

	        _classCallCheck(this, ReplaySubject);

	        var _this = _possibleConstructorReturn(this, (ReplaySubject.__proto__ || Object.getPrototypeOf(ReplaySubject)).call(this));

	        _this.scheduler = scheduler;
	        _this._events = [];
	        _this._bufferSize = bufferSize < 1 ? 1 : bufferSize;
	        _this._windowTime = windowTime < 1 ? 1 : windowTime;
	        return _this;
	    }

	    _createClass(ReplaySubject, [{
	        key: 'next',
	        value: function next(value) {
	            var now = this._getNow();
	            this._events.push(new ReplayEvent(now, value));
	            this._trimBufferThenGetEvents();
	            _get(ReplaySubject.prototype.__proto__ || Object.getPrototypeOf(ReplaySubject.prototype), 'next', this).call(this, value);
	        }
	    }, {
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var _events = this._trimBufferThenGetEvents();
	            var scheduler = this.scheduler;
	            if (scheduler) {
	                subscriber.add(subscriber = new _observeOn.ObserveOnSubscriber(subscriber, scheduler));
	            }
	            var len = _events.length;
	            for (var i = 0; i < len && !subscriber.closed; i++) {
	                subscriber.next(_events[i].value);
	            }
	            return _get(ReplaySubject.prototype.__proto__ || Object.getPrototypeOf(ReplaySubject.prototype), '_subscribe', this).call(this, subscriber);
	        }
	    }, {
	        key: '_getNow',
	        value: function _getNow() {
	            return (this.scheduler || _queue.queue).now();
	        }
	    }, {
	        key: '_trimBufferThenGetEvents',
	        value: function _trimBufferThenGetEvents() {
	            var now = this._getNow();
	            var _bufferSize = this._bufferSize;
	            var _windowTime = this._windowTime;
	            var _events = this._events;
	            var eventsCount = _events.length;
	            var spliceCount = 0;
	            // Trim events that fall out of the time window.
	            // Start at the front of the list. Break early once
	            // we encounter an event that falls within the window.
	            while (spliceCount < eventsCount) {
	                if (now - _events[spliceCount].time < _windowTime) {
	                    break;
	                }
	                spliceCount++;
	            }
	            if (eventsCount > _bufferSize) {
	                spliceCount = Math.max(spliceCount, eventsCount - _bufferSize);
	            }
	            if (spliceCount > 0) {
	                _events.splice(0, spliceCount);
	            }
	            return _events;
	        }
	    }]);

	    return ReplaySubject;
	}(_Subject2.Subject);

	var ReplayEvent = function ReplayEvent(time, value) {
	    _classCallCheck(this, ReplayEvent);

	    this.time = time;
	    this.value = value;
	};
	//# sourceMappingURL=ReplaySubject.js.map

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.queue = undefined;

	var _QueueAction = __webpack_require__(127);

	var _QueueScheduler = __webpack_require__(128);

	var queue = exports.queue = new _QueueScheduler.QueueScheduler(_QueueAction.QueueAction);
	//# sourceMappingURL=queue.js.map

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.QueueAction = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _AsyncAction2 = __webpack_require__(77);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var QueueAction = exports.QueueAction = function (_AsyncAction) {
	    _inherits(QueueAction, _AsyncAction);

	    function QueueAction(scheduler, work) {
	        _classCallCheck(this, QueueAction);

	        var _this = _possibleConstructorReturn(this, (QueueAction.__proto__ || Object.getPrototypeOf(QueueAction)).call(this, scheduler, work));

	        _this.scheduler = scheduler;
	        _this.work = work;
	        return _this;
	    }

	    _createClass(QueueAction, [{
	        key: 'schedule',
	        value: function schedule(state) {
	            var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	            if (delay > 0) {
	                return _get(QueueAction.prototype.__proto__ || Object.getPrototypeOf(QueueAction.prototype), 'schedule', this).call(this, state, delay);
	            }
	            this.delay = delay;
	            this.state = state;
	            this.scheduler.flush(this);
	            return this;
	        }
	    }, {
	        key: 'execute',
	        value: function execute(state, delay) {
	            return delay > 0 || this.closed ? _get(QueueAction.prototype.__proto__ || Object.getPrototypeOf(QueueAction.prototype), 'execute', this).call(this, state, delay) : this._execute(state, delay);
	        }
	    }, {
	        key: 'requestAsyncId',
	        value: function requestAsyncId(scheduler, id) {
	            var delay = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	            // If delay is greater than 0, enqueue as an async action.
	            if (delay !== null && delay > 0) {
	                return _get(QueueAction.prototype.__proto__ || Object.getPrototypeOf(QueueAction.prototype), 'requestAsyncId', this).call(this, scheduler, id, delay);
	            }
	            // Otherwise flush the scheduler starting with this action.
	            return scheduler.flush(this);
	        }
	    }]);

	    return QueueAction;
	}(_AsyncAction2.AsyncAction);
	//# sourceMappingURL=QueueAction.js.map

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.QueueScheduler = undefined;

	var _AsyncScheduler2 = __webpack_require__(79);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var QueueScheduler = exports.QueueScheduler = function (_AsyncScheduler) {
	  _inherits(QueueScheduler, _AsyncScheduler);

	  function QueueScheduler() {
	    _classCallCheck(this, QueueScheduler);

	    return _possibleConstructorReturn(this, (QueueScheduler.__proto__ || Object.getPrototypeOf(QueueScheduler)).apply(this, arguments));
	  }

	  return QueueScheduler;
	}(_AsyncScheduler2.AsyncScheduler);
	//# sourceMappingURL=QueueScheduler.js.map

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _catch2 = __webpack_require__(130);

	_Observable.Observable.prototype.catch = _catch2._catch;
	_Observable.Observable.prototype._catch = _catch2._catch;
	//# sourceMappingURL=catch.js.map

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports._catch = _catch;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Catches errors on the observable to be handled by returning a new observable or throwing an error.
	 * @param {function} selector a function that takes as arguments `err`, which is the error, and `caught`, which
	 *  is the source observable, in case you'd like to "retry" that observable by returning it again. Whatever observable
	 *  is returned by the `selector` will be used to continue the observable chain.
	 * @return {Observable} an observable that originates from either the source or the observable returned by the
	 *  catch `selector` function.
	 * @method catch
	 * @owner Observable
	 */
	function _catch(selector) {
	    var operator = new CatchOperator(selector);
	    var caught = this.lift(operator);
	    return operator.caught = caught;
	}

	var CatchOperator = function () {
	    function CatchOperator(selector) {
	        _classCallCheck(this, CatchOperator);

	        this.selector = selector;
	    }

	    _createClass(CatchOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new CatchSubscriber(subscriber, this.selector, this.caught));
	        }
	    }]);

	    return CatchOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var CatchSubscriber = function (_OuterSubscriber) {
	    _inherits(CatchSubscriber, _OuterSubscriber);

	    function CatchSubscriber(destination, selector, caught) {
	        _classCallCheck(this, CatchSubscriber);

	        var _this = _possibleConstructorReturn(this, (CatchSubscriber.__proto__ || Object.getPrototypeOf(CatchSubscriber)).call(this, destination));

	        _this.selector = selector;
	        _this.caught = caught;
	        return _this;
	    }
	    // NOTE: overriding `error` instead of `_error` because we don't want
	    // to have this flag this subscriber as `isStopped`.


	    _createClass(CatchSubscriber, [{
	        key: 'error',
	        value: function error(err) {
	            if (!this.isStopped) {
	                var result = void 0;
	                try {
	                    result = this.selector(err, this.caught);
	                } catch (err) {
	                    this.destination.error(err);
	                    return;
	                }
	                this.unsubscribe();
	                this.destination.remove(this);
	                (0, _subscribeToResult.subscribeToResult)(this, result);
	            }
	        }
	    }]);

	    return CatchSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=catch.js.map

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _combineAll = __webpack_require__(132);

	_Observable.Observable.prototype.combineAll = _combineAll.combineAll;
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.combineAll = combineAll;

	var _combineLatest = __webpack_require__(33);

	/**
	 * Converts a higher-order Observable into a first-order Observable by waiting
	 * for the outer Observable to complete, then applying {@link combineLatest}.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by applying
	 * {@link combineLatest} when the Observable-of-Observables completes.</span>
	 *
	 * <img src="./img/combineAll.png" width="100%">
	 *
	 * Takes an Observable of Observables, and collects all Observables from it.
	 * Once the outer Observable completes, it subscribes to all collected
	 * Observables and combines their values using the {@link combineLatest}
	 * strategy, such that:
	 * - Every time an inner Observable emits, the output Observable emits.
	 * - When the returned observable emits, it emits all of the latest values by:
	 *   - If a `project` function is provided, it is called with each recent value
	 *     from each inner Observable in whatever order they arrived, and the result
	 *     of the `project` function is what is emitted by the output Observable.
	 *   - If there is no `project` function, an array of all of the most recent
	 *     values is emitted by the output Observable.
	 *
	 * @example <caption>Map two click events to a finite interval Observable, then apply combineAll</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev =>
	 *   Rx.Observable.interval(Math.random()*2000).take(3)
	 * ).take(2);
	 * var result = higherOrder.combineAll();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 * @see {@link mergeAll}
	 *
	 * @param {function} [project] An optional function to map the most recent
	 * values from each inner Observable into a new result. Takes each of the most
	 * recent values from each collected inner Observable as arguments, in order.
	 * @return {Observable} An Observable of projected results or arrays of recent
	 * values.
	 * @method combineAll
	 * @owner Observable
	 */
	function combineAll(project) {
	  return this.lift(new _combineLatest.CombineLatestOperator(project));
	}
	//# sourceMappingURL=combineAll.js.map

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _combineLatest = __webpack_require__(33);

	_Observable.Observable.prototype.combineLatest = _combineLatest.combineLatest;
	//# sourceMappingURL=combineLatest.js.map

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _concat = __webpack_require__(41);

	_Observable.Observable.prototype.concat = _concat.concat;
	//# sourceMappingURL=concat.js.map

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _concatAll = __webpack_require__(136);

	_Observable.Observable.prototype.concatAll = _concatAll.concatAll;
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.concatAll = concatAll;

	var _mergeAll = __webpack_require__(42);

	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * concatenating the inner Observables in order.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by putting one
	 * inner Observable after the other.</span>
	 *
	 * <img src="./img/concatAll.png" width="100%">
	 *
	 * Joins every Observable emitted by the source (a higher-order Observable), in
	 * a serial fashion. It subscribes to each inner Observable only after the
	 * previous inner Observable has completed, and merges all of their values into
	 * the returned observable.
	 *
	 * __Warning:__ If the source Observable emits Observables quickly and
	 * endlessly, and the inner Observables it emits generally complete slower than
	 * the source emits, you can run into memory issues as the incoming Observables
	 * collect in an unbounded buffer.
	 *
	 * Note: `concatAll` is equivalent to `mergeAll` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map(ev => Rx.Observable.interval(1000).take(4));
	 * var firstOrder = higherOrder.concatAll();
	 * firstOrder.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concat}
	 * @see {@link concatMap}
	 * @see {@link concatMapTo}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switch}
	 * @see {@link zipAll}
	 *
	 * @return {Observable} An Observable emitting values from all the inner
	 * Observables concatenated.
	 * @method concatAll
	 * @owner Observable
	 */
	function concatAll() {
	  return this.lift(new _mergeAll.MergeAllOperator(1));
	}
	//# sourceMappingURL=concatAll.js.map

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _concatMap = __webpack_require__(138);

	_Observable.Observable.prototype.concatMap = _concatMap.concatMap;
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.concatMap = concatMap;

	var _mergeMap = __webpack_require__(139);

	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, in a serialized fashion waiting for each one to complete before
	 * merging the next.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link concatAll}.</span>
	 *
	 * <img src="./img/concatMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each new inner Observable is
	 * concatenated with the previous inner Observable.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMap` is equivalent to `mergeMap` with concurrency parameter set
	 * to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMap(ev => Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMapTo}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} an observable of values merged from the projected
	 * Observables as they were subscribed to, one at a time. Optionally, these
	 * values may have been projected from a passed `projectResult` argument.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking values from each projected inner
	 * Observable sequentially.
	 * @method concatMap
	 * @owner Observable
	 */
	function concatMap(project, resultSelector) {
	  return this.lift(new _mergeMap.MergeMapOperator(project, resultSelector, 1));
	}
	//# sourceMappingURL=concatMap.js.map

/***/ },
/* 139 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MergeMapSubscriber = exports.MergeMapOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.mergeMap = mergeMap;

	var _subscribeToResult = __webpack_require__(35);

	var _OuterSubscriber2 = __webpack_require__(34);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link mergeAll}.</span>
	 *
	 * <img src="./img/mergeMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger.
	 *
	 * @example <caption>Map and flatten each letter to an Observable ticking every 1 second</caption>
	 * var letters = Rx.Observable.of('a', 'b', 'c');
	 * var result = letters.mergeMap(x =>
	 *   Rx.Observable.interval(1000).map(i => x+i)
	 * );
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMapTo}
	 * @see {@link mergeScan}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and merging the results of the Observables obtained
	 * from this transformation.
	 * @method mergeMap
	 * @owner Observable
	 */
	function mergeMap(project, resultSelector) {
	    var concurrent = arguments.length <= 2 || arguments[2] === undefined ? Number.POSITIVE_INFINITY : arguments[2];

	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapOperator(project, resultSelector, concurrent));
	}

	var MergeMapOperator = exports.MergeMapOperator = function () {
	    function MergeMapOperator(project, resultSelector) {
	        var concurrent = arguments.length <= 2 || arguments[2] === undefined ? Number.POSITIVE_INFINITY : arguments[2];

	        _classCallCheck(this, MergeMapOperator);

	        this.project = project;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }

	    _createClass(MergeMapOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new MergeMapSubscriber(observer, this.project, this.resultSelector, this.concurrent));
	        }
	    }]);

	    return MergeMapOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var MergeMapSubscriber = exports.MergeMapSubscriber = function (_OuterSubscriber) {
	    _inherits(MergeMapSubscriber, _OuterSubscriber);

	    function MergeMapSubscriber(destination, project, resultSelector) {
	        var concurrent = arguments.length <= 3 || arguments[3] === undefined ? Number.POSITIVE_INFINITY : arguments[3];

	        _classCallCheck(this, MergeMapSubscriber);

	        var _this = _possibleConstructorReturn(this, (MergeMapSubscriber.__proto__ || Object.getPrototypeOf(MergeMapSubscriber)).call(this, destination));

	        _this.project = project;
	        _this.resultSelector = resultSelector;
	        _this.concurrent = concurrent;
	        _this.hasCompleted = false;
	        _this.buffer = [];
	        _this.active = 0;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(MergeMapSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (this.active < this.concurrent) {
	                this._tryNext(value);
	            } else {
	                this.buffer.push(value);
	            }
	        }
	    }, {
	        key: '_tryNext',
	        value: function _tryNext(value) {
	            var result = void 0;
	            var index = this.index++;
	            try {
	                result = this.project(value, index);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.active++;
	            this._innerSub(result, value, index);
	        }
	    }, {
	        key: '_innerSub',
	        value: function _innerSub(ish, value, index) {
	            this.add((0, _subscribeToResult.subscribeToResult)(this, ish, value, index));
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.hasCompleted = true;
	            if (this.active === 0 && this.buffer.length === 0) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            if (this.resultSelector) {
	                this._notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	            } else {
	                this.destination.next(innerValue);
	            }
	        }
	    }, {
	        key: '_notifyResultSelector',
	        value: function _notifyResultSelector(outerValue, innerValue, outerIndex, innerIndex) {
	            var result = void 0;
	            try {
	                result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.destination.next(result);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            var buffer = this.buffer;
	            this.remove(innerSub);
	            this.active--;
	            if (buffer.length > 0) {
	                this._next(buffer.shift());
	            } else if (this.active === 0 && this.hasCompleted) {
	                this.destination.complete();
	            }
	        }
	    }]);

	    return MergeMapSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _concatMapTo = __webpack_require__(141);

	_Observable.Observable.prototype.concatMapTo = _concatMapTo.concatMapTo;
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.concatMapTo = concatMapTo;

	var _mergeMapTo = __webpack_require__(142);

	/**
	 * Projects each source value to the same Observable which is merged multiple
	 * times in a serialized fashion on the output Observable.
	 *
	 * <span class="informal">It's like {@link concatMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/concatMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. Each new `innerObservable`
	 * instance emitted on the output Observable is concatenated with the previous
	 * `innerObservable` instance.
	 *
	 * __Warning:__ if source values arrive endlessly and faster than their
	 * corresponding inner Observables can complete, it will result in memory issues
	 * as inner Observables amass in an unbounded buffer waiting for their turn to
	 * be subscribed to.
	 *
	 * Note: `concatMapTo` is equivalent to `mergeMapTo` with concurrency parameter
	 * set to `1`.
	 *
	 * @example <caption>For each click event, tick every second from 0 to 3, with no concurrency</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.concatMapTo(Rx.Observable.interval(1000).take(4));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concat}
	 * @see {@link concatAll}
	 * @see {@link concatMap}
	 * @see {@link mergeMapTo}
	 * @see {@link switchMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An observable of values merged together by joining the
	 * passed observable with itself, one after the other, for each value emitted
	 * from the source.
	 * @method concatMapTo
	 * @owner Observable
	 */
	function concatMapTo(innerObservable, resultSelector) {
	  return this.lift(new _mergeMapTo.MergeMapToOperator(innerObservable, resultSelector, 1));
	}
	//# sourceMappingURL=concatMapTo.js.map

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MergeMapToSubscriber = exports.MergeMapToOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.mergeMapTo = mergeMapTo;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Projects each source value to the same Observable which is merged multiple
	 * times in the output Observable.
	 *
	 * <span class="informal">It's like {@link mergeMap}, but maps each value always
	 * to the same inner Observable.</span>
	 *
	 * <img src="./img/mergeMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then merges those resulting Observables into one
	 * single Observable, which is the output Observable.
	 *
	 * @example <caption>For each click event, start an interval Observable ticking every 1 second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.mergeMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link merge}
	 * @see {@link mergeAll}
	 * @see {@link mergeMap}
	 * @see {@link mergeScan}
	 * @see {@link switchMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable.
	 * @method mergeMapTo
	 * @owner Observable
	 */
	function mergeMapTo(innerObservable, resultSelector) {
	    var concurrent = arguments.length <= 2 || arguments[2] === undefined ? Number.POSITIVE_INFINITY : arguments[2];

	    if (typeof resultSelector === 'number') {
	        concurrent = resultSelector;
	        resultSelector = null;
	    }
	    return this.lift(new MergeMapToOperator(innerObservable, resultSelector, concurrent));
	}
	// TODO: Figure out correct signature here: an Operator<Observable<T>, R>
	//       needs to implement call(observer: Subscriber<R>): Subscriber<Observable<T>>

	var MergeMapToOperator = exports.MergeMapToOperator = function () {
	    function MergeMapToOperator(ish, resultSelector) {
	        var concurrent = arguments.length <= 2 || arguments[2] === undefined ? Number.POSITIVE_INFINITY : arguments[2];

	        _classCallCheck(this, MergeMapToOperator);

	        this.ish = ish;
	        this.resultSelector = resultSelector;
	        this.concurrent = concurrent;
	    }

	    _createClass(MergeMapToOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new MergeMapToSubscriber(observer, this.ish, this.resultSelector, this.concurrent));
	        }
	    }]);

	    return MergeMapToOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var MergeMapToSubscriber = exports.MergeMapToSubscriber = function (_OuterSubscriber) {
	    _inherits(MergeMapToSubscriber, _OuterSubscriber);

	    function MergeMapToSubscriber(destination, ish, resultSelector) {
	        var concurrent = arguments.length <= 3 || arguments[3] === undefined ? Number.POSITIVE_INFINITY : arguments[3];

	        _classCallCheck(this, MergeMapToSubscriber);

	        var _this = _possibleConstructorReturn(this, (MergeMapToSubscriber.__proto__ || Object.getPrototypeOf(MergeMapToSubscriber)).call(this, destination));

	        _this.ish = ish;
	        _this.resultSelector = resultSelector;
	        _this.concurrent = concurrent;
	        _this.hasCompleted = false;
	        _this.buffer = [];
	        _this.active = 0;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(MergeMapToSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (this.active < this.concurrent) {
	                var resultSelector = this.resultSelector;
	                var index = this.index++;
	                var ish = this.ish;
	                var destination = this.destination;
	                this.active++;
	                this._innerSub(ish, destination, resultSelector, value, index);
	            } else {
	                this.buffer.push(value);
	            }
	        }
	    }, {
	        key: '_innerSub',
	        value: function _innerSub(ish, destination, resultSelector, value, index) {
	            this.add((0, _subscribeToResult.subscribeToResult)(this, ish, value, index));
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.hasCompleted = true;
	            if (this.active === 0 && this.buffer.length === 0) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            var resultSelector = this.resultSelector;
	            var destination = this.destination;

	            if (resultSelector) {
	                this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
	            } else {
	                destination.next(innerValue);
	            }
	        }
	    }, {
	        key: 'trySelectResult',
	        value: function trySelectResult(outerValue, innerValue, outerIndex, innerIndex) {
	            var resultSelector = this.resultSelector;
	            var destination = this.destination;

	            var result = void 0;
	            try {
	                result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	            } catch (err) {
	                destination.error(err);
	                return;
	            }
	            destination.next(result);
	        }
	    }, {
	        key: 'notifyError',
	        value: function notifyError(err) {
	            this.destination.error(err);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            var buffer = this.buffer;
	            this.remove(innerSub);
	            this.active--;
	            if (buffer.length > 0) {
	                this._next(buffer.shift());
	            } else if (this.active === 0 && this.hasCompleted) {
	                this.destination.complete();
	            }
	        }
	    }]);

	    return MergeMapToSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _count = __webpack_require__(144);

	_Observable.Observable.prototype.count = _count.count;
	//# sourceMappingURL=count.js.map

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.count = count;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Counts the number of emissions on the source and emits that number when the
	 * source completes.
	 *
	 * <span class="informal">Tells how many values were emitted, when the source
	 * completes.</span>
	 *
	 * <img src="./img/count.png" width="100%">
	 *
	 * `count` transforms an Observable that emits values into an Observable that
	 * emits a single value that represents the number of values emitted by the
	 * source Observable. If the source Observable terminates with an error, `count`
	 * will pass this error notification along without emitting an value first. If
	 * the source Observable does not terminate at all, `count` will neither emit
	 * a value nor terminate. This operator takes an optional `predicate` function
	 * as argument, in which case the output emission will represent the number of
	 * source values that matched `true` with the `predicate`.
	 *
	 * @example <caption>Counts how many seconds have passed before the first click happened</caption>
	 * var seconds = Rx.Observable.interval(1000);
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var secondsBeforeClick = seconds.takeUntil(clicks);
	 * var result = secondsBeforeClick.count();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Counts how many odd numbers are there between 1 and 7</caption>
	 * var numbers = Rx.Observable.range(1, 7);
	 * var result = numbers.count(i => i % 2 === 1);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link max}
	 * @see {@link min}
	 * @see {@link reduce}
	 *
	 * @param {function(value: T, i: number, source: Observable<T>): boolean} [predicate] A
	 * boolean function to select what values are to be counted. It is provided with
	 * arguments of:
	 * - `value`: the value from the source Observable.
	 * - `index`: the (zero-based) "index" of the value from the source Observable.
	 * - `source`: the source Observable instance itself.
	 * @return {Observable} An Observable of one number that represents the count as
	 * described above.
	 * @method count
	 * @owner Observable
	 */
	function count(predicate) {
	    return this.lift(new CountOperator(predicate, this));
	}

	var CountOperator = function () {
	    function CountOperator(predicate, source) {
	        _classCallCheck(this, CountOperator);

	        this.predicate = predicate;
	        this.source = source;
	    }

	    _createClass(CountOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new CountSubscriber(subscriber, this.predicate, this.source));
	        }
	    }]);

	    return CountOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var CountSubscriber = function (_Subscriber) {
	    _inherits(CountSubscriber, _Subscriber);

	    function CountSubscriber(destination, predicate, source) {
	        _classCallCheck(this, CountSubscriber);

	        var _this = _possibleConstructorReturn(this, (CountSubscriber.__proto__ || Object.getPrototypeOf(CountSubscriber)).call(this, destination));

	        _this.predicate = predicate;
	        _this.source = source;
	        _this.count = 0;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(CountSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (this.predicate) {
	                this._tryPredicate(value);
	            } else {
	                this.count++;
	            }
	        }
	    }, {
	        key: '_tryPredicate',
	        value: function _tryPredicate(value) {
	            var result = void 0;
	            try {
	                result = this.predicate(value, this.index++, this.source);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            if (result) {
	                this.count++;
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.destination.next(this.count);
	            this.destination.complete();
	        }
	    }]);

	    return CountSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=count.js.map

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _dematerialize = __webpack_require__(146);

	_Observable.Observable.prototype.dematerialize = _dematerialize.dematerialize;
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.dematerialize = dematerialize;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Converts an Observable of {@link Notification} objects into the emissions
	 * that they represent.
	 *
	 * <span class="informal">Unwraps {@link Notification} objects as actual `next`,
	 * `error` and `complete` emissions. The opposite of {@link materialize}.</span>
	 *
	 * <img src="./img/dematerialize.png" width="100%">
	 *
	 * `dematerialize` is assumed to operate an Observable that only emits
	 * {@link Notification} objects as `next` emissions, and does not emit any
	 * `error`. Such Observable is the output of a `materialize` operation. Those
	 * notifications are then unwrapped using the metadata they contain, and emitted
	 * as `next`, `error`, and `complete` on the output Observable.
	 *
	 * Use this operator in conjunction with {@link materialize}.
	 *
	 * @example <caption>Convert an Observable of Notifications to an actual Observable</caption>
	 * var notifA = new Rx.Notification('N', 'A');
	 * var notifB = new Rx.Notification('N', 'B');
	 * var notifE = new Rx.Notification('E', void 0,
	 *   new TypeError('x.toUpperCase is not a function')
	 * );
	 * var materialized = Rx.Observable.of(notifA, notifB, notifE);
	 * var upperCase = materialized.dematerialize();
	 * upperCase.subscribe(x => console.log(x), e => console.error(e));
	 *
	 * @see {@link Notification}
	 * @see {@link materialize}
	 *
	 * @return {Observable} An Observable that emits items and notifications
	 * embedded in Notification objects emitted by the source Observable.
	 * @method dematerialize
	 * @owner Observable
	 */
	function dematerialize() {
	    return this.lift(new DeMaterializeOperator());
	}

	var DeMaterializeOperator = function () {
	    function DeMaterializeOperator() {
	        _classCallCheck(this, DeMaterializeOperator);
	    }

	    _createClass(DeMaterializeOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DeMaterializeSubscriber(subscriber));
	        }
	    }]);

	    return DeMaterializeOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DeMaterializeSubscriber = function (_Subscriber) {
	    _inherits(DeMaterializeSubscriber, _Subscriber);

	    function DeMaterializeSubscriber(destination) {
	        _classCallCheck(this, DeMaterializeSubscriber);

	        return _possibleConstructorReturn(this, (DeMaterializeSubscriber.__proto__ || Object.getPrototypeOf(DeMaterializeSubscriber)).call(this, destination));
	    }

	    _createClass(DeMaterializeSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            value.observe(this.destination);
	        }
	    }]);

	    return DeMaterializeSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=dematerialize.js.map

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _debounce = __webpack_require__(148);

	_Observable.Observable.prototype.debounce = _debounce.debounce;
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.debounce = debounce;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits a value from the source Observable only after a particular time span
	 * determined by another Observable has passed without another source emission.
	 *
	 * <span class="informal">It's like {@link debounceTime}, but the time span of
	 * emission silence is determined by a second Observable.</span>
	 *
	 * <img src="./img/debounce.png" width="100%">
	 *
	 * `debounce` delays values emitted by the source Observable, but drops previous
	 * pending delayed emissions if a new value arrives on the source Observable.
	 * This operator keeps track of the most recent value from the source
	 * Observable, and spawns a duration Observable by calling the
	 * `durationSelector` function. The value is emitted only when the duration
	 * Observable emits a value or completes, and if no other value was emitted on
	 * the source Observable since the duration Observable was spawned. If a new
	 * value appears before the duration Observable emits, the previous value will
	 * be dropped and will not be emitted on the output Observable.
	 *
	 * Like {@link debounceTime}, this is a rate-limiting operator, and also a
	 * delay-like operator since output emissions do not necessarily occur at the
	 * same time as they did on the source Observable.
	 *
	 * @example <caption>Emit the most recent click after a burst of clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.debounce(() => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link audit}
	 * @see {@link debounceTime}
	 * @see {@link delayWhen}
	 * @see {@link throttle}
	 *
	 * @param {function(value: T): Observable|Promise} durationSelector A function
	 * that receives a value from the source Observable, for computing the timeout
	 * duration for each source value, returned as an Observable or a Promise.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified duration Observable returned by
	 * `durationSelector`, and may drop some values if they occur too frequently.
	 * @method debounce
	 * @owner Observable
	 */
	function debounce(durationSelector) {
	    return this.lift(new DebounceOperator(durationSelector));
	}

	var DebounceOperator = function () {
	    function DebounceOperator(durationSelector) {
	        _classCallCheck(this, DebounceOperator);

	        this.durationSelector = durationSelector;
	    }

	    _createClass(DebounceOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DebounceSubscriber(subscriber, this.durationSelector));
	        }
	    }]);

	    return DebounceOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DebounceSubscriber = function (_OuterSubscriber) {
	    _inherits(DebounceSubscriber, _OuterSubscriber);

	    function DebounceSubscriber(destination, durationSelector) {
	        _classCallCheck(this, DebounceSubscriber);

	        var _this = _possibleConstructorReturn(this, (DebounceSubscriber.__proto__ || Object.getPrototypeOf(DebounceSubscriber)).call(this, destination));

	        _this.durationSelector = durationSelector;
	        _this.hasValue = false;
	        _this.durationSubscription = null;
	        return _this;
	    }

	    _createClass(DebounceSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            try {
	                var result = this.durationSelector.call(this, value);
	                if (result) {
	                    this._tryNext(value, result);
	                }
	            } catch (err) {
	                this.destination.error(err);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.emitValue();
	            this.destination.complete();
	        }
	    }, {
	        key: '_tryNext',
	        value: function _tryNext(value, duration) {
	            var subscription = this.durationSubscription;
	            this.value = value;
	            this.hasValue = true;
	            if (subscription) {
	                subscription.unsubscribe();
	                this.remove(subscription);
	            }
	            subscription = (0, _subscribeToResult.subscribeToResult)(this, duration);
	            if (!subscription.closed) {
	                this.add(this.durationSubscription = subscription);
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.emitValue();
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            this.emitValue();
	        }
	    }, {
	        key: 'emitValue',
	        value: function emitValue() {
	            if (this.hasValue) {
	                var value = this.value;
	                var subscription = this.durationSubscription;
	                if (subscription) {
	                    this.durationSubscription = null;
	                    subscription.unsubscribe();
	                    this.remove(subscription);
	                }
	                this.value = null;
	                this.hasValue = false;
	                _get(DebounceSubscriber.prototype.__proto__ || Object.getPrototypeOf(DebounceSubscriber.prototype), '_next', this).call(this, value);
	            }
	        }
	    }]);

	    return DebounceSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=debounce.js.map

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _debounceTime = __webpack_require__(150);

	_Observable.Observable.prototype.debounceTime = _debounceTime.debounceTime;
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.debounceTime = debounceTime;

	var _Subscriber2 = __webpack_require__(7);

	var _async = __webpack_require__(76);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits a value from the source Observable only after a particular time span
	 * has passed without another source emission.
	 *
	 * <span class="informal">It's like {@link delay}, but passes only the most
	 * recent value from each burst of emissions.</span>
	 *
	 * <img src="./img/debounceTime.png" width="100%">
	 *
	 * `debounceTime` delays values emitted by the source Observable, but drops
	 * previous pending delayed emissions if a new value arrives on the source
	 * Observable. This operator keeps track of the most recent value from the
	 * source Observable, and emits that only when `dueTime` enough time has passed
	 * without any other value appearing on the source Observable. If a new value
	 * appears before `dueTime` silence occurs, the previous value will be dropped
	 * and will not be emitted on the output Observable.
	 *
	 * This is a rate-limiting operator, because it is impossible for more than one
	 * value to be emitted in any time window of duration `dueTime`, but it is also
	 * a delay-like operator since output emissions do not occur at the same time as
	 * they did on the source Observable. Optionally takes a {@link Scheduler} for
	 * managing timers.
	 *
	 * @example <caption>Emit the most recent click after a burst of clicks</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.debounceTime(1000);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link auditTime}
	 * @see {@link debounce}
	 * @see {@link delay}
	 * @see {@link sampleTime}
	 * @see {@link throttleTime}
	 *
	 * @param {number} dueTime The timeout duration in milliseconds (or the time
	 * unit determined internally by the optional `scheduler`) for the window of
	 * time required to wait for emission silence before emitting the most recent
	 * source value.
	 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
	 * managing the timers that handle the timeout for each value.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified `dueTime`, and may drop some values if they occur
	 * too frequently.
	 * @method debounceTime
	 * @owner Observable
	 */
	function debounceTime(dueTime) {
	    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _async.async : arguments[1];

	    return this.lift(new DebounceTimeOperator(dueTime, scheduler));
	}

	var DebounceTimeOperator = function () {
	    function DebounceTimeOperator(dueTime, scheduler) {
	        _classCallCheck(this, DebounceTimeOperator);

	        this.dueTime = dueTime;
	        this.scheduler = scheduler;
	    }

	    _createClass(DebounceTimeOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DebounceTimeSubscriber(subscriber, this.dueTime, this.scheduler));
	        }
	    }]);

	    return DebounceTimeOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DebounceTimeSubscriber = function (_Subscriber) {
	    _inherits(DebounceTimeSubscriber, _Subscriber);

	    function DebounceTimeSubscriber(destination, dueTime, scheduler) {
	        _classCallCheck(this, DebounceTimeSubscriber);

	        var _this = _possibleConstructorReturn(this, (DebounceTimeSubscriber.__proto__ || Object.getPrototypeOf(DebounceTimeSubscriber)).call(this, destination));

	        _this.dueTime = dueTime;
	        _this.scheduler = scheduler;
	        _this.debouncedSubscription = null;
	        _this.lastValue = null;
	        _this.hasValue = false;
	        return _this;
	    }

	    _createClass(DebounceTimeSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.clearDebounce();
	            this.lastValue = value;
	            this.hasValue = true;
	            this.add(this.debouncedSubscription = this.scheduler.schedule(dispatchNext, this.dueTime, this));
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.debouncedNext();
	            this.destination.complete();
	        }
	    }, {
	        key: 'debouncedNext',
	        value: function debouncedNext() {
	            this.clearDebounce();
	            if (this.hasValue) {
	                this.destination.next(this.lastValue);
	                this.lastValue = null;
	                this.hasValue = false;
	            }
	        }
	    }, {
	        key: 'clearDebounce',
	        value: function clearDebounce() {
	            var debouncedSubscription = this.debouncedSubscription;
	            if (debouncedSubscription !== null) {
	                this.remove(debouncedSubscription);
	                debouncedSubscription.unsubscribe();
	                this.debouncedSubscription = null;
	            }
	        }
	    }]);

	    return DebounceTimeSubscriber;
	}(_Subscriber2.Subscriber);

	function dispatchNext(subscriber) {
	    subscriber.debouncedNext();
	}
	//# sourceMappingURL=debounceTime.js.map

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _defaultIfEmpty = __webpack_require__(152);

	_Observable.Observable.prototype.defaultIfEmpty = _defaultIfEmpty.defaultIfEmpty;
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.defaultIfEmpty = defaultIfEmpty;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits a given value if the source Observable completes without emitting any
	 * `next` value, otherwise mirrors the source Observable.
	 *
	 * <span class="informal">If the source Observable turns out to be empty, then
	 * this operator will emit a default value.</span>
	 *
	 * <img src="./img/defaultIfEmpty.png" width="100%">
	 *
	 * `defaultIfEmpty` emits the values emitted by the source Observable or a
	 * specified default value if the source Observable is empty (completes without
	 * having emitted any `next` value).
	 *
	 * @example <caption>If no clicks happen in 5 seconds, then emit "no clicks"</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksBeforeFive = clicks.takeUntil(Rx.Observable.interval(5000));
	 * var result = clicksBeforeFive.defaultIfEmpty('no clicks');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link empty}
	 * @see {@link last}
	 *
	 * @param {any} [defaultValue=null] The default value used if the source
	 * Observable is empty.
	 * @return {Observable} An Observable that emits either the specified
	 * `defaultValue` if the source Observable emits no items, or the values emitted
	 * by the source Observable.
	 * @method defaultIfEmpty
	 * @owner Observable
	 */
	function defaultIfEmpty() {
	    var defaultValue = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	    return this.lift(new DefaultIfEmptyOperator(defaultValue));
	}

	var DefaultIfEmptyOperator = function () {
	    function DefaultIfEmptyOperator(defaultValue) {
	        _classCallCheck(this, DefaultIfEmptyOperator);

	        this.defaultValue = defaultValue;
	    }

	    _createClass(DefaultIfEmptyOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DefaultIfEmptySubscriber(subscriber, this.defaultValue));
	        }
	    }]);

	    return DefaultIfEmptyOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DefaultIfEmptySubscriber = function (_Subscriber) {
	    _inherits(DefaultIfEmptySubscriber, _Subscriber);

	    function DefaultIfEmptySubscriber(destination, defaultValue) {
	        _classCallCheck(this, DefaultIfEmptySubscriber);

	        var _this = _possibleConstructorReturn(this, (DefaultIfEmptySubscriber.__proto__ || Object.getPrototypeOf(DefaultIfEmptySubscriber)).call(this, destination));

	        _this.defaultValue = defaultValue;
	        _this.isEmpty = true;
	        return _this;
	    }

	    _createClass(DefaultIfEmptySubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.isEmpty = false;
	            this.destination.next(value);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            if (this.isEmpty) {
	                this.destination.next(this.defaultValue);
	            }
	            this.destination.complete();
	        }
	    }]);

	    return DefaultIfEmptySubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=defaultIfEmpty.js.map

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _delay = __webpack_require__(154);

	_Observable.Observable.prototype.delay = _delay.delay;
	//# sourceMappingURL=delay.js.map

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.delay = delay;

	var _async = __webpack_require__(76);

	var _isDate = __webpack_require__(109);

	var _Subscriber2 = __webpack_require__(7);

	var _Notification = __webpack_require__(58);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Delays the emission of items from the source Observable by a given timeout or
	 * until a given Date.
	 *
	 * <span class="informal">Time shifts each item by some specified amount of
	 * milliseconds.</span>
	 *
	 * <img src="./img/delay.png" width="100%">
	 *
	 * If the delay argument is a Number, this operator time shifts the source
	 * Observable by that amount of time expressed in milliseconds. The relative
	 * time intervals between the values are preserved.
	 *
	 * If the delay argument is a Date, this operator time shifts the start of the
	 * Observable execution until the given date occurs.
	 *
	 * @example <caption>Delay each click by one second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var delayedClicks = clicks.delay(1000); // each click emitted after 1 second
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @example <caption>Delay all clicks until a future date happens</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var date = new Date('March 15, 2050 12:00:00'); // in the future
	 * var delayedClicks = clicks.delay(date); // click emitted only after that date
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @see {@link debounceTime}
	 * @see {@link delayWhen}
	 *
	 * @param {number|Date} delay The delay duration in milliseconds (a `number`) or
	 * a `Date` until which the emission of the source items is delayed.
	 * @param {Scheduler} [scheduler=async] The Scheduler to use for
	 * managing the timers that handle the time-shift for each item.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by the specified timeout or Date.
	 * @method delay
	 * @owner Observable
	 */
	function delay(delay) {
	    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _async.async : arguments[1];

	    var absoluteDelay = (0, _isDate.isDate)(delay);
	    var delayFor = absoluteDelay ? +delay - scheduler.now() : Math.abs(delay);
	    return this.lift(new DelayOperator(delayFor, scheduler));
	}

	var DelayOperator = function () {
	    function DelayOperator(delay, scheduler) {
	        _classCallCheck(this, DelayOperator);

	        this.delay = delay;
	        this.scheduler = scheduler;
	    }

	    _createClass(DelayOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DelaySubscriber(subscriber, this.delay, this.scheduler));
	        }
	    }]);

	    return DelayOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DelaySubscriber = function (_Subscriber) {
	    _inherits(DelaySubscriber, _Subscriber);

	    function DelaySubscriber(destination, delay, scheduler) {
	        _classCallCheck(this, DelaySubscriber);

	        var _this = _possibleConstructorReturn(this, (DelaySubscriber.__proto__ || Object.getPrototypeOf(DelaySubscriber)).call(this, destination));

	        _this.delay = delay;
	        _this.scheduler = scheduler;
	        _this.queue = [];
	        _this.active = false;
	        _this.errored = false;
	        return _this;
	    }

	    _createClass(DelaySubscriber, [{
	        key: '_schedule',
	        value: function _schedule(scheduler) {
	            this.active = true;
	            this.add(scheduler.schedule(DelaySubscriber.dispatch, this.delay, {
	                source: this, destination: this.destination, scheduler: scheduler
	            }));
	        }
	    }, {
	        key: 'scheduleNotification',
	        value: function scheduleNotification(notification) {
	            if (this.errored === true) {
	                return;
	            }
	            var scheduler = this.scheduler;
	            var message = new DelayMessage(scheduler.now() + this.delay, notification);
	            this.queue.push(message);
	            if (this.active === false) {
	                this._schedule(scheduler);
	            }
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.scheduleNotification(_Notification.Notification.createNext(value));
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.errored = true;
	            this.queue = [];
	            this.destination.error(err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.scheduleNotification(_Notification.Notification.createComplete());
	        }
	    }], [{
	        key: 'dispatch',
	        value: function dispatch(state) {
	            var source = state.source;
	            var queue = source.queue;
	            var scheduler = state.scheduler;
	            var destination = state.destination;
	            while (queue.length > 0 && queue[0].time - scheduler.now() <= 0) {
	                queue.shift().notification.observe(destination);
	            }
	            if (queue.length > 0) {
	                var _delay = Math.max(0, queue[0].time - scheduler.now());
	                this.schedule(state, _delay);
	            } else {
	                source.active = false;
	            }
	        }
	    }]);

	    return DelaySubscriber;
	}(_Subscriber2.Subscriber);

	var DelayMessage = function DelayMessage(time, notification) {
	    _classCallCheck(this, DelayMessage);

	    this.time = time;
	    this.notification = notification;
	};
	//# sourceMappingURL=delay.js.map

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _delayWhen = __webpack_require__(156);

	_Observable.Observable.prototype.delayWhen = _delayWhen.delayWhen;
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.delayWhen = delayWhen;

	var _Subscriber2 = __webpack_require__(7);

	var _Observable2 = __webpack_require__(4);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Delays the emission of items from the source Observable by a given time span
	 * determined by the emissions of another Observable.
	 *
	 * <span class="informal">It's like {@link delay}, but the time span of the
	 * delay duration is determined by a second Observable.</span>
	 *
	 * <img src="./img/delayWhen.png" width="100%">
	 *
	 * `delayWhen` time shifts each emitted value from the source Observable by a
	 * time span determined by another Observable. When the source emits a value,
	 * the `delayDurationSelector` function is called with the source value as
	 * argument, and should return an Observable, called the "duration" Observable.
	 * The source value is emitted on the output Observable only when the duration
	 * Observable emits a value or completes.
	 *
	 * Optionally, `delayWhen` takes a second argument, `subscriptionDelay`, which
	 * is an Observable. When `subscriptionDelay` emits its first value or
	 * completes, the source Observable is subscribed to and starts behaving like
	 * described in the previous paragraph. If `subscriptionDelay` is not provided,
	 * `delayWhen` will subscribe to the source Observable as soon as the output
	 * Observable is subscribed.
	 *
	 * @example <caption>Delay each click by a random amount of time, between 0 and 5 seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var delayedClicks = clicks.delayWhen(event =>
	 *   Rx.Observable.interval(Math.random() * 5000)
	 * );
	 * delayedClicks.subscribe(x => console.log(x));
	 *
	 * @see {@link debounce}
	 * @see {@link delay}
	 *
	 * @param {function(value: T): Observable} delayDurationSelector A function that
	 * returns an Observable for each value emitted by the source Observable, which
	 * is then used to delay the emission of that item on the output Observable
	 * until the Observable returned from this function emits a value.
	 * @param {Observable} subscriptionDelay An Observable that triggers the
	 * subscription to the source Observable once it emits any value.
	 * @return {Observable} An Observable that delays the emissions of the source
	 * Observable by an amount of time specified by the Observable returned by
	 * `delayDurationSelector`.
	 * @method delayWhen
	 * @owner Observable
	 */
	function delayWhen(delayDurationSelector, subscriptionDelay) {
	    if (subscriptionDelay) {
	        return new SubscriptionDelayObservable(this, subscriptionDelay).lift(new DelayWhenOperator(delayDurationSelector));
	    }
	    return this.lift(new DelayWhenOperator(delayDurationSelector));
	}

	var DelayWhenOperator = function () {
	    function DelayWhenOperator(delayDurationSelector) {
	        _classCallCheck(this, DelayWhenOperator);

	        this.delayDurationSelector = delayDurationSelector;
	    }

	    _createClass(DelayWhenOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DelayWhenSubscriber(subscriber, this.delayDurationSelector));
	        }
	    }]);

	    return DelayWhenOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DelayWhenSubscriber = function (_OuterSubscriber) {
	    _inherits(DelayWhenSubscriber, _OuterSubscriber);

	    function DelayWhenSubscriber(destination, delayDurationSelector) {
	        _classCallCheck(this, DelayWhenSubscriber);

	        var _this = _possibleConstructorReturn(this, (DelayWhenSubscriber.__proto__ || Object.getPrototypeOf(DelayWhenSubscriber)).call(this, destination));

	        _this.delayDurationSelector = delayDurationSelector;
	        _this.completed = false;
	        _this.delayNotifierSubscriptions = [];
	        _this.values = [];
	        return _this;
	    }

	    _createClass(DelayWhenSubscriber, [{
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.destination.next(outerValue);
	            this.removeSubscription(innerSub);
	            this.tryComplete();
	        }
	    }, {
	        key: 'notifyError',
	        value: function notifyError(error, innerSub) {
	            this._error(error);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            var value = this.removeSubscription(innerSub);
	            if (value) {
	                this.destination.next(value);
	            }
	            this.tryComplete();
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            try {
	                var delayNotifier = this.delayDurationSelector(value);
	                if (delayNotifier) {
	                    this.tryDelay(delayNotifier, value);
	                }
	            } catch (err) {
	                this.destination.error(err);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.completed = true;
	            this.tryComplete();
	        }
	    }, {
	        key: 'removeSubscription',
	        value: function removeSubscription(subscription) {
	            subscription.unsubscribe();
	            var subscriptionIdx = this.delayNotifierSubscriptions.indexOf(subscription);
	            var value = null;
	            if (subscriptionIdx !== -1) {
	                value = this.values[subscriptionIdx];
	                this.delayNotifierSubscriptions.splice(subscriptionIdx, 1);
	                this.values.splice(subscriptionIdx, 1);
	            }
	            return value;
	        }
	    }, {
	        key: 'tryDelay',
	        value: function tryDelay(delayNotifier, value) {
	            var notifierSubscription = (0, _subscribeToResult.subscribeToResult)(this, delayNotifier, value);
	            this.add(notifierSubscription);
	            this.delayNotifierSubscriptions.push(notifierSubscription);
	            this.values.push(value);
	        }
	    }, {
	        key: 'tryComplete',
	        value: function tryComplete() {
	            if (this.completed && this.delayNotifierSubscriptions.length === 0) {
	                this.destination.complete();
	            }
	        }
	    }]);

	    return DelayWhenSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SubscriptionDelayObservable = function (_Observable) {
	    _inherits(SubscriptionDelayObservable, _Observable);

	    function SubscriptionDelayObservable(source, subscriptionDelay) {
	        _classCallCheck(this, SubscriptionDelayObservable);

	        var _this2 = _possibleConstructorReturn(this, (SubscriptionDelayObservable.__proto__ || Object.getPrototypeOf(SubscriptionDelayObservable)).call(this));

	        _this2.source = source;
	        _this2.subscriptionDelay = subscriptionDelay;
	        return _this2;
	    }

	    _createClass(SubscriptionDelayObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            this.subscriptionDelay.subscribe(new SubscriptionDelaySubscriber(subscriber, this.source));
	        }
	    }]);

	    return SubscriptionDelayObservable;
	}(_Observable2.Observable);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SubscriptionDelaySubscriber = function (_Subscriber) {
	    _inherits(SubscriptionDelaySubscriber, _Subscriber);

	    function SubscriptionDelaySubscriber(parent, source) {
	        _classCallCheck(this, SubscriptionDelaySubscriber);

	        var _this3 = _possibleConstructorReturn(this, (SubscriptionDelaySubscriber.__proto__ || Object.getPrototypeOf(SubscriptionDelaySubscriber)).call(this));

	        _this3.parent = parent;
	        _this3.source = source;
	        _this3.sourceSubscribed = false;
	        return _this3;
	    }

	    _createClass(SubscriptionDelaySubscriber, [{
	        key: '_next',
	        value: function _next(unused) {
	            this.subscribeToSource();
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.unsubscribe();
	            this.parent.error(err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.subscribeToSource();
	        }
	    }, {
	        key: 'subscribeToSource',
	        value: function subscribeToSource() {
	            if (!this.sourceSubscribed) {
	                this.sourceSubscribed = true;
	                this.unsubscribe();
	                this.source.subscribe(this.parent);
	            }
	        }
	    }]);

	    return SubscriptionDelaySubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=delayWhen.js.map

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _distinct = __webpack_require__(158);

	_Observable.Observable.prototype.distinct = _distinct.distinct;
	//# sourceMappingURL=distinct.js.map

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DistinctSubscriber = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.distinct = distinct;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
	 * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
	 * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinct
	 * @owner Observable
	 */
	function distinct(compare, flushes) {
	    return this.lift(new DistinctOperator(compare, flushes));
	}

	var DistinctOperator = function () {
	    function DistinctOperator(compare, flushes) {
	        _classCallCheck(this, DistinctOperator);

	        this.compare = compare;
	        this.flushes = flushes;
	    }

	    _createClass(DistinctOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DistinctSubscriber(subscriber, this.compare, this.flushes));
	        }
	    }]);

	    return DistinctOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DistinctSubscriber = exports.DistinctSubscriber = function (_OuterSubscriber) {
	    _inherits(DistinctSubscriber, _OuterSubscriber);

	    function DistinctSubscriber(destination, compare, flushes) {
	        _classCallCheck(this, DistinctSubscriber);

	        var _this = _possibleConstructorReturn(this, (DistinctSubscriber.__proto__ || Object.getPrototypeOf(DistinctSubscriber)).call(this, destination));

	        _this.values = [];
	        if (typeof compare === 'function') {
	            _this.compare = compare;
	        }
	        if (flushes) {
	            _this.add((0, _subscribeToResult.subscribeToResult)(_this, flushes));
	        }
	        return _this;
	    }

	    _createClass(DistinctSubscriber, [{
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.values.length = 0;
	        }
	    }, {
	        key: 'notifyError',
	        value: function notifyError(error, innerSub) {
	            this._error(error);
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            var found = false;
	            var values = this.values;
	            var len = values.length;
	            try {
	                for (var i = 0; i < len; i++) {
	                    if (this.compare(values[i], value)) {
	                        found = true;
	                        return;
	                    }
	                }
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.values.push(value);
	            this.destination.next(value);
	        }
	    }, {
	        key: 'compare',
	        value: function compare(x, y) {
	            return x === y;
	        }
	    }]);

	    return DistinctSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=distinct.js.map

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _distinctKey = __webpack_require__(160);

	_Observable.Observable.prototype.distinctKey = _distinctKey.distinctKey;
	//# sourceMappingURL=distinctKey.js.map

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.distinctKey = distinctKey;

	var _distinct = __webpack_require__(158);

	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from previous items,
	 * using a property accessed by using the key provided to check if the two items are distinct.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * As the internal HashSet of this operator grows larger and larger, care should be taken in the domain of inputs this operator may see.
	 * An optional parameter is also provided such that an Observable can be provided to queue the internal HashSet to flush the values it holds.
	 * @param {string} key string key for object property lookup on each item.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from previous items in the source.
	 * @param {Observable} [flushes] optional Observable for flushing the internal HashSet of the operator.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctKey
	 * @owner Observable
	 */
	function distinctKey(key, compare, flushes) {
	    return _distinct.distinct.call(this, function (x, y) {
	        if (compare) {
	            return compare(x[key], y[key]);
	        }
	        return x[key] === y[key];
	    }, flushes);
	}
	//# sourceMappingURL=distinctKey.js.map

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _distinctUntilChanged = __webpack_require__(162);

	_Observable.Observable.prototype.distinctUntilChanged = _distinctUntilChanged.distinctUntilChanged;
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.distinctUntilChanged = distinctUntilChanged;

	var _Subscriber2 = __webpack_require__(7);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values.
	 * @method distinctUntilChanged
	 * @owner Observable
	 */
	function distinctUntilChanged(compare, keySelector) {
	    return this.lift(new DistinctUntilChangedOperator(compare, keySelector));
	}

	var DistinctUntilChangedOperator = function () {
	    function DistinctUntilChangedOperator(compare, keySelector) {
	        _classCallCheck(this, DistinctUntilChangedOperator);

	        this.compare = compare;
	        this.keySelector = keySelector;
	    }

	    _createClass(DistinctUntilChangedOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DistinctUntilChangedSubscriber(subscriber, this.compare, this.keySelector));
	        }
	    }]);

	    return DistinctUntilChangedOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DistinctUntilChangedSubscriber = function (_Subscriber) {
	    _inherits(DistinctUntilChangedSubscriber, _Subscriber);

	    function DistinctUntilChangedSubscriber(destination, compare, keySelector) {
	        _classCallCheck(this, DistinctUntilChangedSubscriber);

	        var _this = _possibleConstructorReturn(this, (DistinctUntilChangedSubscriber.__proto__ || Object.getPrototypeOf(DistinctUntilChangedSubscriber)).call(this, destination));

	        _this.keySelector = keySelector;
	        _this.hasKey = false;
	        if (typeof compare === 'function') {
	            _this.compare = compare;
	        }
	        return _this;
	    }

	    _createClass(DistinctUntilChangedSubscriber, [{
	        key: 'compare',
	        value: function compare(x, y) {
	            return x === y;
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            var keySelector = this.keySelector;
	            var key = value;
	            if (keySelector) {
	                key = (0, _tryCatch.tryCatch)(this.keySelector)(value);
	                if (key === _errorObject.errorObject) {
	                    return this.destination.error(_errorObject.errorObject.e);
	                }
	            }
	            var result = false;
	            if (this.hasKey) {
	                result = (0, _tryCatch.tryCatch)(this.compare)(this.key, key);
	                if (result === _errorObject.errorObject) {
	                    return this.destination.error(_errorObject.errorObject.e);
	                }
	            } else {
	                this.hasKey = true;
	            }
	            if (Boolean(result) === false) {
	                this.key = key;
	                this.destination.next(value);
	            }
	        }
	    }]);

	    return DistinctUntilChangedSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=distinctUntilChanged.js.map

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _distinctUntilKeyChanged = __webpack_require__(164);

	_Observable.Observable.prototype.distinctUntilKeyChanged = _distinctUntilKeyChanged.distinctUntilKeyChanged;
	//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

	var _distinctUntilChanged = __webpack_require__(162);

	/**
	 * Returns an Observable that emits all items emitted by the source Observable that are distinct by comparison from the previous item,
	 * using a property accessed by using the key provided to check if the two items are distinct.
	 * If a comparator function is provided, then it will be called for each item to test for whether or not that value should be emitted.
	 * If a comparator function is not provided, an equality check is used by default.
	 * @param {string} key string key for object property lookup on each item.
	 * @param {function} [compare] optional comparison function called to test if an item is distinct from the previous item in the source.
	 * @return {Observable} an Observable that emits items from the source Observable with distinct values based on the key specified.
	 * @method distinctUntilKeyChanged
	 * @owner Observable
	 */
	function distinctUntilKeyChanged(key, compare) {
	    return _distinctUntilChanged.distinctUntilChanged.call(this, function (x, y) {
	        if (compare) {
	            return compare(x[key], y[key]);
	        }
	        return x[key] === y[key];
	    });
	}
	//# sourceMappingURL=distinctUntilKeyChanged.js.map

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _do2 = __webpack_require__(166);

	_Observable.Observable.prototype.do = _do2._do;
	_Observable.Observable.prototype._do = _do2._do;
	//# sourceMappingURL=do.js.map

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports._do = _do;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Perform a side effect for every emission on the source Observable, but return
	 * an Observable that is identical to the source.
	 *
	 * <span class="informal">Intercepts each emission on the source and runs a
	 * function, but returns an output which is identical to the source.</span>
	 *
	 * <img src="./img/do.png" width="100%">
	 *
	 * Returns a mirrored Observable of the source Observable, but modified so that
	 * the provided Observer is called to perform a side effect for every value,
	 * error, and completion emitted by the source. Any errors that are thrown in
	 * the aforementioned Observer or handlers are safely sent down the error path
	 * of the output Observable.
	 *
	 * This operator is useful for debugging your Observables for the correct values
	 * or performing other side effects.
	 *
	 * Note: this is different to a `subscribe` on the Observable. If the Observable
	 * returned by `do` is not subscribed, the side effects specified by the
	 * Observer will never happen. `do` therefore simply spies on existing
	 * execution, it does not trigger an execution to happen like `subscribe` does.
	 *
	 * @example <caption>Map every every click to the clientX position of that click, while also logging the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks
	 *   .do(ev => console.log(ev))
	 *   .map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 * @see {@link subscribe}
	 *
	 * @param {Observer|function} [nextOrObserver] A normal Observer object or a
	 * callback for `next`.
	 * @param {function} [error] Callback for errors in the source.
	 * @param {function} [complete] Callback for the completion of the source.
	 * @return {Observable} An Observable identical to the source, but runs the
	 * specified Observer or callback(s) for each item.
	 * @method do
	 * @name do
	 * @owner Observable
	 */
	function _do(nextOrObserver, error, complete) {
	    return this.lift(new DoOperator(nextOrObserver, error, complete));
	}

	var DoOperator = function () {
	    function DoOperator(nextOrObserver, error, complete) {
	        _classCallCheck(this, DoOperator);

	        this.nextOrObserver = nextOrObserver;
	        this.error = error;
	        this.complete = complete;
	    }

	    _createClass(DoOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new DoSubscriber(subscriber, this.nextOrObserver, this.error, this.complete));
	        }
	    }]);

	    return DoOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var DoSubscriber = function (_Subscriber) {
	    _inherits(DoSubscriber, _Subscriber);

	    function DoSubscriber(destination, nextOrObserver, error, complete) {
	        _classCallCheck(this, DoSubscriber);

	        var _this = _possibleConstructorReturn(this, (DoSubscriber.__proto__ || Object.getPrototypeOf(DoSubscriber)).call(this, destination));

	        var safeSubscriber = new _Subscriber2.Subscriber(nextOrObserver, error, complete);
	        safeSubscriber.syncErrorThrowable = true;
	        _this.add(safeSubscriber);
	        _this.safeSubscriber = safeSubscriber;
	        return _this;
	    }

	    _createClass(DoSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var safeSubscriber = this.safeSubscriber;

	            safeSubscriber.next(value);
	            if (safeSubscriber.syncErrorThrown) {
	                this.destination.error(safeSubscriber.syncErrorValue);
	            } else {
	                this.destination.next(value);
	            }
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            var safeSubscriber = this.safeSubscriber;

	            safeSubscriber.error(err);
	            if (safeSubscriber.syncErrorThrown) {
	                this.destination.error(safeSubscriber.syncErrorValue);
	            } else {
	                this.destination.error(err);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var safeSubscriber = this.safeSubscriber;

	            safeSubscriber.complete();
	            if (safeSubscriber.syncErrorThrown) {
	                this.destination.error(safeSubscriber.syncErrorValue);
	            } else {
	                this.destination.complete();
	            }
	        }
	    }]);

	    return DoSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=do.js.map

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _exhaust = __webpack_require__(168);

	_Observable.Observable.prototype.exhaust = _exhaust.exhaust;
	//# sourceMappingURL=exhaust.js.map

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.exhaust = exhaust;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Converts a higher-order Observable into a first-order Observable by dropping
	 * inner Observables while the previous inner Observable has not yet completed.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by dropping the
	 * next inner Observables while the current inner is still executing.</span>
	 *
	 * <img src="./img/exhaust.png" width="100%">
	 *
	 * `exhaust` subscribes to an Observable that emits Observables, also known as a
	 * higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, the output Observable begins emitting the items emitted by that
	 * inner Observable. So far, it behaves like {@link mergeAll}. However,
	 * `exhaust` ignores every new inner Observable if the previous Observable has
	 * not yet completed. Once that one completes, it will accept and flatten the
	 * next inner Observable and repeat this process.
	 *
	 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var result = higherOrder.exhaust();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link switch}
	 * @see {@link mergeAll}
	 * @see {@link exhaustMap}
	 * @see {@link zipAll}
	 *
	 * @return {Observable} Returns an Observable that takes a source of Observables
	 * and propagates the first observable exclusively until it completes before
	 * subscribing to the next.
	 * @method exhaust
	 * @owner Observable
	 */
	function exhaust() {
	    return this.lift(new SwitchFirstOperator());
	}

	var SwitchFirstOperator = function () {
	    function SwitchFirstOperator() {
	        _classCallCheck(this, SwitchFirstOperator);
	    }

	    _createClass(SwitchFirstOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SwitchFirstSubscriber(subscriber));
	        }
	    }]);

	    return SwitchFirstOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SwitchFirstSubscriber = function (_OuterSubscriber) {
	    _inherits(SwitchFirstSubscriber, _OuterSubscriber);

	    function SwitchFirstSubscriber(destination) {
	        _classCallCheck(this, SwitchFirstSubscriber);

	        var _this = _possibleConstructorReturn(this, (SwitchFirstSubscriber.__proto__ || Object.getPrototypeOf(SwitchFirstSubscriber)).call(this, destination));

	        _this.hasCompleted = false;
	        _this.hasSubscription = false;
	        return _this;
	    }

	    _createClass(SwitchFirstSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (!this.hasSubscription) {
	                this.hasSubscription = true;
	                this.add((0, _subscribeToResult.subscribeToResult)(this, value));
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.hasCompleted = true;
	            if (!this.hasSubscription) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            this.remove(innerSub);
	            this.hasSubscription = false;
	            if (this.hasCompleted) {
	                this.destination.complete();
	            }
	        }
	    }]);

	    return SwitchFirstSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=exhaust.js.map

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _exhaustMap = __webpack_require__(170);

	_Observable.Observable.prototype.exhaustMap = _exhaustMap.exhaustMap;
	//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.exhaustMap = exhaustMap;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable only if the previous projected Observable has completed.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link exhaust}.</span>
	 *
	 * <img src="./img/exhaustMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. When it projects a source value to
	 * an Observable, the output Observable begins emitting the items emitted by
	 * that projected Observable. However, `exhaustMap` ignores every new projected
	 * Observable if the previous projected Observable has not yet completed. Once
	 * that one completes, it will accept and flatten the next projected Observable
	 * and repeat this process.
	 *
	 * @example <caption>Run a finite timer for each click, only if there is no currently active timer</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.exhaustMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaust}
	 * @see {@link mergeMap}
	 * @see {@link switchMap}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable containing projected Observables
	 * of each item of the source, ignoring projected Observables that start before
	 * their preceding Observable has completed.
	 * @method exhaustMap
	 * @owner Observable
	 */
	function exhaustMap(project, resultSelector) {
	    return this.lift(new SwitchFirstMapOperator(project, resultSelector));
	}

	var SwitchFirstMapOperator = function () {
	    function SwitchFirstMapOperator(project, resultSelector) {
	        _classCallCheck(this, SwitchFirstMapOperator);

	        this.project = project;
	        this.resultSelector = resultSelector;
	    }

	    _createClass(SwitchFirstMapOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SwitchFirstMapSubscriber(subscriber, this.project, this.resultSelector));
	        }
	    }]);

	    return SwitchFirstMapOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SwitchFirstMapSubscriber = function (_OuterSubscriber) {
	    _inherits(SwitchFirstMapSubscriber, _OuterSubscriber);

	    function SwitchFirstMapSubscriber(destination, project, resultSelector) {
	        _classCallCheck(this, SwitchFirstMapSubscriber);

	        var _this = _possibleConstructorReturn(this, (SwitchFirstMapSubscriber.__proto__ || Object.getPrototypeOf(SwitchFirstMapSubscriber)).call(this, destination));

	        _this.project = project;
	        _this.resultSelector = resultSelector;
	        _this.hasSubscription = false;
	        _this.hasCompleted = false;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(SwitchFirstMapSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (!this.hasSubscription) {
	                this.tryNext(value);
	            }
	        }
	    }, {
	        key: 'tryNext',
	        value: function tryNext(value) {
	            var index = this.index++;
	            var destination = this.destination;
	            try {
	                var result = this.project(value, index);
	                this.hasSubscription = true;
	                this.add((0, _subscribeToResult.subscribeToResult)(this, result, value, index));
	            } catch (err) {
	                destination.error(err);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.hasCompleted = true;
	            if (!this.hasSubscription) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            var resultSelector = this.resultSelector;
	            var destination = this.destination;

	            if (resultSelector) {
	                this.trySelectResult(outerValue, innerValue, outerIndex, innerIndex);
	            } else {
	                destination.next(innerValue);
	            }
	        }
	    }, {
	        key: 'trySelectResult',
	        value: function trySelectResult(outerValue, innerValue, outerIndex, innerIndex) {
	            var resultSelector = this.resultSelector;
	            var destination = this.destination;

	            try {
	                var result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	                destination.next(result);
	            } catch (err) {
	                destination.error(err);
	            }
	        }
	    }, {
	        key: 'notifyError',
	        value: function notifyError(err) {
	            this.destination.error(err);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            this.remove(innerSub);
	            this.hasSubscription = false;
	            if (this.hasCompleted) {
	                this.destination.complete();
	            }
	        }
	    }]);

	    return SwitchFirstMapSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=exhaustMap.js.map

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _expand = __webpack_require__(172);

	_Observable.Observable.prototype.expand = _expand.expand;
	//# sourceMappingURL=expand.js.map

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ExpandSubscriber = exports.ExpandOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.expand = expand;

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Recursively projects each source value to an Observable which is merged in
	 * the output Observable.
	 *
	 * <span class="informal">It's similar to {@link mergeMap}, but applies the
	 * projection function to every source value as well as every output value.
	 * It's recursive.</span>
	 *
	 * <img src="./img/expand.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an Observable, and then merging those resulting Observables and
	 * emitting the results of this merger. *Expand* will re-emit on the output
	 * Observable every source value. Then, each output value is given to the
	 * `project` function which returns an inner Observable to be merged on the
	 * output Observable. Those output values resulting from the projection are also
	 * given to the `project` function to produce new output values. This is how
	 * *expand* behaves recursively.
	 *
	 * @example <caption>Start emitting the powers of two on every click, at most 10 of them</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var powersOfTwo = clicks
	 *   .mapTo(1)
	 *   .expand(x => Rx.Observable.of(2 * x).delay(1000))
	 *   .take(10);
	 * powersOfTwo.subscribe(x => console.log(x));
	 *
	 * @see {@link mergeMap}
	 * @see {@link mergeScan}
	 *
	 * @param {function(value: T, index: number) => Observable} project A function
	 * that, when applied to an item emitted by the source or the output Observable,
	 * returns an Observable.
	 * @param {number} [concurrent=Number.POSITIVE_INFINITY] Maximum number of input
	 * Observables being subscribed to concurrently.
	 * @param {Scheduler} [scheduler=null] The Scheduler to use for subscribing to
	 * each projected inner Observable.
	 * @return {Observable} An Observable that emits the source values and also
	 * result of applying the projection function to each value emitted on the
	 * output Observable and and merging the results of the Observables obtained
	 * from this transformation.
	 * @method expand
	 * @owner Observable
	 */
	function expand(project) {
	    var concurrent = arguments.length <= 1 || arguments[1] === undefined ? Number.POSITIVE_INFINITY : arguments[1];
	    var scheduler = arguments.length <= 2 || arguments[2] === undefined ? undefined : arguments[2];

	    concurrent = (concurrent || 0) < 1 ? Number.POSITIVE_INFINITY : concurrent;
	    return this.lift(new ExpandOperator(project, concurrent, scheduler));
	}

	var ExpandOperator = exports.ExpandOperator = function () {
	    function ExpandOperator(project, concurrent, scheduler) {
	        _classCallCheck(this, ExpandOperator);

	        this.project = project;
	        this.concurrent = concurrent;
	        this.scheduler = scheduler;
	    }

	    _createClass(ExpandOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new ExpandSubscriber(subscriber, this.project, this.concurrent, this.scheduler));
	        }
	    }]);

	    return ExpandOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ExpandSubscriber = exports.ExpandSubscriber = function (_OuterSubscriber) {
	    _inherits(ExpandSubscriber, _OuterSubscriber);

	    function ExpandSubscriber(destination, project, concurrent, scheduler) {
	        _classCallCheck(this, ExpandSubscriber);

	        var _this = _possibleConstructorReturn(this, (ExpandSubscriber.__proto__ || Object.getPrototypeOf(ExpandSubscriber)).call(this, destination));

	        _this.project = project;
	        _this.concurrent = concurrent;
	        _this.scheduler = scheduler;
	        _this.index = 0;
	        _this.active = 0;
	        _this.hasCompleted = false;
	        if (concurrent < Number.POSITIVE_INFINITY) {
	            _this.buffer = [];
	        }
	        return _this;
	    }

	    _createClass(ExpandSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var destination = this.destination;
	            if (destination.closed) {
	                this._complete();
	                return;
	            }
	            var index = this.index++;
	            if (this.active < this.concurrent) {
	                destination.next(value);
	                var result = (0, _tryCatch.tryCatch)(this.project)(value, index);
	                if (result === _errorObject.errorObject) {
	                    destination.error(_errorObject.errorObject.e);
	                } else if (!this.scheduler) {
	                    this.subscribeToProjection(result, value, index);
	                } else {
	                    var state = { subscriber: this, result: result, value: value, index: index };
	                    this.add(this.scheduler.schedule(ExpandSubscriber.dispatch, 0, state));
	                }
	            } else {
	                this.buffer.push(value);
	            }
	        }
	    }, {
	        key: 'subscribeToProjection',
	        value: function subscribeToProjection(result, value, index) {
	            this.active++;
	            this.add((0, _subscribeToResult.subscribeToResult)(this, result, value, index));
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.hasCompleted = true;
	            if (this.hasCompleted && this.active === 0) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this._next(innerValue);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            var buffer = this.buffer;
	            this.remove(innerSub);
	            this.active--;
	            if (buffer && buffer.length > 0) {
	                this._next(buffer.shift());
	            }
	            if (this.hasCompleted && this.active === 0) {
	                this.destination.complete();
	            }
	        }
	    }], [{
	        key: 'dispatch',
	        value: function dispatch(arg) {
	            var subscriber = arg.subscriber;
	            var result = arg.result;
	            var value = arg.value;
	            var index = arg.index;

	            subscriber.subscribeToProjection(result, value, index);
	        }
	    }]);

	    return ExpandSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=expand.js.map

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _elementAt = __webpack_require__(174);

	_Observable.Observable.prototype.elementAt = _elementAt.elementAt;
	//# sourceMappingURL=elementAt.js.map

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.elementAt = elementAt;

	var _Subscriber2 = __webpack_require__(7);

	var _ArgumentOutOfRangeError = __webpack_require__(175);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits the single value at the specified `index` in a sequence of emissions
	 * from the source Observable.
	 *
	 * <span class="informal">Emits only the i-th value, then completes.</span>
	 *
	 * <img src="./img/elementAt.png" width="100%">
	 *
	 * `elementAt` returns an Observable that emits the item at the specified
	 * `index` in the source Observable, or a default value if that `index` is out
	 * of range and the `default` argument is provided. If the `default` argument is
	 * not given and the `index` is out of range, the output Observable will emit an
	 * `ArgumentOutOfRangeError` error.
	 *
	 * @example <caption>Emit only the third click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.elementAt(2);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link skip}
	 * @see {@link single}
	 * @see {@link take}
	 *
	 * @throws {ArgumentOutOfRangeError} When using `elementAt(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0` or the
	 * Observable has completed before emitting the i-th `next` notification.
	 *
	 * @param {number} index Is the number `i` for the i-th source emission that has
	 * happened since the subscription, starting from the number `0`.
	 * @param {T} [defaultValue] The default value returned for missing indices.
	 * @return {Observable} An Observable that emits a single item, if it is found.
	 * Otherwise, will emit the default value if given. If not, then emits an error.
	 * @method elementAt
	 * @owner Observable
	 */
	function elementAt(index, defaultValue) {
	    return this.lift(new ElementAtOperator(index, defaultValue));
	}

	var ElementAtOperator = function () {
	    function ElementAtOperator(index, defaultValue) {
	        _classCallCheck(this, ElementAtOperator);

	        this.index = index;
	        this.defaultValue = defaultValue;
	        if (index < 0) {
	            throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
	        }
	    }

	    _createClass(ElementAtOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new ElementAtSubscriber(subscriber, this.index, this.defaultValue));
	        }
	    }]);

	    return ElementAtOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ElementAtSubscriber = function (_Subscriber) {
	    _inherits(ElementAtSubscriber, _Subscriber);

	    function ElementAtSubscriber(destination, index, defaultValue) {
	        _classCallCheck(this, ElementAtSubscriber);

	        var _this = _possibleConstructorReturn(this, (ElementAtSubscriber.__proto__ || Object.getPrototypeOf(ElementAtSubscriber)).call(this, destination));

	        _this.index = index;
	        _this.defaultValue = defaultValue;
	        return _this;
	    }

	    _createClass(ElementAtSubscriber, [{
	        key: '_next',
	        value: function _next(x) {
	            if (this.index-- === 0) {
	                this.destination.next(x);
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var destination = this.destination;
	            if (this.index >= 0) {
	                if (typeof this.defaultValue !== 'undefined') {
	                    destination.next(this.defaultValue);
	                } else {
	                    destination.error(new _ArgumentOutOfRangeError.ArgumentOutOfRangeError());
	                }
	            }
	            destination.complete();
	        }
	    }]);

	    return ElementAtSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=elementAt.js.map

/***/ },
/* 175 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An error thrown when an element was queried at a certain index of an
	 * Observable, but no such index or position exists in that sequence.
	 *
	 * @see {@link elementAt}
	 * @see {@link take}
	 * @see {@link takeLast}
	 *
	 * @class ArgumentOutOfRangeError
	 */
	var ArgumentOutOfRangeError = exports.ArgumentOutOfRangeError = function (_Error) {
	    _inherits(ArgumentOutOfRangeError, _Error);

	    function ArgumentOutOfRangeError() {
	        var _this;

	        _classCallCheck(this, ArgumentOutOfRangeError);

	        var err = (_this = _possibleConstructorReturn(this, (ArgumentOutOfRangeError.__proto__ || Object.getPrototypeOf(ArgumentOutOfRangeError)).call(this, 'argument out of range')), _this);
	        _this.name = err.name = 'ArgumentOutOfRangeError';
	        _this.stack = err.stack;
	        _this.message = err.message;
	        return _this;
	    }

	    return ArgumentOutOfRangeError;
	}(Error);
	//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _filter = __webpack_require__(177);

	_Observable.Observable.prototype.filter = _filter.filter;
	//# sourceMappingURL=filter.js.map

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.filter = filter;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Filter items emitted by the source Observable by only emitting those that
	 * satisfy a specified predicate.
	 *
	 * <span class="informal">Like
	 * [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
	 * it only emits a value from the source if it passes a criterion function.</span>
	 *
	 * <img src="./img/filter.png" width="100%">
	 *
	 * Similar to the well-known `Array.prototype.filter` method, this operator
	 * takes values from the source Observable, passes them through a `predicate`
	 * function and only emits those values that yielded `true`.
	 *
	 * @example <caption>Emit only click events whose target was a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var clicksOnDivs = clicks.filter(ev => ev.target.tagName === 'DIV');
	 * clicksOnDivs.subscribe(x => console.log(x));
	 *
	 * @see {@link distinct}
	 * @see {@link distinctKey}
	 * @see {@link distinctUntilChanged}
	 * @see {@link distinctUntilKeyChanged}
	 * @see {@link ignoreElements}
	 * @see {@link partition}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted, if `false` the value is not passed to the output
	 * Observable. The `index` parameter is the number `i` for the i-th source
	 * emission that has happened since the subscription, starting from the number
	 * `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of values from the source that were
	 * allowed by the `predicate` function.
	 * @method filter
	 * @owner Observable
	 */
	function filter(predicate, thisArg) {
	    return this.lift(new FilterOperator(predicate, thisArg));
	}

	var FilterOperator = function () {
	    function FilterOperator(predicate, thisArg) {
	        _classCallCheck(this, FilterOperator);

	        this.predicate = predicate;
	        this.thisArg = thisArg;
	    }

	    _createClass(FilterOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
	        }
	    }]);

	    return FilterOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var FilterSubscriber = function (_Subscriber) {
	    _inherits(FilterSubscriber, _Subscriber);

	    function FilterSubscriber(destination, predicate, thisArg) {
	        _classCallCheck(this, FilterSubscriber);

	        var _this = _possibleConstructorReturn(this, (FilterSubscriber.__proto__ || Object.getPrototypeOf(FilterSubscriber)).call(this, destination));

	        _this.predicate = predicate;
	        _this.thisArg = thisArg;
	        _this.count = 0;
	        _this.predicate = predicate;
	        return _this;
	    }
	    // the try catch block below is left specifically for
	    // optimization and perf reasons. a tryCatcher is not necessary here.


	    _createClass(FilterSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var result = void 0;
	            try {
	                result = this.predicate.call(this.thisArg, value, this.count++);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            if (result) {
	                this.destination.next(value);
	            }
	        }
	    }]);

	    return FilterSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=filter.js.map

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _finally2 = __webpack_require__(179);

	_Observable.Observable.prototype.finally = _finally2._finally;
	_Observable.Observable.prototype._finally = _finally2._finally;
	//# sourceMappingURL=finally.js.map

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports._finally = _finally;

	var _Subscriber2 = __webpack_require__(7);

	var _Subscription = __webpack_require__(9);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that mirrors the source Observable, but will call a specified function when
	 * the source terminates on complete or error.
	 * @param {function} callback function to be called when source terminates.
	 * @return {Observable} an Observable that mirrors the source, but will call the specified function on termination.
	 * @method finally
	 * @owner Observable
	 */
	function _finally(callback) {
	    return this.lift(new FinallyOperator(callback));
	}

	var FinallyOperator = function () {
	    function FinallyOperator(callback) {
	        _classCallCheck(this, FinallyOperator);

	        this.callback = callback;
	    }

	    _createClass(FinallyOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new FinallySubscriber(subscriber, this.callback));
	        }
	    }]);

	    return FinallyOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var FinallySubscriber = function (_Subscriber) {
	    _inherits(FinallySubscriber, _Subscriber);

	    function FinallySubscriber(destination, callback) {
	        _classCallCheck(this, FinallySubscriber);

	        var _this = _possibleConstructorReturn(this, (FinallySubscriber.__proto__ || Object.getPrototypeOf(FinallySubscriber)).call(this, destination));

	        _this.add(new _Subscription.Subscription(callback));
	        return _this;
	    }

	    return FinallySubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=finally.js.map

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _find = __webpack_require__(181);

	_Observable.Observable.prototype.find = _find.find;
	//# sourceMappingURL=find.js.map

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.FindValueSubscriber = exports.FindValueOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.find = find;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits only the first value emitted by the source Observable that meets some
	 * condition.
	 *
	 * <span class="informal">Finds the first value that passes some test and emits
	 * that.</span>
	 *
	 * <img src="./img/find.png" width="100%">
	 *
	 * `find` searches for the first item in the source Observable that matches the
	 * specified condition embodied by the `predicate`, and returns the first
	 * occurrence in the source. Unlike {@link first}, the `predicate` is required
	 * in `find`, and does not emit an error if a valid value is not found.
	 *
	 * @example <caption>Find and emit the first click that happens on a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.find(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link first}
	 * @see {@link findIndex}
	 * @see {@link take}
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
	 * A function called with each item to test for condition matching.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable<T>} An Observable of the first item that matches the
	 * condition.
	 * @method find
	 * @owner Observable
	 */
	function find(predicate, thisArg) {
	    if (typeof predicate !== 'function') {
	        throw new TypeError('predicate is not a function');
	    }
	    return this.lift(new FindValueOperator(predicate, this, false, thisArg));
	}

	var FindValueOperator = exports.FindValueOperator = function () {
	    function FindValueOperator(predicate, source, yieldIndex, thisArg) {
	        _classCallCheck(this, FindValueOperator);

	        this.predicate = predicate;
	        this.source = source;
	        this.yieldIndex = yieldIndex;
	        this.thisArg = thisArg;
	    }

	    _createClass(FindValueOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new FindValueSubscriber(observer, this.predicate, this.source, this.yieldIndex, this.thisArg));
	        }
	    }]);

	    return FindValueOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var FindValueSubscriber = exports.FindValueSubscriber = function (_Subscriber) {
	    _inherits(FindValueSubscriber, _Subscriber);

	    function FindValueSubscriber(destination, predicate, source, yieldIndex, thisArg) {
	        _classCallCheck(this, FindValueSubscriber);

	        var _this = _possibleConstructorReturn(this, (FindValueSubscriber.__proto__ || Object.getPrototypeOf(FindValueSubscriber)).call(this, destination));

	        _this.predicate = predicate;
	        _this.source = source;
	        _this.yieldIndex = yieldIndex;
	        _this.thisArg = thisArg;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(FindValueSubscriber, [{
	        key: 'notifyComplete',
	        value: function notifyComplete(value) {
	            var destination = this.destination;
	            destination.next(value);
	            destination.complete();
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            var predicate = this.predicate;
	            var thisArg = this.thisArg;

	            var index = this.index++;
	            try {
	                var result = predicate.call(thisArg || this, value, index, this.source);
	                if (result) {
	                    this.notifyComplete(this.yieldIndex ? index : value);
	                }
	            } catch (err) {
	                this.destination.error(err);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.notifyComplete(this.yieldIndex ? -1 : undefined);
	        }
	    }]);

	    return FindValueSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=find.js.map

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _findIndex = __webpack_require__(183);

	_Observable.Observable.prototype.findIndex = _findIndex.findIndex;
	//# sourceMappingURL=findIndex.js.map

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.findIndex = findIndex;

	var _find = __webpack_require__(181);

	/**
	 * Emits only the index of the first value emitted by the source Observable that
	 * meets some condition.
	 *
	 * <span class="informal">It's like {@link find}, but emits the index of the
	 * found value, not the value itself.</span>
	 *
	 * <img src="./img/findIndex.png" width="100%">
	 *
	 * `findIndex` searches for the first item in the source Observable that matches
	 * the specified condition embodied by the `predicate`, and returns the
	 * (zero-based) index of the first occurrence in the source. Unlike
	 * {@link first}, the `predicate` is required in `findIndex`, and does not emit
	 * an error if a valid value is not found.
	 *
	 * @example <caption>Emit the index of first click that happens on a DIV element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.findIndex(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link first}
	 * @see {@link take}
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} predicate
	 * A function called with each item to test for condition matching.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {Observable} An Observable of the index of the first item that
	 * matches the condition.
	 * @method find
	 * @owner Observable
	 */
	function findIndex(predicate, thisArg) {
	  return this.lift(new _find.FindValueOperator(predicate, this, true, thisArg));
	}
	//# sourceMappingURL=findIndex.js.map

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _first = __webpack_require__(185);

	_Observable.Observable.prototype.first = _first.first;
	//# sourceMappingURL=first.js.map

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.first = first;

	var _Subscriber2 = __webpack_require__(7);

	var _EmptyError = __webpack_require__(186);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits only the first value (or the first value that meets some condition)
	 * emitted by the source Observable.
	 *
	 * <span class="informal">Emits only the first value. Or emits only the first
	 * value that passes some test.</span>
	 *
	 * <img src="./img/first.png" width="100%">
	 *
	 * If called with no arguments, `first` emits the first value of the source
	 * Observable, then completes. If called with a `predicate` function, `first`
	 * emits the first value of the source that matches the specified condition. It
	 * may also take a `resultSelector` function to produce the output value from
	 * the input value, and a `defaultValue` to emit in case the source completes
	 * before it is able to emit a valid value. Throws an error if `defaultValue`
	 * was not provided and a matching element is not found.
	 *
	 * @example <caption>Emit only the first click that happens on the DOM</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first();
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Emits the first click that happens on a DIV</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.first(ev => ev.target.tagName === 'DIV');
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link filter}
	 * @see {@link find}
	 * @see {@link take}
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 *
	 * @param {function(value: T, index: number, source: Observable<T>): boolean} [predicate]
	 * An optional function called with each item to test for condition matching.
	 * @param {function(value: T, index: number): R} [resultSelector] A function to
	 * produce the value on the output Observable based on the values
	 * and the indices of the source Observable. The arguments passed to this
	 * function are:
	 * - `value`: the value that was emitted on the source.
	 * - `index`: the "index" of the value from the source.
	 * @param {R} [defaultValue] The default value emitted in case no valid value
	 * was found on the source.
	 * @return {Observable<T|R>} an Observable of the first item that matches the
	 * condition.
	 * @method first
	 * @owner Observable
	 */
	function first(predicate, resultSelector, defaultValue) {
	    return this.lift(new FirstOperator(predicate, resultSelector, defaultValue, this));
	}

	var FirstOperator = function () {
	    function FirstOperator(predicate, resultSelector, defaultValue, source) {
	        _classCallCheck(this, FirstOperator);

	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }

	    _createClass(FirstOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new FirstSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	        }
	    }]);

	    return FirstOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var FirstSubscriber = function (_Subscriber) {
	    _inherits(FirstSubscriber, _Subscriber);

	    function FirstSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _classCallCheck(this, FirstSubscriber);

	        var _this = _possibleConstructorReturn(this, (FirstSubscriber.__proto__ || Object.getPrototypeOf(FirstSubscriber)).call(this, destination));

	        _this.predicate = predicate;
	        _this.resultSelector = resultSelector;
	        _this.defaultValue = defaultValue;
	        _this.source = source;
	        _this.index = 0;
	        _this.hasCompleted = false;
	        return _this;
	    }

	    _createClass(FirstSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var index = this.index++;
	            if (this.predicate) {
	                this._tryPredicate(value, index);
	            } else {
	                this._emit(value, index);
	            }
	        }
	    }, {
	        key: '_tryPredicate',
	        value: function _tryPredicate(value, index) {
	            var result = void 0;
	            try {
	                result = this.predicate(value, index, this.source);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            if (result) {
	                this._emit(value, index);
	            }
	        }
	    }, {
	        key: '_emit',
	        value: function _emit(value, index) {
	            if (this.resultSelector) {
	                this._tryResultSelector(value, index);
	                return;
	            }
	            this._emitFinal(value);
	        }
	    }, {
	        key: '_tryResultSelector',
	        value: function _tryResultSelector(value, index) {
	            var result = void 0;
	            try {
	                result = this.resultSelector(value, index);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this._emitFinal(result);
	        }
	    }, {
	        key: '_emitFinal',
	        value: function _emitFinal(value) {
	            var destination = this.destination;
	            destination.next(value);
	            destination.complete();
	            this.hasCompleted = true;
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var destination = this.destination;
	            if (!this.hasCompleted && typeof this.defaultValue !== 'undefined') {
	                destination.next(this.defaultValue);
	                destination.complete();
	            } else if (!this.hasCompleted) {
	                destination.error(new _EmptyError.EmptyError());
	            }
	        }
	    }]);

	    return FirstSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=first.js.map

/***/ },
/* 186 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * An error thrown when an Observable or a sequence was queried but has no
	 * elements.
	 *
	 * @see {@link first}
	 * @see {@link last}
	 * @see {@link single}
	 *
	 * @class EmptyError
	 */
	var EmptyError = exports.EmptyError = function (_Error) {
	    _inherits(EmptyError, _Error);

	    function EmptyError() {
	        var _this;

	        _classCallCheck(this, EmptyError);

	        var err = (_this = _possibleConstructorReturn(this, (EmptyError.__proto__ || Object.getPrototypeOf(EmptyError)).call(this, 'no elements in sequence')), _this);
	        _this.name = err.name = 'EmptyError';
	        _this.stack = err.stack;
	        _this.message = err.message;
	        return _this;
	    }

	    return EmptyError;
	}(Error);
	//# sourceMappingURL=EmptyError.js.map

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _groupBy = __webpack_require__(188);

	_Observable.Observable.prototype.groupBy = _groupBy.groupBy;
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.GroupedObservable = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.groupBy = groupBy;

	var _Subscriber3 = __webpack_require__(7);

	var _Subscription2 = __webpack_require__(9);

	var _Observable2 = __webpack_require__(4);

	var _Subject = __webpack_require__(3);

	var _Map = __webpack_require__(189);

	var _FastMap = __webpack_require__(191);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Groups the items emitted by an Observable according to a specified criterion,
	 * and emits these grouped items as `GroupedObservables`, one
	 * {@link GroupedObservable} per group.
	 *
	 * <img src="./img/groupBy.png" width="100%">
	 *
	 * @param {function(value: T): K} keySelector a function that extracts the key
	 * for each item.
	 * @param {function(value: T): R} [elementSelector] a function that extracts the
	 * return element for each item.
	 * @param {function(grouped: GroupedObservable<K,R>): Observable<any>} [durationSelector]
	 * a function that returns an Observable to determine how long each group should
	 * exist.
	 * @return {Observable<GroupedObservable<K,R>>} an Observable that emits
	 * GroupedObservables, each of which corresponds to a unique key value and each
	 * of which emits those items from the source Observable that share that key
	 * value.
	 * @method groupBy
	 * @owner Observable
	 */
	function groupBy(keySelector, elementSelector, durationSelector) {
	    return this.lift(new GroupByOperator(this, keySelector, elementSelector, durationSelector));
	}

	var GroupByOperator = function () {
	    function GroupByOperator(source, keySelector, elementSelector, durationSelector) {
	        _classCallCheck(this, GroupByOperator);

	        this.source = source;
	        this.keySelector = keySelector;
	        this.elementSelector = elementSelector;
	        this.durationSelector = durationSelector;
	    }

	    _createClass(GroupByOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new GroupBySubscriber(subscriber, this.keySelector, this.elementSelector, this.durationSelector));
	        }
	    }]);

	    return GroupByOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var GroupBySubscriber = function (_Subscriber) {
	    _inherits(GroupBySubscriber, _Subscriber);

	    function GroupBySubscriber(destination, keySelector, elementSelector, durationSelector) {
	        _classCallCheck(this, GroupBySubscriber);

	        var _this = _possibleConstructorReturn(this, (GroupBySubscriber.__proto__ || Object.getPrototypeOf(GroupBySubscriber)).call(this, destination));

	        _this.keySelector = keySelector;
	        _this.elementSelector = elementSelector;
	        _this.durationSelector = durationSelector;
	        _this.groups = null;
	        _this.attemptedToUnsubscribe = false;
	        _this.count = 0;
	        return _this;
	    }

	    _createClass(GroupBySubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var key = void 0;
	            try {
	                key = this.keySelector(value);
	            } catch (err) {
	                this.error(err);
	                return;
	            }
	            this._group(value, key);
	        }
	    }, {
	        key: '_group',
	        value: function _group(value, key) {
	            var groups = this.groups;
	            if (!groups) {
	                groups = this.groups = typeof key === 'string' ? new _FastMap.FastMap() : new _Map.Map();
	            }
	            var group = groups.get(key);
	            var element = void 0;
	            if (this.elementSelector) {
	                try {
	                    element = this.elementSelector(value);
	                } catch (err) {
	                    this.error(err);
	                }
	            } else {
	                element = value;
	            }
	            if (!group) {
	                groups.set(key, group = new _Subject.Subject());
	                var groupedObservable = new GroupedObservable(key, group, this);
	                this.destination.next(groupedObservable);
	                if (this.durationSelector) {
	                    var duration = void 0;
	                    try {
	                        duration = this.durationSelector(new GroupedObservable(key, group));
	                    } catch (err) {
	                        this.error(err);
	                        return;
	                    }
	                    this.add(duration.subscribe(new GroupDurationSubscriber(key, group, this)));
	                }
	            }
	            if (!group.closed) {
	                group.next(element);
	            }
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            var groups = this.groups;
	            if (groups) {
	                groups.forEach(function (group, key) {
	                    group.error(err);
	                });
	                groups.clear();
	            }
	            this.destination.error(err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var groups = this.groups;
	            if (groups) {
	                groups.forEach(function (group, key) {
	                    group.complete();
	                });
	                groups.clear();
	            }
	            this.destination.complete();
	        }
	    }, {
	        key: 'removeGroup',
	        value: function removeGroup(key) {
	            this.groups.delete(key);
	        }
	    }, {
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            if (!this.closed && !this.attemptedToUnsubscribe) {
	                this.attemptedToUnsubscribe = true;
	                if (this.count === 0) {
	                    _get(GroupBySubscriber.prototype.__proto__ || Object.getPrototypeOf(GroupBySubscriber.prototype), 'unsubscribe', this).call(this);
	                }
	            }
	        }
	    }]);

	    return GroupBySubscriber;
	}(_Subscriber3.Subscriber);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var GroupDurationSubscriber = function (_Subscriber2) {
	    _inherits(GroupDurationSubscriber, _Subscriber2);

	    function GroupDurationSubscriber(key, group, parent) {
	        _classCallCheck(this, GroupDurationSubscriber);

	        var _this2 = _possibleConstructorReturn(this, (GroupDurationSubscriber.__proto__ || Object.getPrototypeOf(GroupDurationSubscriber)).call(this));

	        _this2.key = key;
	        _this2.group = group;
	        _this2.parent = parent;
	        return _this2;
	    }

	    _createClass(GroupDurationSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this._complete();
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            var group = this.group;
	            if (!group.closed) {
	                group.error(err);
	            }
	            this.parent.removeGroup(this.key);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var group = this.group;
	            if (!group.closed) {
	                group.complete();
	            }
	            this.parent.removeGroup(this.key);
	        }
	    }]);

	    return GroupDurationSubscriber;
	}(_Subscriber3.Subscriber);
	/**
	 * An Observable representing values belonging to the same group represented by
	 * a common key. The values emitted by a GroupedObservable come from the source
	 * Observable. The common key is available as the field `key` on a
	 * GroupedObservable instance.
	 *
	 * @class GroupedObservable<K, T>
	 */


	var GroupedObservable = exports.GroupedObservable = function (_Observable) {
	    _inherits(GroupedObservable, _Observable);

	    function GroupedObservable(key, groupSubject, refCountSubscription) {
	        _classCallCheck(this, GroupedObservable);

	        var _this3 = _possibleConstructorReturn(this, (GroupedObservable.__proto__ || Object.getPrototypeOf(GroupedObservable)).call(this));

	        _this3.key = key;
	        _this3.groupSubject = groupSubject;
	        _this3.refCountSubscription = refCountSubscription;
	        return _this3;
	    }

	    _createClass(GroupedObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var subscription = new _Subscription2.Subscription();
	            var refCountSubscription = this.refCountSubscription;
	            var groupSubject = this.groupSubject;

	            if (refCountSubscription && !refCountSubscription.closed) {
	                subscription.add(new InnerRefCountSubscription(refCountSubscription));
	            }
	            subscription.add(groupSubject.subscribe(subscriber));
	            return subscription;
	        }
	    }]);

	    return GroupedObservable;
	}(_Observable2.Observable);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var InnerRefCountSubscription = function (_Subscription) {
	    _inherits(InnerRefCountSubscription, _Subscription);

	    function InnerRefCountSubscription(parent) {
	        _classCallCheck(this, InnerRefCountSubscription);

	        var _this4 = _possibleConstructorReturn(this, (InnerRefCountSubscription.__proto__ || Object.getPrototypeOf(InnerRefCountSubscription)).call(this));

	        _this4.parent = parent;
	        parent.count++;
	        return _this4;
	    }

	    _createClass(InnerRefCountSubscription, [{
	        key: 'unsubscribe',
	        value: function unsubscribe() {
	            var parent = this.parent;
	            if (!parent.closed && !this.closed) {
	                _get(InnerRefCountSubscription.prototype.__proto__ || Object.getPrototypeOf(InnerRefCountSubscription.prototype), 'unsubscribe', this).call(this);
	                parent.count -= 1;
	                if (parent.count === 0 && parent.attemptedToUnsubscribe) {
	                    parent.unsubscribe();
	                }
	            }
	        }
	    }]);

	    return InnerRefCountSubscription;
	}(_Subscription2.Subscription);
	//# sourceMappingURL=groupBy.js.map

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Map = undefined;

	var _root = __webpack_require__(5);

	var _MapPolyfill = __webpack_require__(190);

	var Map = exports.Map = _root.root.Map || function () {
	  return _MapPolyfill.MapPolyfill;
	}();
	//# sourceMappingURL=Map.js.map

/***/ },
/* 190 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var MapPolyfill = exports.MapPolyfill = function () {
	    function MapPolyfill() {
	        _classCallCheck(this, MapPolyfill);

	        this.size = 0;
	        this._values = [];
	        this._keys = [];
	    }

	    _createClass(MapPolyfill, [{
	        key: "get",
	        value: function get(key) {
	            var i = this._keys.indexOf(key);
	            return i === -1 ? undefined : this._values[i];
	        }
	    }, {
	        key: "set",
	        value: function set(key, value) {
	            var i = this._keys.indexOf(key);
	            if (i === -1) {
	                this._keys.push(key);
	                this._values.push(value);
	                this.size++;
	            } else {
	                this._values[i] = value;
	            }
	            return this;
	        }
	    }, {
	        key: "delete",
	        value: function _delete(key) {
	            var i = this._keys.indexOf(key);
	            if (i === -1) {
	                return false;
	            }
	            this._values.splice(i, 1);
	            this._keys.splice(i, 1);
	            this.size--;
	            return true;
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this._keys.length = 0;
	            this._values.length = 0;
	            this.size = 0;
	        }
	    }, {
	        key: "forEach",
	        value: function forEach(cb, thisArg) {
	            for (var i = 0; i < this.size; i++) {
	                cb.call(thisArg, this._values[i], this._keys[i]);
	            }
	        }
	    }]);

	    return MapPolyfill;
	}();
	//# sourceMappingURL=MapPolyfill.js.map

/***/ },
/* 191 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var FastMap = exports.FastMap = function () {
	    function FastMap() {
	        _classCallCheck(this, FastMap);

	        this.values = {};
	    }

	    _createClass(FastMap, [{
	        key: "delete",
	        value: function _delete(key) {
	            this.values[key] = null;
	            return true;
	        }
	    }, {
	        key: "set",
	        value: function set(key, value) {
	            this.values[key] = value;
	            return this;
	        }
	    }, {
	        key: "get",
	        value: function get(key) {
	            return this.values[key];
	        }
	    }, {
	        key: "forEach",
	        value: function forEach(cb, thisArg) {
	            var values = this.values;
	            for (var key in values) {
	                if (values.hasOwnProperty(key) && values[key] !== null) {
	                    cb.call(thisArg, values[key], key);
	                }
	            }
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this.values = {};
	        }
	    }]);

	    return FastMap;
	}();
	//# sourceMappingURL=FastMap.js.map

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _ignoreElements = __webpack_require__(193);

	_Observable.Observable.prototype.ignoreElements = _ignoreElements.ignoreElements;
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.ignoreElements = ignoreElements;

	var _Subscriber2 = __webpack_require__(7);

	var _noop = __webpack_require__(89);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Ignores all items emitted by the source Observable and only passes calls of `complete` or `error`.
	 *
	 * <img src="./img/ignoreElements.png" width="100%">
	 *
	 * @return {Observable} an empty Observable that only calls `complete`
	 * or `error`, based on which one is called by the source Observable.
	 * @method ignoreElements
	 * @owner Observable
	 */
	function ignoreElements() {
	    return this.lift(new IgnoreElementsOperator());
	}
	;

	var IgnoreElementsOperator = function () {
	    function IgnoreElementsOperator() {
	        _classCallCheck(this, IgnoreElementsOperator);
	    }

	    _createClass(IgnoreElementsOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new IgnoreElementsSubscriber(subscriber));
	        }
	    }]);

	    return IgnoreElementsOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var IgnoreElementsSubscriber = function (_Subscriber) {
	    _inherits(IgnoreElementsSubscriber, _Subscriber);

	    function IgnoreElementsSubscriber() {
	        _classCallCheck(this, IgnoreElementsSubscriber);

	        return _possibleConstructorReturn(this, (IgnoreElementsSubscriber.__proto__ || Object.getPrototypeOf(IgnoreElementsSubscriber)).apply(this, arguments));
	    }

	    _createClass(IgnoreElementsSubscriber, [{
	        key: '_next',
	        value: function _next(unused) {
	            (0, _noop.noop)();
	        }
	    }]);

	    return IgnoreElementsSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=ignoreElements.js.map

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _isEmpty = __webpack_require__(195);

	_Observable.Observable.prototype.isEmpty = _isEmpty.isEmpty;
	//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.isEmpty = isEmpty;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * If the source Observable is empty it returns an Observable that emits true, otherwise it emits false.
	 *
	 * <img src="./img/isEmpty.png" width="100%">
	 *
	 * @return {Observable} an Observable that emits a Boolean.
	 * @method isEmpty
	 * @owner Observable
	 */
	function isEmpty() {
	    return this.lift(new IsEmptyOperator());
	}

	var IsEmptyOperator = function () {
	    function IsEmptyOperator() {
	        _classCallCheck(this, IsEmptyOperator);
	    }

	    _createClass(IsEmptyOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new IsEmptySubscriber(observer));
	        }
	    }]);

	    return IsEmptyOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var IsEmptySubscriber = function (_Subscriber) {
	    _inherits(IsEmptySubscriber, _Subscriber);

	    function IsEmptySubscriber(destination) {
	        _classCallCheck(this, IsEmptySubscriber);

	        return _possibleConstructorReturn(this, (IsEmptySubscriber.__proto__ || Object.getPrototypeOf(IsEmptySubscriber)).call(this, destination));
	    }

	    _createClass(IsEmptySubscriber, [{
	        key: 'notifyComplete',
	        value: function notifyComplete(isEmpty) {
	            var destination = this.destination;
	            destination.next(isEmpty);
	            destination.complete();
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.notifyComplete(false);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.notifyComplete(true);
	        }
	    }]);

	    return IsEmptySubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=isEmpty.js.map

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _audit = __webpack_require__(197);

	_Observable.Observable.prototype.audit = _audit.audit;
	//# sourceMappingURL=audit.js.map

/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.audit = audit;

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Ignores source values for a duration determined by another Observable, then
	 * emits the most recent value from the source Observable, then repeats this
	 * process.
	 *
	 * <span class="informal">It's like {@link auditTime}, but the silencing
	 * duration is determined by a second Observable.</span>
	 *
	 * <img src="./img/audit.png" width="100%">
	 *
	 * `audit` is similar to `throttle`, but emits the last value from the silenced
	 * time window, instead of the first value. `audit` emits the most recent value
	 * from the source Observable on the output Observable as soon as its internal
	 * timer becomes disabled, and ignores source values while the timer is enabled.
	 * Initially, the timer is disabled. As soon as the first source value arrives,
	 * the timer is enabled by calling the `durationSelector` function with the
	 * source value, which returns the "duration" Observable. When the duration
	 * Observable emits a value or completes, the timer is disabled, then the most
	 * recent source value is emitted on the output Observable, and this process
	 * repeats for the next source value.
	 *
	 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.audit(ev => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link auditTime}
	 * @see {@link debounce}
	 * @see {@link delayWhen}
	 * @see {@link sample}
	 * @see {@link throttle}
	 *
	 * @param {function(value: T): Observable|Promise} durationSelector A function
	 * that receives a value from the source Observable, for computing the silencing
	 * duration, returned as an Observable or a Promise.
	 * @return {Observable<T>} An Observable that performs rate-limiting of
	 * emissions from the source Observable.
	 * @method audit
	 * @owner Observable
	 */
	function audit(durationSelector) {
	    return this.lift(new AuditOperator(durationSelector));
	}

	var AuditOperator = function () {
	    function AuditOperator(durationSelector) {
	        _classCallCheck(this, AuditOperator);

	        this.durationSelector = durationSelector;
	    }

	    _createClass(AuditOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new AuditSubscriber(subscriber, this.durationSelector));
	        }
	    }]);

	    return AuditOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var AuditSubscriber = function (_OuterSubscriber) {
	    _inherits(AuditSubscriber, _OuterSubscriber);

	    function AuditSubscriber(destination, durationSelector) {
	        _classCallCheck(this, AuditSubscriber);

	        var _this = _possibleConstructorReturn(this, (AuditSubscriber.__proto__ || Object.getPrototypeOf(AuditSubscriber)).call(this, destination));

	        _this.durationSelector = durationSelector;
	        _this.hasValue = false;
	        return _this;
	    }

	    _createClass(AuditSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.value = value;
	            this.hasValue = true;
	            if (!this.throttled) {
	                var duration = (0, _tryCatch.tryCatch)(this.durationSelector)(value);
	                if (duration === _errorObject.errorObject) {
	                    this.destination.error(_errorObject.errorObject.e);
	                } else {
	                    this.add(this.throttled = (0, _subscribeToResult.subscribeToResult)(this, duration));
	                }
	            }
	        }
	    }, {
	        key: 'clearThrottle',
	        value: function clearThrottle() {
	            var value = this.value;
	            var hasValue = this.hasValue;
	            var throttled = this.throttled;

	            if (throttled) {
	                this.remove(throttled);
	                this.throttled = null;
	                throttled.unsubscribe();
	            }
	            if (hasValue) {
	                this.value = null;
	                this.hasValue = false;
	                this.destination.next(value);
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex) {
	            this.clearThrottle();
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            this.clearThrottle();
	        }
	    }]);

	    return AuditSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=audit.js.map

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _auditTime = __webpack_require__(199);

	_Observable.Observable.prototype.auditTime = _auditTime.auditTime;
	//# sourceMappingURL=auditTime.js.map

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.auditTime = auditTime;

	var _async = __webpack_require__(76);

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Ignores source values for `duration` milliseconds, then emits the most recent
	 * value from the source Observable, then repeats this process.
	 *
	 * <span class="informal">When it sees a source values, it ignores that plus
	 * the next ones for `duration` milliseconds, and then it emits the most recent
	 * value from the source.</span>
	 *
	 * <img src="./img/auditTime.png" width="100%">
	 *
	 * `auditTime` is similar to `throttleTime`, but emits the last value from the
	 * silenced time window, instead of the first value. `auditTime` emits the most
	 * recent value from the source Observable on the output Observable as soon as
	 * its internal timer becomes disabled, and ignores source values while the
	 * timer is enabled. Initially, the timer is disabled. As soon as the first
	 * source value arrives, the timer is enabled. After `duration` milliseconds (or
	 * the time unit determined internally by the optional `scheduler`) has passed,
	 * the timer is disabled, then the most recent source value is emitted on the
	 * output Observable, and this process repeats for the next source value.
	 * Optionally takes a {@link Scheduler} for managing timers.
	 *
	 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.auditTime(1000);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link audit}
	 * @see {@link debounceTime}
	 * @see {@link delay}
	 * @see {@link sampleTime}
	 * @see {@link throttleTime}
	 *
	 * @param {number} duration Time to wait before emitting the most recent source
	 * value, measured in milliseconds or the time unit determined internally
	 * by the optional `scheduler`.
	 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
	 * managing the timers that handle the rate-limiting behavior.
	 * @return {Observable<T>} An Observable that performs rate-limiting of
	 * emissions from the source Observable.
	 * @method auditTime
	 * @owner Observable
	 */
	function auditTime(duration) {
	    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _async.async : arguments[1];

	    return this.lift(new AuditTimeOperator(duration, scheduler));
	}

	var AuditTimeOperator = function () {
	    function AuditTimeOperator(duration, scheduler) {
	        _classCallCheck(this, AuditTimeOperator);

	        this.duration = duration;
	        this.scheduler = scheduler;
	    }

	    _createClass(AuditTimeOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new AuditTimeSubscriber(subscriber, this.duration, this.scheduler));
	        }
	    }]);

	    return AuditTimeOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var AuditTimeSubscriber = function (_Subscriber) {
	    _inherits(AuditTimeSubscriber, _Subscriber);

	    function AuditTimeSubscriber(destination, duration, scheduler) {
	        _classCallCheck(this, AuditTimeSubscriber);

	        var _this = _possibleConstructorReturn(this, (AuditTimeSubscriber.__proto__ || Object.getPrototypeOf(AuditTimeSubscriber)).call(this, destination));

	        _this.duration = duration;
	        _this.scheduler = scheduler;
	        _this.hasValue = false;
	        return _this;
	    }

	    _createClass(AuditTimeSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.value = value;
	            this.hasValue = true;
	            if (!this.throttled) {
	                this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, this));
	            }
	        }
	    }, {
	        key: 'clearThrottle',
	        value: function clearThrottle() {
	            var value = this.value;
	            var hasValue = this.hasValue;
	            var throttled = this.throttled;

	            if (throttled) {
	                this.remove(throttled);
	                this.throttled = null;
	                throttled.unsubscribe();
	            }
	            if (hasValue) {
	                this.value = null;
	                this.hasValue = false;
	                this.destination.next(value);
	            }
	        }
	    }]);

	    return AuditTimeSubscriber;
	}(_Subscriber2.Subscriber);

	function dispatchNext(subscriber) {
	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=auditTime.js.map

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _last = __webpack_require__(201);

	_Observable.Observable.prototype.last = _last.last;
	//# sourceMappingURL=last.js.map

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.last = last;

	var _Subscriber2 = __webpack_require__(7);

	var _EmptyError = __webpack_require__(186);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that emits only the last item emitted by the source Observable.
	 * It optionally takes a predicate function as a parameter, in which case, rather than emitting
	 * the last item from the source Observable, the resulting Observable will emit the last item
	 * from the source Observable that satisfies the predicate.
	 *
	 * <img src="./img/last.png" width="100%">
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 * @param {function} predicate - the condition any source emitted item has to satisfy.
	 * @return {Observable} an Observable that emits only the last item satisfying the given condition
	 * from the source, or an NoSuchElementException if no such items are emitted.
	 * @throws - Throws if no items that match the predicate are emitted by the source Observable.
	 * @method last
	 * @owner Observable
	 */
	function last(predicate, resultSelector, defaultValue) {
	    return this.lift(new LastOperator(predicate, resultSelector, defaultValue, this));
	}

	var LastOperator = function () {
	    function LastOperator(predicate, resultSelector, defaultValue, source) {
	        _classCallCheck(this, LastOperator);

	        this.predicate = predicate;
	        this.resultSelector = resultSelector;
	        this.defaultValue = defaultValue;
	        this.source = source;
	    }

	    _createClass(LastOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new LastSubscriber(observer, this.predicate, this.resultSelector, this.defaultValue, this.source));
	        }
	    }]);

	    return LastOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var LastSubscriber = function (_Subscriber) {
	    _inherits(LastSubscriber, _Subscriber);

	    function LastSubscriber(destination, predicate, resultSelector, defaultValue, source) {
	        _classCallCheck(this, LastSubscriber);

	        var _this = _possibleConstructorReturn(this, (LastSubscriber.__proto__ || Object.getPrototypeOf(LastSubscriber)).call(this, destination));

	        _this.predicate = predicate;
	        _this.resultSelector = resultSelector;
	        _this.defaultValue = defaultValue;
	        _this.source = source;
	        _this.hasValue = false;
	        _this.index = 0;
	        if (typeof defaultValue !== 'undefined') {
	            _this.lastValue = defaultValue;
	            _this.hasValue = true;
	        }
	        return _this;
	    }

	    _createClass(LastSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var index = this.index++;
	            if (this.predicate) {
	                this._tryPredicate(value, index);
	            } else {
	                if (this.resultSelector) {
	                    this._tryResultSelector(value, index);
	                    return;
	                }
	                this.lastValue = value;
	                this.hasValue = true;
	            }
	        }
	    }, {
	        key: '_tryPredicate',
	        value: function _tryPredicate(value, index) {
	            var result = void 0;
	            try {
	                result = this.predicate(value, index, this.source);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            if (result) {
	                if (this.resultSelector) {
	                    this._tryResultSelector(value, index);
	                    return;
	                }
	                this.lastValue = value;
	                this.hasValue = true;
	            }
	        }
	    }, {
	        key: '_tryResultSelector',
	        value: function _tryResultSelector(value, index) {
	            var result = void 0;
	            try {
	                result = this.resultSelector(value, index);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.lastValue = result;
	            this.hasValue = true;
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var destination = this.destination;
	            if (this.hasValue) {
	                destination.next(this.lastValue);
	                destination.complete();
	            } else {
	                destination.error(new _EmptyError.EmptyError());
	            }
	        }
	    }]);

	    return LastSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=last.js.map

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _let = __webpack_require__(203);

	_Observable.Observable.prototype.let = _let.letProto;
	_Observable.Observable.prototype.letBind = _let.letProto;
	//# sourceMappingURL=let.js.map

/***/ },
/* 203 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.letProto = letProto;
	/**
	 * @param func
	 * @return {Observable<R>}
	 * @method let
	 * @owner Observable
	 */
	function letProto(func) {
	  return func(this);
	}
	//# sourceMappingURL=let.js.map

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _every = __webpack_require__(205);

	_Observable.Observable.prototype.every = _every.every;
	//# sourceMappingURL=every.js.map

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.every = every;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that emits whether or not every item of the source satisfies the condition specified.
	 * @param {function} predicate a function for determining if an item meets a specified condition.
	 * @param {any} [thisArg] optional object to use for `this` in the callback
	 * @return {Observable} an Observable of booleans that determines if all items of the source Observable meet the condition specified.
	 * @method every
	 * @owner Observable
	 */
	function every(predicate, thisArg) {
	    return this.lift(new EveryOperator(predicate, thisArg, this));
	}

	var EveryOperator = function () {
	    function EveryOperator(predicate, thisArg, source) {
	        _classCallCheck(this, EveryOperator);

	        this.predicate = predicate;
	        this.thisArg = thisArg;
	        this.source = source;
	    }

	    _createClass(EveryOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new EverySubscriber(observer, this.predicate, this.thisArg, this.source));
	        }
	    }]);

	    return EveryOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var EverySubscriber = function (_Subscriber) {
	    _inherits(EverySubscriber, _Subscriber);

	    function EverySubscriber(destination, predicate, thisArg, source) {
	        _classCallCheck(this, EverySubscriber);

	        var _this = _possibleConstructorReturn(this, (EverySubscriber.__proto__ || Object.getPrototypeOf(EverySubscriber)).call(this, destination));

	        _this.predicate = predicate;
	        _this.thisArg = thisArg;
	        _this.source = source;
	        _this.index = 0;
	        _this.thisArg = thisArg || _this;
	        return _this;
	    }

	    _createClass(EverySubscriber, [{
	        key: 'notifyComplete',
	        value: function notifyComplete(everyValueMatch) {
	            this.destination.next(everyValueMatch);
	            this.destination.complete();
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            var result = false;
	            try {
	                result = this.predicate.call(this.thisArg, value, this.index++, this.source);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            if (!result) {
	                this.notifyComplete(false);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.notifyComplete(true);
	        }
	    }]);

	    return EverySubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=every.js.map

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _map = __webpack_require__(207);

	_Observable.Observable.prototype.map = _map.map;
	//# sourceMappingURL=map.js.map

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MapOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.map = map;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Applies a given `project` function to each value emitted by the source
	 * Observable, and emits the resulting values as an Observable.
	 *
	 * <span class="informal">Like [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map),
	 * it passes each source value through a transformation function to get
	 * corresponding output values.</span>
	 *
	 * <img src="./img/map.png" width="100%">
	 *
	 * Similar to the well known `Array.prototype.map` function, this operator
	 * applies a projection to each value and emits that projection in the output
	 * Observable.
	 *
	 * @example <caption>Map every every click to the clientX position of that click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var positions = clicks.map(ev => ev.clientX);
	 * positions.subscribe(x => console.log(x));
	 *
	 * @see {@link mapTo}
	 * @see {@link pluck}
	 *
	 * @param {function(value: T, index: number): R} project The function to apply
	 * to each `value` emitted by the source Observable. The `index` parameter is
	 * the number `i` for the i-th emission that has happened since the
	 * subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to define what `this` is in the
	 * `project` function.
	 * @return {Observable<R>} An Observable that emits the values from the source
	 * Observable transformed by the given `project` function.
	 * @method map
	 * @owner Observable
	 */
	function map(project, thisArg) {
	    if (typeof project !== 'function') {
	        throw new TypeError('argument is not a function. Are you looking for `mapTo()`?');
	    }
	    return this.lift(new MapOperator(project, thisArg));
	}

	var MapOperator = exports.MapOperator = function () {
	    function MapOperator(project, thisArg) {
	        _classCallCheck(this, MapOperator);

	        this.project = project;
	        this.thisArg = thisArg;
	    }

	    _createClass(MapOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new MapSubscriber(subscriber, this.project, this.thisArg));
	        }
	    }]);

	    return MapOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var MapSubscriber = function (_Subscriber) {
	    _inherits(MapSubscriber, _Subscriber);

	    function MapSubscriber(destination, project, thisArg) {
	        _classCallCheck(this, MapSubscriber);

	        var _this = _possibleConstructorReturn(this, (MapSubscriber.__proto__ || Object.getPrototypeOf(MapSubscriber)).call(this, destination));

	        _this.project = project;
	        _this.count = 0;
	        _this.thisArg = thisArg || _this;
	        return _this;
	    }
	    // NOTE: This looks unoptimized, but it's actually purposefully NOT
	    // using try/catch optimizations.


	    _createClass(MapSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var result = void 0;
	            try {
	                result = this.project.call(this.thisArg, value, this.count++);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.destination.next(result);
	        }
	    }]);

	    return MapSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=map.js.map

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _mapTo = __webpack_require__(209);

	_Observable.Observable.prototype.mapTo = _mapTo.mapTo;
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.mapTo = mapTo;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits the given constant value on the output Observable every time the source
	 * Observable emits a value.
	 *
	 * <span class="informal">Like {@link map}, but it maps every source value to
	 * the same output value every time.</span>
	 *
	 * <img src="./img/mapTo.png" width="100%">
	 *
	 * Takes a constant `value` as argument, and emits that whenever the source
	 * Observable emits a value. In other words, ignores the actual source value,
	 * and simply uses the emission moment to know when to emit the given `value`.
	 *
	 * @example <caption>Map every every click to the string 'Hi'</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var greetings = clicks.mapTo('Hi');
	 * greetings.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {any} value The value to map each source value to.
	 * @return {Observable} An Observable that emits the given `value` every time
	 * the source Observable emits something.
	 * @method mapTo
	 * @owner Observable
	 */
	function mapTo(value) {
	    return this.lift(new MapToOperator(value));
	}

	var MapToOperator = function () {
	    function MapToOperator(value) {
	        _classCallCheck(this, MapToOperator);

	        this.value = value;
	    }

	    _createClass(MapToOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new MapToSubscriber(subscriber, this.value));
	        }
	    }]);

	    return MapToOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var MapToSubscriber = function (_Subscriber) {
	    _inherits(MapToSubscriber, _Subscriber);

	    function MapToSubscriber(destination, value) {
	        _classCallCheck(this, MapToSubscriber);

	        var _this = _possibleConstructorReturn(this, (MapToSubscriber.__proto__ || Object.getPrototypeOf(MapToSubscriber)).call(this, destination));

	        _this.value = value;
	        return _this;
	    }

	    _createClass(MapToSubscriber, [{
	        key: '_next',
	        value: function _next(x) {
	            this.destination.next(this.value);
	        }
	    }]);

	    return MapToSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=mapTo.js.map

/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _materialize = __webpack_require__(211);

	_Observable.Observable.prototype.materialize = _materialize.materialize;
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.materialize = materialize;

	var _Subscriber2 = __webpack_require__(7);

	var _Notification = __webpack_require__(58);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Represents all of the notifications from the source Observable as `next`
	 * emissions marked with their original types within {@link Notification}
	 * objects.
	 *
	 * <span class="informal">Wraps `next`, `error` and `complete` emissions in
	 * {@link Notification} objects, emitted as `next` on the output Observable.
	 * </span>
	 *
	 * <img src="./img/materialize.png" width="100%">
	 *
	 * `materialize` returns an Observable that emits a `next` notification for each
	 * `next`, `error`, or `complete` emission of the source Observable. When the
	 * source Observable emits `complete`, the output Observable will emit `next` as
	 * a Notification of type "complete", and then it will emit `complete` as well.
	 * When the source Observable emits `error`, the output will emit `next` as a
	 * Notification of type "error", and then `complete`.
	 *
	 * This operator is useful for producing metadata of the source Observable, to
	 * be consumed as `next` emissions. Use it in conjunction with
	 * {@link dematerialize}.
	 *
	 * @example <caption>Convert a faulty Observable to an Observable of Notifications</caption>
	 * var letters = Rx.Observable.of('a', 'b', 13, 'd');
	 * var upperCase = letters.map(x => x.toUpperCase());
	 * var materialized = upperCase.materialize();
	 * materialized.subscribe(x => console.log(x));
	 *
	 * @see {@link Notification}
	 * @see {@link dematerialize}
	 *
	 * @return {Observable<Notification<T>>} An Observable that emits
	 * {@link Notification} objects that wrap the original emissions from the source
	 * Observable with metadata.
	 * @method materialize
	 * @owner Observable
	 */
	function materialize() {
	    return this.lift(new MaterializeOperator());
	}

	var MaterializeOperator = function () {
	    function MaterializeOperator() {
	        _classCallCheck(this, MaterializeOperator);
	    }

	    _createClass(MaterializeOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new MaterializeSubscriber(subscriber));
	        }
	    }]);

	    return MaterializeOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var MaterializeSubscriber = function (_Subscriber) {
	    _inherits(MaterializeSubscriber, _Subscriber);

	    function MaterializeSubscriber(destination) {
	        _classCallCheck(this, MaterializeSubscriber);

	        return _possibleConstructorReturn(this, (MaterializeSubscriber.__proto__ || Object.getPrototypeOf(MaterializeSubscriber)).call(this, destination));
	    }

	    _createClass(MaterializeSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.destination.next(_Notification.Notification.createNext(value));
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            var destination = this.destination;
	            destination.next(_Notification.Notification.createError(err));
	            destination.complete();
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var destination = this.destination;
	            destination.next(_Notification.Notification.createComplete());
	            destination.complete();
	        }
	    }]);

	    return MaterializeSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=materialize.js.map

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _max = __webpack_require__(213);

	_Observable.Observable.prototype.max = _max.max;
	//# sourceMappingURL=max.js.map

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.max = max;

	var _reduce = __webpack_require__(214);

	/**
	 * The Max operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
	 * and when source Observable completes it emits a single item: the item with the largest number.
	 *
	 * <img src="./img/max.png" width="100%">
	 *
	 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two
	 * items.
	 * @return {Observable} an Observable that emits item with the largest number.
	 * @method max
	 * @owner Observable
	 */
	function max(comparer) {
	    var max = typeof comparer === 'function' ? function (x, y) {
	        return comparer(x, y) > 0 ? x : y;
	    } : function (x, y) {
	        return x > y ? x : y;
	    };
	    return this.lift(new _reduce.ReduceOperator(max));
	}
	//# sourceMappingURL=max.js.map

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ReduceSubscriber = exports.ReduceOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.reduce = reduce;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Applies an accumulator function over the source Observable, and returns the
	 * accumulated result when the source completes, given an optional seed value.
	 *
	 * <span class="informal">Combines together all values emitted on the source,
	 * using an accumulator function that knows how to join a new source value into
	 * the accumulation from the past.</span>
	 *
	 * <img src="./img/reduce.png" width="100%">
	 *
	 * Like
	 * [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce),
	 * `reduce` applies an `accumulator` function against an accumulation and each
	 * value of the source Observable (from the past) to reduce it to a single
	 * value, emitted on the output Observable. Note that `reduce` will only emit
	 * one value, only when the source Observable completes. It is equivalent to
	 * applying operator {@link scan} followed by operator {@link last}.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events that happened in 5 seconds</caption>
	 * var clicksInFiveSeconds = Rx.Observable.fromEvent(document, 'click')
	 *   .takeUntil(Rx.Observable.interval(5000));
	 * var ones = clicksInFiveSeconds.mapTo(1);
	 * var seed = 0;
	 * var count = ones.reduce((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link count}
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link scan}
	 *
	 * @param {function(acc: R, value: T): R} accumulator The accumulator function
	 * called on each source value.
	 * @param {R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @return {Observable<R>} An Observable that emits a single value that is the
	 * result of accumulating the values emitted by the source Observable.
	 * @method reduce
	 * @owner Observable
	 */
	function reduce(accumulator, seed) {
	    return this.lift(new ReduceOperator(accumulator, seed));
	}

	var ReduceOperator = exports.ReduceOperator = function () {
	    function ReduceOperator(accumulator, seed) {
	        _classCallCheck(this, ReduceOperator);

	        this.accumulator = accumulator;
	        this.seed = seed;
	    }

	    _createClass(ReduceOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new ReduceSubscriber(subscriber, this.accumulator, this.seed));
	        }
	    }]);

	    return ReduceOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ReduceSubscriber = exports.ReduceSubscriber = function (_Subscriber) {
	    _inherits(ReduceSubscriber, _Subscriber);

	    function ReduceSubscriber(destination, accumulator, seed) {
	        _classCallCheck(this, ReduceSubscriber);

	        var _this = _possibleConstructorReturn(this, (ReduceSubscriber.__proto__ || Object.getPrototypeOf(ReduceSubscriber)).call(this, destination));

	        _this.accumulator = accumulator;
	        _this.hasValue = false;
	        _this.acc = seed;
	        _this.accumulator = accumulator;
	        _this.hasSeed = typeof seed !== 'undefined';
	        return _this;
	    }

	    _createClass(ReduceSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (this.hasValue || (this.hasValue = this.hasSeed)) {
	                this._tryReduce(value);
	            } else {
	                this.acc = value;
	                this.hasValue = true;
	            }
	        }
	    }, {
	        key: '_tryReduce',
	        value: function _tryReduce(value) {
	            var result = void 0;
	            try {
	                result = this.accumulator(this.acc, value);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.acc = result;
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            if (this.hasValue || this.hasSeed) {
	                this.destination.next(this.acc);
	            }
	            this.destination.complete();
	        }
	    }]);

	    return ReduceSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _merge = __webpack_require__(83);

	_Observable.Observable.prototype.merge = _merge.merge;
	//# sourceMappingURL=merge.js.map

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _mergeAll = __webpack_require__(42);

	_Observable.Observable.prototype.mergeAll = _mergeAll.mergeAll;
	//# sourceMappingURL=mergeAll.js.map

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _mergeMap = __webpack_require__(139);

	_Observable.Observable.prototype.mergeMap = _mergeMap.mergeMap;
	_Observable.Observable.prototype.flatMap = _mergeMap.mergeMap;
	//# sourceMappingURL=mergeMap.js.map

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _mergeMapTo = __webpack_require__(142);

	_Observable.Observable.prototype.flatMapTo = _mergeMapTo.mergeMapTo;
	_Observable.Observable.prototype.mergeMapTo = _mergeMapTo.mergeMapTo;
	//# sourceMappingURL=mergeMapTo.js.map

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _mergeScan = __webpack_require__(220);

	_Observable.Observable.prototype.mergeScan = _mergeScan.mergeScan;
	//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MergeScanSubscriber = exports.MergeScanOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.mergeScan = mergeScan;

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _subscribeToResult = __webpack_require__(35);

	var _OuterSubscriber2 = __webpack_require__(34);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @param project
	 * @param seed
	 * @param concurrent
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method mergeScan
	 * @owner Observable
	 */
	function mergeScan(project, seed) {
	    var concurrent = arguments.length <= 2 || arguments[2] === undefined ? Number.POSITIVE_INFINITY : arguments[2];

	    return this.lift(new MergeScanOperator(project, seed, concurrent));
	}

	var MergeScanOperator = exports.MergeScanOperator = function () {
	    function MergeScanOperator(project, seed, concurrent) {
	        _classCallCheck(this, MergeScanOperator);

	        this.project = project;
	        this.seed = seed;
	        this.concurrent = concurrent;
	    }

	    _createClass(MergeScanOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new MergeScanSubscriber(subscriber, this.project, this.seed, this.concurrent));
	        }
	    }]);

	    return MergeScanOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var MergeScanSubscriber = exports.MergeScanSubscriber = function (_OuterSubscriber) {
	    _inherits(MergeScanSubscriber, _OuterSubscriber);

	    function MergeScanSubscriber(destination, project, acc, concurrent) {
	        _classCallCheck(this, MergeScanSubscriber);

	        var _this = _possibleConstructorReturn(this, (MergeScanSubscriber.__proto__ || Object.getPrototypeOf(MergeScanSubscriber)).call(this, destination));

	        _this.project = project;
	        _this.acc = acc;
	        _this.concurrent = concurrent;
	        _this.hasValue = false;
	        _this.hasCompleted = false;
	        _this.buffer = [];
	        _this.active = 0;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(MergeScanSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (this.active < this.concurrent) {
	                var index = this.index++;
	                var ish = (0, _tryCatch.tryCatch)(this.project)(this.acc, value);
	                var destination = this.destination;
	                if (ish === _errorObject.errorObject) {
	                    destination.error(_errorObject.errorObject.e);
	                } else {
	                    this.active++;
	                    this._innerSub(ish, value, index);
	                }
	            } else {
	                this.buffer.push(value);
	            }
	        }
	    }, {
	        key: '_innerSub',
	        value: function _innerSub(ish, value, index) {
	            this.add((0, _subscribeToResult.subscribeToResult)(this, ish, value, index));
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.hasCompleted = true;
	            if (this.active === 0 && this.buffer.length === 0) {
	                if (this.hasValue === false) {
	                    this.destination.next(this.acc);
	                }
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            var destination = this.destination;

	            this.acc = innerValue;
	            this.hasValue = true;
	            destination.next(innerValue);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            var buffer = this.buffer;
	            this.remove(innerSub);
	            this.active--;
	            if (buffer.length > 0) {
	                this._next(buffer.shift());
	            } else if (this.active === 0 && this.hasCompleted) {
	                if (this.hasValue === false) {
	                    this.destination.next(this.acc);
	                }
	                this.destination.complete();
	            }
	        }
	    }]);

	    return MergeScanSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=mergeScan.js.map

/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _min = __webpack_require__(222);

	_Observable.Observable.prototype.min = _min.min;
	//# sourceMappingURL=min.js.map

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.min = min;

	var _reduce = __webpack_require__(214);

	/**
	 * The Min operator operates on an Observable that emits numbers (or items that can be evaluated as numbers),
	 * and when source Observable completes it emits a single item: the item with the smallest number.
	 *
	 * <img src="./img/min.png" width="100%">
	 *
	 * @param {Function} optional comparer function that it will use instead of its default to compare the value of two items.
	 * @return {Observable<R>} an Observable that emits item with the smallest number.
	 * @method min
	 * @owner Observable
	 */
	function min(comparer) {
	    var min = typeof comparer === 'function' ? function (x, y) {
	        return comparer(x, y) < 0 ? x : y;
	    } : function (x, y) {
	        return x < y ? x : y;
	    };
	    return this.lift(new _reduce.ReduceOperator(min));
	}
	//# sourceMappingURL=min.js.map

/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _multicast = __webpack_require__(224);

	_Observable.Observable.prototype.multicast = _multicast.multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.multicast = multicast;

	var _MulticastObservable = __webpack_require__(225);

	var _ConnectableObservable = __webpack_require__(226);

	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function|Subject} Factory function to create an intermediate subject through
	 * which the source sequence's elements will be multicast to the selector function
	 * or Subject to push source elements into.
	 * @param {Function} Optional selector function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory, selector) {
	    var subjectFactory = void 0;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    } else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return !selector ? new _ConnectableObservable.ConnectableObservable(this, subjectFactory) : new _MulticastObservable.MulticastObservable(this, subjectFactory, selector);
	}
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.MulticastObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _ConnectableObservable = __webpack_require__(226);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var MulticastObservable = exports.MulticastObservable = function (_Observable) {
	    _inherits(MulticastObservable, _Observable);

	    function MulticastObservable(source, subjectFactory, selector) {
	        _classCallCheck(this, MulticastObservable);

	        var _this = _possibleConstructorReturn(this, (MulticastObservable.__proto__ || Object.getPrototypeOf(MulticastObservable)).call(this));

	        _this.source = source;
	        _this.subjectFactory = subjectFactory;
	        _this.selector = selector;
	        return _this;
	    }

	    _createClass(MulticastObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var selector = this.selector;
	            var source = this.source;

	            var connectable = new _ConnectableObservable.ConnectableObservable(source, this.subjectFactory);
	            var subscription = selector(connectable).subscribe(subscriber);
	            subscription.add(connectable.connect());
	            return subscription;
	        }
	    }]);

	    return MulticastObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=MulticastObservable.js.map

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ConnectableObservable = undefined;

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Subject = __webpack_require__(3);

	var _Observable2 = __webpack_require__(4);

	var _Subscriber2 = __webpack_require__(7);

	var _Subscription = __webpack_require__(9);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = exports.ConnectableObservable = function (_Observable) {
	    _inherits(ConnectableObservable, _Observable);

	    function ConnectableObservable(source, subjectFactory) {
	        _classCallCheck(this, ConnectableObservable);

	        var _this = _possibleConstructorReturn(this, (ConnectableObservable.__proto__ || Object.getPrototypeOf(ConnectableObservable)).call(this));

	        _this.source = source;
	        _this.subjectFactory = subjectFactory;
	        _this._refCount = 0;
	        return _this;
	    }

	    _createClass(ConnectableObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            return this.getSubject().subscribe(subscriber);
	        }
	    }, {
	        key: 'getSubject',
	        value: function getSubject() {
	            var subject = this._subject;
	            if (!subject || subject.isStopped) {
	                this._subject = this.subjectFactory();
	            }
	            return this._subject;
	        }
	    }, {
	        key: 'connect',
	        value: function connect() {
	            var connection = this._connection;
	            if (!connection) {
	                connection = this._connection = new _Subscription.Subscription();
	                connection.add(this.source.subscribe(new ConnectableSubscriber(this.getSubject(), this)));
	                if (connection.closed) {
	                    this._connection = null;
	                    connection = _Subscription.Subscription.EMPTY;
	                } else {
	                    this._connection = connection;
	                }
	            }
	            return connection;
	        }
	    }, {
	        key: 'refCount',
	        value: function refCount() {
	            return this.lift(new RefCountOperator(this));
	        }
	    }]);

	    return ConnectableObservable;
	}(_Observable2.Observable);

	var ConnectableSubscriber = function (_SubjectSubscriber) {
	    _inherits(ConnectableSubscriber, _SubjectSubscriber);

	    function ConnectableSubscriber(destination, connectable) {
	        _classCallCheck(this, ConnectableSubscriber);

	        var _this2 = _possibleConstructorReturn(this, (ConnectableSubscriber.__proto__ || Object.getPrototypeOf(ConnectableSubscriber)).call(this, destination));

	        _this2.connectable = connectable;
	        return _this2;
	    }

	    _createClass(ConnectableSubscriber, [{
	        key: '_error',
	        value: function _error(err) {
	            this._unsubscribe();
	            _get(ConnectableSubscriber.prototype.__proto__ || Object.getPrototypeOf(ConnectableSubscriber.prototype), '_error', this).call(this, err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this._unsubscribe();
	            _get(ConnectableSubscriber.prototype.__proto__ || Object.getPrototypeOf(ConnectableSubscriber.prototype), '_complete', this).call(this);
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var connectable = this.connectable;

	            if (connectable) {
	                this.connectable = null;
	                var connection = connectable._connection;
	                connectable._refCount = 0;
	                connectable._subject = null;
	                connectable._connection = null;
	                if (connection) {
	                    connection.unsubscribe();
	                }
	            }
	        }
	    }]);

	    return ConnectableSubscriber;
	}(_Subject.SubjectSubscriber);

	var RefCountOperator = function () {
	    function RefCountOperator(connectable) {
	        _classCallCheck(this, RefCountOperator);

	        this.connectable = connectable;
	    }

	    _createClass(RefCountOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            var connectable = this.connectable;

	            connectable._refCount++;
	            var refCounter = new RefCountSubscriber(subscriber, connectable);
	            var subscription = source._subscribe(refCounter);
	            if (!refCounter.closed) {
	                refCounter.connection = connectable.connect();
	            }
	            return subscription;
	        }
	    }]);

	    return RefCountOperator;
	}();

	var RefCountSubscriber = function (_Subscriber) {
	    _inherits(RefCountSubscriber, _Subscriber);

	    function RefCountSubscriber(destination, connectable) {
	        _classCallCheck(this, RefCountSubscriber);

	        var _this3 = _possibleConstructorReturn(this, (RefCountSubscriber.__proto__ || Object.getPrototypeOf(RefCountSubscriber)).call(this, destination));

	        _this3.connectable = connectable;
	        return _this3;
	    }

	    _createClass(RefCountSubscriber, [{
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var connectable = this.connectable;

	            if (!connectable) {
	                this.connection = null;
	                return;
	            }
	            this.connectable = null;
	            var refCount = connectable._refCount;
	            if (refCount <= 0) {
	                this.connection = null;
	                return;
	            }
	            connectable._refCount = refCount - 1;
	            if (refCount > 1) {
	                this.connection = null;
	                return;
	            }
	            ///
	            // Compare the local RefCountSubscriber's connection Subscription to the
	            // connection Subscription on the shared ConnectableObservable. In cases
	            // where the ConnectableObservable source synchronously emits values, and
	            // the RefCountSubscriber's dowstream Observers synchronously unsubscribe,
	            // execution continues to here before the RefCountOperator has a chance to
	            // supply the RefCountSubscriber with the shared connection Subscription.
	            // For example:
	            // ```
	            // Observable.range(0, 10)
	            //   .publish()
	            //   .refCount()
	            //   .take(5)
	            //   .subscribe();
	            // ```
	            // In order to account for this case, RefCountSubscriber should only dispose
	            // the ConnectableObservable's shared connection Subscription if the
	            // connection Subscription exists, *and* either:
	            //   a. RefCountSubscriber doesn't have a reference to the shared connection
	            //      Subscription yet, or,
	            //   b. RefCountSubscriber's connection Subscription reference is identical
	            //      to the shared connection Subscription
	            ///
	            var connection = this.connection;

	            var sharedConnection = connectable._connection;
	            this.connection = null;
	            if (sharedConnection && (!connection || sharedConnection === connection)) {
	                sharedConnection.unsubscribe();
	            }
	        }
	    }]);

	    return RefCountSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _observeOn = __webpack_require__(57);

	_Observable.Observable.prototype.observeOn = _observeOn.observeOn;
	//# sourceMappingURL=observeOn.js.map

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _onErrorResumeNext = __webpack_require__(93);

	_Observable.Observable.prototype.onErrorResumeNext = _onErrorResumeNext.onErrorResumeNext;
	//# sourceMappingURL=onErrorResumeNext.js.map

/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _pairwise = __webpack_require__(230);

	_Observable.Observable.prototype.pairwise = _pairwise.pairwise;
	//# sourceMappingURL=pairwise.js.map

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.pairwise = pairwise;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Groups pairs of consecutive emissions together and emits them as an array of
	 * two values.
	 *
	 * <span class="informal">Puts the current value and previous value together as
	 * an array, and emits that.</span>
	 *
	 * <img src="./img/pairwise.png" width="100%">
	 *
	 * The Nth emission from the source Observable will cause the output Observable
	 * to emit an array [(N-1)th, Nth] of the previous and the current value, as a
	 * pair. For this reason, `pairwise` emits on the second and subsequent
	 * emissions from the source Observable, but not on the first emission, because
	 * there is no previous value in that case.
	 *
	 * @example <caption>On every click (starting from the second), emit the relative distance to the previous click</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var pairs = clicks.pairwise();
	 * var distance = pairs.map(pair => {
	 *   var x0 = pair[0].clientX;
	 *   var y0 = pair[0].clientY;
	 *   var x1 = pair[1].clientX;
	 *   var y1 = pair[1].clientY;
	 *   return Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
	 * });
	 * distance.subscribe(x => console.log(x));
	 *
	 * @see {@link buffer}
	 * @see {@link bufferCount}
	 *
	 * @return {Observable<Array<T>>} An Observable of pairs (as arrays) of
	 * consecutive values from the source Observable.
	 * @method pairwise
	 * @owner Observable
	 */
	function pairwise() {
	    return this.lift(new PairwiseOperator());
	}

	var PairwiseOperator = function () {
	    function PairwiseOperator() {
	        _classCallCheck(this, PairwiseOperator);
	    }

	    _createClass(PairwiseOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new PairwiseSubscriber(subscriber));
	        }
	    }]);

	    return PairwiseOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var PairwiseSubscriber = function (_Subscriber) {
	    _inherits(PairwiseSubscriber, _Subscriber);

	    function PairwiseSubscriber(destination) {
	        _classCallCheck(this, PairwiseSubscriber);

	        var _this = _possibleConstructorReturn(this, (PairwiseSubscriber.__proto__ || Object.getPrototypeOf(PairwiseSubscriber)).call(this, destination));

	        _this.hasPrev = false;
	        return _this;
	    }

	    _createClass(PairwiseSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (this.hasPrev) {
	                this.destination.next([this.prev, value]);
	            } else {
	                this.hasPrev = true;
	            }
	            this.prev = value;
	        }
	    }]);

	    return PairwiseSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=pairwise.js.map

/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _partition = __webpack_require__(232);

	_Observable.Observable.prototype.partition = _partition.partition;
	//# sourceMappingURL=partition.js.map

/***/ },
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.partition = partition;

	var _not = __webpack_require__(233);

	var _filter = __webpack_require__(177);

	/**
	 * Splits the source Observable into two, one with values that satisfy a
	 * predicate, and another with values that don't satisfy the predicate.
	 *
	 * <span class="informal">It's like {@link filter}, but returns two Observables:
	 * one like the output of {@link filter}, and the other with values that did not
	 * pass the condition.</span>
	 *
	 * <img src="./img/partition.png" width="100%">
	 *
	 * `partition` outputs an array with two Observables that partition the values
	 * from the source Observable through the given `predicate` function. The first
	 * Observable in that array emits source values for which the predicate argument
	 * returns true. The second Observable emits source values for which the
	 * predicate returns false. The first behaves like {@link filter} and the second
	 * behaves like {@link filter} with the predicate negated.
	 *
	 * @example <caption>Partition click events into those on DIV elements and those elsewhere</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var parts = clicks.partition(ev => ev.target.tagName === 'DIV');
	 * var clicksOnDivs = parts[0];
	 * var clicksElsewhere = parts[1];
	 * clicksOnDivs.subscribe(x => console.log('DIV clicked: ', x));
	 * clicksElsewhere.subscribe(x => console.log('Other clicked: ', x));
	 *
	 * @see {@link filter}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates each value emitted by the source Observable. If it returns `true`,
	 * the value is emitted on the first Observable in the returned array, if
	 * `false` the value is emitted on the second Observable in the array. The
	 * `index` parameter is the number `i` for the i-th source emission that has
	 * happened since the subscription, starting from the number `0`.
	 * @param {any} [thisArg] An optional argument to determine the value of `this`
	 * in the `predicate` function.
	 * @return {[Observable<T>, Observable<T>]} An array with two Observables: one
	 * with values that passed the predicate, and another with values that did not
	 * pass the predicate.
	 * @method partition
	 * @owner Observable
	 */
	function partition(predicate, thisArg) {
	    return [_filter.filter.call(this, predicate), _filter.filter.call(this, (0, _not.not)(predicate, thisArg))];
	}
	//# sourceMappingURL=partition.js.map

/***/ },
/* 233 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.not = not;
	function not(pred, thisArg) {
	    function notPred() {
	        return !notPred.pred.apply(notPred.thisArg, arguments);
	    }
	    notPred.pred = pred;
	    notPred.thisArg = thisArg;
	    return notPred;
	}
	//# sourceMappingURL=not.js.map

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _pluck = __webpack_require__(235);

	_Observable.Observable.prototype.pluck = _pluck.pluck;
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.pluck = pluck;

	var _map = __webpack_require__(207);

	/**
	 * Maps each source value (an object) to its specified nested property.
	 *
	 * <span class="informal">Like {@link map}, but meant only for picking one of
	 * the nested properties of every emitted object.</span>
	 *
	 * <img src="./img/pluck.png" width="100%">
	 *
	 * Given a list of strings describing a path to an object property, retrieves
	 * the value of a specified nested property from all values in the source
	 * Observable. If a property can't be resolved, it will return `undefined` for
	 * that value.
	 *
	 * @example <caption>Map every every click to the tagName of the clicked target element</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var tagNames = clicks.pluck('target', 'tagName');
	 * tagNames.subscribe(x => console.log(x));
	 *
	 * @see {@link map}
	 *
	 * @param {...string} properties The nested properties to pluck from each source
	 * value (an object).
	 * @return {Observable} Returns a new Observable of property values from the
	 * source values.
	 * @method pluck
	 * @owner Observable
	 */
	function pluck() {
	    for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
	        properties[_key] = arguments[_key];
	    }

	    var length = properties.length;
	    if (length === 0) {
	        throw new Error('list of properties cannot be empty.');
	    }
	    return _map.map.call(this, plucker(properties, length));
	}
	function plucker(props, length) {
	    var mapper = function mapper(x) {
	        var currentProp = x;
	        for (var i = 0; i < length; i++) {
	            var p = currentProp[props[i]];
	            if (typeof p !== 'undefined') {
	                currentProp = p;
	            } else {
	                return undefined;
	            }
	        }
	        return currentProp;
	    };
	    return mapper;
	}
	//# sourceMappingURL=pluck.js.map

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _publish = __webpack_require__(237);

	_Observable.Observable.prototype.publish = _publish.publish;
	//# sourceMappingURL=publish.js.map

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.publish = publish;

	var _Subject = __webpack_require__(3);

	var _multicast = __webpack_require__(224);

	/**
	 * Returns a ConnectableObservable, which is a variety of Observable that waits until its connect method is called
	 * before it begins emitting items to those Observers that have subscribed to it.
	 *
	 * <img src="./img/publish.png" width="100%">
	 *
	 * @param {Function} Optional selector function which can use the multicasted source sequence as many times as needed,
	 * without causing multiple subscriptions to the source sequence.
	 * Subscribers to the given source will receive all notifications of the source from the time of the subscription on.
	 * @return a ConnectableObservable that upon connection causes the source Observable to emit items to its Observers.
	 * @method publish
	 * @owner Observable
	 */
	function publish(selector) {
	  return selector ? _multicast.multicast.call(this, function () {
	    return new _Subject.Subject();
	  }, selector) : _multicast.multicast.call(this, new _Subject.Subject());
	}
	//# sourceMappingURL=publish.js.map

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _publishBehavior = __webpack_require__(239);

	_Observable.Observable.prototype.publishBehavior = _publishBehavior.publishBehavior;
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.publishBehavior = publishBehavior;

	var _BehaviorSubject = __webpack_require__(240);

	var _multicast = __webpack_require__(224);

	/**
	 * @param value
	 * @return {ConnectableObservable<T>}
	 * @method publishBehavior
	 * @owner Observable
	 */
	function publishBehavior(value) {
	  return _multicast.multicast.call(this, new _BehaviorSubject.BehaviorSubject(value));
	}
	//# sourceMappingURL=publishBehavior.js.map

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.BehaviorSubject = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Subject2 = __webpack_require__(3);

	var _ObjectUnsubscribedError = __webpack_require__(18);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * @class BehaviorSubject<T>
	 */
	var BehaviorSubject = exports.BehaviorSubject = function (_Subject) {
	    _inherits(BehaviorSubject, _Subject);

	    function BehaviorSubject(_value) {
	        _classCallCheck(this, BehaviorSubject);

	        var _this = _possibleConstructorReturn(this, (BehaviorSubject.__proto__ || Object.getPrototypeOf(BehaviorSubject)).call(this));

	        _this._value = _value;
	        return _this;
	    }

	    _createClass(BehaviorSubject, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var subscription = _get(BehaviorSubject.prototype.__proto__ || Object.getPrototypeOf(BehaviorSubject.prototype), '_subscribe', this).call(this, subscriber);
	            if (subscription && !subscription.closed) {
	                subscriber.next(this._value);
	            }
	            return subscription;
	        }
	    }, {
	        key: 'getValue',
	        value: function getValue() {
	            if (this.hasError) {
	                throw this.thrownError;
	            } else if (this.closed) {
	                throw new _ObjectUnsubscribedError.ObjectUnsubscribedError();
	            } else {
	                return this._value;
	            }
	        }
	    }, {
	        key: 'next',
	        value: function next(value) {
	            _get(BehaviorSubject.prototype.__proto__ || Object.getPrototypeOf(BehaviorSubject.prototype), 'next', this).call(this, this._value = value);
	        }
	    }, {
	        key: 'value',
	        get: function get() {
	            return this.getValue();
	        }
	    }]);

	    return BehaviorSubject;
	}(_Subject2.Subject);
	//# sourceMappingURL=BehaviorSubject.js.map

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _publishReplay = __webpack_require__(242);

	_Observable.Observable.prototype.publishReplay = _publishReplay.publishReplay;
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.publishReplay = publishReplay;

	var _ReplaySubject = __webpack_require__(125);

	var _multicast = __webpack_require__(224);

	/**
	 * @param bufferSize
	 * @param windowTime
	 * @param scheduler
	 * @return {ConnectableObservable<T>}
	 * @method publishReplay
	 * @owner Observable
	 */
	function publishReplay() {
	  var bufferSize = arguments.length <= 0 || arguments[0] === undefined ? Number.POSITIVE_INFINITY : arguments[0];
	  var windowTime = arguments.length <= 1 || arguments[1] === undefined ? Number.POSITIVE_INFINITY : arguments[1];
	  var scheduler = arguments[2];

	  return _multicast.multicast.call(this, new _ReplaySubject.ReplaySubject(bufferSize, windowTime, scheduler));
	}
	//# sourceMappingURL=publishReplay.js.map

/***/ },
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _publishLast = __webpack_require__(244);

	_Observable.Observable.prototype.publishLast = _publishLast.publishLast;
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.publishLast = publishLast;

	var _AsyncSubject = __webpack_require__(23);

	var _multicast = __webpack_require__(224);

	/**
	 * @return {ConnectableObservable<T>}
	 * @method publishLast
	 * @owner Observable
	 */
	function publishLast() {
	  return _multicast.multicast.call(this, new _AsyncSubject.AsyncSubject());
	}
	//# sourceMappingURL=publishLast.js.map

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _race = __webpack_require__(85);

	_Observable.Observable.prototype.race = _race.race;
	//# sourceMappingURL=race.js.map

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _reduce = __webpack_require__(214);

	_Observable.Observable.prototype.reduce = _reduce.reduce;
	//# sourceMappingURL=reduce.js.map

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _repeat = __webpack_require__(248);

	_Observable.Observable.prototype.repeat = _repeat.repeat;
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.repeat = repeat;

	var _Subscriber2 = __webpack_require__(7);

	var _EmptyObservable = __webpack_require__(32);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that repeats the stream of items emitted by the source Observable at most count times,
	 * on a particular Scheduler.
	 *
	 * <img src="./img/repeat.png" width="100%">
	 *
	 * @param {Scheduler} [scheduler] the Scheduler to emit the items on.
	 * @param {number} [count] the number of times the source Observable items are repeated, a count of 0 will yield
	 * an empty Observable.
	 * @return {Observable} an Observable that repeats the stream of items emitted by the source Observable at most
	 * count times.
	 * @method repeat
	 * @owner Observable
	 */
	function repeat() {
	    var count = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];

	    if (count === 0) {
	        return new _EmptyObservable.EmptyObservable();
	    } else if (count < 0) {
	        return this.lift(new RepeatOperator(-1, this));
	    } else {
	        return this.lift(new RepeatOperator(count - 1, this));
	    }
	}

	var RepeatOperator = function () {
	    function RepeatOperator(count, source) {
	        _classCallCheck(this, RepeatOperator);

	        this.count = count;
	        this.source = source;
	    }

	    _createClass(RepeatOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new RepeatSubscriber(subscriber, this.count, this.source));
	        }
	    }]);

	    return RepeatOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var RepeatSubscriber = function (_Subscriber) {
	    _inherits(RepeatSubscriber, _Subscriber);

	    function RepeatSubscriber(destination, count, source) {
	        _classCallCheck(this, RepeatSubscriber);

	        var _this = _possibleConstructorReturn(this, (RepeatSubscriber.__proto__ || Object.getPrototypeOf(RepeatSubscriber)).call(this, destination));

	        _this.count = count;
	        _this.source = source;
	        return _this;
	    }

	    _createClass(RepeatSubscriber, [{
	        key: 'complete',
	        value: function complete() {
	            if (!this.isStopped) {
	                var source = this.source;
	                var count = this.count;

	                if (count === 0) {
	                    return _get(RepeatSubscriber.prototype.__proto__ || Object.getPrototypeOf(RepeatSubscriber.prototype), 'complete', this).call(this);
	                } else if (count > -1) {
	                    this.count = count - 1;
	                }
	                this.unsubscribe();
	                this.isStopped = false;
	                this.closed = false;
	                source.subscribe(this);
	            }
	        }
	    }]);

	    return RepeatSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=repeat.js.map

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _repeatWhen = __webpack_require__(250);

	_Observable.Observable.prototype.repeatWhen = _repeatWhen.repeatWhen;
	//# sourceMappingURL=repeatWhen.js.map

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.repeatWhen = repeatWhen;

	var _Subject = __webpack_require__(3);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that emits the same values as the source observable with the exception of a `complete`.
	 * A `complete` will cause the emission of the Throwable that cause the complete to the Observable returned from
	 * notificationHandler. If that Observable calls onComplete or `complete` then retry will call `complete` or `error`
	 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
	 * Scheduler.
	 *
	 * <img src="./img/repeatWhen.png" width="100%">
	 *
	 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
	 * aborting the retry.
	 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
	 * @return {Observable} the source Observable modified with retry logic.
	 * @method repeatWhen
	 * @owner Observable
	 */
	function repeatWhen(notifier) {
	    return this.lift(new RepeatWhenOperator(notifier, this));
	}

	var RepeatWhenOperator = function () {
	    function RepeatWhenOperator(notifier, source) {
	        _classCallCheck(this, RepeatWhenOperator);

	        this.notifier = notifier;
	        this.source = source;
	    }

	    _createClass(RepeatWhenOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new RepeatWhenSubscriber(subscriber, this.notifier, this.source));
	        }
	    }]);

	    return RepeatWhenOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var RepeatWhenSubscriber = function (_OuterSubscriber) {
	    _inherits(RepeatWhenSubscriber, _OuterSubscriber);

	    function RepeatWhenSubscriber(destination, notifier, source) {
	        _classCallCheck(this, RepeatWhenSubscriber);

	        var _this = _possibleConstructorReturn(this, (RepeatWhenSubscriber.__proto__ || Object.getPrototypeOf(RepeatWhenSubscriber)).call(this, destination));

	        _this.notifier = notifier;
	        _this.source = source;
	        return _this;
	    }

	    _createClass(RepeatWhenSubscriber, [{
	        key: 'complete',
	        value: function complete() {
	            if (!this.isStopped) {
	                var notifications = this.notifications;
	                var retries = this.retries;
	                var retriesSubscription = this.retriesSubscription;
	                if (!retries) {
	                    notifications = new _Subject.Subject();
	                    retries = (0, _tryCatch.tryCatch)(this.notifier)(notifications);
	                    if (retries === _errorObject.errorObject) {
	                        return _get(RepeatWhenSubscriber.prototype.__proto__ || Object.getPrototypeOf(RepeatWhenSubscriber.prototype), 'complete', this).call(this);
	                    }
	                    retriesSubscription = (0, _subscribeToResult.subscribeToResult)(this, retries);
	                } else {
	                    this.notifications = null;
	                    this.retriesSubscription = null;
	                }
	                this.unsubscribe();
	                this.closed = false;
	                this.notifications = notifications;
	                this.retries = retries;
	                this.retriesSubscription = retriesSubscription;
	                notifications.next();
	            }
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var notifications = this.notifications;
	            var retriesSubscription = this.retriesSubscription;

	            if (notifications) {
	                notifications.unsubscribe();
	                this.notifications = null;
	            }
	            if (retriesSubscription) {
	                retriesSubscription.unsubscribe();
	                this.retriesSubscription = null;
	            }
	            this.retries = null;
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            var notifications = this.notifications;
	            var retries = this.retries;
	            var retriesSubscription = this.retriesSubscription;

	            this.notifications = null;
	            this.retries = null;
	            this.retriesSubscription = null;
	            this.unsubscribe();
	            this.isStopped = false;
	            this.closed = false;
	            this.notifications = notifications;
	            this.retries = retries;
	            this.retriesSubscription = retriesSubscription;
	            this.source.subscribe(this);
	        }
	    }]);

	    return RepeatWhenSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=repeatWhen.js.map

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _retry = __webpack_require__(252);

	_Observable.Observable.prototype.retry = _retry.retry;
	//# sourceMappingURL=retry.js.map

/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.retry = retry;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that mirrors the source Observable, resubscribing to it if it calls `error` and the
	 * predicate returns true for that specific exception and retry count.
	 * If the source Observable calls `error`, this method will resubscribe to the source Observable for a maximum of
	 * count resubscriptions (given as a number parameter) rather than propagating the `error` call.
	 *
	 * <img src="./img/retry.png" width="100%">
	 *
	 * Any and all items emitted by the source Observable will be emitted by the resulting Observable, even those emitted
	 * during failed subscriptions. For example, if an Observable fails at first but emits [1, 2] then succeeds the second
	 * time and emits: [1, 2, 3, 4, 5] then the complete stream of emissions and notifications
	 * would be: [1, 2, 1, 2, 3, 4, 5, `complete`].
	 * @param {number} number of retry attempts before failing.
	 * @return {Observable} the source Observable modified with the retry logic.
	 * @method retry
	 * @owner Observable
	 */
	function retry() {
	    var count = arguments.length <= 0 || arguments[0] === undefined ? -1 : arguments[0];

	    return this.lift(new RetryOperator(count, this));
	}

	var RetryOperator = function () {
	    function RetryOperator(count, source) {
	        _classCallCheck(this, RetryOperator);

	        this.count = count;
	        this.source = source;
	    }

	    _createClass(RetryOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new RetrySubscriber(subscriber, this.count, this.source));
	        }
	    }]);

	    return RetryOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var RetrySubscriber = function (_Subscriber) {
	    _inherits(RetrySubscriber, _Subscriber);

	    function RetrySubscriber(destination, count, source) {
	        _classCallCheck(this, RetrySubscriber);

	        var _this = _possibleConstructorReturn(this, (RetrySubscriber.__proto__ || Object.getPrototypeOf(RetrySubscriber)).call(this, destination));

	        _this.count = count;
	        _this.source = source;
	        return _this;
	    }

	    _createClass(RetrySubscriber, [{
	        key: 'error',
	        value: function error(err) {
	            if (!this.isStopped) {
	                var source = this.source;
	                var count = this.count;

	                if (count === 0) {
	                    return _get(RetrySubscriber.prototype.__proto__ || Object.getPrototypeOf(RetrySubscriber.prototype), 'error', this).call(this, err);
	                } else if (count > -1) {
	                    this.count = count - 1;
	                }
	                this.unsubscribe();
	                this.isStopped = false;
	                this.closed = false;
	                source.subscribe(this);
	            }
	        }
	    }]);

	    return RetrySubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=retry.js.map

/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _retryWhen = __webpack_require__(254);

	_Observable.Observable.prototype.retryWhen = _retryWhen.retryWhen;
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.retryWhen = retryWhen;

	var _Subject = __webpack_require__(3);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that emits the same values as the source observable with the exception of an `error`.
	 * An `error` will cause the emission of the Throwable that cause the error to the Observable returned from
	 * notificationHandler. If that Observable calls onComplete or `error` then retry will call `complete` or `error`
	 * on the child subscription. Otherwise, this Observable will resubscribe to the source observable, on a particular
	 * Scheduler.
	 *
	 * <img src="./img/retryWhen.png" width="100%">
	 *
	 * @param {notificationHandler} receives an Observable of notifications with which a user can `complete` or `error`,
	 * aborting the retry.
	 * @param {scheduler} the Scheduler on which to subscribe to the source Observable.
	 * @return {Observable} the source Observable modified with retry logic.
	 * @method retryWhen
	 * @owner Observable
	 */
	function retryWhen(notifier) {
	    return this.lift(new RetryWhenOperator(notifier, this));
	}

	var RetryWhenOperator = function () {
	    function RetryWhenOperator(notifier, source) {
	        _classCallCheck(this, RetryWhenOperator);

	        this.notifier = notifier;
	        this.source = source;
	    }

	    _createClass(RetryWhenOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new RetryWhenSubscriber(subscriber, this.notifier, this.source));
	        }
	    }]);

	    return RetryWhenOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var RetryWhenSubscriber = function (_OuterSubscriber) {
	    _inherits(RetryWhenSubscriber, _OuterSubscriber);

	    function RetryWhenSubscriber(destination, notifier, source) {
	        _classCallCheck(this, RetryWhenSubscriber);

	        var _this = _possibleConstructorReturn(this, (RetryWhenSubscriber.__proto__ || Object.getPrototypeOf(RetryWhenSubscriber)).call(this, destination));

	        _this.notifier = notifier;
	        _this.source = source;
	        return _this;
	    }

	    _createClass(RetryWhenSubscriber, [{
	        key: 'error',
	        value: function error(err) {
	            if (!this.isStopped) {
	                var errors = this.errors;
	                var retries = this.retries;
	                var retriesSubscription = this.retriesSubscription;
	                if (!retries) {
	                    errors = new _Subject.Subject();
	                    retries = (0, _tryCatch.tryCatch)(this.notifier)(errors);
	                    if (retries === _errorObject.errorObject) {
	                        return _get(RetryWhenSubscriber.prototype.__proto__ || Object.getPrototypeOf(RetryWhenSubscriber.prototype), 'error', this).call(this, _errorObject.errorObject.e);
	                    }
	                    retriesSubscription = (0, _subscribeToResult.subscribeToResult)(this, retries);
	                } else {
	                    this.errors = null;
	                    this.retriesSubscription = null;
	                }
	                this.unsubscribe();
	                this.closed = false;
	                this.errors = errors;
	                this.retries = retries;
	                this.retriesSubscription = retriesSubscription;
	                errors.next(err);
	            }
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var errors = this.errors;
	            var retriesSubscription = this.retriesSubscription;

	            if (errors) {
	                errors.unsubscribe();
	                this.errors = null;
	            }
	            if (retriesSubscription) {
	                retriesSubscription.unsubscribe();
	                this.retriesSubscription = null;
	            }
	            this.retries = null;
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            var errors = this.errors;
	            var retries = this.retries;
	            var retriesSubscription = this.retriesSubscription;

	            this.errors = null;
	            this.retries = null;
	            this.retriesSubscription = null;
	            this.unsubscribe();
	            this.isStopped = false;
	            this.closed = false;
	            this.errors = errors;
	            this.retries = retries;
	            this.retriesSubscription = retriesSubscription;
	            this.source.subscribe(this);
	        }
	    }]);

	    return RetryWhenSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=retryWhen.js.map

/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _sample = __webpack_require__(256);

	_Observable.Observable.prototype.sample = _sample.sample;
	//# sourceMappingURL=sample.js.map

/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.sample = sample;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits the most recently emitted value from the source Observable whenever
	 * another Observable, the `notifier`, emits.
	 *
	 * <span class="informal">It's like {@link sampleTime}, but samples whenever
	 * the `notifier` Observable emits something.</span>
	 *
	 * <img src="./img/sample.png" width="100%">
	 *
	 * Whenever the `notifier` Observable emits a value or completes, `sample`
	 * looks at the source Observable and emits whichever value it has most recently
	 * emitted since the previous sampling, unless the source has not emitted
	 * anything since the previous sampling. The `notifier` is subscribed to as soon
	 * as the output Observable is subscribed.
	 *
	 * @example <caption>On every click, sample the most recent "seconds" timer</caption>
	 * var seconds = Rx.Observable.interval(1000);
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = seconds.sample(clicks);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link audit}
	 * @see {@link debounce}
	 * @see {@link sampleTime}
	 * @see {@link throttle}
	 *
	 * @param {Observable<any>} notifier The Observable to use for sampling the
	 * source Observable.
	 * @return {Observable<T>} An Observable that emits the results of sampling the
	 * values emitted by the source Observable whenever the notifier Observable
	 * emits value or completes.
	 * @method sample
	 * @owner Observable
	 */
	function sample(notifier) {
	    return this.lift(new SampleOperator(notifier));
	}

	var SampleOperator = function () {
	    function SampleOperator(notifier) {
	        _classCallCheck(this, SampleOperator);

	        this.notifier = notifier;
	    }

	    _createClass(SampleOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SampleSubscriber(subscriber, this.notifier));
	        }
	    }]);

	    return SampleOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SampleSubscriber = function (_OuterSubscriber) {
	    _inherits(SampleSubscriber, _OuterSubscriber);

	    function SampleSubscriber(destination, notifier) {
	        _classCallCheck(this, SampleSubscriber);

	        var _this = _possibleConstructorReturn(this, (SampleSubscriber.__proto__ || Object.getPrototypeOf(SampleSubscriber)).call(this, destination));

	        _this.hasValue = false;
	        _this.add((0, _subscribeToResult.subscribeToResult)(_this, notifier));
	        return _this;
	    }

	    _createClass(SampleSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.value = value;
	            this.hasValue = true;
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.emitValue();
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            this.emitValue();
	        }
	    }, {
	        key: 'emitValue',
	        value: function emitValue() {
	            if (this.hasValue) {
	                this.hasValue = false;
	                this.destination.next(this.value);
	            }
	        }
	    }]);

	    return SampleSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=sample.js.map

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _sampleTime = __webpack_require__(258);

	_Observable.Observable.prototype.sampleTime = _sampleTime.sampleTime;
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.sampleTime = sampleTime;

	var _Subscriber2 = __webpack_require__(7);

	var _async = __webpack_require__(76);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits the most recently emitted value from the source Observable within
	 * periodic time intervals.
	 *
	 * <span class="informal">Samples the source Observable at periodic time
	 * intervals, emitting what it samples.</span>
	 *
	 * <img src="./img/sampleTime.png" width="100%">
	 *
	 * `sampleTime` periodically looks at the source Observable and emits whichever
	 * value it has most recently emitted since the previous sampling, unless the
	 * source has not emitted anything since the previous sampling. The sampling
	 * happens periodically in time every `period` milliseconds (or the time unit
	 * defined by the optional `scheduler` argument). The sampling starts as soon as
	 * the output Observable is subscribed.
	 *
	 * @example <caption>Every second, emit the most recent click at most once</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.sampleTime(1000);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link auditTime}
	 * @see {@link debounceTime}
	 * @see {@link delay}
	 * @see {@link sample}
	 * @see {@link throttleTime}
	 *
	 * @param {number} period The sampling period expressed in milliseconds or the
	 * time unit determined internally by the optional `scheduler`.
	 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
	 * managing the timers that handle the sampling.
	 * @return {Observable<T>} An Observable that emits the results of sampling the
	 * values emitted by the source Observable at the specified time interval.
	 * @method sampleTime
	 * @owner Observable
	 */
	function sampleTime(period) {
	    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _async.async : arguments[1];

	    return this.lift(new SampleTimeOperator(period, scheduler));
	}

	var SampleTimeOperator = function () {
	    function SampleTimeOperator(period, scheduler) {
	        _classCallCheck(this, SampleTimeOperator);

	        this.period = period;
	        this.scheduler = scheduler;
	    }

	    _createClass(SampleTimeOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SampleTimeSubscriber(subscriber, this.period, this.scheduler));
	        }
	    }]);

	    return SampleTimeOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SampleTimeSubscriber = function (_Subscriber) {
	    _inherits(SampleTimeSubscriber, _Subscriber);

	    function SampleTimeSubscriber(destination, period, scheduler) {
	        _classCallCheck(this, SampleTimeSubscriber);

	        var _this = _possibleConstructorReturn(this, (SampleTimeSubscriber.__proto__ || Object.getPrototypeOf(SampleTimeSubscriber)).call(this, destination));

	        _this.period = period;
	        _this.scheduler = scheduler;
	        _this.hasValue = false;
	        _this.add(scheduler.schedule(dispatchNotification, period, { subscriber: _this, period: period }));
	        return _this;
	    }

	    _createClass(SampleTimeSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.lastValue = value;
	            this.hasValue = true;
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext() {
	            if (this.hasValue) {
	                this.hasValue = false;
	                this.destination.next(this.lastValue);
	            }
	        }
	    }]);

	    return SampleTimeSubscriber;
	}(_Subscriber2.Subscriber);

	function dispatchNotification(state) {
	    var subscriber = state.subscriber;
	    var period = state.period;

	    subscriber.notifyNext();
	    this.schedule(state, period);
	}
	//# sourceMappingURL=sampleTime.js.map

/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _scan = __webpack_require__(260);

	_Observable.Observable.prototype.scan = _scan.scan;
	//# sourceMappingURL=scan.js.map

/***/ },
/* 260 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.scan = scan;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Applies an accumulator function over the source Observable, and returns each
	 * intermediate result, with an optional seed value.
	 *
	 * <span class="informal">It's like {@link reduce}, but emits the current
	 * accumulation whenever the source emits a value.</span>
	 *
	 * <img src="./img/scan.png" width="100%">
	 *
	 * Combines together all values emitted on the source, using an accumulator
	 * function that knows how to join a new source value into the accumulation from
	 * the past. Is similar to {@link reduce}, but emits the intermediate
	 * accumulations.
	 *
	 * Returns an Observable that applies a specified `accumulator` function to each
	 * item emitted by the source Observable. If a `seed` value is specified, then
	 * that value will be used as the initial value for the accumulator. If no seed
	 * value is specified, the first item of the source is used as the seed.
	 *
	 * @example <caption>Count the number of click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var ones = clicks.mapTo(1);
	 * var seed = 0;
	 * var count = ones.scan((acc, one) => acc + one, seed);
	 * count.subscribe(x => console.log(x));
	 *
	 * @see {@link expand}
	 * @see {@link mergeScan}
	 * @see {@link reduce}
	 *
	 * @param {function(acc: R, value: T, index: number): R} accumulator
	 * The accumulator function called on each source value.
	 * @param {T|R} [seed] The initial accumulation value.
	 * @return {Observable<R>} An observable of the accumulated values.
	 * @method scan
	 * @owner Observable
	 */
	function scan(accumulator, seed) {
	    return this.lift(new ScanOperator(accumulator, seed));
	}

	var ScanOperator = function () {
	    function ScanOperator(accumulator, seed) {
	        _classCallCheck(this, ScanOperator);

	        this.accumulator = accumulator;
	        this.seed = seed;
	    }

	    _createClass(ScanOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new ScanSubscriber(subscriber, this.accumulator, this.seed));
	        }
	    }]);

	    return ScanOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ScanSubscriber = function (_Subscriber) {
	    _inherits(ScanSubscriber, _Subscriber);

	    function ScanSubscriber(destination, accumulator, seed) {
	        _classCallCheck(this, ScanSubscriber);

	        var _this = _possibleConstructorReturn(this, (ScanSubscriber.__proto__ || Object.getPrototypeOf(ScanSubscriber)).call(this, destination));

	        _this.accumulator = accumulator;
	        _this.index = 0;
	        _this.accumulatorSet = false;
	        _this.seed = seed;
	        _this.accumulatorSet = typeof seed !== 'undefined';
	        return _this;
	    }

	    _createClass(ScanSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (!this.accumulatorSet) {
	                this.seed = value;
	                this.destination.next(value);
	            } else {
	                return this._tryNext(value);
	            }
	        }
	    }, {
	        key: '_tryNext',
	        value: function _tryNext(value) {
	            var index = this.index++;
	            var result = void 0;
	            try {
	                result = this.accumulator(this.seed, value, index);
	            } catch (err) {
	                this.destination.error(err);
	            }
	            this.seed = result;
	            this.destination.next(result);
	        }
	    }, {
	        key: 'seed',
	        get: function get() {
	            return this._seed;
	        },
	        set: function set(value) {
	            this.accumulatorSet = true;
	            this._seed = value;
	        }
	    }]);

	    return ScanSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=scan.js.map

/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _sequenceEqual = __webpack_require__(262);

	_Observable.Observable.prototype.sequenceEqual = _sequenceEqual.sequenceEqual;
	//# sourceMappingURL=sequenceEqual.js.map

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SequenceEqualSubscriber = exports.SequenceEqualOperator = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.sequenceEqual = sequenceEqual;

	var _Subscriber3 = __webpack_require__(7);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Compares all values of two observables in sequence using an optional comparor function
	 * and returns an observable of a single boolean value representing whether or not the two sequences
	 * are equal.
	 *
	 * <span class="informal">Checks to see of all values emitted by both observables are equal, in order.</span>
	 *
	 * <img src="./img/sequenceEqual.png" width="100%">
	 *
	 * `sequenceEqual` subscribes to two observables and buffers incoming values from each observable. Whenever either
	 * observable emits a value, the value is buffered and the buffers are shifted and compared from the bottom
	 * up; If any value pair doesn't match, the returned observable will emit `false` and complete. If one of the
	 * observables completes, the operator will wait for the other observable to complete; If the other
	 * observable emits before completing, the returned observable will emit `false` and complete. If one observable never
	 * completes or emits after the other complets, the returned observable will never complete.
	 *
	 * @example <caption>figure out if the Konami code matches</caption>
	 * var code = Observable.from([
	 *  "ArrowUp",
	 *  "ArrowUp",
	 *  "ArrowDown",
	 *  "ArrowDown",
	 *  "ArrowLeft",
	 *  "ArrowRight",
	 *  "ArrowLeft",
	 *  "ArrowRight",
	 *  "KeyB",
	 *  "KeyA",
	 *  "Enter" // no start key, clearly.
	 * ]);
	 *
	 * var keys = Rx.Observable.fromEvent(document, 'keyup')
	 *  .map(e => e.code);
	 * var matches = keys.bufferCount(11, 1)
	 *  .mergeMap(
	 *    last11 =>
	 *      Rx.Observable.from(last11)
	 *        .sequenceEqual(code)
	 *   );
	 * matches.subscribe(matched => console.log('Successful cheat at Contra? ', matched));
	 *
	 * @see {@link combineLatest}
	 * @see {@link zip}
	 * @see {@link withLatestFrom}
	 *
	 * @param {Observable} compareTo the observable sequence to compare the source sequence to.
	 * @param {function} [comparor] An optional function to compare each value pair
	 * @return {Observable} An Observable of a single boolean value representing whether or not
	 * the values emitted by both observables were equal in sequence
	 * @method sequenceEqual
	 * @owner Observable
	 */
	function sequenceEqual(compareTo, comparor) {
	    return this.lift(new SequenceEqualOperator(compareTo, comparor));
	}

	var SequenceEqualOperator = exports.SequenceEqualOperator = function () {
	    function SequenceEqualOperator(compareTo, comparor) {
	        _classCallCheck(this, SequenceEqualOperator);

	        this.compareTo = compareTo;
	        this.comparor = comparor;
	    }

	    _createClass(SequenceEqualOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SequenceEqualSubscriber(subscriber, this.compareTo, this.comparor));
	        }
	    }]);

	    return SequenceEqualOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SequenceEqualSubscriber = exports.SequenceEqualSubscriber = function (_Subscriber) {
	    _inherits(SequenceEqualSubscriber, _Subscriber);

	    function SequenceEqualSubscriber(destination, compareTo, comparor) {
	        _classCallCheck(this, SequenceEqualSubscriber);

	        var _this = _possibleConstructorReturn(this, (SequenceEqualSubscriber.__proto__ || Object.getPrototypeOf(SequenceEqualSubscriber)).call(this, destination));

	        _this.compareTo = compareTo;
	        _this.comparor = comparor;
	        _this._a = [];
	        _this._b = [];
	        _this._oneComplete = false;
	        _this.add(compareTo.subscribe(new SequenceEqualCompareToSubscriber(destination, _this)));
	        return _this;
	    }

	    _createClass(SequenceEqualSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (this._oneComplete && this._b.length === 0) {
	                this.emit(false);
	            } else {
	                this._a.push(value);
	                this.checkValues();
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            if (this._oneComplete) {
	                this.emit(this._a.length === 0 && this._b.length === 0);
	            } else {
	                this._oneComplete = true;
	            }
	        }
	    }, {
	        key: 'checkValues',
	        value: function checkValues() {
	            var _a = this._a;
	            var _b = this._b;
	            var comparor = this.comparor;

	            while (_a.length > 0 && _b.length > 0) {
	                var a = _a.shift();
	                var b = _b.shift();
	                var areEqual = false;
	                if (comparor) {
	                    areEqual = (0, _tryCatch.tryCatch)(comparor)(a, b);
	                    if (areEqual === _errorObject.errorObject) {
	                        this.destination.error(_errorObject.errorObject.e);
	                    }
	                } else {
	                    areEqual = a === b;
	                }
	                if (!areEqual) {
	                    this.emit(false);
	                }
	            }
	        }
	    }, {
	        key: 'emit',
	        value: function emit(value) {
	            var destination = this.destination;

	            destination.next(value);
	            destination.complete();
	        }
	    }, {
	        key: 'nextB',
	        value: function nextB(value) {
	            if (this._oneComplete && this._a.length === 0) {
	                this.emit(false);
	            } else {
	                this._b.push(value);
	                this.checkValues();
	            }
	        }
	    }]);

	    return SequenceEqualSubscriber;
	}(_Subscriber3.Subscriber);

	var SequenceEqualCompareToSubscriber = function (_Subscriber2) {
	    _inherits(SequenceEqualCompareToSubscriber, _Subscriber2);

	    function SequenceEqualCompareToSubscriber(destination, parent) {
	        _classCallCheck(this, SequenceEqualCompareToSubscriber);

	        var _this2 = _possibleConstructorReturn(this, (SequenceEqualCompareToSubscriber.__proto__ || Object.getPrototypeOf(SequenceEqualCompareToSubscriber)).call(this, destination));

	        _this2.parent = parent;
	        return _this2;
	    }

	    _createClass(SequenceEqualCompareToSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.parent.nextB(value);
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.parent.error(err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.parent._complete();
	        }
	    }]);

	    return SequenceEqualCompareToSubscriber;
	}(_Subscriber3.Subscriber);
	//# sourceMappingURL=sequenceEqual.js.map

/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _share = __webpack_require__(264);

	_Observable.Observable.prototype.share = _share.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.share = share;

	var _multicast = __webpack_require__(224);

	var _Subject = __webpack_require__(3);

	function shareSubjectFactory() {
	    return new _Subject.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return _multicast.multicast.call(this, shareSubjectFactory).refCount();
	}
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _single = __webpack_require__(266);

	_Observable.Observable.prototype.single = _single.single;
	//# sourceMappingURL=single.js.map

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.single = single;

	var _Subscriber2 = __webpack_require__(7);

	var _EmptyError = __webpack_require__(186);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that emits the single item emitted by the source Observable that matches a specified
	 * predicate, if that Observable emits one such item. If the source Observable emits more than one such item or no
	 * such items, notify of an IllegalArgumentException or NoSuchElementException respectively.
	 *
	 * <img src="./img/single.png" width="100%">
	 *
	 * @throws {EmptyError} Delivers an EmptyError to the Observer's `error`
	 * callback if the Observable completes before any `next` notification was sent.
	 * @param {Function} a predicate function to evaluate items emitted by the source Observable.
	 * @return {Observable<T>} an Observable that emits the single item emitted by the source Observable that matches
	 * the predicate.
	 .
	 * @method single
	 * @owner Observable
	 */
	function single(predicate) {
	    return this.lift(new SingleOperator(predicate, this));
	}

	var SingleOperator = function () {
	    function SingleOperator(predicate, source) {
	        _classCallCheck(this, SingleOperator);

	        this.predicate = predicate;
	        this.source = source;
	    }

	    _createClass(SingleOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SingleSubscriber(subscriber, this.predicate, this.source));
	        }
	    }]);

	    return SingleOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SingleSubscriber = function (_Subscriber) {
	    _inherits(SingleSubscriber, _Subscriber);

	    function SingleSubscriber(destination, predicate, source) {
	        _classCallCheck(this, SingleSubscriber);

	        var _this = _possibleConstructorReturn(this, (SingleSubscriber.__proto__ || Object.getPrototypeOf(SingleSubscriber)).call(this, destination));

	        _this.predicate = predicate;
	        _this.source = source;
	        _this.seenValue = false;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(SingleSubscriber, [{
	        key: 'applySingleValue',
	        value: function applySingleValue(value) {
	            if (this.seenValue) {
	                this.destination.error('Sequence contains more than one element');
	            } else {
	                this.seenValue = true;
	                this.singleValue = value;
	            }
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            var predicate = this.predicate;
	            this.index++;
	            if (predicate) {
	                this.tryNext(value);
	            } else {
	                this.applySingleValue(value);
	            }
	        }
	    }, {
	        key: 'tryNext',
	        value: function tryNext(value) {
	            try {
	                var result = this.predicate(value, this.index, this.source);
	                if (result) {
	                    this.applySingleValue(value);
	                }
	            } catch (err) {
	                this.destination.error(err);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var destination = this.destination;
	            if (this.index > 0) {
	                destination.next(this.seenValue ? this.singleValue : undefined);
	                destination.complete();
	            } else {
	                destination.error(new _EmptyError.EmptyError());
	            }
	        }
	    }]);

	    return SingleSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=single.js.map

/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _skip = __webpack_require__(268);

	_Observable.Observable.prototype.skip = _skip.skip;
	//# sourceMappingURL=skip.js.map

/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.skip = skip;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that skips `n` items emitted by an Observable.
	 *
	 * <img src="./img/skip.png" width="100%">
	 *
	 * @param {Number} the `n` of times, items emitted by source Observable should be skipped.
	 * @return {Observable} an Observable that skips values emitted by the source Observable.
	 *
	 * @method skip
	 * @owner Observable
	 */
	function skip(total) {
	    return this.lift(new SkipOperator(total));
	}

	var SkipOperator = function () {
	    function SkipOperator(total) {
	        _classCallCheck(this, SkipOperator);

	        this.total = total;
	    }

	    _createClass(SkipOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SkipSubscriber(subscriber, this.total));
	        }
	    }]);

	    return SkipOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SkipSubscriber = function (_Subscriber) {
	    _inherits(SkipSubscriber, _Subscriber);

	    function SkipSubscriber(destination, total) {
	        _classCallCheck(this, SkipSubscriber);

	        var _this = _possibleConstructorReturn(this, (SkipSubscriber.__proto__ || Object.getPrototypeOf(SkipSubscriber)).call(this, destination));

	        _this.total = total;
	        _this.count = 0;
	        return _this;
	    }

	    _createClass(SkipSubscriber, [{
	        key: '_next',
	        value: function _next(x) {
	            if (++this.count > this.total) {
	                this.destination.next(x);
	            }
	        }
	    }]);

	    return SkipSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=skip.js.map

/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _skipUntil = __webpack_require__(270);

	_Observable.Observable.prototype.skipUntil = _skipUntil.skipUntil;
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.skipUntil = skipUntil;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that skips items emitted by the source Observable until a second Observable emits an item.
	 *
	 * <img src="./img/skipUntil.png" width="100%">
	 *
	 * @param {Observable} the second Observable that has to emit an item before the source Observable's elements begin to
	 * be mirrored by the resulting Observable.
	 * @return {Observable<T>} an Observable that skips items from the source Observable until the second Observable emits
	 * an item, then emits the remaining items.
	 * @method skipUntil
	 * @owner Observable
	 */
	function skipUntil(notifier) {
	    return this.lift(new SkipUntilOperator(notifier));
	}

	var SkipUntilOperator = function () {
	    function SkipUntilOperator(notifier) {
	        _classCallCheck(this, SkipUntilOperator);

	        this.notifier = notifier;
	    }

	    _createClass(SkipUntilOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
	        }
	    }]);

	    return SkipUntilOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SkipUntilSubscriber = function (_OuterSubscriber) {
	    _inherits(SkipUntilSubscriber, _OuterSubscriber);

	    function SkipUntilSubscriber(destination, notifier) {
	        _classCallCheck(this, SkipUntilSubscriber);

	        var _this = _possibleConstructorReturn(this, (SkipUntilSubscriber.__proto__ || Object.getPrototypeOf(SkipUntilSubscriber)).call(this, destination));

	        _this.hasValue = false;
	        _this.isInnerStopped = false;
	        _this.add((0, _subscribeToResult.subscribeToResult)(_this, notifier));
	        return _this;
	    }

	    _createClass(SkipUntilSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (this.hasValue) {
	                _get(SkipUntilSubscriber.prototype.__proto__ || Object.getPrototypeOf(SkipUntilSubscriber.prototype), '_next', this).call(this, value);
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            if (this.isInnerStopped) {
	                _get(SkipUntilSubscriber.prototype.__proto__ || Object.getPrototypeOf(SkipUntilSubscriber.prototype), '_complete', this).call(this);
	            } else {
	                this.unsubscribe();
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.hasValue = true;
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            this.isInnerStopped = true;
	            if (this.isStopped) {
	                _get(SkipUntilSubscriber.prototype.__proto__ || Object.getPrototypeOf(SkipUntilSubscriber.prototype), '_complete', this).call(this);
	            }
	        }
	    }]);

	    return SkipUntilSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=skipUntil.js.map

/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _skipWhile = __webpack_require__(272);

	_Observable.Observable.prototype.skipWhile = _skipWhile.skipWhile;
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.skipWhile = skipWhile;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Returns an Observable that skips all items emitted by the source Observable as long as a specified condition holds
	 * true, but emits all further source items as soon as the condition becomes false.
	 *
	 * <img src="./img/skipWhile.png" width="100%">
	 *
	 * @param {Function} predicate - a function to test each item emitted from the source Observable.
	 * @return {Observable<T>} an Observable that begins emitting items emitted by the source Observable when the
	 * specified predicate becomes false.
	 * @method skipWhile
	 * @owner Observable
	 */
	function skipWhile(predicate) {
	    return this.lift(new SkipWhileOperator(predicate));
	}

	var SkipWhileOperator = function () {
	    function SkipWhileOperator(predicate) {
	        _classCallCheck(this, SkipWhileOperator);

	        this.predicate = predicate;
	    }

	    _createClass(SkipWhileOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SkipWhileSubscriber(subscriber, this.predicate));
	        }
	    }]);

	    return SkipWhileOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SkipWhileSubscriber = function (_Subscriber) {
	    _inherits(SkipWhileSubscriber, _Subscriber);

	    function SkipWhileSubscriber(destination, predicate) {
	        _classCallCheck(this, SkipWhileSubscriber);

	        var _this = _possibleConstructorReturn(this, (SkipWhileSubscriber.__proto__ || Object.getPrototypeOf(SkipWhileSubscriber)).call(this, destination));

	        _this.predicate = predicate;
	        _this.skipping = true;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(SkipWhileSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var destination = this.destination;
	            if (this.skipping) {
	                this.tryCallPredicate(value);
	            }
	            if (!this.skipping) {
	                destination.next(value);
	            }
	        }
	    }, {
	        key: 'tryCallPredicate',
	        value: function tryCallPredicate(value) {
	            try {
	                var result = this.predicate(value, this.index++);
	                this.skipping = Boolean(result);
	            } catch (err) {
	                this.destination.error(err);
	            }
	        }
	    }]);

	    return SkipWhileSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=skipWhile.js.map

/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _startWith = __webpack_require__(274);

	_Observable.Observable.prototype.startWith = _startWith.startWith;
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.startWith = startWith;

	var _ArrayObservable = __webpack_require__(30);

	var _ScalarObservable = __webpack_require__(31);

	var _EmptyObservable = __webpack_require__(32);

	var _concat = __webpack_require__(41);

	var _isScheduler = __webpack_require__(29);

	/**
	 * Returns an Observable that emits the items in a specified Iterable before it begins to emit items emitted by the
	 * source Observable.
	 *
	 * <img src="./img/startWith.png" width="100%">
	 *
	 * @param {Values} an Iterable that contains the items you want the modified Observable to emit first.
	 * @return {Observable} an Observable that emits the items in the specified Iterable and then emits the items
	 * emitted by the source Observable.
	 * @method startWith
	 * @owner Observable
	 */
	function startWith() {
	    for (var _len = arguments.length, array = Array(_len), _key = 0; _key < _len; _key++) {
	        array[_key] = arguments[_key];
	    }

	    var scheduler = array[array.length - 1];
	    if ((0, _isScheduler.isScheduler)(scheduler)) {
	        array.pop();
	    } else {
	        scheduler = null;
	    }
	    var len = array.length;
	    if (len === 1) {
	        return (0, _concat.concatStatic)(new _ScalarObservable.ScalarObservable(array[0], scheduler), this);
	    } else if (len > 1) {
	        return (0, _concat.concatStatic)(new _ArrayObservable.ArrayObservable(array, scheduler), this);
	    } else {
	        return (0, _concat.concatStatic)(new _EmptyObservable.EmptyObservable(scheduler), this);
	    }
	}
	//# sourceMappingURL=startWith.js.map

/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _subscribeOn = __webpack_require__(276);

	_Observable.Observable.prototype.subscribeOn = _subscribeOn.subscribeOn;
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 276 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.subscribeOn = subscribeOn;

	var _SubscribeOnObservable = __webpack_require__(277);

	/**
	 * Asynchronously subscribes Observers to this Observable on the specified Scheduler.
	 *
	 * <img src="./img/subscribeOn.png" width="100%">
	 *
	 * @param {Scheduler} the Scheduler to perform subscription actions on.
	 * @return {Observable<T>} the source Observable modified so that its subscriptions happen on the specified Scheduler
	 .
	 * @method subscribeOn
	 * @owner Observable
	 */
	function subscribeOn(scheduler) {
	  var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	  return new _SubscribeOnObservable.SubscribeOnObservable(this, delay, scheduler);
	}
	//# sourceMappingURL=subscribeOn.js.map

/***/ },
/* 277 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SubscribeOnObservable = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Observable2 = __webpack_require__(4);

	var _asap = __webpack_require__(278);

	var _isNumeric = __webpack_require__(75);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @extends {Ignored}
	 * @hide true
	 */
	var SubscribeOnObservable = exports.SubscribeOnObservable = function (_Observable) {
	    _inherits(SubscribeOnObservable, _Observable);

	    function SubscribeOnObservable(source) {
	        var delayTime = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	        var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _asap.asap : arguments[2];

	        _classCallCheck(this, SubscribeOnObservable);

	        var _this = _possibleConstructorReturn(this, (SubscribeOnObservable.__proto__ || Object.getPrototypeOf(SubscribeOnObservable)).call(this));

	        _this.source = source;
	        _this.delayTime = delayTime;
	        _this.scheduler = scheduler;
	        if (!(0, _isNumeric.isNumeric)(delayTime) || delayTime < 0) {
	            _this.delayTime = 0;
	        }
	        if (!scheduler || typeof scheduler.schedule !== 'function') {
	            _this.scheduler = _asap.asap;
	        }
	        return _this;
	    }

	    _createClass(SubscribeOnObservable, [{
	        key: '_subscribe',
	        value: function _subscribe(subscriber) {
	            var delay = this.delayTime;
	            var source = this.source;
	            var scheduler = this.scheduler;
	            return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
	                source: source, subscriber: subscriber
	            });
	        }
	    }], [{
	        key: 'create',
	        value: function create(source) {
	            var delay = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _asap.asap : arguments[2];

	            return new SubscribeOnObservable(source, delay, scheduler);
	        }
	    }, {
	        key: 'dispatch',
	        value: function dispatch(arg) {
	            var source = arg.source;
	            var subscriber = arg.subscriber;

	            return source.subscribe(subscriber);
	        }
	    }]);

	    return SubscribeOnObservable;
	}(_Observable2.Observable);
	//# sourceMappingURL=SubscribeOnObservable.js.map

/***/ },
/* 278 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.asap = undefined;

	var _AsapAction = __webpack_require__(279);

	var _AsapScheduler = __webpack_require__(283);

	var asap = exports.asap = new _AsapScheduler.AsapScheduler(_AsapAction.AsapAction);
	//# sourceMappingURL=asap.js.map

/***/ },
/* 279 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AsapAction = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _Immediate = __webpack_require__(280);

	var _AsyncAction2 = __webpack_require__(77);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var AsapAction = exports.AsapAction = function (_AsyncAction) {
	    _inherits(AsapAction, _AsyncAction);

	    function AsapAction(scheduler, work) {
	        _classCallCheck(this, AsapAction);

	        var _this = _possibleConstructorReturn(this, (AsapAction.__proto__ || Object.getPrototypeOf(AsapAction)).call(this, scheduler, work));

	        _this.scheduler = scheduler;
	        _this.work = work;
	        return _this;
	    }

	    _createClass(AsapAction, [{
	        key: 'requestAsyncId',
	        value: function requestAsyncId(scheduler, id) {
	            var delay = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	            // If delay is greater than 0, request as an async action.
	            if (delay !== null && delay > 0) {
	                return _get(AsapAction.prototype.__proto__ || Object.getPrototypeOf(AsapAction.prototype), 'requestAsyncId', this).call(this, scheduler, id, delay);
	            }
	            // Push the action to the end of the scheduler queue.
	            scheduler.actions.push(this);
	            // If a microtask has already been scheduled, don't schedule another
	            // one. If a microtask hasn't been scheduled yet, schedule one now. Return
	            // the current scheduled microtask id.
	            return scheduler.scheduled || (scheduler.scheduled = _Immediate.Immediate.setImmediate(scheduler.flush.bind(scheduler, null)));
	        }
	    }, {
	        key: 'recycleAsyncId',
	        value: function recycleAsyncId(scheduler, id) {
	            var delay = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

	            // If delay exists and is greater than 0, recycle as an async action.
	            if (delay !== null && delay > 0) {
	                return _get(AsapAction.prototype.__proto__ || Object.getPrototypeOf(AsapAction.prototype), 'recycleAsyncId', this).call(this, scheduler, id, delay);
	            }
	            // If the scheduler queue is empty, cancel the requested microtask and
	            // set the scheduled flag to undefined so the next AsapAction will schedule
	            // its own.
	            if (scheduler.actions.length === 0) {
	                _Immediate.Immediate.clearImmediate(id);
	                scheduler.scheduled = undefined;
	            }
	            // Return undefined so the action knows to request a new async id if it's rescheduled.
	            return undefined;
	        }
	    }]);

	    return AsapAction;
	}(_AsyncAction2.AsyncAction);
	//# sourceMappingURL=AsapAction.js.map

/***/ },
/* 280 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(clearImmediate, setImmediate) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Immediate = exports.ImmediateDefinition = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     Some credit for this helper goes to http://github.com/YuzuJS/setImmediate
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */


	var _root = __webpack_require__(5);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var ImmediateDefinition = exports.ImmediateDefinition = function () {
	    function ImmediateDefinition(root) {
	        _classCallCheck(this, ImmediateDefinition);

	        this.root = root;
	        if (root.setImmediate && typeof root.setImmediate === 'function') {
	            this.setImmediate = root.setImmediate.bind(root);
	            this.clearImmediate = root.clearImmediate.bind(root);
	        } else {
	            this.nextHandle = 1;
	            this.tasksByHandle = {};
	            this.currentlyRunningATask = false;
	            // Don't get fooled by e.g. browserify environments.
	            if (this.canUseProcessNextTick()) {
	                // For Node.js before 0.9
	                this.setImmediate = this.createProcessNextTickSetImmediate();
	            } else if (this.canUsePostMessage()) {
	                // For non-IE10 modern browsers
	                this.setImmediate = this.createPostMessageSetImmediate();
	            } else if (this.canUseMessageChannel()) {
	                // For web workers, where supported
	                this.setImmediate = this.createMessageChannelSetImmediate();
	            } else if (this.canUseReadyStateChange()) {
	                // For IE 6–8
	                this.setImmediate = this.createReadyStateChangeSetImmediate();
	            } else {
	                // For older browsers
	                this.setImmediate = this.createSetTimeoutSetImmediate();
	            }
	            var ci = function clearImmediate(handle) {
	                delete clearImmediate.instance.tasksByHandle[handle];
	            };
	            ci.instance = this;
	            this.clearImmediate = ci;
	        }
	    }

	    _createClass(ImmediateDefinition, [{
	        key: 'identify',
	        value: function identify(o) {
	            return this.root.Object.prototype.toString.call(o);
	        }
	    }, {
	        key: 'canUseProcessNextTick',
	        value: function canUseProcessNextTick() {
	            return this.identify(this.root.process) === '[object process]';
	        }
	    }, {
	        key: 'canUseMessageChannel',
	        value: function canUseMessageChannel() {
	            return Boolean(this.root.MessageChannel);
	        }
	    }, {
	        key: 'canUseReadyStateChange',
	        value: function canUseReadyStateChange() {
	            var document = this.root.document;
	            return Boolean(document && 'onreadystatechange' in document.createElement('script'));
	        }
	    }, {
	        key: 'canUsePostMessage',
	        value: function canUsePostMessage() {
	            var root = this.root;
	            // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	            // where `root.postMessage` means something completely different and can't be used for this purpose.
	            if (root.postMessage && !root.importScripts) {
	                var postMessageIsAsynchronous = true;
	                var oldOnMessage = root.onmessage;
	                root.onmessage = function () {
	                    postMessageIsAsynchronous = false;
	                };
	                root.postMessage('', '*');
	                root.onmessage = oldOnMessage;
	                return postMessageIsAsynchronous;
	            }
	            return false;
	        }
	        // This function accepts the same arguments as setImmediate, but
	        // returns a function that requires no arguments.

	    }, {
	        key: 'partiallyApplied',
	        value: function partiallyApplied(handler) {
	            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	                args[_key - 1] = arguments[_key];
	            }

	            var fn = function result() {
	                var handler = result.handler;
	                var args = result.args;

	                if (typeof handler === 'function') {
	                    handler.apply(undefined, args);
	                } else {
	                    new Function('' + handler)();
	                }
	            };
	            fn.handler = handler;
	            fn.args = args;
	            return fn;
	        }
	    }, {
	        key: 'addFromSetImmediateArguments',
	        value: function addFromSetImmediateArguments(args) {
	            this.tasksByHandle[this.nextHandle] = this.partiallyApplied.apply(undefined, args);
	            return this.nextHandle++;
	        }
	    }, {
	        key: 'createProcessNextTickSetImmediate',
	        value: function createProcessNextTickSetImmediate() {
	            var fn = function setImmediate() {
	                var instance = setImmediate.instance;

	                var handle = instance.addFromSetImmediateArguments(arguments);
	                instance.root.process.nextTick(instance.partiallyApplied(instance.runIfPresent, handle));
	                return handle;
	            };
	            fn.instance = this;
	            return fn;
	        }
	    }, {
	        key: 'createPostMessageSetImmediate',
	        value: function createPostMessageSetImmediate() {
	            // Installs an event handler on `global` for the `message` event: see
	            // * https://developer.mozilla.org/en/DOM/window.postMessage
	            // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	            var root = this.root;
	            var messagePrefix = 'setImmediate$' + root.Math.random() + '$';
	            var onGlobalMessage = function globalMessageHandler(event) {
	                var instance = globalMessageHandler.instance;
	                if (event.source === root && typeof event.data === 'string' && event.data.indexOf(messagePrefix) === 0) {
	                    instance.runIfPresent(+event.data.slice(messagePrefix.length));
	                }
	            };
	            onGlobalMessage.instance = this;
	            root.addEventListener('message', onGlobalMessage, false);
	            var fn = function setImmediate() {
	                var messagePrefix = setImmediate.messagePrefix;
	                var instance = setImmediate.instance;

	                var handle = instance.addFromSetImmediateArguments(arguments);
	                instance.root.postMessage(messagePrefix + handle, '*');
	                return handle;
	            };
	            fn.instance = this;
	            fn.messagePrefix = messagePrefix;
	            return fn;
	        }
	    }, {
	        key: 'runIfPresent',
	        value: function runIfPresent(handle) {
	            // From the spec: 'Wait until any invocations of this algorithm started before this one have completed.'
	            // So if we're currently running a task, we'll need to delay this invocation.
	            if (this.currentlyRunningATask) {
	                // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	                // 'too much recursion' error.
	                this.root.setTimeout(this.partiallyApplied(this.runIfPresent, handle), 0);
	            } else {
	                var task = this.tasksByHandle[handle];
	                if (task) {
	                    this.currentlyRunningATask = true;
	                    try {
	                        task();
	                    } finally {
	                        this.clearImmediate(handle);
	                        this.currentlyRunningATask = false;
	                    }
	                }
	            }
	        }
	    }, {
	        key: 'createMessageChannelSetImmediate',
	        value: function createMessageChannelSetImmediate() {
	            var _this = this;

	            var channel = new this.root.MessageChannel();
	            channel.port1.onmessage = function (event) {
	                var handle = event.data;
	                _this.runIfPresent(handle);
	            };
	            var fn = function setImmediate() {
	                var channel = setImmediate.channel;
	                var instance = setImmediate.instance;

	                var handle = instance.addFromSetImmediateArguments(arguments);
	                channel.port2.postMessage(handle);
	                return handle;
	            };
	            fn.channel = channel;
	            fn.instance = this;
	            return fn;
	        }
	    }, {
	        key: 'createReadyStateChangeSetImmediate',
	        value: function createReadyStateChangeSetImmediate() {
	            var fn = function setImmediate() {
	                var instance = setImmediate.instance;
	                var root = instance.root;
	                var doc = root.document;
	                var html = doc.documentElement;
	                var handle = instance.addFromSetImmediateArguments(arguments);
	                // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	                // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	                var script = doc.createElement('script');
	                script.onreadystatechange = function () {
	                    instance.runIfPresent(handle);
	                    script.onreadystatechange = null;
	                    html.removeChild(script);
	                    script = null;
	                };
	                html.appendChild(script);
	                return handle;
	            };
	            fn.instance = this;
	            return fn;
	        }
	    }, {
	        key: 'createSetTimeoutSetImmediate',
	        value: function createSetTimeoutSetImmediate() {
	            var fn = function setImmediate() {
	                var instance = setImmediate.instance;
	                var handle = instance.addFromSetImmediateArguments(arguments);
	                instance.root.setTimeout(instance.partiallyApplied(instance.runIfPresent, handle), 0);
	                return handle;
	            };
	            fn.instance = this;
	            return fn;
	        }
	    }]);

	    return ImmediateDefinition;
	}();

	var Immediate = exports.Immediate = new ImmediateDefinition(_root.root);
	//# sourceMappingURL=Immediate.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(281).clearImmediate, __webpack_require__(281).setImmediate))

/***/ },
/* 281 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {"use strict";

	var nextTick = __webpack_require__(282).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;

	// DOM APIs, for completeness

	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  timeout.close();
	};

	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};

	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};

	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};

	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);

	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};

	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function (fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

	  immediateIds[id] = true;

	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });

	  return id;
	};

	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function (id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(281).setImmediate, __webpack_require__(281).clearImmediate))

/***/ },
/* 282 */
/***/ function(module, exports) {

	'use strict';

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 283 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.AsapScheduler = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _AsyncScheduler2 = __webpack_require__(79);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AsapScheduler = exports.AsapScheduler = function (_AsyncScheduler) {
	    _inherits(AsapScheduler, _AsyncScheduler);

	    function AsapScheduler() {
	        _classCallCheck(this, AsapScheduler);

	        return _possibleConstructorReturn(this, (AsapScheduler.__proto__ || Object.getPrototypeOf(AsapScheduler)).apply(this, arguments));
	    }

	    _createClass(AsapScheduler, [{
	        key: 'flush',
	        value: function flush() {
	            this.active = true;
	            this.scheduled = undefined;
	            var actions = this.actions;

	            var error = void 0;
	            var index = -1;
	            var count = actions.length;
	            var action = actions.shift();
	            do {
	                if (error = action.execute(action.state, action.delay)) {
	                    break;
	                }
	            } while (++index < count && (action = actions.shift()));
	            this.active = false;
	            if (error) {
	                while (++index < count && (action = actions.shift())) {
	                    action.unsubscribe();
	                }
	                throw error;
	            }
	        }
	    }]);

	    return AsapScheduler;
	}(_AsyncScheduler2.AsyncScheduler);
	//# sourceMappingURL=AsapScheduler.js.map

/***/ },
/* 284 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _switch2 = __webpack_require__(285);

	_Observable.Observable.prototype.switch = _switch2._switch;
	_Observable.Observable.prototype._switch = _switch2._switch;
	//# sourceMappingURL=switch.js.map

/***/ },
/* 285 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports._switch = _switch;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Converts a higher-order Observable into a first-order Observable by
	 * subscribing to only the most recently emitted of those inner Observables.
	 *
	 * <span class="informal">Flattens an Observable-of-Observables by dropping the
	 * previous inner Observable once a new one appears.</span>
	 *
	 * <img src="./img/switch.png" width="100%">
	 *
	 * `switch` subscribes to an Observable that emits Observables, also known as a
	 * higher-order Observable. Each time it observes one of these emitted inner
	 * Observables, the output Observable subscribes to the inner Observable and
	 * begins emitting the items emitted by that. So far, it behaves
	 * like {@link mergeAll}. However, when a new inner Observable is emitted,
	 * `switch` unsubscribes from the earlier-emitted inner Observable and
	 * subscribes to the new inner Observable and begins emitting items from it. It
	 * continues to behave like this for subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * // Each click event is mapped to an Observable that ticks every second
	 * var higherOrder = clicks.map((ev) => Rx.Observable.interval(1000));
	 * var switched = higherOrder.switch();
	 * // The outcome is that `switched` is essentially a timer that restarts
	 * // on every click. The interval Observables from older clicks do not merge
	 * // with the current interval Observable.
	 * switched.subscribe(x => console.log(x));
	 *
	 * @see {@link combineAll}
	 * @see {@link concatAll}
	 * @see {@link exhaust}
	 * @see {@link mergeAll}
	 * @see {@link switchMap}
	 * @see {@link switchMapTo}
	 * @see {@link zipAll}
	 *
	 * @return {Observable<T>} An Observable that emits the items emitted by the
	 * Observable most recently emitted by the source Observable.
	 * @method switch
	 * @name switch
	 * @owner Observable
	 */
	function _switch() {
	    return this.lift(new SwitchOperator());
	}

	var SwitchOperator = function () {
	    function SwitchOperator() {
	        _classCallCheck(this, SwitchOperator);
	    }

	    _createClass(SwitchOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SwitchSubscriber(subscriber));
	        }
	    }]);

	    return SwitchOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SwitchSubscriber = function (_OuterSubscriber) {
	    _inherits(SwitchSubscriber, _OuterSubscriber);

	    function SwitchSubscriber(destination) {
	        _classCallCheck(this, SwitchSubscriber);

	        var _this = _possibleConstructorReturn(this, (SwitchSubscriber.__proto__ || Object.getPrototypeOf(SwitchSubscriber)).call(this, destination));

	        _this.active = 0;
	        _this.hasCompleted = false;
	        return _this;
	    }

	    _createClass(SwitchSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            this.unsubscribeInner();
	            this.active++;
	            this.add(this.innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, value));
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.hasCompleted = true;
	            if (this.active === 0) {
	                this.destination.complete();
	            }
	        }
	    }, {
	        key: 'unsubscribeInner',
	        value: function unsubscribeInner() {
	            this.active = this.active > 0 ? this.active - 1 : 0;
	            var innerSubscription = this.innerSubscription;
	            if (innerSubscription) {
	                innerSubscription.unsubscribe();
	                this.remove(innerSubscription);
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.destination.next(innerValue);
	        }
	    }, {
	        key: 'notifyError',
	        value: function notifyError(err) {
	            this.destination.error(err);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            this.unsubscribeInner();
	            if (this.hasCompleted && this.active === 0) {
	                this.destination.complete();
	            }
	        }
	    }]);

	    return SwitchSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=switch.js.map

/***/ },
/* 286 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _switchMap = __webpack_require__(287);

	_Observable.Observable.prototype.switchMap = _switchMap.switchMap;
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 287 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.switchMap = switchMap;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Projects each source value to an Observable which is merged in the output
	 * Observable, emitting values only from the most recently projected Observable.
	 *
	 * <span class="informal">Maps each value to an Observable, then flattens all of
	 * these inner Observables using {@link switch}.</span>
	 *
	 * <img src="./img/switchMap.png" width="100%">
	 *
	 * Returns an Observable that emits items based on applying a function that you
	 * supply to each item emitted by the source Observable, where that function
	 * returns an (so-called "inner") Observable. Each time it observes one of these
	 * inner Observables, the output Observable begins emitting the items emitted by
	 * that inner Observable. When a new inner Observable is emitted, `switchMap`
	 * stops emitting items from the earlier-emitted inner Observable and begins
	 * emitting items from the new one. It continues to behave like this for
	 * subsequent inner Observables.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMap}
	 * @see {@link exhaustMap}
	 * @see {@link mergeMap}
	 * @see {@link switch}
	 * @see {@link switchMapTo}
	 *
	 * @param {function(value: T, ?index: number): Observable} project A function
	 * that, when applied to an item emitted by the source Observable, returns an
	 * Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits the result of applying the
	 * projection function (and the optional `resultSelector`) to each item emitted
	 * by the source Observable and taking only the values from the most recently
	 * projected inner Observable.
	 * @method switchMap
	 * @owner Observable
	 */
	function switchMap(project, resultSelector) {
	    return this.lift(new SwitchMapOperator(project, resultSelector));
	}

	var SwitchMapOperator = function () {
	    function SwitchMapOperator(project, resultSelector) {
	        _classCallCheck(this, SwitchMapOperator);

	        this.project = project;
	        this.resultSelector = resultSelector;
	    }

	    _createClass(SwitchMapOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
	        }
	    }]);

	    return SwitchMapOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SwitchMapSubscriber = function (_OuterSubscriber) {
	    _inherits(SwitchMapSubscriber, _OuterSubscriber);

	    function SwitchMapSubscriber(destination, project, resultSelector) {
	        _classCallCheck(this, SwitchMapSubscriber);

	        var _this = _possibleConstructorReturn(this, (SwitchMapSubscriber.__proto__ || Object.getPrototypeOf(SwitchMapSubscriber)).call(this, destination));

	        _this.project = project;
	        _this.resultSelector = resultSelector;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(SwitchMapSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var result = void 0;
	            var index = this.index++;
	            try {
	                result = this.project(value, index);
	            } catch (error) {
	                this.destination.error(error);
	                return;
	            }
	            this._innerSub(result, value, index);
	        }
	    }, {
	        key: '_innerSub',
	        value: function _innerSub(result, value, index) {
	            var innerSubscription = this.innerSubscription;
	            if (innerSubscription) {
	                innerSubscription.unsubscribe();
	            }
	            this.add(this.innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, result, value, index));
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var innerSubscription = this.innerSubscription;

	            if (!innerSubscription || innerSubscription.closed) {
	                _get(SwitchMapSubscriber.prototype.__proto__ || Object.getPrototypeOf(SwitchMapSubscriber.prototype), '_complete', this).call(this);
	            }
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            this.innerSubscription = null;
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            this.remove(innerSub);
	            this.innerSubscription = null;
	            if (this.isStopped) {
	                _get(SwitchMapSubscriber.prototype.__proto__ || Object.getPrototypeOf(SwitchMapSubscriber.prototype), '_complete', this).call(this);
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            if (this.resultSelector) {
	                this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
	            } else {
	                this.destination.next(innerValue);
	            }
	        }
	    }, {
	        key: '_tryNotifyNext',
	        value: function _tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex) {
	            var result = void 0;
	            try {
	                result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.destination.next(result);
	        }
	    }]);

	    return SwitchMapSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=switchMap.js.map

/***/ },
/* 288 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _switchMapTo = __webpack_require__(289);

	_Observable.Observable.prototype.switchMapTo = _switchMapTo.switchMapTo;
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 289 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.switchMapTo = switchMapTo;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Projects each source value to the same Observable which is flattened multiple
	 * times with {@link switch} in the output Observable.
	 *
	 * <span class="informal">It's like {@link switchMap}, but maps each value
	 * always to the same inner Observable.</span>
	 *
	 * <img src="./img/switchMapTo.png" width="100%">
	 *
	 * Maps each source value to the given Observable `innerObservable` regardless
	 * of the source value, and then flattens those resulting Observables into one
	 * single Observable, which is the output Observable. The output Observables
	 * emits values only from the most recently emitted instance of
	 * `innerObservable`.
	 *
	 * @example <caption>Rerun an interval Observable on every click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.switchMapTo(Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link concatMapTo}
	 * @see {@link switch}
	 * @see {@link switchMap}
	 * @see {@link mergeMapTo}
	 *
	 * @param {Observable} innerObservable An Observable to replace each value from
	 * the source Observable.
	 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
	 * A function to produce the value on the output Observable based on the values
	 * and the indices of the source (outer) emission and the inner Observable
	 * emission. The arguments passed to this function are:
	 * - `outerValue`: the value that came from the source
	 * - `innerValue`: the value that came from the projected Observable
	 * - `outerIndex`: the "index" of the value that came from the source
	 * - `innerIndex`: the "index" of the value from the projected Observable
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` every time a value is emitted on the source Observable.
	 * @return {Observable} An Observable that emits items from the given
	 * `innerObservable` (and optionally transformed through `resultSelector`) every
	 * time a value is emitted on the source Observable, and taking only the values
	 * from the most recently projected inner Observable.
	 * @method switchMapTo
	 * @owner Observable
	 */
	function switchMapTo(innerObservable, resultSelector) {
	    return this.lift(new SwitchMapToOperator(innerObservable, resultSelector));
	}

	var SwitchMapToOperator = function () {
	    function SwitchMapToOperator(observable, resultSelector) {
	        _classCallCheck(this, SwitchMapToOperator);

	        this.observable = observable;
	        this.resultSelector = resultSelector;
	    }

	    _createClass(SwitchMapToOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new SwitchMapToSubscriber(subscriber, this.observable, this.resultSelector));
	        }
	    }]);

	    return SwitchMapToOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var SwitchMapToSubscriber = function (_OuterSubscriber) {
	    _inherits(SwitchMapToSubscriber, _OuterSubscriber);

	    function SwitchMapToSubscriber(destination, inner, resultSelector) {
	        _classCallCheck(this, SwitchMapToSubscriber);

	        var _this = _possibleConstructorReturn(this, (SwitchMapToSubscriber.__proto__ || Object.getPrototypeOf(SwitchMapToSubscriber)).call(this, destination));

	        _this.inner = inner;
	        _this.resultSelector = resultSelector;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(SwitchMapToSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var innerSubscription = this.innerSubscription;
	            if (innerSubscription) {
	                innerSubscription.unsubscribe();
	            }
	            this.add(this.innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, this.inner, value, this.index++));
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var innerSubscription = this.innerSubscription;

	            if (!innerSubscription || innerSubscription.closed) {
	                _get(SwitchMapToSubscriber.prototype.__proto__ || Object.getPrototypeOf(SwitchMapToSubscriber.prototype), '_complete', this).call(this);
	            }
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            this.innerSubscription = null;
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            this.remove(innerSub);
	            this.innerSubscription = null;
	            if (this.isStopped) {
	                _get(SwitchMapToSubscriber.prototype.__proto__ || Object.getPrototypeOf(SwitchMapToSubscriber.prototype), '_complete', this).call(this);
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            var resultSelector = this.resultSelector;
	            var destination = this.destination;

	            if (resultSelector) {
	                this.tryResultSelector(outerValue, innerValue, outerIndex, innerIndex);
	            } else {
	                destination.next(innerValue);
	            }
	        }
	    }, {
	        key: 'tryResultSelector',
	        value: function tryResultSelector(outerValue, innerValue, outerIndex, innerIndex) {
	            var resultSelector = this.resultSelector;
	            var destination = this.destination;

	            var result = void 0;
	            try {
	                result = resultSelector(outerValue, innerValue, outerIndex, innerIndex);
	            } catch (err) {
	                destination.error(err);
	                return;
	            }
	            destination.next(result);
	        }
	    }]);

	    return SwitchMapToSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=switchMapTo.js.map

/***/ },
/* 290 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _take = __webpack_require__(291);

	_Observable.Observable.prototype.take = _take.take;
	//# sourceMappingURL=take.js.map

/***/ },
/* 291 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.take = take;

	var _Subscriber2 = __webpack_require__(7);

	var _ArgumentOutOfRangeError = __webpack_require__(175);

	var _EmptyObservable = __webpack_require__(32);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits only the first `count` values emitted by the source Observable.
	 *
	 * <span class="informal">Takes the first `count` values from the source, then
	 * completes.</span>
	 *
	 * <img src="./img/take.png" width="100%">
	 *
	 * `take` returns an Observable that emits only the first `count` values emitted
	 * by the source Observable. If the source emits fewer than `count` values then
	 * all of its values are emitted. After that, it completes, regardless if the
	 * source completes.
	 *
	 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
	 * var interval = Rx.Observable.interval(1000);
	 * var five = interval.take(5);
	 * five.subscribe(x => console.log(x));
	 *
	 * @see {@link takeLast}
	 * @see {@link takeUntil}
	 * @see {@link takeWhile}
	 * @see {@link skip}
	 *
	 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 *
	 * @param {number} count The maximum number of `next` values to emit.
	 * @return {Observable<T>} An Observable that emits only the first `count`
	 * values emitted by the source Observable, or all of the values from the source
	 * if the source emits fewer than `count` values.
	 * @method take
	 * @owner Observable
	 */
	function take(count) {
	    if (count === 0) {
	        return new _EmptyObservable.EmptyObservable();
	    } else {
	        return this.lift(new TakeOperator(count));
	    }
	}

	var TakeOperator = function () {
	    function TakeOperator(total) {
	        _classCallCheck(this, TakeOperator);

	        this.total = total;
	        if (this.total < 0) {
	            throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
	        }
	    }

	    _createClass(TakeOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new TakeSubscriber(subscriber, this.total));
	        }
	    }]);

	    return TakeOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var TakeSubscriber = function (_Subscriber) {
	    _inherits(TakeSubscriber, _Subscriber);

	    function TakeSubscriber(destination, total) {
	        _classCallCheck(this, TakeSubscriber);

	        var _this = _possibleConstructorReturn(this, (TakeSubscriber.__proto__ || Object.getPrototypeOf(TakeSubscriber)).call(this, destination));

	        _this.total = total;
	        _this.count = 0;
	        return _this;
	    }

	    _createClass(TakeSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var total = this.total;
	            if (++this.count <= total) {
	                this.destination.next(value);
	                if (this.count === total) {
	                    this.destination.complete();
	                    this.unsubscribe();
	                }
	            }
	        }
	    }]);

	    return TakeSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=take.js.map

/***/ },
/* 292 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _takeLast = __webpack_require__(293);

	_Observable.Observable.prototype.takeLast = _takeLast.takeLast;
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 293 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.takeLast = takeLast;

	var _Subscriber2 = __webpack_require__(7);

	var _ArgumentOutOfRangeError = __webpack_require__(175);

	var _EmptyObservable = __webpack_require__(32);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits only the last `count` values emitted by the source Observable.
	 *
	 * <span class="informal">Remembers the latest `count` values, then emits those
	 * only when the source completes.</span>
	 *
	 * <img src="./img/takeLast.png" width="100%">
	 *
	 * `takeLast` returns an Observable that emits at most the last `count` values
	 * emitted by the source Observable. If the source emits fewer than `count`
	 * values then all of its values are emitted. This operator must wait until the
	 * `complete` notification emission from the source in order to emit the `next`
	 * values on the output Observable, because otherwise it is impossible to know
	 * whether or not more values will be emitted on the source. For this reason,
	 * all values are emitted synchronously, followed by the complete notification.
	 *
	 * @example <caption>Take the last 3 values of an Observable with many values</caption>
	 * var many = Rx.Observable.range(1, 100);
	 * var lastThree = many.takeLast(3);
	 * lastThree.subscribe(x => console.log(x));
	 *
	 * @see {@link take}
	 * @see {@link takeUntil}
	 * @see {@link takeWhile}
	 * @see {@link skip}
	 *
	 * @throws {ArgumentOutOfRangeError} When using `takeLast(i)`, it delivers an
	 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
	 *
	 * @param {number} count The maximum number of values to emit from the end of
	 * the sequence of values emitted by the source Observable.
	 * @return {Observable<T>} An Observable that emits at most the last count
	 * values emitted by the source Observable.
	 * @method takeLast
	 * @owner Observable
	 */
	function takeLast(count) {
	    if (count === 0) {
	        return new _EmptyObservable.EmptyObservable();
	    } else {
	        return this.lift(new TakeLastOperator(count));
	    }
	}

	var TakeLastOperator = function () {
	    function TakeLastOperator(total) {
	        _classCallCheck(this, TakeLastOperator);

	        this.total = total;
	        if (this.total < 0) {
	            throw new _ArgumentOutOfRangeError.ArgumentOutOfRangeError();
	        }
	    }

	    _createClass(TakeLastOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new TakeLastSubscriber(subscriber, this.total));
	        }
	    }]);

	    return TakeLastOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var TakeLastSubscriber = function (_Subscriber) {
	    _inherits(TakeLastSubscriber, _Subscriber);

	    function TakeLastSubscriber(destination, total) {
	        _classCallCheck(this, TakeLastSubscriber);

	        var _this = _possibleConstructorReturn(this, (TakeLastSubscriber.__proto__ || Object.getPrototypeOf(TakeLastSubscriber)).call(this, destination));

	        _this.total = total;
	        _this.ring = new Array();
	        _this.count = 0;
	        return _this;
	    }

	    _createClass(TakeLastSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var ring = this.ring;
	            var total = this.total;
	            var count = this.count++;
	            if (ring.length < total) {
	                ring.push(value);
	            } else {
	                var index = count % total;
	                ring[index] = value;
	            }
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var destination = this.destination;
	            var count = this.count;
	            if (count > 0) {
	                var total = this.count >= this.total ? this.total : this.count;
	                var ring = this.ring;
	                for (var i = 0; i < total; i++) {
	                    var idx = count++ % total;
	                    destination.next(ring[idx]);
	                }
	            }
	            destination.complete();
	        }
	    }]);

	    return TakeLastSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=takeLast.js.map

/***/ },
/* 294 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _takeUntil = __webpack_require__(295);

	_Observable.Observable.prototype.takeUntil = _takeUntil.takeUntil;
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 295 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.takeUntil = takeUntil;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits the values emitted by the source Observable until a `notifier`
	 * Observable emits a value.
	 *
	 * <span class="informal">Lets values pass until a second Observable,
	 * `notifier`, emits something. Then, it completes.</span>
	 *
	 * <img src="./img/takeUntil.png" width="100%">
	 *
	 * `takeUntil` subscribes and begins mirroring the source Observable. It also
	 * monitors a second Observable, `notifier` that you provide. If the `notifier`
	 * emits a value or a complete notification, the output Observable stops
	 * mirroring the source Observable and completes.
	 *
	 * @example <caption>Tick every second until the first click happens</caption>
	 * var interval = Rx.Observable.interval(1000);
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = interval.takeUntil(clicks);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link take}
	 * @see {@link takeLast}
	 * @see {@link takeWhile}
	 * @see {@link skip}
	 *
	 * @param {Observable} notifier The Observable whose first emitted value will
	 * cause the output Observable of `takeUntil` to stop emitting values from the
	 * source Observable.
	 * @return {Observable<T>} An Observable that emits the values from the source
	 * Observable until such time as `notifier` emits its first value.
	 * @method takeUntil
	 * @owner Observable
	 */
	function takeUntil(notifier) {
	    return this.lift(new TakeUntilOperator(notifier));
	}

	var TakeUntilOperator = function () {
	    function TakeUntilOperator(notifier) {
	        _classCallCheck(this, TakeUntilOperator);

	        this.notifier = notifier;
	    }

	    _createClass(TakeUntilOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new TakeUntilSubscriber(subscriber, this.notifier));
	        }
	    }]);

	    return TakeUntilOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var TakeUntilSubscriber = function (_OuterSubscriber) {
	    _inherits(TakeUntilSubscriber, _OuterSubscriber);

	    function TakeUntilSubscriber(destination, notifier) {
	        _classCallCheck(this, TakeUntilSubscriber);

	        var _this = _possibleConstructorReturn(this, (TakeUntilSubscriber.__proto__ || Object.getPrototypeOf(TakeUntilSubscriber)).call(this, destination));

	        _this.notifier = notifier;
	        _this.add((0, _subscribeToResult.subscribeToResult)(_this, notifier));
	        return _this;
	    }

	    _createClass(TakeUntilSubscriber, [{
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.complete();
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            // noop
	        }
	    }]);

	    return TakeUntilSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=takeUntil.js.map

/***/ },
/* 296 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _takeWhile = __webpack_require__(297);

	_Observable.Observable.prototype.takeWhile = _takeWhile.takeWhile;
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 297 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.takeWhile = takeWhile;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits values emitted by the source Observable so long as each value satisfies
	 * the given `predicate`, and then completes as soon as this `predicate` is not
	 * satisfied.
	 *
	 * <span class="informal">Takes values from the source only while they pass the
	 * condition given. When the first value does not satisfy, it completes.</span>
	 *
	 * <img src="./img/takeWhile.png" width="100%">
	 *
	 * `takeWhile` subscribes and begins mirroring the source Observable. Each value
	 * emitted on the source is given to the `predicate` function which returns a
	 * boolean, representing a condition to be satisfied by the source values. The
	 * output Observable emits the source values until such time as the `predicate`
	 * returns false, at which point `takeWhile` stops mirroring the source
	 * Observable and completes the output Observable.
	 *
	 * @example <caption>Emit click events only while the clientX property is greater than 200</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.takeWhile(ev => ev.clientX > 200);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link take}
	 * @see {@link takeLast}
	 * @see {@link takeUntil}
	 * @see {@link skip}
	 *
	 * @param {function(value: T, index: number): boolean} predicate A function that
	 * evaluates a value emitted by the source Observable and returns a boolean.
	 * Also takes the (zero-based) index as the second argument.
	 * @return {Observable<T>} An Observable that emits the values from the source
	 * Observable so long as each value satisfies the condition defined by the
	 * `predicate`, then completes.
	 * @method takeWhile
	 * @owner Observable
	 */
	function takeWhile(predicate) {
	    return this.lift(new TakeWhileOperator(predicate));
	}

	var TakeWhileOperator = function () {
	    function TakeWhileOperator(predicate) {
	        _classCallCheck(this, TakeWhileOperator);

	        this.predicate = predicate;
	    }

	    _createClass(TakeWhileOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new TakeWhileSubscriber(subscriber, this.predicate));
	        }
	    }]);

	    return TakeWhileOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var TakeWhileSubscriber = function (_Subscriber) {
	    _inherits(TakeWhileSubscriber, _Subscriber);

	    function TakeWhileSubscriber(destination, predicate) {
	        _classCallCheck(this, TakeWhileSubscriber);

	        var _this = _possibleConstructorReturn(this, (TakeWhileSubscriber.__proto__ || Object.getPrototypeOf(TakeWhileSubscriber)).call(this, destination));

	        _this.predicate = predicate;
	        _this.index = 0;
	        return _this;
	    }

	    _createClass(TakeWhileSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var destination = this.destination;
	            var result = void 0;
	            try {
	                result = this.predicate(value, this.index++);
	            } catch (err) {
	                destination.error(err);
	                return;
	            }
	            this.nextOrComplete(value, result);
	        }
	    }, {
	        key: 'nextOrComplete',
	        value: function nextOrComplete(value, predicateResult) {
	            var destination = this.destination;
	            if (Boolean(predicateResult)) {
	                destination.next(value);
	            } else {
	                destination.complete();
	            }
	        }
	    }]);

	    return TakeWhileSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=takeWhile.js.map

/***/ },
/* 298 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _throttle = __webpack_require__(299);

	_Observable.Observable.prototype.throttle = _throttle.throttle;
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 299 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.throttle = throttle;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits a value from the source Observable, then ignores subsequent source
	 * values for a duration determined by another Observable, then repeats this
	 * process.
	 *
	 * <span class="informal">It's like {@link throttleTime}, but the silencing
	 * duration is determined by a second Observable.</span>
	 *
	 * <img src="./img/throttle.png" width="100%">
	 *
	 * `throttle` emits the source Observable values on the output Observable
	 * when its internal timer is disabled, and ignores source values when the timer
	 * is enabled. Initially, the timer is disabled. As soon as the first source
	 * value arrives, it is forwarded to the output Observable, and then the timer
	 * is enabled by calling the `durationSelector` function with the source value,
	 * which returns the "duration" Observable. When the duration Observable emits a
	 * value or completes, the timer is disabled, and this process repeats for the
	 * next source value.
	 *
	 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.throttle(ev => Rx.Observable.interval(1000));
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link audit}
	 * @see {@link debounce}
	 * @see {@link delayWhen}
	 * @see {@link sample}
	 * @see {@link throttleTime}
	 *
	 * @param {function(value: T): Observable|Promise} durationSelector A function
	 * that receives a value from the source Observable, for computing the silencing
	 * duration for each source value, returned as an Observable or a Promise.
	 * @return {Observable<T>} An Observable that performs the throttle operation to
	 * limit the rate of emissions from the source.
	 * @method throttle
	 * @owner Observable
	 */
	function throttle(durationSelector) {
	    return this.lift(new ThrottleOperator(durationSelector));
	}

	var ThrottleOperator = function () {
	    function ThrottleOperator(durationSelector) {
	        _classCallCheck(this, ThrottleOperator);

	        this.durationSelector = durationSelector;
	    }

	    _createClass(ThrottleOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new ThrottleSubscriber(subscriber, this.durationSelector));
	        }
	    }]);

	    return ThrottleOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ThrottleSubscriber = function (_OuterSubscriber) {
	    _inherits(ThrottleSubscriber, _OuterSubscriber);

	    function ThrottleSubscriber(destination, durationSelector) {
	        _classCallCheck(this, ThrottleSubscriber);

	        var _this = _possibleConstructorReturn(this, (ThrottleSubscriber.__proto__ || Object.getPrototypeOf(ThrottleSubscriber)).call(this, destination));

	        _this.destination = destination;
	        _this.durationSelector = durationSelector;
	        return _this;
	    }

	    _createClass(ThrottleSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (!this.throttled) {
	                this.tryDurationSelector(value);
	            }
	        }
	    }, {
	        key: 'tryDurationSelector',
	        value: function tryDurationSelector(value) {
	            var duration = null;
	            try {
	                duration = this.durationSelector(value);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.emitAndThrottle(value, duration);
	        }
	    }, {
	        key: 'emitAndThrottle',
	        value: function emitAndThrottle(value, duration) {
	            this.add(this.throttled = (0, _subscribeToResult.subscribeToResult)(this, duration));
	            this.destination.next(value);
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var throttled = this.throttled;
	            if (throttled) {
	                this.remove(throttled);
	                this.throttled = null;
	                throttled.unsubscribe();
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this._unsubscribe();
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            this._unsubscribe();
	        }
	    }]);

	    return ThrottleSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=throttle.js.map

/***/ },
/* 300 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _throttleTime = __webpack_require__(301);

	_Observable.Observable.prototype.throttleTime = _throttleTime.throttleTime;
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 301 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.throttleTime = throttleTime;

	var _Subscriber2 = __webpack_require__(7);

	var _async = __webpack_require__(76);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Emits a value from the source Observable, then ignores subsequent source
	 * values for `duration` milliseconds, then repeats this process.
	 *
	 * <span class="informal">Lets a value pass, then ignores source values for the
	 * next `duration` milliseconds.</span>
	 *
	 * <img src="./img/throttleTime.png" width="100%">
	 *
	 * `throttleTime` emits the source Observable values on the output Observable
	 * when its internal timer is disabled, and ignores source values when the timer
	 * is enabled. Initially, the timer is disabled. As soon as the first source
	 * value arrives, it is forwarded to the output Observable, and then the timer
	 * is enabled. After `duration` milliseconds (or the time unit determined
	 * internally by the optional `scheduler`) has passed, the timer is disabled,
	 * and this process repeats for the next source value. Optionally takes a
	 * {@link Scheduler} for managing timers.
	 *
	 * @example <caption>Emit clicks at a rate of at most one click per second</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.throttleTime(1000);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link auditTime}
	 * @see {@link debounceTime}
	 * @see {@link delay}
	 * @see {@link sampleTime}
	 * @see {@link throttle}
	 *
	 * @param {number} duration Time to wait before emitting another value after
	 * emitting the last value, measured in milliseconds or the time unit determined
	 * internally by the optional `scheduler`.
	 * @param {Scheduler} [scheduler=async] The {@link Scheduler} to use for
	 * managing the timers that handle the sampling.
	 * @return {Observable<T>} An Observable that performs the throttle operation to
	 * limit the rate of emissions from the source.
	 * @method throttleTime
	 * @owner Observable
	 */
	function throttleTime(duration) {
	    var scheduler = arguments.length <= 1 || arguments[1] === undefined ? _async.async : arguments[1];

	    return this.lift(new ThrottleTimeOperator(duration, scheduler));
	}

	var ThrottleTimeOperator = function () {
	    function ThrottleTimeOperator(duration, scheduler) {
	        _classCallCheck(this, ThrottleTimeOperator);

	        this.duration = duration;
	        this.scheduler = scheduler;
	    }

	    _createClass(ThrottleTimeOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new ThrottleTimeSubscriber(subscriber, this.duration, this.scheduler));
	        }
	    }]);

	    return ThrottleTimeOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ThrottleTimeSubscriber = function (_Subscriber) {
	    _inherits(ThrottleTimeSubscriber, _Subscriber);

	    function ThrottleTimeSubscriber(destination, duration, scheduler) {
	        _classCallCheck(this, ThrottleTimeSubscriber);

	        var _this = _possibleConstructorReturn(this, (ThrottleTimeSubscriber.__proto__ || Object.getPrototypeOf(ThrottleTimeSubscriber)).call(this, destination));

	        _this.duration = duration;
	        _this.scheduler = scheduler;
	        return _this;
	    }

	    _createClass(ThrottleTimeSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            if (!this.throttled) {
	                this.add(this.throttled = this.scheduler.schedule(dispatchNext, this.duration, { subscriber: this }));
	                this.destination.next(value);
	            }
	        }
	    }, {
	        key: 'clearThrottle',
	        value: function clearThrottle() {
	            var throttled = this.throttled;
	            if (throttled) {
	                throttled.unsubscribe();
	                this.remove(throttled);
	                this.throttled = null;
	            }
	        }
	    }]);

	    return ThrottleTimeSubscriber;
	}(_Subscriber2.Subscriber);

	function dispatchNext(arg) {
	    var subscriber = arg.subscriber;

	    subscriber.clearThrottle();
	}
	//# sourceMappingURL=throttleTime.js.map

/***/ },
/* 302 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _timeInterval = __webpack_require__(303);

	_Observable.Observable.prototype.timeInterval = _timeInterval.timeInterval;
	//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 303 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.TimeInterval = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.timeInterval = timeInterval;

	var _Subscriber2 = __webpack_require__(7);

	var _async = __webpack_require__(76);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @param scheduler
	 * @return {Observable<TimeInterval<any>>|WebSocketSubject<T>|Observable<T>}
	 * @method timeInterval
	 * @owner Observable
	 */
	function timeInterval() {
	    var scheduler = arguments.length <= 0 || arguments[0] === undefined ? _async.async : arguments[0];

	    return this.lift(new TimeIntervalOperator(scheduler));
	}

	var TimeInterval = exports.TimeInterval = function TimeInterval(value, interval) {
	    _classCallCheck(this, TimeInterval);

	    this.value = value;
	    this.interval = interval;
	};

	;

	var TimeIntervalOperator = function () {
	    function TimeIntervalOperator(scheduler) {
	        _classCallCheck(this, TimeIntervalOperator);

	        this.scheduler = scheduler;
	    }

	    _createClass(TimeIntervalOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new TimeIntervalSubscriber(observer, this.scheduler));
	        }
	    }]);

	    return TimeIntervalOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var TimeIntervalSubscriber = function (_Subscriber) {
	    _inherits(TimeIntervalSubscriber, _Subscriber);

	    function TimeIntervalSubscriber(destination, scheduler) {
	        _classCallCheck(this, TimeIntervalSubscriber);

	        var _this = _possibleConstructorReturn(this, (TimeIntervalSubscriber.__proto__ || Object.getPrototypeOf(TimeIntervalSubscriber)).call(this, destination));

	        _this.scheduler = scheduler;
	        _this.lastTime = 0;
	        _this.lastTime = scheduler.now();
	        return _this;
	    }

	    _createClass(TimeIntervalSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var now = this.scheduler.now();
	            var span = now - this.lastTime;
	            this.lastTime = now;
	            this.destination.next(new TimeInterval(value, span));
	        }
	    }]);

	    return TimeIntervalSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=timeInterval.js.map

/***/ },
/* 304 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _timeout = __webpack_require__(305);

	_Observable.Observable.prototype.timeout = _timeout.timeout;
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 305 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.timeout = timeout;

	var _async = __webpack_require__(76);

	var _isDate = __webpack_require__(109);

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @param due
	 * @param errorToSend
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method timeout
	 * @owner Observable
	 */
	function timeout(due) {
	    var errorToSend = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _async.async : arguments[2];

	    var absoluteTimeout = (0, _isDate.isDate)(due);
	    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
	    return this.lift(new TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler));
	}

	var TimeoutOperator = function () {
	    function TimeoutOperator(waitFor, absoluteTimeout, errorToSend, scheduler) {
	        _classCallCheck(this, TimeoutOperator);

	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.errorToSend = errorToSend;
	        this.scheduler = scheduler;
	    }

	    _createClass(TimeoutOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new TimeoutSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.errorToSend, this.scheduler));
	        }
	    }]);

	    return TimeoutOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var TimeoutSubscriber = function (_Subscriber) {
	    _inherits(TimeoutSubscriber, _Subscriber);

	    function TimeoutSubscriber(destination, absoluteTimeout, waitFor, errorToSend, scheduler) {
	        _classCallCheck(this, TimeoutSubscriber);

	        var _this = _possibleConstructorReturn(this, (TimeoutSubscriber.__proto__ || Object.getPrototypeOf(TimeoutSubscriber)).call(this, destination));

	        _this.absoluteTimeout = absoluteTimeout;
	        _this.waitFor = waitFor;
	        _this.errorToSend = errorToSend;
	        _this.scheduler = scheduler;
	        _this.index = 0;
	        _this._previousIndex = 0;
	        _this._hasCompleted = false;
	        _this.scheduleTimeout();
	        return _this;
	    }

	    _createClass(TimeoutSubscriber, [{
	        key: 'scheduleTimeout',
	        value: function scheduleTimeout() {
	            var currentIndex = this.index;
	            this.scheduler.schedule(TimeoutSubscriber.dispatchTimeout, this.waitFor, { subscriber: this, index: currentIndex });
	            this.index++;
	            this._previousIndex = currentIndex;
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.destination.next(value);
	            if (!this.absoluteTimeout) {
	                this.scheduleTimeout();
	            }
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.destination.error(err);
	            this._hasCompleted = true;
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.destination.complete();
	            this._hasCompleted = true;
	        }
	    }, {
	        key: 'notifyTimeout',
	        value: function notifyTimeout() {
	            this.error(this.errorToSend || new Error('timeout'));
	        }
	    }, {
	        key: 'previousIndex',
	        get: function get() {
	            return this._previousIndex;
	        }
	    }, {
	        key: 'hasCompleted',
	        get: function get() {
	            return this._hasCompleted;
	        }
	    }], [{
	        key: 'dispatchTimeout',
	        value: function dispatchTimeout(state) {
	            var source = state.subscriber;
	            var currentIndex = state.index;
	            if (!source.hasCompleted && source.previousIndex === currentIndex) {
	                source.notifyTimeout();
	            }
	        }
	    }]);

	    return TimeoutSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=timeout.js.map

/***/ },
/* 306 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _timeoutWith = __webpack_require__(307);

	_Observable.Observable.prototype.timeoutWith = _timeoutWith.timeoutWith;
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 307 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.timeoutWith = timeoutWith;

	var _async = __webpack_require__(76);

	var _isDate = __webpack_require__(109);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @param due
	 * @param withObservable
	 * @param scheduler
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method timeoutWith
	 * @owner Observable
	 */
	function timeoutWith(due, withObservable) {
	    var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _async.async : arguments[2];

	    var absoluteTimeout = (0, _isDate.isDate)(due);
	    var waitFor = absoluteTimeout ? +due - scheduler.now() : Math.abs(due);
	    return this.lift(new TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler));
	}

	var TimeoutWithOperator = function () {
	    function TimeoutWithOperator(waitFor, absoluteTimeout, withObservable, scheduler) {
	        _classCallCheck(this, TimeoutWithOperator);

	        this.waitFor = waitFor;
	        this.absoluteTimeout = absoluteTimeout;
	        this.withObservable = withObservable;
	        this.scheduler = scheduler;
	    }

	    _createClass(TimeoutWithOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new TimeoutWithSubscriber(subscriber, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
	        }
	    }]);

	    return TimeoutWithOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var TimeoutWithSubscriber = function (_OuterSubscriber) {
	    _inherits(TimeoutWithSubscriber, _OuterSubscriber);

	    function TimeoutWithSubscriber(destination, absoluteTimeout, waitFor, withObservable, scheduler) {
	        _classCallCheck(this, TimeoutWithSubscriber);

	        var _this = _possibleConstructorReturn(this, (TimeoutWithSubscriber.__proto__ || Object.getPrototypeOf(TimeoutWithSubscriber)).call(this));

	        _this.destination = destination;
	        _this.absoluteTimeout = absoluteTimeout;
	        _this.waitFor = waitFor;
	        _this.withObservable = withObservable;
	        _this.scheduler = scheduler;
	        _this.timeoutSubscription = undefined;
	        _this.index = 0;
	        _this._previousIndex = 0;
	        _this._hasCompleted = false;
	        destination.add(_this);
	        _this.scheduleTimeout();
	        return _this;
	    }

	    _createClass(TimeoutWithSubscriber, [{
	        key: 'scheduleTimeout',
	        value: function scheduleTimeout() {
	            var currentIndex = this.index;
	            var timeoutState = { subscriber: this, index: currentIndex };
	            this.scheduler.schedule(TimeoutWithSubscriber.dispatchTimeout, this.waitFor, timeoutState);
	            this.index++;
	            this._previousIndex = currentIndex;
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.destination.next(value);
	            if (!this.absoluteTimeout) {
	                this.scheduleTimeout();
	            }
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.destination.error(err);
	            this._hasCompleted = true;
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.destination.complete();
	            this._hasCompleted = true;
	        }
	    }, {
	        key: 'handleTimeout',
	        value: function handleTimeout() {
	            if (!this.closed) {
	                var withObservable = this.withObservable;
	                this.unsubscribe();
	                this.destination.add(this.timeoutSubscription = (0, _subscribeToResult.subscribeToResult)(this, withObservable));
	            }
	        }
	    }, {
	        key: 'previousIndex',
	        get: function get() {
	            return this._previousIndex;
	        }
	    }, {
	        key: 'hasCompleted',
	        get: function get() {
	            return this._hasCompleted;
	        }
	    }], [{
	        key: 'dispatchTimeout',
	        value: function dispatchTimeout(state) {
	            var source = state.subscriber;
	            var currentIndex = state.index;
	            if (!source.hasCompleted && source.previousIndex === currentIndex) {
	                source.handleTimeout();
	            }
	        }
	    }]);

	    return TimeoutWithSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=timeoutWith.js.map

/***/ },
/* 308 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _timestamp = __webpack_require__(309);

	_Observable.Observable.prototype.timestamp = _timestamp.timestamp;
	//# sourceMappingURL=timestamp.js.map

/***/ },
/* 309 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Timestamp = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.timestamp = timestamp;

	var _Subscriber2 = __webpack_require__(7);

	var _async = __webpack_require__(76);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @param scheduler
	 * @return {Observable<Timestamp<any>>|WebSocketSubject<T>|Observable<T>}
	 * @method timestamp
	 * @owner Observable
	 */
	function timestamp() {
	    var scheduler = arguments.length <= 0 || arguments[0] === undefined ? _async.async : arguments[0];

	    return this.lift(new TimestampOperator(scheduler));
	}

	var Timestamp = exports.Timestamp = function Timestamp(value, timestamp) {
	    _classCallCheck(this, Timestamp);

	    this.value = value;
	    this.timestamp = timestamp;
	};

	;

	var TimestampOperator = function () {
	    function TimestampOperator(scheduler) {
	        _classCallCheck(this, TimestampOperator);

	        this.scheduler = scheduler;
	    }

	    _createClass(TimestampOperator, [{
	        key: 'call',
	        value: function call(observer, source) {
	            return source._subscribe(new TimestampSubscriber(observer, this.scheduler));
	        }
	    }]);

	    return TimestampOperator;
	}();

	var TimestampSubscriber = function (_Subscriber) {
	    _inherits(TimestampSubscriber, _Subscriber);

	    function TimestampSubscriber(destination, scheduler) {
	        _classCallCheck(this, TimestampSubscriber);

	        var _this = _possibleConstructorReturn(this, (TimestampSubscriber.__proto__ || Object.getPrototypeOf(TimestampSubscriber)).call(this, destination));

	        _this.scheduler = scheduler;
	        return _this;
	    }

	    _createClass(TimestampSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var now = this.scheduler.now();
	            this.destination.next(new Timestamp(value, now));
	        }
	    }]);

	    return TimestampSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=timestamp.js.map

/***/ },
/* 310 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _toArray = __webpack_require__(311);

	_Observable.Observable.prototype.toArray = _toArray.toArray;
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 311 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.toArray = toArray;

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @return {Observable<any[]>|WebSocketSubject<T>|Observable<T>}
	 * @method toArray
	 * @owner Observable
	 */
	function toArray() {
	    return this.lift(new ToArrayOperator());
	}

	var ToArrayOperator = function () {
	    function ToArrayOperator() {
	        _classCallCheck(this, ToArrayOperator);
	    }

	    _createClass(ToArrayOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new ToArraySubscriber(subscriber));
	        }
	    }]);

	    return ToArrayOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var ToArraySubscriber = function (_Subscriber) {
	    _inherits(ToArraySubscriber, _Subscriber);

	    function ToArraySubscriber(destination) {
	        _classCallCheck(this, ToArraySubscriber);

	        var _this = _possibleConstructorReturn(this, (ToArraySubscriber.__proto__ || Object.getPrototypeOf(ToArraySubscriber)).call(this, destination));

	        _this.array = [];
	        return _this;
	    }

	    _createClass(ToArraySubscriber, [{
	        key: '_next',
	        value: function _next(x) {
	            this.array.push(x);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.destination.next(this.array);
	            this.destination.complete();
	        }
	    }]);

	    return ToArraySubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=toArray.js.map

/***/ },
/* 312 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _toPromise = __webpack_require__(313);

	_Observable.Observable.prototype.toPromise = _toPromise.toPromise;
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 313 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.toPromise = toPromise;

	var _root = __webpack_require__(5);

	/**
	 * @param PromiseCtor
	 * @return {Promise<T>}
	 * @method toPromise
	 * @owner Observable
	 */
	function toPromise(PromiseCtor) {
	    var _this = this;

	    if (!PromiseCtor) {
	        if (_root.root.Rx && _root.root.Rx.config && _root.root.Rx.config.Promise) {
	            PromiseCtor = _root.root.Rx.config.Promise;
	        } else if (_root.root.Promise) {
	            PromiseCtor = _root.root.Promise;
	        }
	    }
	    if (!PromiseCtor) {
	        throw new Error('no Promise impl found');
	    }
	    return new PromiseCtor(function (resolve, reject) {
	        var value = void 0;
	        _this.subscribe(function (x) {
	            return value = x;
	        }, function (err) {
	            return reject(err);
	        }, function () {
	            return resolve(value);
	        });
	    });
	}
	//# sourceMappingURL=toPromise.js.map

/***/ },
/* 314 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _window = __webpack_require__(315);

	_Observable.Observable.prototype.window = _window.window;
	//# sourceMappingURL=window.js.map

/***/ },
/* 315 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.window = window;

	var _Subject = __webpack_require__(3);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Branch out the source Observable values as a nested Observable whenever
	 * `windowBoundaries` emits.
	 *
	 * <span class="informal">It's like {@link buffer}, but emits a nested Observable
	 * instead of an array.</span>
	 *
	 * <img src="./img/window.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits connected, non-overlapping
	 * windows. It emits the current window and opens a new one whenever the
	 * Observable `windowBoundaries` emits an item. Because each window is an
	 * Observable, the output is a higher-order Observable.
	 *
	 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var interval = Rx.Observable.interval(1000);
	 * var result = clicks.window(interval)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link buffer}
	 *
	 * @param {Observable<any>} windowBoundaries An Observable that completes the
	 * previous window and starts a new window.
	 * @return {Observable<Observable<T>>} An Observable of windows, which are
	 * Observables emitting values of the source Observable.
	 * @method window
	 * @owner Observable
	 */
	function window(windowBoundaries) {
	    return this.lift(new WindowOperator(windowBoundaries));
	}

	var WindowOperator = function () {
	    function WindowOperator(windowBoundaries) {
	        _classCallCheck(this, WindowOperator);

	        this.windowBoundaries = windowBoundaries;
	    }

	    _createClass(WindowOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            var windowSubscriber = new WindowSubscriber(subscriber);
	            var sourceSubscription = source._subscribe(windowSubscriber);
	            if (!sourceSubscription.closed) {
	                windowSubscriber.add((0, _subscribeToResult.subscribeToResult)(windowSubscriber, this.windowBoundaries));
	            }
	            return sourceSubscription;
	        }
	    }]);

	    return WindowOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var WindowSubscriber = function (_OuterSubscriber) {
	    _inherits(WindowSubscriber, _OuterSubscriber);

	    function WindowSubscriber(destination) {
	        _classCallCheck(this, WindowSubscriber);

	        var _this = _possibleConstructorReturn(this, (WindowSubscriber.__proto__ || Object.getPrototypeOf(WindowSubscriber)).call(this, destination));

	        _this.window = new _Subject.Subject();
	        destination.next(_this.window);
	        return _this;
	    }

	    _createClass(WindowSubscriber, [{
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.openWindow();
	        }
	    }, {
	        key: 'notifyError',
	        value: function notifyError(error, innerSub) {
	            this._error(error);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            this._complete();
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.window.next(value);
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.window.error(err);
	            this.destination.error(err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.window.complete();
	            this.destination.complete();
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            this.window = null;
	        }
	    }, {
	        key: 'openWindow',
	        value: function openWindow() {
	            var prevWindow = this.window;
	            if (prevWindow) {
	                prevWindow.complete();
	            }
	            var destination = this.destination;
	            var newWindow = this.window = new _Subject.Subject();
	            destination.next(newWindow);
	        }
	    }]);

	    return WindowSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=window.js.map

/***/ },
/* 316 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _windowCount = __webpack_require__(317);

	_Observable.Observable.prototype.windowCount = _windowCount.windowCount;
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 317 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.windowCount = windowCount;

	var _Subscriber2 = __webpack_require__(7);

	var _Subject = __webpack_require__(3);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Branch out the source Observable values as a nested Observable with each
	 * nested Observable emitting at most `windowSize` values.
	 *
	 * <span class="informal">It's like {@link bufferCount}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowCount.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits windows every `startWindowEvery`
	 * items, each containing no more than `windowSize` items. When the source
	 * Observable completes or encounters an error, the output Observable emits
	 * the current window and propagates the notification from the source
	 * Observable. If `startWindowEvery` is not provided, then new windows are
	 * started immediately at the start of the source and when each window completes
	 * with size `windowSize`.
	 *
	 * @example <caption>Ignore every 3rd click event, starting from the first one</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowCount(3)
	 *   .map(win => win.skip(1)) // skip first of every 3 clicks
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Ignore every 3rd click event, starting from the third one</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowCount(2, 3)
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link bufferCount}
	 *
	 * @param {number} windowSize The maximum number of values emitted by each
	 * window.
	 * @param {number} [startWindowEvery] Interval at which to start a new window.
	 * For example if `startWindowEvery` is `2`, then a new window will be started
	 * on every other value from the source. A new window is started at the
	 * beginning of the source by default.
	 * @return {Observable<Observable<T>>} An Observable of windows, which in turn
	 * are Observable of values.
	 * @method windowCount
	 * @owner Observable
	 */
	function windowCount(windowSize) {
	    var startWindowEvery = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

	    return this.lift(new WindowCountOperator(windowSize, startWindowEvery));
	}

	var WindowCountOperator = function () {
	    function WindowCountOperator(windowSize, startWindowEvery) {
	        _classCallCheck(this, WindowCountOperator);

	        this.windowSize = windowSize;
	        this.startWindowEvery = startWindowEvery;
	    }

	    _createClass(WindowCountOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new WindowCountSubscriber(subscriber, this.windowSize, this.startWindowEvery));
	        }
	    }]);

	    return WindowCountOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var WindowCountSubscriber = function (_Subscriber) {
	    _inherits(WindowCountSubscriber, _Subscriber);

	    function WindowCountSubscriber(destination, windowSize, startWindowEvery) {
	        _classCallCheck(this, WindowCountSubscriber);

	        var _this = _possibleConstructorReturn(this, (WindowCountSubscriber.__proto__ || Object.getPrototypeOf(WindowCountSubscriber)).call(this, destination));

	        _this.destination = destination;
	        _this.windowSize = windowSize;
	        _this.startWindowEvery = startWindowEvery;
	        _this.windows = [new _Subject.Subject()];
	        _this.count = 0;
	        destination.next(_this.windows[0]);
	        return _this;
	    }

	    _createClass(WindowCountSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var startWindowEvery = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize;
	            var destination = this.destination;
	            var windowSize = this.windowSize;
	            var windows = this.windows;
	            var len = windows.length;
	            for (var i = 0; i < len && !this.closed; i++) {
	                windows[i].next(value);
	            }
	            var c = this.count - windowSize + 1;
	            if (c >= 0 && c % startWindowEvery === 0 && !this.closed) {
	                windows.shift().complete();
	            }
	            if (++this.count % startWindowEvery === 0 && !this.closed) {
	                var window = new _Subject.Subject();
	                windows.push(window);
	                destination.next(window);
	            }
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            var windows = this.windows;
	            if (windows) {
	                while (windows.length > 0 && !this.closed) {
	                    windows.shift().error(err);
	                }
	            }
	            this.destination.error(err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var windows = this.windows;
	            if (windows) {
	                while (windows.length > 0 && !this.closed) {
	                    windows.shift().complete();
	                }
	            }
	            this.destination.complete();
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            this.count = 0;
	            this.windows = null;
	        }
	    }]);

	    return WindowCountSubscriber;
	}(_Subscriber2.Subscriber);
	//# sourceMappingURL=windowCount.js.map

/***/ },
/* 318 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _windowTime = __webpack_require__(319);

	_Observable.Observable.prototype.windowTime = _windowTime.windowTime;
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 319 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.windowTime = windowTime;

	var _Subject = __webpack_require__(3);

	var _async = __webpack_require__(76);

	var _Subscriber2 = __webpack_require__(7);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Branch out the source Observable values as a nested Observable periodically
	 * in time.
	 *
	 * <span class="informal">It's like {@link bufferTime}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowTime.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable starts a new window periodically, as
	 * determined by the `windowCreationInterval` argument. It emits each window
	 * after a fixed timespan, specified by the `windowTimeSpan` argument. When the
	 * source Observable completes or encounters an error, the output Observable
	 * emits the current window and propagates the notification from the source
	 * Observable. If `windowCreationInterval` is not provided, the output
	 * Observable starts a new window when the previous window of duration
	 * `windowTimeSpan` completes.
	 *
	 * @example <caption>In every window of 1 second each, emit at most 2 click events</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowTime(1000)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @example <caption>Every 5 seconds start a window 1 second long, and emit at most 2 click events per window</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks.windowTime(1000, 5000)
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowToggle}
	 * @see {@link windowWhen}
	 * @see {@link bufferTime}
	 *
	 * @param {number} windowTimeSpan The amount of time to fill each window.
	 * @param {number} [windowCreationInterval] The interval at which to start new
	 * windows.
	 * @param {Scheduler} [scheduler=async] The scheduler on which to schedule the
	 * intervals that determine window boundaries.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowTime
	 * @owner Observable
	 */
	function windowTime(windowTimeSpan) {
	    var windowCreationInterval = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
	    var scheduler = arguments.length <= 2 || arguments[2] === undefined ? _async.async : arguments[2];

	    return this.lift(new WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler));
	}

	var WindowTimeOperator = function () {
	    function WindowTimeOperator(windowTimeSpan, windowCreationInterval, scheduler) {
	        _classCallCheck(this, WindowTimeOperator);

	        this.windowTimeSpan = windowTimeSpan;
	        this.windowCreationInterval = windowCreationInterval;
	        this.scheduler = scheduler;
	    }

	    _createClass(WindowTimeOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new WindowTimeSubscriber(subscriber, this.windowTimeSpan, this.windowCreationInterval, this.scheduler));
	        }
	    }]);

	    return WindowTimeOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var WindowTimeSubscriber = function (_Subscriber) {
	    _inherits(WindowTimeSubscriber, _Subscriber);

	    function WindowTimeSubscriber(destination, windowTimeSpan, windowCreationInterval, scheduler) {
	        _classCallCheck(this, WindowTimeSubscriber);

	        var _this = _possibleConstructorReturn(this, (WindowTimeSubscriber.__proto__ || Object.getPrototypeOf(WindowTimeSubscriber)).call(this, destination));

	        _this.destination = destination;
	        _this.windowTimeSpan = windowTimeSpan;
	        _this.windowCreationInterval = windowCreationInterval;
	        _this.scheduler = scheduler;
	        _this.windows = [];
	        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
	            var window = _this.openWindow();
	            var closeState = { subscriber: _this, window: window, context: null };
	            var creationState = { windowTimeSpan: windowTimeSpan, windowCreationInterval: windowCreationInterval, subscriber: _this, scheduler: scheduler };
	            _this.add(scheduler.schedule(dispatchWindowClose, windowTimeSpan, closeState));
	            _this.add(scheduler.schedule(dispatchWindowCreation, windowCreationInterval, creationState));
	        } else {
	            var _window = _this.openWindow();
	            var timeSpanOnlyState = { subscriber: _this, window: _window, windowTimeSpan: windowTimeSpan };
	            _this.add(scheduler.schedule(dispatchWindowTimeSpanOnly, windowTimeSpan, timeSpanOnlyState));
	        }
	        return _this;
	    }

	    _createClass(WindowTimeSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var windows = this.windows;
	            var len = windows.length;
	            for (var i = 0; i < len; i++) {
	                var window = windows[i];
	                if (!window.closed) {
	                    window.next(value);
	                }
	            }
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            var windows = this.windows;
	            while (windows.length > 0) {
	                windows.shift().error(err);
	            }
	            this.destination.error(err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var windows = this.windows;
	            while (windows.length > 0) {
	                var window = windows.shift();
	                if (!window.closed) {
	                    window.complete();
	                }
	            }
	            this.destination.complete();
	        }
	    }, {
	        key: 'openWindow',
	        value: function openWindow() {
	            var window = new _Subject.Subject();
	            this.windows.push(window);
	            var destination = this.destination;
	            destination.next(window);
	            return window;
	        }
	    }, {
	        key: 'closeWindow',
	        value: function closeWindow(window) {
	            window.complete();
	            var windows = this.windows;
	            windows.splice(windows.indexOf(window), 1);
	        }
	    }]);

	    return WindowTimeSubscriber;
	}(_Subscriber2.Subscriber);

	function dispatchWindowTimeSpanOnly(state) {
	    var subscriber = state.subscriber;
	    var windowTimeSpan = state.windowTimeSpan;
	    var window = state.window;

	    if (window) {
	        window.complete();
	    }
	    state.window = subscriber.openWindow();
	    this.schedule(state, windowTimeSpan);
	}
	function dispatchWindowCreation(state) {
	    var windowTimeSpan = state.windowTimeSpan;
	    var subscriber = state.subscriber;
	    var scheduler = state.scheduler;
	    var windowCreationInterval = state.windowCreationInterval;

	    var window = subscriber.openWindow();
	    var action = this;
	    var context = { action: action, subscription: null };
	    var timeSpanState = { subscriber: subscriber, window: window, context: context };
	    context.subscription = scheduler.schedule(dispatchWindowClose, windowTimeSpan, timeSpanState);
	    action.add(context.subscription);
	    action.schedule(state, windowCreationInterval);
	}
	function dispatchWindowClose(arg) {
	    var subscriber = arg.subscriber;
	    var window = arg.window;
	    var context = arg.context;

	    if (context && context.action && context.subscription) {
	        context.action.remove(context.subscription);
	    }
	    subscriber.closeWindow(window);
	}
	//# sourceMappingURL=windowTime.js.map

/***/ },
/* 320 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _windowToggle = __webpack_require__(321);

	_Observable.Observable.prototype.windowToggle = _windowToggle.windowToggle;
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 321 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.windowToggle = windowToggle;

	var _Subject = __webpack_require__(3);

	var _Subscription = __webpack_require__(9);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Branch out the source Observable values as a nested Observable starting from
	 * an emission from `openings` and ending when the output of `closingSelector`
	 * emits.
	 *
	 * <span class="informal">It's like {@link bufferToggle}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowToggle.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits windows that contain those items
	 * emitted by the source Observable between the time when the `openings`
	 * Observable emits an item and when the Observable returned by
	 * `closingSelector` emits an item.
	 *
	 * @example <caption>Every other second, emit the click events from the next 500ms</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var openings = Rx.Observable.interval(1000);
	 * var result = clicks.windowToggle(openings, i =>
	 *   i % 2 ? Rx.Observable.interval(500) : Rx.Observable.empty()
	 * ).mergeAll();
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowWhen}
	 * @see {@link bufferToggle}
	 *
	 * @param {Observable<O>} openings An observable of notifications to start new
	 * windows.
	 * @param {function(value: O): Observable} closingSelector A function that takes
	 * the value emitted by the `openings` observable and returns an Observable,
	 * which, when it emits (either `next` or `complete`), signals that the
	 * associated window should complete.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowToggle
	 * @owner Observable
	 */
	function windowToggle(openings, closingSelector) {
	    return this.lift(new WindowToggleOperator(openings, closingSelector));
	}

	var WindowToggleOperator = function () {
	    function WindowToggleOperator(openings, closingSelector) {
	        _classCallCheck(this, WindowToggleOperator);

	        this.openings = openings;
	        this.closingSelector = closingSelector;
	    }

	    _createClass(WindowToggleOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new WindowToggleSubscriber(subscriber, this.openings, this.closingSelector));
	        }
	    }]);

	    return WindowToggleOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var WindowToggleSubscriber = function (_OuterSubscriber) {
	    _inherits(WindowToggleSubscriber, _OuterSubscriber);

	    function WindowToggleSubscriber(destination, openings, closingSelector) {
	        _classCallCheck(this, WindowToggleSubscriber);

	        var _this = _possibleConstructorReturn(this, (WindowToggleSubscriber.__proto__ || Object.getPrototypeOf(WindowToggleSubscriber)).call(this, destination));

	        _this.openings = openings;
	        _this.closingSelector = closingSelector;
	        _this.contexts = [];
	        _this.add(_this.openSubscription = (0, _subscribeToResult.subscribeToResult)(_this, openings, openings));
	        return _this;
	    }

	    _createClass(WindowToggleSubscriber, [{
	        key: '_next',
	        value: function _next(value) {
	            var contexts = this.contexts;

	            if (contexts) {
	                var len = contexts.length;
	                for (var i = 0; i < len; i++) {
	                    contexts[i].window.next(value);
	                }
	            }
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            var contexts = this.contexts;

	            this.contexts = null;
	            if (contexts) {
	                var len = contexts.length;
	                var index = -1;
	                while (++index < len) {
	                    var context = contexts[index];
	                    context.window.error(err);
	                    context.subscription.unsubscribe();
	                }
	            }
	            _get(WindowToggleSubscriber.prototype.__proto__ || Object.getPrototypeOf(WindowToggleSubscriber.prototype), '_error', this).call(this, err);
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            var contexts = this.contexts;

	            this.contexts = null;
	            if (contexts) {
	                var len = contexts.length;
	                var index = -1;
	                while (++index < len) {
	                    var context = contexts[index];
	                    context.window.complete();
	                    context.subscription.unsubscribe();
	                }
	            }
	            _get(WindowToggleSubscriber.prototype.__proto__ || Object.getPrototypeOf(WindowToggleSubscriber.prototype), '_complete', this).call(this);
	        }
	    }, {
	        key: '_unsubscribe',
	        value: function _unsubscribe() {
	            var contexts = this.contexts;

	            this.contexts = null;
	            if (contexts) {
	                var len = contexts.length;
	                var index = -1;
	                while (++index < len) {
	                    var context = contexts[index];
	                    context.window.unsubscribe();
	                    context.subscription.unsubscribe();
	                }
	            }
	        }
	    }, {
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            if (outerValue === this.openings) {
	                var closingSelector = this.closingSelector;

	                var closingNotifier = (0, _tryCatch.tryCatch)(closingSelector)(innerValue);
	                if (closingNotifier === _errorObject.errorObject) {
	                    return this.error(_errorObject.errorObject.e);
	                } else {
	                    var window = new _Subject.Subject();
	                    var subscription = new _Subscription.Subscription();
	                    var context = { window: window, subscription: subscription };
	                    this.contexts.push(context);
	                    var innerSubscription = (0, _subscribeToResult.subscribeToResult)(this, closingNotifier, context);
	                    if (innerSubscription.closed) {
	                        this.closeWindow(this.contexts.length - 1);
	                    } else {
	                        innerSubscription.context = context;
	                        subscription.add(innerSubscription);
	                    }
	                    this.destination.next(window);
	                }
	            } else {
	                this.closeWindow(this.contexts.indexOf(outerValue));
	            }
	        }
	    }, {
	        key: 'notifyError',
	        value: function notifyError(err) {
	            this.error(err);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(inner) {
	            if (inner !== this.openSubscription) {
	                this.closeWindow(this.contexts.indexOf(inner.context));
	            }
	        }
	    }, {
	        key: 'closeWindow',
	        value: function closeWindow(index) {
	            if (index === -1) {
	                return;
	            }
	            var contexts = this.contexts;

	            var context = contexts[index];
	            var window = context.window;
	            var subscription = context.subscription;

	            contexts.splice(index, 1);
	            window.complete();
	            subscription.unsubscribe();
	        }
	    }]);

	    return WindowToggleSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=windowToggle.js.map

/***/ },
/* 322 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _windowWhen = __webpack_require__(323);

	_Observable.Observable.prototype.windowWhen = _windowWhen.windowWhen;
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 323 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.windowWhen = windowWhen;

	var _Subject = __webpack_require__(3);

	var _tryCatch = __webpack_require__(12);

	var _errorObject = __webpack_require__(13);

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Branch out the source Observable values as a nested Observable using a
	 * factory function of closing Observables to determine when to start a new
	 * window.
	 *
	 * <span class="informal">It's like {@link bufferWhen}, but emits a nested
	 * Observable instead of an array.</span>
	 *
	 * <img src="./img/windowWhen.png" width="100%">
	 *
	 * Returns an Observable that emits windows of items it collects from the source
	 * Observable. The output Observable emits connected, non-overlapping windows.
	 * It emits the current window and opens a new one whenever the Observable
	 * produced by the specified `closingSelector` function emits an item. The first
	 * window is opened immediately when subscribing to the output Observable.
	 *
	 * @example <caption>Emit only the first two clicks events in every window of [1-5] random seconds</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var result = clicks
	 *   .windowWhen(() => Rx.Observable.interval(1000 + Math.random() * 4000))
	 *   .map(win => win.take(2)) // each window has at most 2 emissions
	 *   .mergeAll(); // flatten the Observable-of-Observables
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link window}
	 * @see {@link windowCount}
	 * @see {@link windowTime}
	 * @see {@link windowToggle}
	 * @see {@link bufferWhen}
	 *
	 * @param {function(): Observable} closingSelector A function that takes no
	 * arguments and returns an Observable that signals (on either `next` or
	 * `complete`) when to close the previous window and start a new one.
	 * @return {Observable<Observable<T>>} An observable of windows, which in turn
	 * are Observables.
	 * @method windowWhen
	 * @owner Observable
	 */
	function windowWhen(closingSelector) {
	    return this.lift(new WindowOperator(closingSelector));
	}

	var WindowOperator = function () {
	    function WindowOperator(closingSelector) {
	        _classCallCheck(this, WindowOperator);

	        this.closingSelector = closingSelector;
	    }

	    _createClass(WindowOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new WindowSubscriber(subscriber, this.closingSelector));
	        }
	    }]);

	    return WindowOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var WindowSubscriber = function (_OuterSubscriber) {
	    _inherits(WindowSubscriber, _OuterSubscriber);

	    function WindowSubscriber(destination, closingSelector) {
	        _classCallCheck(this, WindowSubscriber);

	        var _this = _possibleConstructorReturn(this, (WindowSubscriber.__proto__ || Object.getPrototypeOf(WindowSubscriber)).call(this, destination));

	        _this.destination = destination;
	        _this.closingSelector = closingSelector;
	        _this.openWindow();
	        return _this;
	    }

	    _createClass(WindowSubscriber, [{
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.openWindow(innerSub);
	        }
	    }, {
	        key: 'notifyError',
	        value: function notifyError(error, innerSub) {
	            this._error(error);
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete(innerSub) {
	            this.openWindow(innerSub);
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            this.window.next(value);
	        }
	    }, {
	        key: '_error',
	        value: function _error(err) {
	            this.window.error(err);
	            this.destination.error(err);
	            this.unsubscribeClosingNotification();
	        }
	    }, {
	        key: '_complete',
	        value: function _complete() {
	            this.window.complete();
	            this.destination.complete();
	            this.unsubscribeClosingNotification();
	        }
	    }, {
	        key: 'unsubscribeClosingNotification',
	        value: function unsubscribeClosingNotification() {
	            if (this.closingNotification) {
	                this.closingNotification.unsubscribe();
	            }
	        }
	    }, {
	        key: 'openWindow',
	        value: function openWindow() {
	            var innerSub = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];

	            if (innerSub) {
	                this.remove(innerSub);
	                innerSub.unsubscribe();
	            }
	            var prevWindow = this.window;
	            if (prevWindow) {
	                prevWindow.complete();
	            }
	            var window = this.window = new _Subject.Subject();
	            this.destination.next(window);
	            var closingNotifier = (0, _tryCatch.tryCatch)(this.closingSelector)();
	            if (closingNotifier === _errorObject.errorObject) {
	                var err = _errorObject.errorObject.e;
	                this.destination.error(err);
	                this.window.error(err);
	            } else {
	                this.add(this.closingNotification = (0, _subscribeToResult.subscribeToResult)(this, closingNotifier));
	            }
	        }
	    }]);

	    return WindowSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=windowWhen.js.map

/***/ },
/* 324 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _withLatestFrom = __webpack_require__(325);

	_Observable.Observable.prototype.withLatestFrom = _withLatestFrom.withLatestFrom;
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 325 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.withLatestFrom = withLatestFrom;

	var _OuterSubscriber2 = __webpack_require__(34);

	var _subscribeToResult = __webpack_require__(35);

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * Combines the source Observable with other Observables to create an Observable
	 * whose values are calculated from the latest values of each, only when the
	 * source emits.
	 *
	 * <span class="informal">Whenever the source Observable emits a value, it
	 * computes a formula using that value plus the latest values from other input
	 * Observables, then emits the output of that formula.</span>
	 *
	 * <img src="./img/withLatestFrom.png" width="100%">
	 *
	 * `withLatestFrom` combines each value from the source Observable (the
	 * instance) with the latest values from the other input Observables only when
	 * the source emits a value, optionally using a `project` function to determine
	 * the value to be emitted on the output Observable. All input Observables must
	 * emit at least one value before the output Observable will emit a value.
	 *
	 * @example <caption>On every click event, emit an array with the latest timer event plus the click event</caption>
	 * var clicks = Rx.Observable.fromEvent(document, 'click');
	 * var timer = Rx.Observable.interval(1000);
	 * var result = clicks.withLatestFrom(timer);
	 * result.subscribe(x => console.log(x));
	 *
	 * @see {@link combineLatest}
	 *
	 * @param {Observable} other An input Observable to combine with the source
	 * Observable. More than one input Observables may be given as argument.
	 * @param {Function} [project] Projection function for combining values
	 * together. Receives all values in order of the Observables passed, where the
	 * first parameter is a value from the source Observable. (e.g.
	 * `a.withLatestFrom(b, c, (a1, b1, c1) => a1 + b1 + c1)`). If this is not
	 * passed, arrays will be emitted on the output Observable.
	 * @return {Observable} An Observable of projected values from the most recent
	 * values from each input Observable, or an array of the most recent values from
	 * each input Observable.
	 * @method withLatestFrom
	 * @owner Observable
	 */
	function withLatestFrom() {
	    var project = void 0;

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	    }

	    if (typeof args[args.length - 1] === 'function') {
	        project = args.pop();
	    }
	    var observables = args;
	    return this.lift(new WithLatestFromOperator(observables, project));
	}
	/* tslint:enable:max-line-length */

	var WithLatestFromOperator = function () {
	    function WithLatestFromOperator(observables, project) {
	        _classCallCheck(this, WithLatestFromOperator);

	        this.observables = observables;
	        this.project = project;
	    }

	    _createClass(WithLatestFromOperator, [{
	        key: 'call',
	        value: function call(subscriber, source) {
	            return source._subscribe(new WithLatestFromSubscriber(subscriber, this.observables, this.project));
	        }
	    }]);

	    return WithLatestFromOperator;
	}();
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */


	var WithLatestFromSubscriber = function (_OuterSubscriber) {
	    _inherits(WithLatestFromSubscriber, _OuterSubscriber);

	    function WithLatestFromSubscriber(destination, observables, project) {
	        _classCallCheck(this, WithLatestFromSubscriber);

	        var _this = _possibleConstructorReturn(this, (WithLatestFromSubscriber.__proto__ || Object.getPrototypeOf(WithLatestFromSubscriber)).call(this, destination));

	        _this.observables = observables;
	        _this.project = project;
	        _this.toRespond = [];
	        var len = observables.length;
	        _this.values = new Array(len);
	        for (var i = 0; i < len; i++) {
	            _this.toRespond.push(i);
	        }
	        for (var _i = 0; _i < len; _i++) {
	            var observable = observables[_i];
	            _this.add((0, _subscribeToResult.subscribeToResult)(_this, observable, observable, _i));
	        }
	        return _this;
	    }

	    _createClass(WithLatestFromSubscriber, [{
	        key: 'notifyNext',
	        value: function notifyNext(outerValue, innerValue, outerIndex, innerIndex, innerSub) {
	            this.values[outerIndex] = innerValue;
	            var toRespond = this.toRespond;
	            if (toRespond.length > 0) {
	                var found = toRespond.indexOf(outerIndex);
	                if (found !== -1) {
	                    toRespond.splice(found, 1);
	                }
	            }
	        }
	    }, {
	        key: 'notifyComplete',
	        value: function notifyComplete() {
	            // noop
	        }
	    }, {
	        key: '_next',
	        value: function _next(value) {
	            if (this.toRespond.length === 0) {
	                var _args = [value].concat(_toConsumableArray(this.values));
	                if (this.project) {
	                    this._tryProject(_args);
	                } else {
	                    this.destination.next(_args);
	                }
	            }
	        }
	    }, {
	        key: '_tryProject',
	        value: function _tryProject(args) {
	            var result = void 0;
	            try {
	                result = this.project.apply(this, args);
	            } catch (err) {
	                this.destination.error(err);
	                return;
	            }
	            this.destination.next(result);
	        }
	    }]);

	    return WithLatestFromSubscriber;
	}(_OuterSubscriber2.OuterSubscriber);
	//# sourceMappingURL=withLatestFrom.js.map

/***/ },
/* 326 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _zip = __webpack_require__(112);

	_Observable.Observable.prototype.zip = _zip.zipProto;
	//# sourceMappingURL=zip.js.map

/***/ },
/* 327 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(4);

	var _zipAll = __webpack_require__(328);

	_Observable.Observable.prototype.zipAll = _zipAll.zipAll;
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 328 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.zipAll = zipAll;

	var _zip = __webpack_require__(112);

	/**
	 * @param project
	 * @return {Observable<R>|WebSocketSubject<T>|Observable<T>}
	 * @method zipAll
	 * @owner Observable
	 */
	function zipAll(project) {
	  return this.lift(new _zip.ZipOperator(project));
	}
	//# sourceMappingURL=zipAll.js.map

/***/ },
/* 329 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _isAction = __webpack_require__(330);

	var _isAction2 = _interopRequireDefault(_isAction);

	var _isObservable = __webpack_require__(335);

	var _isObservable2 = _interopRequireDefault(_isObservable);

	var _constants = __webpack_require__(336);

	var _isPlainObject = __webpack_require__(331);

	var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

	var _forEach = __webpack_require__(337);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _depose = __webpack_require__(446);

	var _depose2 = _interopRequireDefault(_depose);

	var _assignState = __webpack_require__(449);

	var _assignState2 = _interopRequireDefault(_assignState);

	var _actionFactories = __webpack_require__(450);

	var _debug = __webpack_require__(451);

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
	    this.registerMiddleware(_constants.ACTION_ASSIGN_STATE, _assignState2.default.bind(this));
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
	    key: 'dispatch',
	    value: function dispatch(action, callback) {

	      if (false) {
	        console.debug('action', action.type, action);
	      }
	      (0, _debug2.default)((0, _isAction2.default)(action), 'ReactiveStore prototype\'s method dispatch(action) requires an action object');
	      if (this[_constants.$$MIDDLEWARES][action.type]) {
	        this[_constants.$$MIDDLEWARES][action.type].action(action, callback);
	      } else {
	        (0, _debug2.default)(false, 'Unknown action with type \'' + action.type + '\'');
	      }
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this[_constants.$$STATE];
	    }
	  }]);

	  return ReactiveStore;
	}();

	exports.default = ReactiveStore;


	ReactiveStore.setRx(function (Rx) {
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
	});
	module.exports = exports['default'];

/***/ },
/* 330 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = isAction;

	var _isPlainObject = __webpack_require__(331);

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
/* 331 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getPrototype = __webpack_require__(332),
	    isObjectLike = __webpack_require__(334);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  if (!isObjectLike(value) || objectToString.call(value) != objectTag) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
	}

	module.exports = isPlainObject;

/***/ },
/* 332 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var overArg = __webpack_require__(333);

	/** Built-in value references. */
	var getPrototype = overArg(Object.getPrototypeOf, Object);

	module.exports = getPrototype;

/***/ },
/* 333 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function (arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;

/***/ },
/* 334 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}

	module.exports = isObjectLike;

/***/ },
/* 335 */
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
/* 336 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var $$STATE = exports.$$STATE = Symbol('state');
	var $$MIDDLEWARES = exports.$$MIDDLEWARES = Symbol('middlewares');
	var $$CONTEXT = exports.$$CONTEXT = Symbol('context');
	var ACTION_ASSIGN_STATE = exports.ACTION_ASSIGN_STATE = 'ACTION_ASSIGN_STATE';

/***/ },
/* 337 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayEach = __webpack_require__(338),
	    baseEach = __webpack_require__(339),
	    baseIteratee = __webpack_require__(358),
	    isArray = __webpack_require__(352);

	/**
	 * Iterates over elements of `collection` and invokes `iteratee` for each element.
	 * The iteratee is invoked with three arguments: (value, index|key, collection).
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length"
	 * property are iterated like arrays. To avoid this behavior use `_.forIn`
	 * or `_.forOwn` for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @alias each
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 * @see _.forEachRight
	 * @example
	 *
	 * _.forEach([1, 2], function(value) {
	 *   console.log(value);
	 * });
	 * // => Logs `1` then `2`.
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
	 *   console.log(key);
	 * });
	 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
	 */
	function forEach(collection, iteratee) {
	  var func = isArray(collection) ? arrayEach : baseEach;
	  return func(collection, baseIteratee(iteratee, 3));
	}

	module.exports = forEach;

/***/ },
/* 338 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;

/***/ },
/* 339 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseForOwn = __webpack_require__(340),
	    createBaseEach = __webpack_require__(357);

	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);

	module.exports = baseEach;

/***/ },
/* 340 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseFor = __webpack_require__(341),
	    keys = __webpack_require__(343);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;

/***/ },
/* 341 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createBaseFor = __webpack_require__(342);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;

/***/ },
/* 342 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function (object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;

/***/ },
/* 343 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var arrayLikeKeys = __webpack_require__(344),
	    baseKeys = __webpack_require__(354),
	    isArrayLike = __webpack_require__(348);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;

/***/ },
/* 344 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseTimes = __webpack_require__(345),
	    isArguments = __webpack_require__(346),
	    isArray = __webpack_require__(352),
	    isIndex = __webpack_require__(353);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = isArray(value) || isArguments(value) ? baseTimes(value.length, String) : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;

/***/ },
/* 345 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;

/***/ },
/* 346 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArrayLikeObject = __webpack_require__(347);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;

/***/ },
/* 347 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArrayLike = __webpack_require__(348),
	    isObjectLike = __webpack_require__(334);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;

/***/ },
/* 348 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(349),
	    isLength = __webpack_require__(351);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;

/***/ },
/* 349 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(350);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;

/***/ },
/* 350 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return value != null && (type == 'object' || type == 'function');
	}

	module.exports = isObject;

/***/ },
/* 351 */
/***/ function(module, exports) {

	'use strict';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;

/***/ },
/* 352 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;

/***/ },
/* 353 */
/***/ function(module, exports) {

	'use strict';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;

/***/ },
/* 354 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isPrototype = __webpack_require__(355),
	    nativeKeys = __webpack_require__(356);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;

/***/ },
/* 355 */
/***/ function(module, exports) {

	'use strict';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;

/***/ },
/* 356 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var overArg = __webpack_require__(333);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;

/***/ },
/* 357 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArrayLike = __webpack_require__(348);

	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function (collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);

	    while (fromRight ? index-- : ++index < length) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}

	module.exports = createBaseEach;

/***/ },
/* 358 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var baseMatches = __webpack_require__(359),
	    baseMatchesProperty = __webpack_require__(427),
	    identity = __webpack_require__(442),
	    isArray = __webpack_require__(352),
	    property = __webpack_require__(443);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
	    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;

/***/ },
/* 359 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsMatch = __webpack_require__(360),
	    getMatchData = __webpack_require__(424),
	    matchesStrictComparable = __webpack_require__(426);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function (object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;

/***/ },
/* 360 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stack = __webpack_require__(361),
	    baseIsEqual = __webpack_require__(399);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack();
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;

/***/ },
/* 361 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(362),
	    stackClear = __webpack_require__(370),
	    stackDelete = __webpack_require__(371),
	    stackGet = __webpack_require__(372),
	    stackHas = __webpack_require__(373),
	    stackSet = __webpack_require__(374);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  var data = this.__data__ = new ListCache(entries);
	  this.size = data.size;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;

/***/ },
/* 362 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var listCacheClear = __webpack_require__(363),
	    listCacheDelete = __webpack_require__(364),
	    listCacheGet = __webpack_require__(367),
	    listCacheHas = __webpack_require__(368),
	    listCacheSet = __webpack_require__(369);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	    var index = -1,
	        length = entries ? entries.length : 0;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;

/***/ },
/* 363 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	  this.size = 0;
	}

	module.exports = listCacheClear;

/***/ },
/* 364 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(365);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  --this.size;
	  return true;
	}

	module.exports = listCacheDelete;

/***/ },
/* 365 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var eq = __webpack_require__(366);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;

/***/ },
/* 366 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}

	module.exports = eq;

/***/ },
/* 367 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(365);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;

/***/ },
/* 368 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(365);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;

/***/ },
/* 369 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assocIndexOf = __webpack_require__(365);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    ++this.size;
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;

/***/ },
/* 370 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(362);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache();
	  this.size = 0;
	}

	module.exports = stackClear;

/***/ },
/* 371 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      result = data['delete'](key);

	  this.size = data.size;
	  return result;
	}

	module.exports = stackDelete;

/***/ },
/* 372 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;

/***/ },
/* 373 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;

/***/ },
/* 374 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var ListCache = __webpack_require__(362),
	    Map = __webpack_require__(375),
	    MapCache = __webpack_require__(384);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__;
	  if (data instanceof ListCache) {
	    var pairs = data.__data__;
	    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
	      pairs.push([key, value]);
	      this.size = ++data.size;
	      return this;
	    }
	    data = this.__data__ = new MapCache(pairs);
	  }
	  data.set(key, value);
	  this.size = data.size;
	  return this;
	}

	module.exports = stackSet;

/***/ },
/* 375 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(376),
	    root = __webpack_require__(380);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;

/***/ },
/* 376 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsNative = __webpack_require__(377),
	    getValue = __webpack_require__(383);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;

/***/ },
/* 377 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isFunction = __webpack_require__(349),
	    isMasked = __webpack_require__(378),
	    isObject = __webpack_require__(350),
	    toSource = __webpack_require__(382);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;

/***/ },
/* 378 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var coreJsData = __webpack_require__(379);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}

	module.exports = isMasked;

/***/ },
/* 379 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(380);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;

/***/ },
/* 380 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var freeGlobal = __webpack_require__(381);

	/** Detect free variable `self`. */
	var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;

/***/ },
/* 381 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 382 */
/***/ function(module, exports) {

	'use strict';

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;

/***/ },
/* 383 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;

/***/ },
/* 384 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var mapCacheClear = __webpack_require__(385),
	    mapCacheDelete = __webpack_require__(393),
	    mapCacheGet = __webpack_require__(396),
	    mapCacheHas = __webpack_require__(397),
	    mapCacheSet = __webpack_require__(398);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	    var index = -1,
	        length = entries ? entries.length : 0;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;

/***/ },
/* 385 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Hash = __webpack_require__(386),
	    ListCache = __webpack_require__(362),
	    Map = __webpack_require__(375);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.size = 0;
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}

	module.exports = mapCacheClear;

/***/ },
/* 386 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var hashClear = __webpack_require__(387),
	    hashDelete = __webpack_require__(389),
	    hashGet = __webpack_require__(390),
	    hashHas = __webpack_require__(391),
	    hashSet = __webpack_require__(392);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	    var index = -1,
	        length = entries ? entries.length : 0;

	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;

/***/ },
/* 387 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(388);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	  this.size = 0;
	}

	module.exports = hashClear;

/***/ },
/* 388 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(376);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;

/***/ },
/* 389 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  var result = this.has(key) && delete this.__data__[key];
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = hashDelete;

/***/ },
/* 390 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(388);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;

/***/ },
/* 391 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(388);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;

/***/ },
/* 392 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var nativeCreate = __webpack_require__(388);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  this.size += this.has(key) ? 0 : 1;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;

/***/ },
/* 393 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(394);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  var result = getMapData(this, key)['delete'](key);
	  this.size -= result ? 1 : 0;
	  return result;
	}

	module.exports = mapCacheDelete;

/***/ },
/* 394 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isKeyable = __webpack_require__(395);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}

	module.exports = getMapData;

/***/ },
/* 395 */
/***/ function(module, exports) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}

	module.exports = isKeyable;

/***/ },
/* 396 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(394);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;

/***/ },
/* 397 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(394);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;

/***/ },
/* 398 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getMapData = __webpack_require__(394);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  var data = getMapData(this, key),
	      size = data.size;

	  data.set(key, value);
	  this.size += data.size == size ? 0 : 1;
	  return this;
	}

	module.exports = mapCacheSet;

/***/ },
/* 399 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsEqualDeep = __webpack_require__(400),
	    isObject = __webpack_require__(350),
	    isObjectLike = __webpack_require__(334);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;

/***/ },
/* 400 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Stack = __webpack_require__(361),
	    equalArrays = __webpack_require__(401),
	    equalByTag = __webpack_require__(407),
	    equalObjects = __webpack_require__(412),
	    getTag = __webpack_require__(413),
	    isArray = __webpack_require__(352),
	    isTypedArray = __webpack_require__(419);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack());
	    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack());
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;

/***/ },
/* 401 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var SetCache = __webpack_require__(402),
	    arraySome = __webpack_require__(405),
	    cacheHas = __webpack_require__(406);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function (othValue, othIndex) {
	        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	          return seen.push(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;

/***/ },
/* 402 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MapCache = __webpack_require__(384),
	    setCacheAdd = __webpack_require__(403),
	    setCacheHas = __webpack_require__(404);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	    var index = -1,
	        length = values ? values.length : 0;

	    this.__data__ = new MapCache();
	    while (++index < length) {
	        this.add(values[index]);
	    }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;

/***/ },
/* 403 */
/***/ function(module, exports) {

	'use strict';

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;

/***/ },
/* 404 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;

/***/ },
/* 405 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;

/***/ },
/* 406 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Checks if a `cache` value for `key` exists.
	 *
	 * @private
	 * @param {Object} cache The cache to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function cacheHas(cache, key) {
	  return cache.has(key);
	}

	module.exports = cacheHas;

/***/ },
/* 407 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(408),
	    Uint8Array = __webpack_require__(409),
	    eq = __webpack_require__(366),
	    equalArrays = __webpack_require__(401),
	    mapToArray = __webpack_require__(410),
	    setToArray = __webpack_require__(411);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == other + '';

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;

/***/ },
/* 408 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(380);

	/** Built-in value references. */
	var _Symbol = root.Symbol;

	module.exports = _Symbol;

/***/ },
/* 409 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var root = __webpack_require__(380);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;

/***/ },
/* 410 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;

/***/ },
/* 411 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;

/***/ },
/* 412 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keys = __webpack_require__(343);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;

/***/ },
/* 413 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var DataView = __webpack_require__(414),
	    Map = __webpack_require__(375),
	    Promise = __webpack_require__(415),
	    Set = __webpack_require__(416),
	    WeakMap = __webpack_require__(417),
	    baseGetTag = __webpack_require__(418),
	    toSource = __webpack_require__(382);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
	    getTag = function getTag(value) {
	        var result = objectToString.call(value),
	            Ctor = result == objectTag ? value.constructor : undefined,
	            ctorString = Ctor ? toSource(Ctor) : undefined;

	        if (ctorString) {
	            switch (ctorString) {
	                case dataViewCtorString:
	                    return dataViewTag;
	                case mapCtorString:
	                    return mapTag;
	                case promiseCtorString:
	                    return promiseTag;
	                case setCtorString:
	                    return setTag;
	                case weakMapCtorString:
	                    return weakMapTag;
	            }
	        }
	        return result;
	    };
	}

	module.exports = getTag;

/***/ },
/* 414 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(376),
	    root = __webpack_require__(380);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;

/***/ },
/* 415 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(376),
	    root = __webpack_require__(380);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;

/***/ },
/* 416 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(376),
	    root = __webpack_require__(380);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;

/***/ },
/* 417 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var getNative = __webpack_require__(376),
	    root = __webpack_require__(380);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;

/***/ },
/* 418 */
/***/ function(module, exports) {

	"use strict";

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;

/***/ },
/* 419 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsTypedArray = __webpack_require__(420),
	    baseUnary = __webpack_require__(421),
	    nodeUtil = __webpack_require__(422);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;

/***/ },
/* 420 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isLength = __webpack_require__(351),
	    isObjectLike = __webpack_require__(334);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = baseIsTypedArray;

/***/ },
/* 421 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function (value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;

/***/ },
/* 422 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var freeGlobal = __webpack_require__(381);

	/** Detect free variable `exports`. */
	var freeExports = ( false ? 'undefined' : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && ( false ? 'undefined' : _typeof(module)) == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = function () {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}();

	module.exports = nodeUtil;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(423)(module)))

/***/ },
/* 423 */
/***/ function(module, exports) {

	"use strict";

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ },
/* 424 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isStrictComparable = __webpack_require__(425),
	    keys = __webpack_require__(343);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	    var result = keys(object),
	        length = result.length;

	    while (length--) {
	        var key = result[length],
	            value = object[key];

	        result[length] = [key, value, isStrictComparable(value)];
	    }
	    return result;
	}

	module.exports = getMatchData;

/***/ },
/* 425 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isObject = __webpack_require__(350);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;

/***/ },
/* 426 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}

	module.exports = matchesStrictComparable;

/***/ },
/* 427 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseIsEqual = __webpack_require__(399),
	    get = __webpack_require__(428),
	    hasIn = __webpack_require__(439),
	    isKey = __webpack_require__(437),
	    isStrictComparable = __webpack_require__(425),
	    matchesStrictComparable = __webpack_require__(426),
	    toKey = __webpack_require__(438);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function (object) {
	    var objValue = get(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;

/***/ },
/* 428 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGet = __webpack_require__(429);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;

/***/ },
/* 429 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var castPath = __webpack_require__(430),
	    isKey = __webpack_require__(437),
	    toKey = __webpack_require__(438);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}

	module.exports = baseGet;

/***/ },
/* 430 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isArray = __webpack_require__(352),
	    stringToPath = __webpack_require__(431);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;

/***/ },
/* 431 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var memoizeCapped = __webpack_require__(432),
	    toString = __webpack_require__(434);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoizeCapped(function (string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});

	module.exports = stringToPath;

/***/ },
/* 432 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var memoize = __webpack_require__(433);

	/** Used as the maximum memoize cache size. */
	var MAX_MEMOIZE_SIZE = 500;

	/**
	 * A specialized version of `_.memoize` which clears the memoized function's
	 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
	 *
	 * @private
	 * @param {Function} func The function to have its output memoized.
	 * @returns {Function} Returns the new memoized function.
	 */
	function memoizeCapped(func) {
	  var result = memoize(func, function (key) {
	    if (cache.size === MAX_MEMOIZE_SIZE) {
	      cache.clear();
	    }
	    return key;
	  });

	  var cache = result.cache;
	  return result;
	}

	module.exports = memoizeCapped;

/***/ },
/* 433 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var MapCache = __webpack_require__(384);

	/** Error message constants. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function memoized() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result) || cache;
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache)();
	  return memoized;
	}

	// Expose `MapCache`.
	memoize.Cache = MapCache;

	module.exports = memoize;

/***/ },
/* 434 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseToString = __webpack_require__(435);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;

/***/ },
/* 435 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Symbol = __webpack_require__(408),
	    isSymbol = __webpack_require__(436);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	module.exports = baseToString;

/***/ },
/* 436 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var isObjectLike = __webpack_require__(334);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
	}

	module.exports = isSymbol;

/***/ },
/* 437 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var isArray = __webpack_require__(352),
	    isSymbol = __webpack_require__(436);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}

	module.exports = isKey;

/***/ },
/* 438 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isSymbol = __webpack_require__(436);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}

	module.exports = toKey;

/***/ },
/* 439 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseHasIn = __webpack_require__(440),
	    hasPath = __webpack_require__(441);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;

/***/ },
/* 440 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}

	module.exports = baseHasIn;

/***/ },
/* 441 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var castPath = __webpack_require__(430),
	    isArguments = __webpack_require__(346),
	    isArray = __webpack_require__(352),
	    isIndex = __webpack_require__(353),
	    isKey = __webpack_require__(437),
	    isLength = __webpack_require__(351),
	    toKey = __webpack_require__(438);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = -1,
	      length = path.length,
	      result = false;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result || ++index != length) {
	    return result;
	  }
	  length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
	}

	module.exports = hasPath;

/***/ },
/* 442 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * This method returns the first argument it receives.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;

/***/ },
/* 443 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseProperty = __webpack_require__(444),
	    basePropertyDeep = __webpack_require__(445),
	    isKey = __webpack_require__(437),
	    toKey = __webpack_require__(438);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;

/***/ },
/* 444 */
/***/ function(module, exports) {

	"use strict";

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;

/***/ },
/* 445 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var baseGet = __webpack_require__(429);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function (object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;

/***/ },
/* 446 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	exports.default = depose;

	var _isAction = __webpack_require__(330);

	var _isAction2 = _interopRequireDefault(_isAction);

	var _isPromise = __webpack_require__(447);

	var _isPromise2 = _interopRequireDefault(_isPromise);

	var _Observable = __webpack_require__(4);

	var _DepositToken = __webpack_require__(448);

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
/* 447 */
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
/* 448 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _constants = __webpack_require__(336);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var DepositToken = function () {
	  function DepositToken(actionName, producer) {
	    _classCallCheck(this, DepositToken);

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
	      if (this.iterations === 0) {
	        this.producer[_constants.$$MIDDLEWARES][this.actionName].actionRelease(this.actionName);
	      }
	    }
	  }]);

	  return DepositToken;
	}();

	exports.default = DepositToken;
	module.exports = exports['default'];

/***/ },
/* 449 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = assignState;

	var _constants = __webpack_require__(336);

	var _isPlainObject = __webpack_require__(331);

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

	  return source.map(function (action) {
	    Object.assign(_this[_constants.$$STATE], (0, _isPlainObject2.default)(action.state) ? action.state : {});
	  });
	}
	module.exports = exports['default'];

/***/ },
/* 450 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.actionAssignState = actionAssignState;

	var _constants = __webpack_require__(336);

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
/* 451 */
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