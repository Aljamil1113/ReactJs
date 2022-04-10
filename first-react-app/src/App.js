import logo from './logo.svg';
// import './App.css';
import classes from './App.module.css';
import BlogCard from './BlogCard';
import { Component } from 'react';

class App extends Component {

  state = {
    showBlogs: true
  }

 firstName = 'John ';
 lastName = 'Wick';
 age = 35;
 job = 'Team Principal';

 getFullName = (firstName, lastName) => {
    return `${this.firstName}, ${this.lastName}`
  }

 inputPlaceholder = 'Enter your details';

 detailsInputbox = <input placeholder={this.inputPlaceholder} autocomplete />;

 mArr = [1, 2, 3, 4];

 mObj = {
      firstName: 'Toto',
      lastName: 'Obj',
      age: 26,
      job: 'Hacker',
      position: 0
  };

  showBlogCard =  <div className={classes.blogCard}>
  <BlogCard  fullname={this.mObj.firstName + ' ' + this.mObj.lastName} age = {this.mObj.age} job={this.mObj.job} 
  position={this.mObj.position} onLikeBtnClick={this.onLikeBtnClick}></BlogCard>
 </div>


  
  onHideBtnClick = () => {
    // alert('Button Clicked');
    //this.setState({showBlogs: false});

    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    });

    console.log(this.state.showBlogs);
  }

  render() {

    return (
      <div className={classes.App}> 
       <button onClick={this.onHideBtnClick}>Hide Lists</button>
        <br></br>
        {
          this.state.showBlogs ? this.showBlogCard: null
        }
      </div>
    );

  }

}

export default App;
