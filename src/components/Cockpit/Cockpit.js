import React from 'react';
 
const cockpit = (props) => {
  return [ //return后面要紧跟东西
      <h1 key="1"className={props.assignedClasses}>This is an h1</h1>,
      <button 
        key="2"
        className={props.btnClass} 
        onClick={props.click}>
        switch name
      </button>
    ]

}

export default cockpit;