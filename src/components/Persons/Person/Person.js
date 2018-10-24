import React, { Component } from 'react';
// import Radium from 'radium';
import classes from './Person.css';

class Person extends Component {
  constructor ( props ) {
    super ( props );
    console.log ( '[Person.js] inside constructor', this.props );
  };

  componentWillMount () {
    console.log ( '[Person.js] inside componentWillMount' );
  };
  componentDidMount () {
    console.log ( '[Person.js] inside componentDidMount' );
  };

  render () {
    console.log ( '[Person.js] inside render()' );

    return (
      <div className={classes.person}>
        <p onClick={this.props.click}>I'm {this.props.name}, and I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.change} />
      </div>
   );
  }
}
//stateless component
// const person = ( props ) => {
//   const style = {
//     '@media (min-width: 500px)': { width: '450px' },
//      backgroundColor: 'red'
//     }
  

//   return (
//     <div className={classes.person}>
//       <p onClick={props.click}>I'm {props.name}, and I'm {props.age} years old.</p>
//       <p>{props.children}</p>
//       <input type="text" onChange={props.change} />
//     </div>
//   );
//   }

export default Person;