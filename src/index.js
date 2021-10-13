import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Homepage from './Homepage';
import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
    {/* <App /> */}
    <Homepage />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


