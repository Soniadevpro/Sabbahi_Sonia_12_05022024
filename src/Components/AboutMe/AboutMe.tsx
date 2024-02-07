import React from 'react';
import '../AboutMe/AboutMe.scss'
const AboutMe = () => {
    return (
        <div>
            <div className='aboutme'>
<div className="title-aboutme">

            <h2>About Me</h2>
</div>
            <h3>Développeuse Front-end</h3>
            <p className="description">Passionnée d'informatique, de jeux vidéos et de graphisme, je suis une développeuse front-end, en pleine reconversion professionnelle, ayant suivi une formation chez OpenClassrooms pour transformer ma passion en carrière.</p>
            <img src="" alt="" className="profil-photo" />
            </div>

            <div className="skills">
            <h2>SKILLS</h2>
            <div className='Competences'>

            <h3>Technologies web</h3>
            <h3>Gestion de projet et Méthodes Agiles</h3>
            <h3>Design</h3>
            </div>
            </div>

        </div>
    );
};

export default AboutMe;