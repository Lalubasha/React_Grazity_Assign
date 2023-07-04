import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    padding: '20px',
    backgroundColor: '#f1f1f1',
  },
  text: {
    color: '#333',
    fontSize: '18px',
    marginBottom: '10px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
});
const Aphrodite = () => {
    return (
      <div className={css(styles.container)}>
        <p className={css(styles.text)}>This is a styled paragraph.</p>
        <button className={css(styles.button)}>Click me</button>
      </div>
    );
  };
export default Aphrodite;