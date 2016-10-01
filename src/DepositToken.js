import { $$MIDDLEWARES } from './constants.js';

export default class DepositToken {
  constructor(actionName, producer) {
    if (process.env.NODE_ENV=='development') {
      this.__historyStepsCount = [];
      this.__historyActions = [];
    }
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
    if (process.env.NODE_ENV=='development') {
      this.__historyStepsCount++;
    }
    if (this.iterations===0) {
      if (process.env.NODE_ENV=='development') {
        //console.log("%c"+[this.actionName].concat(this.__historyActions).join(' : '), "color:gray;font-size:80%;");
        this.__historyStepsCount = [];
        this.__historyActions = [];
      }
      this.producer[$$MIDDLEWARES][this.actionName].actionRelease(this.actionName);
    }
  }

  __addDevStepAction(action) {
    this.__historyActions.push(action.type);
  }
}
