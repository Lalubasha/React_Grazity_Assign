import React from 'react';
import Task from './Assignment_4/Task1/Task1';
import Task2 from './Assignment_4/Task2/Task2';
import './App.css'; 

function App() {
  return (
    <div className="container">
      <div className="top-container">
        <Task />
      </div>
      <div className="bottom-container">
        <Task2 />
      </div>
    </div>
  );
}

export default App;
