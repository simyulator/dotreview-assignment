import React, { useState, useEffect } from 'react';
import SearchWidget from '../../components/SearchWidget/SearchWidget';
import './Layout.css';
import ProductsList from '../../components/ProductsList/ProductsList';
import axios from 'axios';
import Spinner from '../../components/Spinner/Spinner';

const Layout = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData(searchTerm);
  }, []);

  const getData = (searchTerm) => {
    setLoading(true);
    axios
      .get(`http://localhost:9000/api/v1/search?query=${searchTerm}`)
      .then((res) => {
        // console.log(res.data[0].name.toLowerCase());
        setProductData(res.data);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const searchTermHandler = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
  };

  const searchClickedHandler = () => {
    getData(searchTerm);
  };

  const productsList = (
    <ProductsList searchTerm={searchTerm} productData={productData} />
  );

  const renderData = loading ? <Spinner /> : productsList;

  return (
    <div className='layout'>
      <SearchWidget
        changed={searchTermHandler}
        clicked={searchClickedHandler}
      />
      {renderData}
    </div>
  );
};
export default Layout;
