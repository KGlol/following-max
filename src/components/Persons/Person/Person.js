import React, { Component } from 'react';
// import Radium from 'radium';
import classes from './Person.css';
import Aux from '../../..//hocs/Aux';
import withClass from '../../../hocs/withClass';
//withClass并不是一个组件,而是返回高阶组件的函数
import PropTypes from 'prop-types';



class Person extends Component {
  constructor ( props ) {
    super ( props );
    console.log ( '[Person.js] inside constructor', this.props );
  };

  componentWillMount () {
    console.log ( '[Person.js] inside componentWillMount' );
  };
  componentDidMount () {
    console.log ( '[Person.js] inside componentDidMount', this.refs.inp.type );
    
  };

  render () {
    console.log ( '[Person.js] inside render()' );

    return (
      <Aux>
          <p onClick={this.props.click}>I'm {this.props.name}, and I'm {this.props.age} years old.</p>
          <p>{this.props.children}</p>
          <input ref="inp" type="text" onChange={this.props.change} />
      </Aux>        
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

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
}

export default withClass( Person, classes.person );