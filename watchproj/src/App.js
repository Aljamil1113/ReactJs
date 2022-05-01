import React, { Component } from 'react';
import classes from './App.module.css';
import Topbar from './Topbar/Topbar';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductData from './utils/ProductData';

class App extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentPreviewImage: 'https://imgur.com/iOeUBV7.png',
    showHeartBeatSection: false,
    currentSelectedFeature: 0
  }

  onColorOptionClick = (pos) => {
    this.setState({currentPreviewImagePos: pos});
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Topbar></Topbar>
        </header>
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
           <ProductPreview currentPreviewImage={this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
           currentSelectedFeature={this.state.currentSelectedFeature}></ProductPreview>
          </div>
          <div className={classes.ProductData}>
            <ProductDetails data={this.state.productData} onColorOptionClick={this.onColorOptionClick} 
             currentPreviewImagePos={this.state.currentPreviewImagePos}
             currentSelectedFeature={this.state.currentSelectedFeature} onFeatureItemClick={this.onFeatureItemClick} >
            </ProductDetails>
          </div>
        </div>
      </div>
    );
  }
 
  
}

export default App;
