/**
 * isObservable
 *
 * @param  {object} observable
 * @return {boolean}
 */
export default function isObservable(observable) {
  return "object"===typeof observable&&"function"===typeof observable.subscribe;
}
