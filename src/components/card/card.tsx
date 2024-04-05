import  { useState } from 'react';
import Modal from '../modal/modal'; 

import sophiaB from "../../assets/sophiabluel.png"
import kasa from "../../assets/kasa.png"
import argentbank from "../../assets/argentbank.png"
import mikeform from "../../assets/mikeform.png"
import logoOC from "../../assets/logo-OpenClassRooms-COM-du-SITE-WEB-9.jpg"



const Card = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ photoUrl: '', description: '' });

  const openModal = (photoUrl: string, description: string) => {
    setModalContent({ photoUrl, description });
    setModalIsOpen(true);
  };

    return (
        <div>
            <section className="projects-container" id='projects-section'>
<h3>Projects</h3>
{/* <div className="categories">
  <div className="filters"><span>Top</span></div>
  <div className="filters"><span>School</span></div>
  <div className="filters"><span>Personal</span></div>
</div> */}
<div className="container">
<div className="card">
                    <img src={sophiaB} alt="Sophia Bluel" className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">Portfolio - Sophia Bluel</h5>
                        <p className="card-text">Développer un portfolio d'architecte, en commençant par la page de présentation des travaux de celle-ci.</p>
                        <button onClick={() => openModal(sophiaB, "Développer un portfolio d'architecte, en commençant par la page de présentation des travaux de celle-ci.")} className="btn">More</button>
                    </div>
                </div>
  <div className="card">
    <img src={kasa} alt="Umi" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Kasa</h5>
      <p className="card-text">l'entreprise Kasa hébergement entre particulier.</p>
      <button onClick={() => openModal(kasa, "Description de Kasa...")} className="btn">More</button>
    </div>
  </div>
  <div className="card">
    <img src={argentbank} alt="Mori" className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">Argent Bank</h5>
      <p className="card-text"></p>
      <button onClick={() => openModal(argentbank, "Description de Argent Bank...")} className="btn">More</button>
    </div>
  </div>
</div>

</section>

<section className="projects-container" id= 'courses-section'>
        <h3 >Courses</h3>
        <div className="container">
          <div className="card">
            <img src={logoOC} alt="Sora" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Openclassrooms</h5>
              <p className="card-text">Développeur/Intégrateur web</p>
              <a href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer"className="btn">More</a>
            </div>
          </div>

          <div className="card">
            <img src={mikeform} alt="Umi" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mike-Codeur formation</h5>
              <p className="card-text">Expert React</p>
              <a href="https://www.mikecodeur.com/formations/"target="_blank" rel="noopener noreferrer" className="btn">More</a>
            </div>
          </div>
          <div className="card">
            {/* <img src={logoOC} alt="Mori" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Openclassrooms</h5>
              <p className="card-text">Développeur JavaScript - React</p>
              <a href="https://openclassrooms.com/fr/" target="_blank" rel="noopener noreferrer"className="btn">More</a>
            </div> */}
          </div>
        </div>
   
      </section>
      <Modal
                isOpen={modalIsOpen}
                photoUrl={modalContent.photoUrl}
                description={modalContent.description}
                onClose={() => setModalIsOpen(false)}
            />
        </div>
    );
};

export default Card;


