import React from 'react';
import './SubHero.css';
import Counter from '../../assets/elements/Counter'; // Adjust the path as necessary
import YellowBtn from '../../assets/elements/YellowBtn'; // Adjust the path as necessary

const SubHero: React.FC = () =>  {
    return (
        <section className='subhero container'>
            <div className='subHeroContent half-width'>
                <h2 className='section-heading'>CONTACT US</h2>
                <p className='para17'>Our talented team of experts is here to serve you with the excellence that you need for the exponential growth of your business. We custom-tailor digital solutions based on your unique needs and preferences for you to strive in the competitive digital landscape.</p>
                <YellowBtn href="/contact" text="Request consultation"/>
            </div>  
            
            <div className='blue-counter half-width'>
                    <Counter counterNumber="200+" counterTitle="specialist globally" />
                    <Counter counterNumber="5" counterTitle="offices worldwide" />
                    <Counter counterNumber="7" counterTitle="different time-zones" />  
                    <Counter counterNumber="8+" counterTitle="years of expertise in business" /> 
            </div>       
        </section>
    );
}

export default SubHero;