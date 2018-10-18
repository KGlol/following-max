import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
      //组件的state
      state = {
        person : [
          { name: 'kg', age: 12 },
          { name: 'df', age: 111 },
          { name: 'sdsd', age: 23 }
        ],
        
        anotherState: 'something else'
      }

  
      // 组件函数
        switchNumberHander = ( name, age ) => { //函数中的参数
          this.setState( {
            person : [
              { name: name, age: age },
              { name: 'dddd', age: 122 },
              { name: 'sdsd', age: 13 }
            ]
            }
          )//
        };
        //用户输入名为参数
        nameChangeHander = (e) => {
          this.setState( {
            person : [
              { name: 'kg', age: '10' },
              { name: 'dddd', age: 122 },
              { name: e.target.value, age: 13 }
            ]
            }
          )
        }
        
  render() {
    return (
      <div className="App">
        <h1>This is an h1</h1>
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          /*传参的两种方式之一使用.bind(this, ...)（推荐）*/
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
         //////////////////////
        <button onClick={() => this.switchNumberHander('?????', '0000')}>switch name</button>
        
      </div>
    )
  };
}

export default App;
