import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom"
import About from './partials/About';
import Home from './partials/Home';
import Footer from './partials/footer';

const App = (props) =>{
    return (
      <React.Fragment>
          <Switch>
            <Route exact path='/home' component={Home} />
            <Redirect from="/" to="/home"/>
            <Route path='/about' component={About} />
          </Switch>
          <Footer />
      </React.Fragment>
    );
  }


export default App;
