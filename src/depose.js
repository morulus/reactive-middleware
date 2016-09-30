import isAction from './isAction.js';
import isPromise from './isPromise.js';
import { Observable } from 'rxjs-es/Observable';
import DepositToken from './DepositToken';
/**
 * depose - Handler for middleware result sequencies
 *
 * @private
 * @param  {type} deposit description
 * @return {type}         description
 */
export default function depose(token, deposit) {
  if ("undefined"===typeof deposit) {
    token.done();
  } else if (deposit instanceof Array) {
    deposit.forEach(depose.bind(this, token.mutate(deposit.length)));
  } else if (isAction(deposit)) {
    if (!Object.isFrozen(deposit)) {
      this.dispatch(deposit, token.done.bind(token));
    } else {
        // ignore previous action
        token.done();
    }
  } else if (deposit instanceof Observable) {
    deposit.subscribe(depose.bind(this, token.up()), token.done.bind(token), token.done.bind(token));
  } else if (isPromise(deposit)) {
    let deposeUp = depose.bind(this, token);
    deposit.then(deposeUp).catch(deposeUp);
  } else if (deposit instanceof Error) {
    token.done();
    throw deposit;
  } else if ("function"===typeof deposit) {
    depose.call(this, token, deposit.call(this));
  } else {
    token.done();
  }
}

depose.withAction = function withAction(actionName, producer) {
  var token = new DepositToken(actionName, producer);
  return function(deposit) {
    depose.call(producer, token.up(), deposit);
  }
}
