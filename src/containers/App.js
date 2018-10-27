import React, { PureComponent } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import classes from './App.css'; //使用css module,动态的更改元素样式名
import Aux from '../hocs/Aux';
import withClass from '../hocs/withClass';
//withClass并不是一个组件,而是返回高阶组件的函数


// import Radium, { StyleRoot } from 'radium';

class App extends PureComponent {//extends Component 使得App具有props和state
  constructor ( props ) {
    super ( props );
    this.state = {
      person: [
        { id: 'id1', name: 'kg', age: 12 },
        { id: 'id2', name: 'df', age: 111 },
        { id: 'id3', name: 'sdsd', age: 23 }
      ],
      
      anotherState: 'something else',
      showPerson: false,
      toggleBtnCouter: 0
    };
    console.log ( '[App.js] inside constructor', props );//this.props或props都可以
  };
  
  //组件的state
      // state = {
      //   person: [
      //     { id: 'id1', name: 'kg', age: 12 },
      //     { id: 'id2', name: 'df', age: 111 },
      //     { id: 'id3', name: 'sdsd', age: 23 }
      //   ],
        
      //   anotherState: 'something else',
      //   showPerson: false
      // }
  componentWillMount () {
    console.log ( '[App.js] inside componentWillMount' );
  };
  componentDidMount () {
    console.log ( '[App.js] inside componentDidMount' );
  };

  //Updated by internal changes ( state )
  // shouldComponentUpdate ( nextProps, nextState ) {
  //   console.log ( '[Update App.js] inside shouldComponentUpdate', nextProps, nextState );
  //   return this.state.person !== nextState.person || //不返回时 控制台显示返回一个undefine
  //         this.state.showPerson !== nextState.showPerson;
  // }

  componentWillUpdate ( nextProps, nextState ) {
    console.log ( '[Update App.js] inside componentWillUpdate', nextProps, nextState );
  }
  componentDidUpdate () {
    console.log ( '[Update App.js] inside componentDidUpdate' );
  }
  
      // 组件函数
        switchNumberHander = ( name, age ) => { //函数中的参数
          this.setState( {
            person : [
              { id: 'id1', name: name, age: age },
              { id: 'id2', name: 'dddd', age: 122 },
              { id: 'id3', name: 'sdsd', age: 13 }
            ]
            }
          )//
        };
        //用户输入名为参数
        nameChangeHander = (e) => {
          this.setState( {
            person : [
              { id: 'id1', name: 'kg', age: '10' },
              { id: 'id2', name: 'dddd', age: 122 },
              { id: 'id3', name: e.target.value, age: 13 }
            ]
            }
          )
        }

        //显示转换函数
        toggleShowHander = () => {
          
           /**
            * 第二个showPerson显示为undefine
            * 
            * this.setState({showPerson: !showPerson});
            */
           const showAbout = this.state.showPerson;
           this.setState( ( prevState, props ) => { 
              return {
                showPerson: !showAbout,
                toggleBtnCouter: prevState.toggleBtnCouter + 1
                  //  toggleBtnCouter: this.state.toggleBtnCouter + 1 this.setState是异步更新,这种写法有问题
                  //可以向showPerson一样先copy给showAbout,更新shouAbout再给showPerson
                  //原因: setState中的state由于异步,无法确定最新或者旧值,其他位置的setState可能此处先完成.
              }  
            });
        }

        //删除person函数
        deletePersonHander = ( index ) => {
          /**
           * 数组是refence type，直接赋给别的变量，只是使变量指向原数组
           * 成熟的习惯是复制一分变量，更改复制品。
           * 方法一  使用数组的slice方法复制数组
           * 方法二  使用展开运算符
           */
          //const person = this.state.person.slice(); 
          const person = [...this.state.person];
          person.splice(index, 1);
          this.setState({person: person});
        }
        
  render() {
    console.log ( '[App.js] inside render()' );
    // const style = {
    //   color: 'white',
    //   backgroundColor: 'green',
    //   border: '1px solid transparent',
    //   boxShadow: '0 1px 4px black',
    //   outline: 'none',
    //   font: 'inherit',
    //   cursor: 'pointer',
      // ':hover': {
        // backgroundColor: 'yellow',
        // color: 'black'
      // }
    //}

    let person;

    let btnClass = '';

    if ( this.state.showPerson ) {

      btnClass = classes.Red; //classes.Red也是字符串

       person =  ( 
          <div>
            <Persons 
              person={this.state.person} 
              delete={this.deletePersonHander} 
            />
          </div>);



      // style.backgroundColor= 'grey';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'white'
      // };
    }

    const assignedClasses = [];

    if(this.state.person.length <= 2) assignedClasses.push(classes.red);
    if(this.state.person.length <= 1) assignedClasses.push(classes.bold);//使用cssmodule时，return以前的样式变量不加大括号。
    
    return (
        // <WithClass className={classes.App}>hoc 有classNme
        <Aux>
          {this.props.title}
          <button onClick={() => this.setState({showPerson: true})}>Show Persons</button>
          <Cockpit 
            assignedClasses={assignedClasses.join(' ')}//render以内的变量不必再用this.
            btnClass={btnClass} //render以内的变量不必再用this.
            click={this.toggleShowHander}
            />
          {/* <h1 className={assignedClasses.join(' ')}>This is an h1</h1>
          <button
          className={btnClass} 
          onClick={this.toggleShowHander} 
        >switch name</button> */}
            {person}
            {/* {this.state.showPerson ?  
            <div>
            <Person 
            name={this.state.person[1].name} 
            age={this.state.person[1].age}
            //传参的两种方式之一使用.bind(this, ...)（推荐）
            click={this.switchNumberHander.bind(this, '!!!!!', 100)} 
            change={this.nameChangeHander} />
            <Person 
            name={this.state.person[0].name} 
            age={this.state.person[0].age}
            change={this.nameChangeHander} />
            <Person 
            name={this.state.person[2].name} //
            age={this.state.person[2].age}
            change={this.nameChangeHander} >component Person's children.</Person> 
          </div>  : null}  */}
         {/* </WithClass> */}
    </Aux>
    )
  }
}

export default withClass( App, classes.App );