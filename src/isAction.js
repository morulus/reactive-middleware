import isPlainObject from 'lodash/isPlainObject';


/**
 * isAction - validate action
 *
 * @param  {object} action
 * @return {boolean}
 */
export default function isAction(action) {
  return isPlainObject(action)&&action.hasOwnProperty('type');
}
