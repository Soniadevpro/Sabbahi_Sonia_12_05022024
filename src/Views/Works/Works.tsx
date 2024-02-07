import React from 'react';
import '../Works/Works.scss'
import Card from '../../Components/Card/Card';
const Works = () => {
    return (
        <div>
         <section className="projects"><h2>Projects</h2></section>   
         <div className="filters">
        <h3>Tous</h3>
        <h3>Professionnels</h3>
        <h3>Formations</h3>
         </div>
         <Card/>
       

        </div>
    );
};

export default Works;