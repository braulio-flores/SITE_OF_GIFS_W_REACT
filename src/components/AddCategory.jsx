import React, { useState } from "react";
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {      
      setCategories((items) => [inputValue, ...items]);
      setInputValue('');
      // EL SET CATEGORIES RECIBE O EL NUEVO ELEMENTO O UNA FUNCION DE ASIGNACION CON LO QUE TIENE
      // SE LLAMA COMO UN CALLBACK
    }else{
        alert('No en blanco');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Search and add category </label>
      <input type="text" value={ inputValue } onChange={handleInputChange} />
      <button> Add </button>
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
