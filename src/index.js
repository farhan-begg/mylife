import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

