import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Homepage';

import {BrowserRouter} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> 
     <Homepage /> 
    {/* <Switch> 
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/User/:id">
        <User />
      </Route>
    </Switch> */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


