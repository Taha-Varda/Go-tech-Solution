import React from 'react';
// Add type declaration for SVG imports
import heroImage from '../assets/images/hero-image.svg';
import '../assets/css/Home.css'; 
import YellowBtn from '../assets/elements/YellowBtn';
import LogoSlider from '../assets/elements/LogoSlider';
import Counter from '../assets/elements/Counter';
import WhiteIconBox from '../assets/elements/WhiteIconBox'; 
import HorizontalTab from '../components/HorizontalTab/HorizontalTab';
import VerticalTab from '../components/VerticalTab/VerticalTab';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactDetails from '../components/ContactDetails/ContactDetails';

// Define types for our data structures
interface ServiceTab {
  title: string;
  icon: string;
  content: React.ReactNode;
}

interface Logo {
  name: string;
  icon: string;
}

interface TabStats {
  title: string;
  items: string[];
}

interface TabData {
  title: string;
  description: string;
  stats: TabStats;
  cta: string;
  logos: Logo[];
}

const Home: React.FC = () => {
    const serviceTabs: ServiceTab[] = [
        {
        title: 'STAFF AUGMENTATION',
        icon: '',
        content: (
            <div className="tab-content">
            <h3>IT STAFF AUGMENTATION</h3>
            <p className='para17'>
                We are dedicated to providing you with highly skilled and experienced IT
                professionals who will help you focus on core aspects so that your business
                reaches new heights.
            </p>
            </div>
        ),
        },
        {
        title: 'IT CONSULTING',
        icon: '',
        content: (
            <div className="tab-content">
            <h3>COMMITTED TEAM</h3>
            <p className='para17'>
                Our team at Go Tech Solution is a living testament of expertise and knowledge
                who are committed to meeting your unique business needs.
            </p>
            </div>
        ),
        },
        {
        title: 'CUSTOM SOFTWARE DEVELOPMENT',
        icon: '',
        content: (
            <div className="tab-content">
            <h3>CUSTOM SOFTWARE DEVELOPMENT</h3>
            <p className='para17'>
                Our expert developers build tailored software solutions designed to meet your specific business requirements and challenges.
            </p>
            </div>
        ),
        },
        {
        title: 'INTELLIGENT AUTOMATION',
        icon: '',
        content: (
            <div className="tab-content">
            <h3>ON-DEMAND CTO</h3>
            <p className='para17'>
                We offer CTO services for strategic technological assistance so that your
                business reaches exponential heights without any overhead of hiring a full-time
                professional.
            </p>
            </div>
        ),
        },
        {
        title: 'MANAGED IT SERVICES',
        icon: '',
        content: (
            <div className="tab-content">
            <h3>MANAGED IT SERVICES</h3>
            <p className='para17'>
                Our comprehensive managed IT services provide ongoing support, maintenance, and monitoring to ensure your technology infrastructure runs smoothly.
            </p>
            </div>
        ),
        },
    ];

    // Vertical Tabs Data
    const tabsData: TabData[] = [
        {
          title: "FRONT-END DEVELOPMENT",
          description: "Empower your business with our expert front-end solutions focusing fundamentally on the smooth user experience and effectively handle your needs and preferences and aligning it to the industry's unique requirement.",
          stats: {
            title: "OUR FRONT-END DEPARTMENT HAS:",
            items: [
              "20+ Front-end developers;",
              "8 years of experience;",
              "4.8 rating on Google"
            ]
          },
          cta: "CONTACT US",
          logos: [
            { name: "Angular", icon: '' },
            { name: "React JS", icon: '' },
            { name: "Vue", icon: '' }
          ]
        },
        {
          title: "BACK-END DEVELOPMENT",
          description: "Robust back-end solutions built with scalability and performance in mind. Our team delivers secure, efficient, and reliable server-side applications tailored to your business needs.",
          stats: {
            title: "OUR BACK-END EXPERTISE:",
            items: [
              "15+ Back-end engineers;",
              "10 years of industry experience;",
              "99.9% uptime guarantee"
            ]
          },
          cta: "LEARN MORE",
          logos: [
            { name: "Node.js", icon: "/node-logo.svg" },
            { name: "Python", icon: "/python-logo.svg" },
            { name: "Java", icon: "/java-logo.svg" },
            { name: "PHP", icon: "/php-logo.svg" }
          ]
        },
        {
          title: "MOBILE APP DEVELOPMENT",
          description: "Create stunning mobile experiences with our dedicated app development team. We build native and cross-platform solutions that engage users and drive business growth.",
          stats: {
            title: "MOBILE DEVELOPMENT HIGHLIGHTS:",
            items: [
              "25+ Mobile developers;",
              "100+ apps launched;",
              "4.9 average app store rating"
            ]
          },
          cta: "VIEW PORTFOLIO",
          logos: [
            { name: "React Native", icon: "/react-native-logo.svg" },
            { name: "Flutter", icon: "/flutter-logo.svg" },
            { name: "Swift", icon: "/swift-logo.svg" }
          ]
        },
        {
          title: "UI/UX DESIGN",
          description: "Transform user experiences with our creative design team. We focus on intuitive interfaces and engaging visuals that capture your brand identity and delight your customers.",
          stats: {
            title: "DESIGN CAPABILITIES:",
            items: [
              "12+ UI/UX designers;",
              "Award-winning design team;",
              "Human-centered design approach"
            ]
          },
          cta: "REQUEST CONSULTATION",
          logos: [
            { name: "Figma", icon: "/figma-logo.svg" },
            { name: "Adobe XD", icon: "/xd-logo.svg" }
          ]
        }
      ];

    return (
    <>
    {/* Hero Section */}
        <section className="home-section container">
            <div className="home-content half-width">
                {/* eslint-disable-next-line no-irregular-whitespace */}
                <h1>SOFTWARE DEVELOPMENT COMPANY​</h1><br/>
                <p className='para17'>We take pride in announcing that we are the leading Software Development Company in Udaipur providing comprehensive IT Solutions to your Digital needs.</p>
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
                
                <HorizontalTab tabs={serviceTabs} />        
            </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section container">
            <div className="cta-content">
                <h2 className='section-heading'>READY TO START YOUR DIGITAL TRANSFORMATION JOURNEY?</h2><br/>
                <p className='para17'>With our innovative and industry-proven services, we'll help you unlock new growth opportunities.</p>
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
                <VerticalTab tabs={tabsData} />         
            </div>
        </section>

        {/* Contact Details */}
        <ContactDetails />

        {/* <!-- Contact Section --> */}
        <ContactForm />
    </>
    );
}

export default Home;