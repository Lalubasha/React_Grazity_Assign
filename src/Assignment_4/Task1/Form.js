import React, { useState } from 'react';

const FormExample = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error messages
    setNameError('');
    setEmailError('');

    // Perform form validation
    if (name.trim() === '') {
      setNameError('Please enter your name');
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email');
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email');
    }

    // Perform form submission logic if there are no errors
    if (nameError === '' && emailError === '') {
      // Perform form submission logic here
      console.log('Name:', name);
      console.log('Email:', email);

      // Reset form fields
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameError && <p className="error">{nameError}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormExample;
