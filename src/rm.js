if ("object"!==typeof Rx) { throw new Error('Reactive-middleware requires RxJs >=4.*. Run `bower install rxjs --save` to get it.'); }

import ReactiveStore from './ReactiveStore.js';

ReactiveStore.setRx(Rx);

import { actionAssignState } from './actionFactories.js';

export function createStore(defaultState, middlewares) {
  return new ReactiveStore(defaultState, middlewares);
}

export { actionAssignState };
export { ReactiveStore };
