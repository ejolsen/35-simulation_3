import React, { Component } from 'react';
import {Switch, Route, HashRouter} from 'react-router-dom';
import './App.css';
import Nav from './components/Nav/Nav'
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import routes from './routes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {routes}        
      </div>
    );
  }
}

export default App;
