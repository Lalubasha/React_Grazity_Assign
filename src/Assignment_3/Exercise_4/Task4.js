import React from 'react';
import { createUseStyles } from 'react-jss';
import { css } from 'glamor';
import { StyleSheet, css as aphroditeCss } from 'aphrodite';

// Styled-JSS
const useStyles = createUseStyles({
  myComponent: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
  },
  title: {
    color: '#333',
    fontSize: '24px',
  },
  description: {
    color: '#666',
    fontSize: '16px',
  },
});

// Glamor-JSS
const glamorStyles = css({
  myComponent: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
  },
  title: {
    color: '#333',
    fontSize: '24px',
  },
  description: {
    color: '#666',
    fontSize: '16px',
  },
});

// Aphrodite-JSS
const aphroditeStyles = StyleSheet.create({
  myComponent: {
    backgroundColor: '#f2f2f2',
    padding: '20px',
  },
  title: {
    color: '#333',
    fontSize: '24px',
  },
  description: {
    color: '#666',
    fontSize: '16px',
  },
});

const MyComponent = () => {
  // Styled-JSS
  const classes = useStyles();

  return (
    <div>
      {/* Styled-JSS */}
      <div className={classes.myComponent}>
        <h1 className={classes.title}>Hello, World! (Styled-JSS)</h1>
        <p className={classes.description}>This is my Styled-JSS component.</p>
      </div>

      {/* Glamor-JSS */}
      <div className={glamorStyles.myComponent}>
        <h1 className={glamorStyles.title}>Hello, World! (Glamor-JSS)</h1>
        <p className={glamorStyles.description}>This is my Glamor-JSS component.</p>
      </div>

      {/* Aphrodite-JSS */}
      <div className={aphroditeCss(aphroditeStyles.myComponent)}>
        <h1 className={aphroditeCss(aphroditeStyles.title)}>Hello, World! (Aphrodite-JSS)</h1>
        <p className={aphroditeCss(aphroditeStyles.description)}>This is my Aphrodite-JSS component.</p>
      </div>
    </div>
  );
};

export default MyComponent;
