import ReactiveStore from './ReactiveStore.js';
import { actionAssignState } from './actionFactories.js';

export function createStore(defaultState, middlewares) {
  return new ReactiveStore(defaultState, middlewares);
}

export { actionAssignState };
export { ReactiveStore };
