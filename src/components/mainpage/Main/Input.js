import React from 'react'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



export default function Input({setSearch, setPageNumber}) {


    const [inputValue, setInputValue] = useState('');


    useEffect(() => {
      const storedValue = localStorage.getItem('inputValue');
      if (storedValue) {
        setInputValue(storedValue);
        setSearch(storedValue);
      }
    }, [setSearch]);
  

    const handleInputChange = (event) => {
      const newValue = event.target.value;
      setInputValue(newValue);
      localStorage.setItem('inputValue', newValue);
      setSearch(newValue); // передаємо наверх щоб потім це попало в query
      setPageNumber(1) // коли ми засетали setSearch ми також хочемо щоб була сторінка 1
    }




    return (
        <div className="searchbar">
          <FontAwesomeIcon icon={faSearch} className='lens' />
          <input
            value={inputValue} // що буде відображатить в полі
            onChange={handleInputChange} // ф-я яка каже що робити коли щось вводимо в поле
            type="text"
            placeholder="Filter by name..."        
          />
        </div>
      );
}
