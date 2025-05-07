import React from 'react';
import { FaFacebookF } from 'react-icons/fa';

function SocialIcons() {
    return (
        <div className='social-icons'>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                <FaFacebookF className='social-icon' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                <img src='/images/instagram.png' alt='Instagram' className='social-icon' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                <img src='/images/linkedin.png' alt='LinkedIn' className='social-icon' />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <img src='/images/twitter.png' alt='Twitter' className='social-icon' />
            </a>
        </div>
    );
}

export default SocialIcons;