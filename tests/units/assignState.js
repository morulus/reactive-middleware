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
  return new Promise(function(resolve, reject) {
    var createStore = rm.createStore;
    var store = createStore({
      hello: 'World'
    }, {
      [ACTION_HELLO_TO]: helloTo
    });
    store.dispatch(actionHelloTo('Universe'));
    resolve(store.getState().hello==='Universe');
  });
}

if ("object"==typeof module&&module.exports) {
  module.exports = test;
} else if (define&&define.amd){
  define(function() {
    return test;
  });
}
