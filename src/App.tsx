import './App.css';
import React from 'react';
import { Router, RouteComponentProps, Link } from "@reach/router"

import Home from './pages/home';
import MediaSingle from './pages/mediaSingle';

function App() {
  interface HomeProps extends RouteComponentProps{
    page?: number;
  }
  const HomeRoute = (props:HomeProps) => (
    <Home page={props.page ? props.page : 1} />
  )
  interface MediaSingleProps extends RouteComponentProps{
    id?: number;
  }
  const MediaSingleRoute = (props:MediaSingleProps) => (
    <MediaSingle id={props.id ? props.id : 0} />
  )

  return (
    <Router>
      <HomeRoute path="/" />
      <HomeRoute path="/page/:page" />
      <MediaSingleRoute path="/media/:id" />
    </Router>
  );
}

export default App;
