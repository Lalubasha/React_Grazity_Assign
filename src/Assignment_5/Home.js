import React, { useState } from 'react';

const Home = () => {
  const [message, setMessage] = useState('Welcome to the Home page!');

  const handleClick = () => {
    setMessage('Button clicked! New message displayed.');
  };

  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default Home;
