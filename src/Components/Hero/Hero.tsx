import React from 'react';
import "../Hero/Hero.scss"
import SocialNet from '../SocialNet/SocialNet';






const Hero = () => {
    return (
        
        <div>
            <div className="name"> 
            <h1>Sabbahi Sonia</h1>
    <div className="cv">
            <SocialNet/>
            <img src={`${process.env.PUBLIC_URL}/assets/images/linkedin-icon-2.svg`} alt="LinkedIn Icon" className='linkedin'/>
    </div>
            </div>
    
        </div>
  
    );
};

export default Hero;