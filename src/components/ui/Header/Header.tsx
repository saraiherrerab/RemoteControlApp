import React from 'react';
import './Header.css';

export interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header: React.FC<HeaderProps> = ({title, subtitle}) =>{
      
    return(
        <div>
            <h1 className="header-title">{title}</h1>
            <h2 className="header-subtitle">{subtitle}</h2>
        </div>
        
    )

}

export default Header;