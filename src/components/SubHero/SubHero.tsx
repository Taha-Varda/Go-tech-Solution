import React from 'react';
import './SubHero.css';
import Counter from '../../assets/elements/Counter'; // Adjust the path as necessary
import YellowBtn from '../../assets/elements/YellowBtn'; // Adjust the path as necessary

const SubHero = (props: { 
  SubHeroTitle: string | React.ReactNode;
  content: string | React.ReactNode;
  btnText: string | React.ReactNode;
}) => {
    return (
        <section className='subhero container'>
            <div className='subHeroContent half-width'>
                <h2 className='section-heading'>{props.SubHeroTitle}</h2>
                <p className='para17'>{props.content}</p>
                <YellowBtn href="/contact" text={props.btnText}/>
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