import './App.css';
import React from 'react';
import {Router} from '@reach/router';

import Home from './pages/home.jsx';

function App() {
  return (
    <Router>
      <Home path="/" />
    </Router>
  );
}

export default App;
