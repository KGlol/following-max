import React from 'react';
// import Radium from 'radium';
import classes from './Person.css';

const Person = ( props ) => {
  // const style = {
  //   '@media (min-width: 500px)': { width: '450px' },
  //   // backgroundColor: 'red',
  // 

  return (
    <div className={classes.person}>
      <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.change} />
    </div>
  );
  }

export default Person;