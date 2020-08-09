import React from 'react';

export default class MyRenderElement extends React.Component{
  render(){
    return React.createElement("h5",{style:{color:"blue"}},"Using Render Element..");
  }
}