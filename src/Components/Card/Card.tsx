import React from 'react';
import '../Card/Card.scss'
import myGif from '../../icons8-figma.gif'
const Card = () => {
    return (
        <div>
            <section className="card">
                <div className="card-container"></div>
                <div className="card-container"> <p> Kasa - Application de recherche d'hébergement - Technologies utilisés : React.js - SASS</p></div>
                <div className="card-container">  <img src={myGif} alt="Figma" /></div>
            </section>
        </div>
    );
};

export default Card;