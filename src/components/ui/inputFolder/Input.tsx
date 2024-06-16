import React, { useState } from 'react';
import "./Input.css";

export interface InputProps {
  placeholderText: string;
  tituloInput: string;
}

const MyInput: React.FC<InputProps> = ({ placeholderText, tituloInput }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log('Valor del input:', event.target.value);
  };

  return (
    <div>
      <p className="tituloInput">{tituloInput}</p>
      <input 
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholderText} 
      />
    </div>
  );
};

export default MyInput;
