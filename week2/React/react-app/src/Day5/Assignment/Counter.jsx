// components/Counter.jsx
import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const max = 10;

  const increment = () => {
    if (count < max) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };

  const reset = () => setCount(0);

  const getColor = () => {
    if (count === 0) return 'zero';
    if (count === max) return 'max';
    return 'positive';
  };

  return (
    <div className="counter-container">
      <h2>🔢 Interactive Counter</h2>
      <div className={`count-display ${getColor()}`}>{count}</div>
      <div className="button-group">
        <button onClick={decrement}>-1</button>
        <button onClick={increment}>+1</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
