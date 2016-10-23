import Rx from './Rx';

import ReactiveStore from './ReactiveStore.js';

ReactiveStore.setRx(Rx);

import { actionAssignState } from './actionFactories.js';

export function createStore(defaultState, middlewares) {
  return new ReactiveStore(defaultState, middlewares);
}

export { actionAssignState };
export { ReactiveStore };
