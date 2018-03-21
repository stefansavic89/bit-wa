import React, { Component } from 'react';
import '../../App.css';
import UserList from '../users/userList';
import UserGrid from '../users/userGrid';
import { userService } from '../../services/UserService';
import Header from './header';


class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      showGrid: true
    }
  }

  componentDidMount() {
    this.fetchUsers();

    this.setState({
      showGrid: true
    })
  }

  fetchUsers = () => {
    userService.fetchUser()
      .then(userData => {
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
        <div>
            <Header title="Bit Persons" handleClick={this.handleClick} updateClick={this.updateClick} showList={this.state.showGrid} />
            <div className="container">
                {this.state.showGrid ? <UserGrid items={this.state.users} /> : <UserList items={this.state.users} />}
            </div>
        </div>
    );
  }
}

export default Home;
