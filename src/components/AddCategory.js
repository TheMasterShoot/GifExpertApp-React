import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function AddCategory({setCategories}) {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats]);
            setInputValue('');
        }
    }

  return (
    <form onSubmit = { handleSubmit }> 
        <input 
            placeholder='Busca tu Gif aquí'
            type="search" 
            value = { inputValue } 
            onChange={ handleInputChange }
        />
            
    </form>
  )
}

AddCategory.propType = {
    setCategories: PropTypes.func.isRequired
}
