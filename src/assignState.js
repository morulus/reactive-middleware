import { $$STATE } from './constants.js';
import isPlainObject from './isPlainObject';
/**
 * assign state
 *
 * @private
 * @param  {Observable} source
 */
export default function assignState(source) {
  return source
  .do((action) => {
    Object.assign(this[$$STATE], isPlainObject(action.state)?action.state:{});
  });
}
