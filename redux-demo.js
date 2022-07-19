const redux = require('redux');

// reducer udates state (pure function)
const counterReducer = (state = { counter: 0}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    }
  }

  return state;
};

// create state store which will be updated by 'counterReducer'
const store = redux.createStore(counterReducer);

// get initial state for testing purposes
// console.log(store.getState());

// react on changing of state
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe on updating of state
store.subscribe(counterSubscriber);

// dispatch action of type 'increment'
store.dispatch({type: 'increment'});

// dispatch action of type 'decrement'
store.dispatch({type: 'decrement'});
