import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Hello from './components/Hello'

ReactDOM.render(
  <React.StrictMode>
    {/* App から　Helloに*/}
    <Hello />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
);
