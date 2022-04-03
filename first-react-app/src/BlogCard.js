import React from 'react';

const BlogCard = (properties) => {
    return (
        <div className="App">
        <div className="blogCard">
        <h3>Full Name: {properties.fullname} </h3>
         <p> Age:  {properties.age}</p>
         <p>Job: {properties.job}</p>
        </div>
      </div>
    )
}

export default BlogCard;