import React from 'react';
import '../assets/css/About.css'; 
import SubHero from '../components/SubHero/SubHero';
import Counter from '../assets/elements/Counter';
import LogoSlider from '../assets/elements/LogoSlider';
import WhiteIconBox from '../assets/elements/WhiteIconBox'; 
import HorizontalTab from '../components/HorizontalTab/HorizontalTab';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactDetails from '../components/ContactDetails/ContactDetails';

interface ServiceTab {
  title: string;
  icon: string;
  content: React.ReactNode;
}


const About: React.FC = () =>{

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

    return (
        <>
        <section className='about-hero'>
            <SubHero SubHeroTitle="EXPERIENCE EXCELLENCE WITH GO INFOTECH" content="Excel Your Business with Custom Software Development Company in Udaipur" btnText="contact us"/>
        </section>
        <section className='about-us container'>
            <h2 className='section-heading'>ABOUT Go-tech Solution</h2>
            <div className='half-width'>
                <p className='para17'>We are a leading Custom Software Development Company in Udaipur providing functional and efficient software solutions that will enhance your visibility in the intricate tapestry of digitalization. We focus on elevating the user experience by providing exponential services. As a well-known Digital Marketing Company in Udaipur, we excel at delivering exponential services that will help users engage with your website and further the exponential growth of your business. We incorporate meticulously strategized IT solutions, along with SEO Services in Udaipur. At Go InfoTech Solution, a trusted Software Development company in Udaipur, be prepared to experience excellence with our team of skilled professionals who are dedicated to driving competitive advantages for your business by crafting user-friendly interfaces backed by data-driven UX strategies. 
                <br/><br/>
                As a prominent Web Development company in Udaipur, we believe in crafting an effective software solution that goes beyond mere aesthetics, seamlessly integrating functionality with an elevated user experience. Our talented team of developers, designers, content writers, and UX specialists work closely to create intuitive interfaces that engage users and drive meaningful interactions.</p>
            </div><hr/>
            <div className='blue-counter half-width'>
                <Counter counterNumber="30+" counterTitle="projects delivered successfully" />
                <Counter counterNumber="80+" counterTitle="specialists globally" />
                <Counter counterNumber="8+" counterTitle="years expertise in business" />  
                <Counter counterNumber="35%" counterTitle="of clients request additional services within 3 months of collaboration" /> 
                <Counter counterNumber="7/9" counterTitle="clients were willing to recommend Go InfoTech" />  
                <Counter counterNumber="60+" counterTitle="verified reviews on Google" />
            </div>
        </section>

        <section className='container'>
            <LogoSlider/>
        </section>

        {/* Service Section */}
        <section className="service-section container">
            <div className="service-content">
                <h2 className='section-heading'>OUR SERVICES</h2><br/>        
                <HorizontalTab tabs={serviceTabs} />        
            </div>
        </section>

        <section className='container about-why-us'>
            <h2 className='section-heading'>WHY CHOOSE US</h2>
                <div className='icon-boxes'>
                    <WhiteIconBox icon='' title="HIGH SATISFACTION RATES" description="Empower your business with promising results and IT solutions from professionals who are dedicated to serving you right."/>
                    <WhiteIconBox icon='' title="GLOBAL COVERAGE ACROSS TIME ZONES" description="We are available 24/7 at your service as we operate across 4 different time zones, which is why we ensure seamless communication. Our team at Go InfoTech is available at your service anytime."/>
                    <WhiteIconBox icon='' title="WIDE RANGE OF SERVICES" description="Offering software development services, including custom software development, mobile app development, web application development, software maintenance and support, and more."/>
                </div>
        </section> 

        {/* Contact Details */}
        <ContactDetails />

        {/* <!-- Contact Section --> */}
        <ContactForm />
        </>
    );
}

export default About;