import React, { Component } from 'react';
import './App.css';
import UserList from './UserList';
import User from './User';
import {Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <UserList />
          </div>
          <div className="col">
            <Route exact path = '/' render = {() => <h1>Select user</h1>} />
            <Route path = '/users/:user' component = {User} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
