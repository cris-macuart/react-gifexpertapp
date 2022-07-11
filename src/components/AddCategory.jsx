import React, { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {
  const [inputValue, setInputValue] = useState('');

  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  const manejadorSubmit = (e) => {
    e.preventDefault();
    if(inputValue.trim().length > 2){
      setCategorias((c) => [inputValue ,...c]);
      setInputValue('')
    }
  };


  return (
    <form onSubmit={manejadorSubmit}>
      <input type="text" value={inputValue} onChange={inputChange} />
    </form>
  );
};

AddCategory.propTypes ={
  setCategorias: PropTypes.func.isRequired
}