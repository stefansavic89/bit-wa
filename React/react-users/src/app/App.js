import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import About from './partials/About';
import Home from './partials/Home';
import Footer from './partials/Footer';
import Search from './partials/Search'

const App = (props) => {
	return (
		<React.Fragment>
			<Switch>
				<Redirect exact from='/' to='/home' />
				<Route path='/home' component={Home} />
				<Route path='/about' component={About} />
			</Switch>
		</React.Fragment>
	);
}


export default App;