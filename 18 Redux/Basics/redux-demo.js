const redux = require('redux');

/**** REDUCER FUNCTION ****/
/* 
Should be a pure function that takes the previous state and an action, and returns the new state.
No side effects(no API calls, no DOM manipulation)

Inputs: (Old state + disaptch action)
Outputs: New state object
*/

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};
const store = redux.createStore(counterReducer);


const counterSubscriber = function () {
    const latestState = store.getState();
    console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });