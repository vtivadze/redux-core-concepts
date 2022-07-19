const redux = require('redux');

// reducer udates state (pure function)
const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};

// create state store which will be updated by 'counterReducer'
const store = redux.createStore(counterReducer);

// react on changing of state
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// subscribe on updating of state
store.subscribe(counterSubscriber);
