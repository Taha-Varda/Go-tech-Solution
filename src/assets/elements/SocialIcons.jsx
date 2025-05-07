import React from 'react';
import { FaFacebookF, FaInstagram , FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function SocialIcons() {
    return (
        <div className='social-icons'>
            <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                <FaFacebookF className='social-icon' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='social-icon' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn className='social-icon' />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
                <FaYoutube className='social-icon' />
            </a>
        </div>
    );
}

export default SocialIcons;