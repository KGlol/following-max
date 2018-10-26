import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor ( props ) {
    super ( props );
    console.log ( '[Persons.js] inside constructor', this.props );
    //constructor中可以不加this
  }

  componentWillMount () {
    console.log ( '[Persons.js] inside componentWillMount' );
  }
  componentDidMount () {
    console.log ( '[Persons.js] inside componentDidMount' );
  }

  //Update lifecycle
  componentWillReceiveProps ( nextProps ) {
    console.log ( '[Update Persons.js] inside componentWilUpdate()', nextProps );
  }
  // shouldComponentUpdate ( nextProps, nextState ) {
  //   console.log ( '[Update Persons.js] inside shouldUpdateComponent()', nextProps, nextState );
  //   return this.props !== nextProps || 
  //         this.props.changed !== nextProps.changed ||
  //         this.props.clicked !== nextProps.clicked;
  //         //shouldUpdateComponent应返回布尔值决定是否更新组件
  //   //contructor外要加this
  // }
  componentDidUpdate () {
    console.log ( '[Update Persons.js] inside componentDidUpdate()' );
  }

  render () {
    console.log ( '[Persons.js] inside render()' );
    return  this.props.person.map( (eachPerson, index) => {
        //<div>套在这个位置就不行？？？
      return <Person 
      //return 后面要跟东西 直接换行会报错！！！
            name={eachPerson.name} 
            age={eachPerson.age}
            click={() => this.props.delete(index)} 
            key={eachPerson.id} />
          });
  }
}
// const persons = (props) => (//当直接箭头函数直接写小括号而不是用大括号包裹时,将直接返回小括号中的内容!
//   props.person.map( (eachPerson, index) => {
//     //<div>套在这个位置就不行？？？
//   return <Person 
//   //return 后面要跟东西 直接换行会报错！！！
//         name={eachPerson.name} 
//         age={eachPerson.age}
//         click={() => props.delete(index)} 
//         key={eachPerson.id} />
//       })
// );

export default Persons;