import React from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';

import { incrementCounter, decrementCounter } from '../actions/counter';

const Counter = props => {
  const { count, incrementCounter, decrementCounter } = { ...props };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>Count: {count}</div>
      <button onClick={() => incrementCounter()}>Increase Count</button>
      <button onClick={() => decrementCounter()}>Decrease Count</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(incrementCounter()),
  decrementCounter: () => dispatch(decrementCounter()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
