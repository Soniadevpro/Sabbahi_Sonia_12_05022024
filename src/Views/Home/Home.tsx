import React from 'react';
import Hero from '../../Components/Hero/Hero';
import Header from "../../Components/Header/Header";
import AboutMe from '../../Components/AboutMe/AboutMe';
import Works from '../Works/Works';

const Home = () => {
    return (
        <div>
        <Header/>
            <Hero/>
            <AboutMe/>
        <Works/>

        </div>
    );
};

export default Home;