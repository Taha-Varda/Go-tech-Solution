import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo-white.webp';

function Footer(props) {
    return (
    <>
        <section className="footer-section container">
            <div className='col-1 col'>
                <Link to="/" className='logo-link'>
                    <img src={logo} alt="Logo" className="logo" />
                </Link>  
                <p className='para17'>We are a leading software development company in Udaipur, India.</p>   
            </div>
            <div className='col-2 col'>
                <h2>Services</h2>
            </div>
            <div className='col-3 col'>
                <h2>Tech Stack</h2>
            </div>
            <div className='col-4 col'>
                <h2>Company</h2>
            </div>
            <div className='col-5 col'>
                <h2>Contacts</h2>
            </div>
        </section>
        
        <section className="footer-bottom-section container">
            <hr />
            <p>© 2025 Go-tech Solution Inc. All rights reserved.</p>
            <div className='social-icons'>
                <a href="https://www.facebook.com/GoTechSolution05" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fgotech_solution%2F&is_from_rle/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com/company/go-techsolution5" target="_blank" rel="noopener noreferrer">LinkedIn</a>  
                <a href="https://www.youtube.com/@Gotechsolution" target="_blank" rel="noopener noreferrer">YouTube</a>    
            </div>
        </section>
    </>
    );
}

export default Footer;