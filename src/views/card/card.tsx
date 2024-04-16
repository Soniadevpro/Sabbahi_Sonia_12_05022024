import kasaPic from '../../assets/Kasa.webp';
import sophiaPic from '../../assets/SophiaB.webp';
import argetnPics from '../../assets/Argentbank.webp';
import oc from "../../assets/logoOc.jpg";
import mikecodeur from "../../assets/mikeform.png";


import js from "../../assets/icon/icons8-js.svg"
import react from "../../assets/icon/icon-react.svg"
import redux from "../../assets/icon/icons8-redux.svg"





function Card() {
  return (
    <div className='container-card' id='projects-section'>
      <h3>Projets</h3>
      <div className="position-block">
        <figure className="image-block">
          <h1>Sophia Bluel Architecte</h1>
          <img src={sophiaPic} alt="" />
          <figcaption>
            <h2>Plus d'informations</h2>
            <p>Ce projet m'a initié à la création de site dynamique en Javascript, à la création d'un système de connexion, à manipuler une API, ajouter et supprimer des éléments dynamiquement.</p>
            <div className="container-link-img">
            <a href="https://github.com/Soniadevpro/Sabbahi_Sonia_6_04102023.git" target="_blank" rel="noopener noreferrer">Github</a>
            <img src={js} alt="javascript"/>

            </div>
         
          </figcaption>
        </figure>
        <figure className="image-block">
          <h1>KASA</h1>
          <img src={kasaPic} alt="" />
          <figcaption>
            <h2>Plus d'informations</h2>
            <p>L'objectif de ce projet était de faire passer l'application anciennement en ASP.NET en React.js. Apprendre à utiliser les hooks, les composants, les props, et donner du style avec le préprocesseur SASS.</p>
            <div className="container-link-img">
            <a href="https://github.com/Soniadevpro/Sabbahi_Sonia_8_05122023.git" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://kasa-soniadevpro.netlify.app/" target="_blank" rel="noopener noreferrer">Lien vers le projet</a>
            <img src={react} alt="javascript" />

            </div>
          </figcaption>
        </figure>
        <figure className="image-block">
          <h1>ARGENT BANK Application bancaire</h1>
          <img src={argetnPics} alt="" />
          <figcaption>
            <h2>Plus d'informations</h2>
            <p>Nouvelle application bancaire sur le marché, Argent Bank est une initiation à Redux avec React. L'objectif était de créer un système de connexion/déconnexion en passant par le store de Redux.</p>
            <div className="container-link-img">
            <a href="https://github.com/Soniadevpro/Sabbahi_Sonia_11_15022024.git" target="_blank" rel="noopener noreferrer">Github</a>
            <img src={react} alt="react" />
            <img src={redux} alt="redux" />

            </div>
          </figcaption>
        </figure>
      </div>

      <div className="courses-container" id='courses-section'>
        <h3>Formations</h3>
        <div className="position-block">
          <figure className="image-block-courses">
            <h1>MIKE CODEUR</h1>
            <img src={mikecodeur} alt="" />
            <figcaption>
              <h2>Plus d'informations</h2>
              <p>Expert React - Typescript 🚀</p>
              <div className="container-link-img">

              <a href="https://www.mikecodeur.com/formations/"target="_blank" rel="noopener noreferrer">La formation</a>
              </div>
            </figcaption>
          </figure>
          <figure className="image-block-courses">
            <h1>OPENCLASSROOMS </h1>
            <img src={oc} alt="" className='oc'/>
            <figcaption>
              <h2>Plus d'informations</h2>
              <p>Titre RNCP de niveau 5 - Bac+2 💻</p>
              <div className="container-link-img">

              <a href="https://openclassrooms.com/fr/"target="_blank" rel="noopener noreferrer">La formation</a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Card;

