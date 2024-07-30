import React from 'react';
import './DefaultMessages.css';

export interface DefaultMessagesProps {
    icon: string;
    defaultmessageText: string;
  }


const DefaultMessages: React.FC<DefaultMessagesProps> = ({ icon, defaultmessageText }) => {
    return (
      <div className="messageShape">
        <div className="icon">
          <img src={icon} alt="Icono" />
        </div>
        <p className="messageText">{defaultmessageText}</p>
      </div>
    );
}

export default DefaultMessages;