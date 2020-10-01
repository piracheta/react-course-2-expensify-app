import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
}

const decrementCount = ({ decrementBy = 1 } = {}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
}

const resetCount = () => {
    return {
        type: 'RESET'
    }
}

const setCount = (payload = {}) => {
    return {
        type: 'SET',
        count: payload.count
    }
}

// Reducers
const countReducer = (currentStore = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: currentStore.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: currentStore.count - action.decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            };
        default:
            return currentStore;
    }
    return currentStore;
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

// unsubscribe();

store.dispatch(resetCount());

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(decrementCount());
// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// });

// store.dispatch({
//     type: 'DECREMENT'
// });

store.dispatch(setCount({ count: -100 }));

// store.dispatch({
//     type: 'SET',
//     count: 101
// });