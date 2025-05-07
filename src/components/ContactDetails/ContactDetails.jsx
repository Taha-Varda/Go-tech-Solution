import React from 'react';
import './ContactDetails.css'; // Adjust the path as necessary
import SocialIcons from '../../assets/elements/SocialIcons';

function ContactDetails() {
    return (
        <div className='container contact-details'>   
            <div className='half-width'>
                <h2 className='section-heading'>TELL US ABOUT YOUR NEEDS</h2>
                <SocialIcons/>
            </div>
            <div className='half-width'>
                <p className='para17'>Just fill out the form or contact us via email or phone:</p>
            </div>

        </div>
    );
}

export default ContactDetails;