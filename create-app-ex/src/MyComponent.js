import React from 'react';
import './App.css';

//Regular component
export default class MyComponent extends React.Component{
    render() {
        return <h4>Using React.Component</h4>;
      }
}

//functional Component
export  function MyFunctionalComponent(){
  return <h3>This is functioanl Component!!</h3>
}

export class MyRenderElement extends React.Component{
  render(){
    return React.createElement("h5",{style:{color:"blue"}},"Using Render Element..");
  }
}