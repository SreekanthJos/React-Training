import React from 'react';
import './App.css';
import MyComponent from './MyComponent'
import MyFunctionalComponent from './MyFunctionalComponent'
import MyRenderElement from './MyRenderElement'
function App() {
  return (
    <div>
      <header>
        Hello World!
      </header>
      ,
  <MyComponent/>
  <MyFunctionalComponent/>
   <MyRenderElement/>
    </div>
  );
}

export default App;
