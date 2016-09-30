/**
* Test simple assigment value to state through the action ACTION_HELLO_TO
*/
const ACTION_ADD_ITEM = 'ACTION_ADD_ITEM';
const REACTION_ADD_ITEM = 'REACTION_ADD_ITEM';

function addItem(source, provider) {
  return source
  .map((action) => {
    return [
      provider.actions.assignState({
        messages: provider.getState().messages.concat([action.message])
      }),
      {
        type: REACTION_ADD_ITEM
      }
    ]
  });
}

function actionAddItem(message) {
  return {
    type: ACTION_ADD_ITEM,
    message: message
  }
}

function test(rm) {
  return new Promise(function(resolve, reject) {
    var createStore = rm.createStore;
    var iteration = 1;
    var store = createStore({
      messages: []
    }, {
      [ACTION_ADD_ITEM]: addItem,
      [REACTION_ADD_ITEM]: function(source, provider) {
        return source
        .do(function() {
          if (provider.getState().messages.length!==iteration) reject();
          iteration++;
          if (iteration===2) {
            resolve(true);
          }
        });
      }
    });
    store.dispatch(actionAddItem('Hello, World'));
    store.dispatch(actionAddItem('Hello, Universe'));
  });
}

if ("object"==typeof module&&module.exports) {
  module.exports = test;
} else if (define&&define.amd){
  define(function() {
    return test;
  });
}
