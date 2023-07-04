import React from 'react';
import { css } from 'glamor';

const styles = {
  container: css({
    padding: '20px',
    backgroundColor: '#f1f1f1',
  }),
  text: css({
    color: '#333',
    fontSize: '18px',
    marginBottom: '10px',
  }),
  button: css({
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  }),
};
const Glamor = () => {
    return (
      <div className={styles.container}>
        <p className={styles.text}>This is a styled paragraph.</p>
        <button className={styles.button}>Click me</button>
      </div>
    );
  };
  
export default Glamor;