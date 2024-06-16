import React from 'react';
import './Rectangulo.css';

export interface RectanguloProps {
  texto: string;
  imagen: string;
}

const Rectangulo: React.FC<RectanguloProps> = ({ texto, imagen }) => {
  return (
    <div className="rectangulo">
      <div className="circulo">
        <img src={imagen} alt="Icono" />
      </div>
      <p className="texto">{texto}</p>
    </div>
  );
}

export default Rectangulo;

