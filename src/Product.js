import React, { Component } from "react";
import "./style/Product.scss";
class Product extends Component {
  render() {
    const { imageUrl, description, regprice, selprice, onClick } = this.props;
    return (
      <div className="product-container" onClick={onClick}>
        <img className="hero-image" src={imageUrl} alt={description} />
        <div
          className="description-container"
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <div className="price-container">
          <div className="price-regular">{regprice}</div>
          <div className="price-selling">{selprice}</div>
        </div>
      </div>
    );
  }
}

export default Product;
