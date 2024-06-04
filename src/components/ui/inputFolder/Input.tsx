import React, { useState } from 'react';
import "./Input.css";

export interface InputProps {
  placeholderText: string;
}

const MyInput: React.FC<InputProps> = ({ placeholderText }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log('Valor del input:', event.target.value);
  };

  return (
    <input 
      value={inputValue} 
      onChange={handleChange} 
      placeholder={placeholderText} 
    />
  );
};

export default MyInput;
