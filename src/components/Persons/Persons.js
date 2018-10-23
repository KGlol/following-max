import React from 'react';
import Person from './Person/Person';


const persons = (props) => (//当直接箭头函数直接写小括号而不是用大括号包裹时,将直接返回小括号中的内容!
  props.person.map( (eachPerson, index) => {
    //<div>套在这个位置就不行？？？
  return <Person 
  //return 后面要跟东西 直接换行会报错！！！
        name={eachPerson.name} 
        age={eachPerson.age}
        click={() => props.delete(index)} 
        key={eachPerson.id} />
      })
);

export default persons;