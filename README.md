# Introduction

Reactive-middleware is a class for creating observable stores. This encapsulation is the result of rethinking Flux architecture, pursuing the goal of implementing the "action-reaction" technique.

# Reactions instead subscribes

In Flux, when dispatcher makes changes to the state, component must understand which exactly parts of the UI have to be changed. The view engines, based on expressions (like React, Angular or Handlebars), just compares results of all expressions in View-component, before rendering. The advantages of this approach is that you can keeping logic and view separately, but you have to evaluate all expressions each time the state has changed.

Another situation is when you need to perform some action in response to changing of state, for example: playing programmed animation. Which exactly the state's property must be changed to run animation script? In Redux similar objectives found solution in the middlewares, which represents a side-effects. But in my methodology the state's transformations represent a side-effect, while main sequence's target is reaction.

The reaction is a kind of an action, but invoked only by another action. One action can invoked one or many reactions, as well as reaction can invoke another action or a reaction, using arbitrary reactive transformations. Ultimately, we can track any reactions, which caused by the initial action and to find the final point. Thus, I got the reactive sequences, capable to response.

## Middleware signature

Middlewares uses reactive sequences, implemented by [Rxjs](https://github.com/Reactive-Extensions/RxJS). Unlike Flux, Reactive-middlewares takes an Observable object and, importantly, returns back Observable, which can to produce another action, sequence, Promise, a function, or array of these.

```js
function addTodo(source, provider) {
  return source
  .map(function(action) {
    return provider.actions.assignState({
      todos: provider.getState().todos.concat([{
        title: action.title,
        timeStamp: new Date()
      }])
    })
  });
}
```

Observer produce new action (or actions), which will be immediately executed. This example demonstrates the usual reducer's job. But Reactive-middlewares proposes to use an additional post-effect, named reaction.

```js
function addTodo(source, provider) {
  return source
  .map(function(action) {
    return [
      provider.actions.assignState({
        todos: provider.getState().todos.concat([{
          title: action.title,
          timeStamp: (new Date()).getTime()
        }])
      }),
      {
        type: REACTION_TODO_CHANGED
      }
    ];
  });
}
```

Reaction REACTION_TODO_CHANGED will be handler by another component (or the same).

```js
class TodoListView {
  constructor(provider) {
    provider.registerMiddleware(REACTION_TODO_CHANGED, (source, provider) => {
      return source
      .distinct(function() {
        return provider.getState().todos.reduce(function(prev, cur) { return prev + cur.timeStamp; }, 0)
      })
      .do(this.render);
    });
  }

  render() {
    // Someway render Todo list
  }
}
```

# Inspiration

Basic [Flux](https://facebook.github.io/flux/) logic offers to use the state of store as some gateway, which separating logic and presentation. It allows to test and develop these parts of application separately, moreover in addition there is possibility to substitute components in each parts.

React offers the nice render mechanism, based on tricky evaluation of necessity to run re-rendering process. Without it, if the code of render is heavy and state of store changes ten times per second, then application's performance becomes depressing. So an essential condition for the successful use the Flux is the use it with React.

But when we are dealing with the view, based on jQuery or another MVC-compatible engine, methodology of chain action-dispatcher-state-view will crash. Because jQuery do not link the DOM elements and its attributes with model, also taking into account possibility of prolonged transitions, code of re-render can become a original nightmare.

But anyway, the dispatcher and the store is a great benefit. Central dispatcher makes an application more persistent. Once starting to write applications with Flux architecture, and you cannot go back to MVC, even when application required it. I had to write an implementation of Flux, focused on middleware, instead state, in order to make refactoring of my old MCV applications. It prompted me to discard idea to use subscribing to store's state and starts to use _reactions_.

```js
import rm from 'reactive-middleware'
class Provider {
  constructor(container) {
    this.components = {};
    this.store = rm.createStore({
      page: 1
    }, {
      [ACTION_USER_NEXT_PAGE]: function(source, provider) {
        return source
        .filter(() => {
          return !provider.getState().clientFrozen
        })
        .map(() => {
          var nextPageIndex = provider.getState().page++;
          return [
            {
              type: ACTION_ASSIGN_STATE, // update state
              state: {
                page: nextPageIndex
              }
            },
            {
              type: REACTION_CHANGE_PAGE, // reaction
              page: nextPageIndex;
            }
          ];
        });
      }
    }, this);

    this.components = new ScrollBarView(this);
  }
}
```

In the view-controller we subscribe to the reactions, not state change event.

```js
class ScrollBar {
  constructor(provider) {
    var observer = provider.registerMiddleware(REACTION_CHANGE_PAGE, (source, provider) => {
      source
      .map((action) => {
        return [
          {
            type: ACTION_FREEZE_CLIENT // Action to the provider
          },
          this.doChangePage(action.page)
        ];  
      });
    });
  }

  doChangePage(page) {
    // Some DOM manipulation
    return new Promise(function(resolve, reject) {
      someAsyncTransitions(function() {
        resolve({
          type: ACTION_UNFREEZE_CLIENT // Action to the provider
        });
      });
    });
  }
}
```
