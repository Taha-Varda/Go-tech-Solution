import React from 'react';
import '../assets/css/contact.css';
import ContactForm from '../components/ContactForm/ContactForm';
import SubHero from '../components/SubHero/SubHero';
import ContactDetails from '../components/ContactDetails/ContactDetails';

function Contact() {
    return (
        <section className='contact'>
            <SubHero />
            <ContactDetails />
            <ContactForm />
        </section>
    );
}

export default Contact;