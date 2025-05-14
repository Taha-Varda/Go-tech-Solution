import React from 'react';
import { Link, To } from 'react-router-dom';

function YellowBtn(props: { href: To; text: string | React.ReactNode}) {
    return (
        <Link to={props.href} className='cta-button btn-yellow'>{props.text}</Link>         
    );
}

export default YellowBtn;