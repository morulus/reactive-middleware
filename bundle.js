'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actionAssignState = undefined;
exports.createStore = createStore;

var _ReactiveStore = require('./ReactiveStore.js');

var _ReactiveStore2 = _interopRequireDefault(_ReactiveStore);

var _actionFactories = require('./actionFactories.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(defaultState, middlewares) {
  return new _ReactiveStore2.default(defaultState, middlewares);
}

exports.actionAssignState = _actionFactories.actionAssignState;
