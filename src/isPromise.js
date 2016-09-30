export default function isPromise(promiseLike) {
  return "object"===typeof promiseLike&&"function"===typeof promiseLike.then&&"function"===typeof promiseLike.catch;
}
