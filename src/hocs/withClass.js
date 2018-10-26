//withClass 并不是一个组件,而是一个返回高阶组件的函数
import React from 'react';

const withClass = ( WrappedComonent, className ) => 
   //高阶组件的函数
  props => <div className={ className } >
    <WrappedComonent/>
  </div>
 export default withClass;