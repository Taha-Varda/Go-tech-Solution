import React from 'react';
import '../assets/css/contact.css';
import ContactForm from '../components/ContactForm/ContactForm';
import SubHero from '../components/SubHero/SubHero';
import ContactDetails from '../components/ContactDetails/ContactDetails';

const Contact: React.FC = () => {
    return (
        <section className='contact'>
            <SubHero SubHeroTitle="CONTACT US" content="Our talented team of experts is here to serve you with the excellence that you need for the exponential growth of your business. We custom-tailor digital solutions based on your unique needs and preferences for you to strive in the competitive digital landscape." btnText="REQUEST CONSULTATION"/>
            <ContactDetails />
            <ContactForm />
        </section>
    );
}

export default Contact;