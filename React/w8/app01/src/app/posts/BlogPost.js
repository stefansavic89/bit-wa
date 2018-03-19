import React from 'react';
import PropTypes from "prop-types";

const BlogPost = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}

BlogPost.propTypes = {
    title: PropTypes.string.isRequired, 
    body: PropTypes.string.isRequired
}

export default BlogPost;