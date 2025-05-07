import React from 'react';
import './ContactDetails.css'; // Adjust the path as necessary
import SocialIcons from '../../assets/elements/SocialIcons';
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapEmbed from '../../assets/elements/GoogleMapEmbed';


function ContactDetails() {
    return (
        <div className='container contact-details'>   
            <div className='half-width'>
                <h2 className='section-heading'>TELL US ABOUT YOUR NEEDS</h2>
                <SocialIcons/>
                <GoogleMapEmbed />  
            </div>
            <div className='half-width'>
                <p className='para17'>Just fill out the form or contact us via email or phone:</p>
                <ul className='contact-list'>
                    <li className='contact-list-item'>
                        <IoMdMail />
                        <a href="mailto:projects@go-techsolution.com:">projects@go-techsolution.com</a>
                    </li>
                    <li className='contact-list-item'>
                        <IoMdMail />
                        <a href="mailto:career@go-techsolution.com:">careerR@go-techsolution.com</a>
                    </li>
                    <li className='contact-list-item'>
                        <IoCall />
                        <a href="tel:+91-8769365375">+91-8769365375</a>
                    </li>
                    <li className='contact-list-item'>
                        <FaMapMarkerAlt />
                        <a href="#">515-517, 5th floor, Amrit Shree, University Road,
                        Udaipur, Rajasthan 313001</a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default ContactDetails;