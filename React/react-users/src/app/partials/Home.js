import React, { Component } from 'react';
import '../../App.css';
import UserList from '../users/userList';
import UserGrid from '../users/userGrid';
import { userService } from '../../services/UserService';
import Header from './Header';
import Footer from './Footer';
import Search from './Search';
import LoadingCube from './loadingCube';
import FailSearch from './FailSearch';
import User from '../../entities/User';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			showGrid: true,
			inputValue:" ",
			filteredUsers: [],
			message:false
		}
	}

	componentDidMount() {
		
		if(localStorage.getItem('showGrid')){
			this.setState({
				shoeGrid: JSON.parse(localStorage.getItem('showGrid'))
			})
		}
		if(localStorage.getItem("Users")){
			// const users = JSON.parse(localStorage.getItem("Users"))
			// const mappedUsers = users.map(user => new User(user));

			this.setState({
				users: JSON.parse(localStorage.getItem("Users")),
				filteredUsers: JSON.parse(localStorage.getItem("Users"))
			})
		}else{
			// this.fetchUsers();   ovo kad namestimo ovo gore xD
			this.fetchUsers();
		}

		}
		
	fetchUsers = () => {
		userService.fetchUser()
			.then(userData => {
				this.setState({
					users: userData,
					filteredUsers: userData,
					message:true
				})
				localStorage.setItem("Users",JSON.stringify(userData));
			})
	}

	updateClick = (event) => {
		this.fetchUsers();
	}

	handleClick = (event) => {
		localStorage.setItem('showGrid', !this.state.showGrid);
		this.setState((prevState) => {
			return {
				showGrid: !prevState.showGrid
			}
		})
	}

	handleChange=(event)=>{
		this.setState({
			filteredUsers:this.state.users.filter(el=>{
				return el.name.toLowerCase().indexOf(event.target.value) !== -1;
			}),
			inputValue:event.target.value
		})
	}

	

	render() {
		return (
			<div>
				<Header title="Bit Persons" handleClick={this.handleClick} updateClick={this.updateClick} showList={this.state.showGrid} />
				<div className="container">
			<Search handleChange={this.handleChange} inputValue={this.state.inputValue}/>
		
					{this.state.users.length === 0 ? <LoadingCube/> : ""}
					{((this.state.filteredUsers.length ===0) && (this.state.message === true)) ? <FailSearch/> : " "} 
					{this.state.showGrid ? <UserGrid items={this.state.filteredUsers} /> : <UserList items={this.state.filteredUsers} />}
                    
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;
