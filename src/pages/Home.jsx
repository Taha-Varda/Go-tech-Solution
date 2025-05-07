import React from 'react';
import heroImage from '../assets/images/hero-image.svg';
import '../assets/css/Home.css'; 
import YellowBtn from '../assets/elements/YellowBtn' 
import LogoSlider from '../assets/elements/LogoSlider';
import Counter from '../assets/elements/Counter';
import WhiteIconBox from '../assets/elements/WhiteIconBox'; 

function Home() {
    return (
    <>
    {/* Hero Section */}
        <section className="home-section container">
            <div className="home-content half-width">
                <h1>SOFTWARE DEVELOPMENT COMPANY​</h1><br/>
                <p className='para17'>We take pride in announcing that we are the leading Software Development Company in Udaipur providing comprehensive IT Solutions to your Digital needs.</p>
                <br/>
                <br/>
                <YellowBtn href="/contact" text="GET IN TOUCH"/>

                <div className="counters">
                    <Counter counterNumber="200+" counterTitle="Projects" />
                    <Counter counterNumber="5+" counterTitle="Years of Experience" />
                    <Counter counterNumber="70+" counterTitle="Happy Clients" />
                </div>
            </div>

            <div className="home-image half-width">
                <img src={heroImage} alt="Home" />
            </div>

            <div className="client-slider">
                <LogoSlider />
            </div>
        </section>

        {/* Service Section */}
        <section className="service-section container">
            <div className="service-content">
                <h2 className='section-heading'>OUR SERVICES</h2><br/>          
            </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section container">
            <div className="cta-content">
                <h2 className='section-heading'>READY TO START YOUR DIGITAL TRANSFORMATION JOURNEY?</h2><br/>
                <p className='para17'>With our innovative and industry-proven services, we’ll help you unlock new growth opportunities.</p>
            </div>
            <YellowBtn href="/contact" text="GET INFO"/>
        </section>

        {/* About Us Section */}
        <section className="about-section container">
            <div className="about-content half-width">
                <h2 className='section-heading'>ABOUT US</h2><br/>
                <div className='dark-counter'>
                    <Counter counterNumber="200+" counterTitle="Successful projects" />
                    <Counter counterNumber="7" counterTitle="out of 9 clients were satisfied with Go InfoTech" />
                    <Counter counterNumber="4+" counterTitle="years in business" />  
                    <Counter counterNumber="100+" counterTitle="qualified specialists worldwide" /> 
                    <Counter counterNumber="7" counterTitle="out of 9 clients were satisfied with Go InfoTech" />
                    <Counter counterNumber="4+" counterTitle="years in business" />  
                </div>
            </div>
            <div className="why-us-content half-width">
                <h2 className='section-heading'>why choose US</h2><br/>
                <div className='icon-boxes'>
                    <WhiteIconBox icon='' title="HIGH SATISFACTION RATES" description="Empower your business with promising results and IT solutions from professionals who are dedicated to serving you right."/>
                    <WhiteIconBox icon='' title="GLOBAL COVERAGE ACROSS TIME ZONES" description="We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime."/>
                    <WhiteIconBox icon='' title="WIDE RANGE OF SERVICES" description="Offering software development services, including custom software development, mobile app development, web application development, software maintenance and support, and more."/>
                </div>
            </div>
        </section>

        {/* Tech Stack Section */}
        <section className="service-section container">
            <div className="service-content">
                <h2 className='section-heading'>TECH STACK</h2><br/>          
            </div>
        </section>
    </>
    );
}

export default Home;