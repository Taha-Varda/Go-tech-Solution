import React from 'react';
import { Link } from 'react-router-dom';

function YellowBtn(props) {
    return (
        <Link to={props.href} className='cta-button btn-yellow'>{props.text}</Link>         
    );
}

export default YellowBtn;