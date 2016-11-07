/**
* Test simple assigment value to state through the action ACTION_HELLO_TO
*/
const ACTION_HELLO_TO = 'ACTION_HELLO_TO';

function helloTo(source) {
  return source
  .map(function(action) {
    return rm.actionAssignState({
      hello: action.to
    });
  });
}

function actionHelloTo(to) {
  return {
    type: ACTION_HELLO_TO,
    to: to
  }
}

function test(rm) {
  var createStore = rm.createStore;
  var store = createStore({
    hello: 'World'
  }, {
    [ACTION_HELLO_TO]: helloTo
  });

  var testAssign = new Promise(function(resolve, reject) {
    store.dispatch(actionHelloTo('Universe'));
    resolve(store.getState().hello==='Universe');
  });

  var testSubscribe = new Promise(function(resolve, reject) {
    store.subscribe(function() {
      resolve(store.getState().hello==='Universe2');
    });
    store.dispatch(actionHelloTo('Universe2'));
  });

  var testUnsubscribe = new Promise(function(resolve, reject) {
    var unsubscribe = store.subscribe(function() {
      reject();
    });
    unsubscribe();
    store.dispatch(actionHelloTo('Universe3'));
    resolve(true);
  });

  return Promise.all([testAssign, testSubscribe, testUnsubscribe])
  .then(function(results) {

      return results.reduce((acc, value) => {
        return value?acc:value;
      }, true);
  });
}

if ("object"==typeof module&&module.exports) {
  module.exports = test;
} else if (define&&define.amd){
  define(function() {
    return test;
  });
}
