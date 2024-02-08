import { createStore } from 'redux';

const initialState = {
  count: 0
};

// reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

//Redux store
const store = createStore(counterReducer);

export default store;
