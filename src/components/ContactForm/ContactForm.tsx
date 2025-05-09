import React from 'react';
import './ContactForm.css';

function ContactForm() {
    return (
    <div className='container'>
    <form >
        <input type="text" id="name" name="Full Name" placeholder='Full Name *' required />

        <input type="email" id="email" name="email" placeholder='Email Address *' required />

        <input type="tel" name="phone" id="phone" placeholder='Phone Number (optional)' />

        <input type="text" name="comapny" id="company" placeholder='Company Name (optional)'/>

        <p>We will contact you ASAP or you can <a href='#'>schedule a call</a></p>

        <textarea id="message" name="message" placeholder='How can we help you? *' required></textarea>

        <button type="submit">Send</button>
    </form>
    </div>
    );
}

export default ContactForm;