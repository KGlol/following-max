import React from 'react';

const withClass = props => ( //单行时可不加大括号,也可不加小括号
  <div className={ props.className }>
    { props.children }
  </div>
)

export default withClass;