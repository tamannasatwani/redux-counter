
import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, increment, decrement }) => {
  return (
    <div class="counter">
      <h2>Counter : {count}</h2>
      <button class="increment" onClick={increment}>+</button>
      <button class="decrement" onClick={decrement}>-</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
