import React, { Component } from 'react';
import classes from './App.module.css';
import Topbar from './Topbar';
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar></Topbar>
        </header>
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
           <ProductPreview></ProductPreview>
          </div>
          <div className={classes.ProductData}>
            <ProductDetails></ProductDetails>
          </div>
        </div>
      </div>
    );
  }
 
  
}

export default App;
