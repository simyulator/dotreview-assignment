import React from 'react';
import './SearchWidget.css';

const SearchWidget = (props) => {
  const enterPressedHandler = (event) => {
    // console.log(event.key);
    if (event.key === 'Enter') {
      props.clicked();
    }
  };

  return (
    <div className='search-widget'>
      <input
        placeholder='Enter product name'
        type='text'
        className='search-input'
        onChange={props.changed}
        onKeyPress={enterPressedHandler}
      />
      <button className='btn' onClick={props.clicked}>
        Search
      </button>
    </div>
  );
};

export default SearchWidget;
