

import kasaPic from '../../assets/DALL·E 2024-04-10 22.24.44 - Imagine a sleek and engaging web interface for a peer-to-peer lodging platform, with a coral color scheme dominating the design. The homepage is desig.webp';
import sophiaPic from '../../assets/DALL·E 2024-04-10 22.26.49 - Envision a minimalist and elegant website design for an architect, featuring a color palette of green and beige. The homepage is structured to immedia.webp';
import argetnPics from '../../assets/DALL·E 2024-04-10 22.20.33 - Imagine a sleek and modern user interface for a banking application login screen. The primary color scheme is shades of green, symbolizing security an.webp';
import oc from "../../assets/logo-OpenClassRooms-COM-du-SITE-WEB-9.jpg"
import mikecodeur from "../../assets/mikeform.png"

function Card() {
  return (
    <>
    <div className='container-card'id='projects-section'>
  

<h3 >Projets</h3>
     <div className="position-block">
    <figure className="image-block">
      <h1>Sophia Bluel Architecte</h1>
      <img src={sophiaPic} alt="" />
      <figcaption>
        <h2>Plus d'informations</h2>
        <p>Ce projet m'a initié à la création de site dynamique en Javascript, à la création d'un système de connexion, à manipuler une API, ajouter et supprimer des éléments dynamiquement. </p>
        <button>Github</button>
        <button>Javascript</button>
      </figcaption>
    </figure>
      <figure className="image-block">
      <h1>KASA</h1>
      <img src={kasaPic} alt="" />
      <figcaption>
      <h2>Plus d'informations</h2>
        <p>L'objectif de ce projet était de faire passer l'application anciennement en ASP.NET en React.js. Apprendre à utiliser les hooks, les composants, les props, et donner du style avec le préprocesseur SASS.</p>
        <button >Github</button>
        <button >React</button>
        <button >SASS</button>
      </figcaption>
    </figure>
    <figure className="image-block">
      <h1 >ARGENT BANK Application bancaire</h1>
      <img src={argetnPics} alt="" />
      <figcaption>
      <h2 >Plus d'informations</h2>
        <p>Nouvelle application bancaire sur le marché, Argent Bank est une initiation à Redux avec React. L'objectif était de créer un système de connexion/déconnexion en passant par le store de Redux.</p>
        <button>Github</button>
        <button>React</button>
        <button>Redux</button>
      </figcaption>
    </figure>

     </div>
     <h3 >Formations</h3>
     <div className="position-block">
    <figure className="image-block-courses">
      <h1>MIKE CODEUR</h1>
      <img src={mikecodeur} alt="" />
      <figcaption>
        <h2>Plus d'informations</h2>
        <p>Expert React - Typescript </p>
        <button>Github</button>
        <button>Javascript</button>
      </figcaption>
    </figure>
      <figure className="image-block-courses">
      <h1>OPENCLASSROOMS</h1>
      <img src={oc} alt="" className='oc'/>
      <figcaption>
      <h2>Plus d'informations</h2>
        <p>Titre RNCP de niveau 5 - Bac+2.</p>
        <button>Informations sur openclassrooms</button>
       
      </figcaption>
    </figure>
 

     </div>
    </div>
    </>
  );
}

export default Card;

