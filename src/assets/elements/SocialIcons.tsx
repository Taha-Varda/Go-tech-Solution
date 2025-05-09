import React from 'react';
import { FaFacebookF, FaInstagram , FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function SocialIcons() {
    return (
        <div className='social-icons'>
            <a href='https://www.facebook.com/GoTechSolution05' target='_blank' rel='noopener noreferrer'>
                <FaFacebookF className='social-icon' />
            </a>
            <a href='https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fgotech_solution%2F&is_from_rle' target='_blank' rel='noopener noreferrer'>
                <FaInstagram className='social-icon' />
            </a>
            <a href='https://www.linkedin.com/company/go-techsolution5' target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn className='social-icon' />
            </a>
            <a href='https://www.youtube.com/@Gotechsolution' target='_blank' rel='noopener noreferrer'>
                <FaYoutube className='social-icon' />
            </a>
        </div>
    );
}

export default SocialIcons;