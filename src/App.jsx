import './App.css';
import React from 'react';
import {Router} from '@reach/router';

import Home from './pages/home.jsx';
import MediaSingle from './pages/mediaSingle.jsx';

function App() {
  return (
    <Router>
      <Home path="/" />
      <MediaSingle path="/media/:id" />
    </Router>
  );
}

export default App;
