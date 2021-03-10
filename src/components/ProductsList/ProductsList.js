import React, { useEffect, useState } from 'react';
import './ProductsList.css';
// import JSONDATA from '../../product-data.json';
import ProductCard from '../ProductCard/ProductCard';
import axios from 'axios';

const ProductsList = (props) => {
  // useEffect(() => {
  //   getData(props.searchTerm);
  // }, []);

  return (
    <div className='products-list'>
      {/* {productData
        .filter((val) => {
          if (props.searchTerm === '') {
            return val;
          } else if (
            val.name.toLowerCase().includes(props.searchTerm.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <ProductCard
              imgLink={val.image}
              title={val.name}
              price={val.price}
              key={key}
            />
          );
        })} */}

      {props.productData.map((val, key) => {
        return (
          <ProductCard
            imgLink={val.image}
            title={val.name}
            price={val.price}
            key={key}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
