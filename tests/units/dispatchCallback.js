/**
* Test simple assigment value to state through the action ACTION_HELLO_TO
*/
const ACTION_SET_VALUE = 'ACTION_SET_VALUE';
const ACTION_POSTSET_VALUE = 'ACTION_POSTSET_VALUE';

function postSetValue(source, provider) {
  return source
  .delay(20)
  .map((action) => {
    return [
      true, true, true,
      provider.actions.assignState({
        mainValue: action.value
      })
    ]
  });
}

function actionPostSetValue(value) {
  return {
    type: ACTION_POSTSET_VALUE,
    value: value
  }
}

function setValue(source, provider) {
  return source
  .flatMap(function(action) {
    var s = new provider.Rx.Subject();
    setTimeout(function() {
      s.onNext(new Promise(function(resolve, reject) {
        setTimeout(resolve, 100);
      }));
      s.onNext(true);
      s.onNext(actionPostSetValue(action.value));
    });
    return s;
  });
}

function actionSetValue(value) {
  return {
    type: ACTION_SET_VALUE,
    value: value
  }
}

function test(rm) {
  return new Promise(function(resolve, reject) {
    var createStore = rm.createStore;

    var store = createStore({
      mainValue: -1
    }, {
      [ACTION_SET_VALUE]: setValue,
      [ACTION_POSTSET_VALUE]: postSetValue
    });
    store.dispatch(actionSetValue('Hello, World'), function() {
      if (store.getState().mainValue=='Hello, World') resolve();
      else reject('Incorrect value');
    });
    setTimeout(function() {
      reject('Timeout');
    }, 501);
  });
}

if ("object"==typeof module&&module.exports) {
  module.exports = test;
} else if (define&&define.amd){
  define(function() {
    return test;
  });
}
