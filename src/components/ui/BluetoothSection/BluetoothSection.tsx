import React from 'react';
import './BluetoothSection.css';

const BluetoothSection: React.FC = () => {
  return (
    <div className="switch-button">
      <input type="checkbox" name="switch-button" id="switch-label" className="switch-button__checkbox" />
      <label htmlFor="switch-label" className="switch-button__label"></label>
    </div>
  );
}

export default BluetoothSection;
