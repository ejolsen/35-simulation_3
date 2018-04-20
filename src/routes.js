import React from 'react';
import { Switch, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Post from './components/Post/Post';
import Form from './components/Form/Form';

export default (
  <Switch>
    <Route component={Auth} exact path='/' />
    <Route component={Dashboard} exact path='/dashboard' />
    <Route component={Post} path='/post/:postid' />
    <Route component={Form} path='/new' />
  </Switch>
);
  