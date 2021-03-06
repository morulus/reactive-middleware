export default function debug(expression, failMessage) {
  let result;
  if ("function"===typeof expression) {
    result = expression();
  } else {
    result = expression;
  }
  if (!result) throw (failMessage instanceof Error) ? failMessage : new Error(failMessage);
}
