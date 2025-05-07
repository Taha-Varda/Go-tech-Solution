import React from 'react';
import '../css/WhiteIconBox.css'; // Import the CSS file for styling

function WhiteIconBox(props) {
    return (
        <div className="icon-box">
            <img src={props.icon} alt="Icon" className='icon'/>
            <div className="icon-box-content">
                <h2>{props.title}</h2>
                <p className='para17'>{props.description}</p>
            </div>
        </div>
    );
}

export default WhiteIconBox;