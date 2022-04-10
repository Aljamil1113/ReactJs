import React, { Component } from 'react';
import classes from './App.module.css';

class BlogCard extends Component {
    state = {
      LikeCount: 0
    }

    onLikeBtnClick = () => {
      this.setState((prevState, prevProp) => {
        return {LikeCount: prevState.LikeCount + 1}
      });
    }

    render () {
      return (
        <div className={classes.blogCard}>
        <h3>Full Name: {this.props.fullname} </h3>
         <p> Age:  {this.props.age}</p>
         <p>Job: {this.props.job}</p>

          <p>Count: <span className={classes.LikeCount}>{this.state.LikeCount}</span></p>
         <button onClick={this.onLikeBtnClick}>Like</button>
      </div>
    );
    }
}

export default BlogCard;