import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


const add = (n1, n2) => {
  return n1 + n2
}


const substract = (n1, n2) => {
  return n2 - n1;
}