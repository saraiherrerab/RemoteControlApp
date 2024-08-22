import React from 'react';
import "./Button.css";

export interface ButtonProps {
  buttonText: string;
}

const MyButton: React.FC<ButtonProps> = ({ buttonText }) => {
  const handleClick = () => {
    console.log('¡Botón clickeado!');
  };

  return (
    <div className="button-container">
      <button onClick={handleClick}>{buttonText}</button>
    </div>
    
  );
};

export default MyButton;

