import React, { Component } from 'react';
import { userService } from './../services/UserService';
import UserGrid from './UserGrid';
import UserCard from './UserCard';
import Header from './partials/Header';
import Footer from './partials/Footer';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = { users: [] }
  }

  componentDidMount() {
    userService.fetchUser()
      .then(userData => {
        this.setState({
          users: userData
        })
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Header title="BIT people" />

          {/* <div className="container">
          </div> */}
          <UserGrid users={this.state.users} />
          <Footer />
        </div>
        </React.Fragment>
     
    );
  }
}

export default App;
