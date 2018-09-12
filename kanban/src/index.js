import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Authentication, Main, ClassRoom } from './component';
import './index.css';

ReactDOM.render(
    <Router>
      <Switch>
      <Route exact path="/" component={Authentication}/>
      <Route path="/main" component={Main}/>
      <Route path="/classroom" component={ClassRoom}/>
      </Switch>
  </Router>, document.getElementById('root'));
