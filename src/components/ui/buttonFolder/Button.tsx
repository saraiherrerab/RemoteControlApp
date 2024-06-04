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
    <button onClick={handleClick}>{buttonText}</button>
  );
};

export default MyButton;

