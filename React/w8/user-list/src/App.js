import React, { Component } from 'react';
import './App.css';
import UserList from './App/posts/UserList';
import Header from './App/partials/Header';
import usersData from './App/usersData';



class App extends Component {
  render() {
    return (
      <UserList items={usersData} />
    );
  }
}

export default App;
