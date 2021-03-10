import React from 'react';
import './ProductCard.css';

const ProductCard = (props) => {
  return (
    <div className='product-card'>
      <div className='product-img'>
        <img src={props.imgLink} alt='' />
      </div>

      <h2>{props.title}</h2>
      <span className='product-card-price'>{props.price}</span>
    </div>
  );
};

export default ProductCard;
