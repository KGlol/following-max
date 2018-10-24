import React from 'react';
 
const cockpit = (props) => {
  return (
    <div>
      <h1 className={props.assignedClasses}>This is an h1</h1>
      <button
        className={props.btnClass} 
        onClick={props.click}
      >
        switch name
      </button>
    </div>
  )
}

export default cockpit;