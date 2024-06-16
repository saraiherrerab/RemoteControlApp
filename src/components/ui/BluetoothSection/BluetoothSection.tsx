import React, { useState } from 'react';
import './BluetoothSection.css';

export interface BluetoothSectionProps {
  bluetoothText: string;
}

const BluetoothSection: React.FC<BluetoothSectionProps> = ({ bluetoothText }) => {
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(false);

  const handleBluetoothToggle = () => {
    setIsBluetoothEnabled(!isBluetoothEnabled);
  };

  return (
    <div className="bluetooth-section">
      <div className="bluetooth-text">{bluetoothText}</div>
      <div className="switch-button">
        <input
          type="checkbox"
          name="switch-button"
          id="switch-label"
          className="switch-button__checkbox"
          checked={isBluetoothEnabled}
          onChange={handleBluetoothToggle}
        />
        <label htmlFor="switch-label" className="switch-button__label"></label>
      </div>
    </div>
  );
};

export default BluetoothSection;

