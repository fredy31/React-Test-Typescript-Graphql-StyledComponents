import './App.css';
import React from 'react';
import {Router} from '@reach/router';

import Home from './layouts/home.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}

export default App;
