require('babel-register')({
        "presets": ["es2015"],
        ignore: false
});
import test from 'ava';
// import 'babel-core/register';
import { createStore } from './../src/rmrx.js';


const ACTION_HELLO_TO = 'ACTION_HELLO_TO';

function helloTo(source) {
  source
  .map(function(action) {
    return actionAssignState({
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

test('Creating store', function(t) {
  t.plan(1);
  var store = createStore({
    hello: 'World'
  }, {
    [ACTION_HELLO_TO]: helloTo
  });

  store.dispatch(actionHelloTo('Universe'));

  console.log('STORE', store.constructor.name);

  t.ok(store.getState().hello==='Universe');
});
