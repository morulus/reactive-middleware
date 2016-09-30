import { $$MIDDLEWARES } from './constants.js';

export default class DepositToken {
  constructor(actionName, producer) {
    this.actionName = actionName;
    this.iterations = 0;
    this.producer = producer;
  }

  up(increase) {
    this.iterations += increase||1;
    return this;
  }
  mutate(to, from = 1) {
    this.iterations += to-from;
    return this;
  }

  done() {
    this.iterations--;
    if (this.iterations===0) {
      this.producer[$$MIDDLEWARES][this.actionName].actionRelease(this.actionName);
      this.producer = null;
    }
  }
}
