import React from 'react';
import BlogPost from './BlogPost';
import PropTypes from "prop-types";

const BlogList = (props) =>{
    return (
        <div>
            {props.items.map(blogElement => {
                return <BlogPost title={blogElement.title} body={blogElement.body} key={blogElement.id} />
            })}
        </div>
    )
}

BlogList.propTypes = {
    items: PropTypes.array.isRequired
}

export default BlogList;