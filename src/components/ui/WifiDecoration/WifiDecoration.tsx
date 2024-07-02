import React from 'react';
import './WifiDecoration.css';

export interface WifiDecorationProps {
  texto: string;
  imagen: string;
}

const WifiDecoration: React.FC<WifiDecorationProps> = ({ texto, imagen }) => {
  return (
    <div className="wifi-section">
      <div className="wifi-icon">
        <img src={imagen} alt="Icon" />
      </div>
      <div className="wifi-text-container">
          <p className="wifi-text">{texto}</p>
      </div>
      
    </div>
  );
}

export default WifiDecoration;
