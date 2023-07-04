import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
const Styled = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.container}>
        <p className={classes.text}>This is a styled paragraph.</p>
        <button className={classes.button}>Click me</button>
      </div>
    );
  };
export default Styled;  