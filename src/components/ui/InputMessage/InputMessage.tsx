import React, { useState } from 'react';
import "./InputMessage.css";

export interface InputMessageProps {
  placeholderText: string;
  idInputMessage?: string;
}

const InputMessage: React.FC<InputMessageProps> = ({ placeholderText, idInputMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    console.log('Valor del input:', event.target.value);
  };

  return (
    <div>
      <input 
        className="inputMessage"
        id={idInputMessage}
        value={inputValue} 
        onChange={handleChange} 
        placeholder={placeholderText} 
      />
    </div>
  );
};

export default InputMessage;
