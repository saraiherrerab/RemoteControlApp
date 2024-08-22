import React, { useState } from 'react';
import './DefaultMessages.css';

export interface DefaultMessagesProps {
    icon: string;
    defaultmessageText: string;
    className?: string;
  }


  const DefaultMessages: React.FC<DefaultMessagesProps> = ({ icon, defaultmessageText, className }) => {
    const [isMessageEnabled, setIsMessageEnabled] = useState(false);
  
    const handleMessageToggle = () => {
      setIsMessageEnabled(!isMessageEnabled);
    };
  
    return (
      <div className={`messageShape-container ${className}`}>
        <div className={`messageShape ${isMessageEnabled ? 'messageShape-active' : ''}`}>
          <div className="icon">
            <img src={icon} alt="Icono" />
          </div>
          <p className="messageText">{defaultmessageText}</p>
          <div className="checkbox-button">
            <input
              type="checkbox"
              name="checkbox-button"
              id={`checkbox-${className}`}
              className="checkbox-button__message"
              checked={isMessageEnabled}
              onChange={handleMessageToggle}
            />
            <label htmlFor={`checkbox-${className}`} className="checkbox-button__label"></label>
          </div>
        </div>
      </div>
    );
  };
  
export default DefaultMessages;