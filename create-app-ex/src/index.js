import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
 import App from './App';
import MyComponent,{MyFunctionalComponent,MyRenderElement} from './MyComponent'
import * as serviceWorker from './serviceWorker';
//import MyFunctionalComponent from './MyFunctionalComponent';
//import { MyPureComponent } from './MyPureComponent';

ReactDOM.render( <React.StrictMode>
  <App />,
  <MyComponent/>
  <MyFunctionalComponent/>,
  <MyRenderElement/>
  </React.StrictMode>,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
