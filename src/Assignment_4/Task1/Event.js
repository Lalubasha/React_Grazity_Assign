import React, { useState } from 'react';
import './ButtonExample.css'; 

const ButtonExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="button-example">
      <p className="count">Count: {count}</p>
      <button className="increment-button" onClick={handleClick}>Increment</button>
    </div>
  );
};

export default ButtonExample;
