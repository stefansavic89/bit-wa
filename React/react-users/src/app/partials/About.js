import React from "react";
import Header from'./Header';
import Footer from './Footer';

const About = (props) => {
    return(
        <React.Fragment>
            <Header title= "BIT People" />
            <div className="container">
    
    <div>
        <h1>About</h1>
        <p> Lorem ipsum dolor</p>
        <h2>What we do</h2>
        <p> Lorem ipsum dolor</p>
    </div>
    </div>
    <Footer />
    </React.Fragment>
    )}

    export default About;

