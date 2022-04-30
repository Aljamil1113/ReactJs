import React from 'react';
import classes from './ProductDetails.module.css';

const ProductDetails = (props) => {
    const colorOptions = props.data.colorOptions.map((item, pos) => {
    const classArr = [classes.ProductImage]
        if(pos === 0) {
            classArr.push(classes.SelectedProductImage);
        }
        return(
            <img key={pos} className={classArr.join(' ')} src={item.imageUrl} alt={item.styleName} ></img>
        );
    })
    const featureList = props.data.featureList.map((item, pos) => {
        const classArr = [classes.FeatureItem];
        if (pos === 0) {
            classArr.push(classes.SelectedFeatureItem);
        }
        return(
            <button className={[classes.FeatureItem, classes.SelectedFeatureItem].join(' ')}>{item}</button>
        )
    });
    return (
        <div>
            <h1 className={classes.ProductData}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>

            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
                {colorOptions}
                {/* <img className={[classes.ProductImage, classes.SelectedProductImage].join(' ')} src="https://imgur.com/PTgQlim.png"
                alt="Red Colored Watch"></img>
                <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png"
                alt="Blue Colored Watch"></img>
                <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png"
                alt="Purple Colored Watch"></img> */}
            </div>
          
            <h3 className={classes.SectionHeading}>Features</h3>
                <div>
                    {featureList}
                </div>

                <button className={classes.PrimaryButton}>Buy Now</button>
        </div>       
    )
}

export default ProductDetails;