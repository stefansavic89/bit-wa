import React from 'react';
import './App.css';
import BlogList from './posts/BlogList';
import Header from './partials/Header';
import postsData from './postData';

const App = (props) => {    
    return (
        <div>
            <Header title={props.title}/>
            <BlogList items={postsData}/>
        </div>
    )

}

export default App;