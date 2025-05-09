import React from 'react';
import '../css/WhiteIconBox.css'; // Import the CSS file for styling

interface WhiteIconBoxProps {
  icon: string;
  title: string;
  description: string;
}

const WhiteIconBox: React.FC<WhiteIconBoxProps> = ({ icon, title, description }) => {
    return (
        <div className="icon-box">
            <img src={icon} alt="Icon" className='icon'/>
            <div className="icon-box-content">
                <h2>{title}</h2>
                <p className='para17'>{description}</p>
            </div>
        </div>
    );
}

export default WhiteIconBox;