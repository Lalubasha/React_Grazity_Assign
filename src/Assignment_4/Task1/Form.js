import React, { useState } from 'react';
import './FormExample.css'; 

const FormExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNameError('');
    setEmailError('');

    if (name.trim() === '') {
      setNameError('Please enter your name');
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email');
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email');
    }

    if (nameError === '' && emailError === '') {
      setSubmittedData({ name, email });

      setName('');
      setEmail('');
    }
  };

  const isValidEmail = (email) => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={nameError ? 'input-error' : ''}
        />
        {nameError && <p className="error">{nameError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={emailError ? 'input-error' : ''}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <button type="submit" className="submit-button">Submit</button>

      {submittedData && (
        <div className="submitted-data">
          <h2>Submitted Data</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
        </div>
      )}
    </form>
  );
};

export default FormExample;
