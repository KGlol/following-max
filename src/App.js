import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';

class App extends Component {
      //组件的state
      state = {
        person: [
          { name: 'kg', age: 12 },
          { name: 'df', age: 111 },
          { name: 'sdsd', age: 23 }
        ],
        
        anotherState: 'something else',
        showPerson: false
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
          const person = this.state.person;
          person.splice(index, 1);
          this.setState({person: person});
        }
        
  render() {
    return (
      <div className="App">
        <h1>This is an h1</h1>
         {this.state.person.map( (eachPerson, index) => {
            return 
              <Person 
              name={eachPerson.name} 
              age={eachPerson.age}
              click={this.deletePersonHander.bind(this, index)} />//传参时要使用箭头函数
          } )}
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

          
        <button onClick={this.toggleShowHander}>switch name</button>
        
      </div>
    )
  }
}

export default App;
