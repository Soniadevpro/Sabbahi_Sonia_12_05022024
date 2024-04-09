import React, { useState } from 'react';
import Modal from '../modal/modal'; // Assurez-vous que le chemin est correct

// Importation des images
import sophiaB from "../../assets/sophiabluel.png"
import kasa from "../../assets/kasa.png"
import argentbank from "../../assets/argentbank.png"
import mikeform from "../../assets/mikeform.png"
import logoOC from "../../assets/logo-OpenClassRooms-COM-du-SITE-WEB-9.jpg"

interface ModalContent {
  photoUrl: string;
  description: string;
}

const Card: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    photoUrl: '',
    description: ''
  });

  // Fonction pour ouvrir la modale avec le contenu spécifié
  const openModal = (photoUrl: string, description: string): void => {
    setModalContent({ photoUrl, description });
    setModalIsOpen(true);
  };

    return (
        <div>
            <section className="projects-container" id='projects-section'>
              <h3>Projects</h3>
              <div className="container">
                <div className="card">
                  <img src={sophiaB} alt="Sophia Bluel" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Portfolio - Sophia Bluel</h5>
                    <p className="card-text">Développer un portfolio d'architecte, en commençant par la page de présentation des travaux de celle-ci.</p>
                    <button onClick={() => openModal(sophiaB, "Ce projet m'a appris à créer une page web dynamique pour le site internet d'une architecte d'intérieur en utilisant JavaScript et en communiquant avec une API. Cela implique la gestion des événements utilisateurs et la manipulation des éléments du DOM avec JavaScript.  Il fallait créer également une page de connexion pour l'administrateur du site ainsi qu'une modale permettant d'uploader de nouveaux médias")} className="btn">More</button>
                  </div>
                </div>
                <div className="card">
                  <img src={kasa} alt="Umi" className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title">Kasa</h5>
                    <p className="card-text">l'entreprise Kasa hébergement entre particulier.</p>
                    <button onClick={() => openModal(kasa, "Le projet était basé sur la logique de présentation des données et les composants React. React Router a été utilisé pour configurer la navigation entre les différentes pages de l'application. Cela permet de comprendre comment gérer efficacement le routage dans une application web moderne. Le projet se concentrera exclusivement sur le développement front-end, en se basant sur les maquettes fournies et en utilisant des données simulées extraites d'un fichier JSON.")} className="btn">More</button>
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
              <h3>Courses</h3>
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


