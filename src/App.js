import React, { Component } from 'react';
import Person from './Person/Person';
import classes from './App.css'; //使用css module,动态的更改元素样式名
// import Radium, { StyleRoot } from 'radium';

class App extends Component {
      //组件的state
      state = {
        person: [
          { id: 'id1', name: 'kg', age: 12 },
          { id: 'id2', name: 'df', age: 111 },
          { id: 'id3', name: 'sdsd', age: 23 }
        ],
        
        anotherState: 'something else',
        showPerson: false
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
           this.setState( {showPerson: !showAbout} );
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

    let person = null;

    let btnClass = '';

    if ( this.state.showPerson ) {

      btnClass = classes.Red; //classes.Red也是字符串

      person =  ( 
        <div>
        {this.state.person.map( (eachPerson, index) => {
          //<div>套在这个位置就不行？？？
        return <Person 
        //return 后面要跟东西 直接换行会报错！！！
              name={eachPerson.name} 
              age={eachPerson.age}
              click={() => this.deletePersonHander(index)} 
              key={eachPerson.id} />
            } )} 
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
        <div className={classes.App}>
          <h1 className={assignedClasses.join(' ')}>This is an h1</h1>
          <button
            className={btnClass} 
            onClick={this.toggleShowHander} 
            >switch name</button>
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

            
          
        </div>
    )
  }
}

export default App;