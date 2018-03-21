import React, { Component } from 'react';
import '../App.css';
import Header from './partials/header';
import UserList from './users/userList';
import UserGrid from './users/userGrid';
import Footer from './partials/footer.js';
import {userService} from '../services/UserService';

class App extends Component {
constructor(props){
  super(props);

  this.state = {
    users: []
  }
}

  componentDidMount(){
    this.fetchUsers();

    this.setState({
      showGrid: true
    })
  }
  
  fetchUsers = () => {
    userService.fetchUser()
    .then(userData =>{
      this.setState({
        users: userData,
      })    
    })
  }

  updateClick = (event) => {
    this.fetchUsers();
  }

  handleClick = (event) => {
   this.setState((prevState) => {
     return {
       showGrid: !prevState.showGrid

     }
   }) 
  }

  render() {
    return (
      <div className="App">
        <Header title="Bit Persons" handleClick={this.handleClick} updateClick={this.updateClick} showList={this.state.showGrid}/>
        <div className="container">
          {this.state.showGrid ? <UserGrid items={this.state.users}/> : <UserList items={this.state.users}/>}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
