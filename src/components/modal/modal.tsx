import React from 'react';
import "./modal.scss"; // Assurez-vous que le chemin d'accès est correct
import lien from "../../assets/icon/icons8-lien-64.png"
import github from "../../assets/icon/icons8-github (1).svg"
import js from "../../assets/icon/icons8-javascript.svg"
import close from "../../assets/icon/icons8-croix.svg"


interface ModalProps {
  isOpen: boolean;
  photoUrl: string;
  description: string;
  onClose: () => void; // Fonction pour fermer la modale
}

const Modal: React.FC<ModalProps> = ({ isOpen, photoUrl, description, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <div className='container-close-button'>

        
        <button onClick={onClose} className="close-button"><img src={close} alt="fermer" /></button>
        </div>
        <img src={photoUrl} alt="Modal Content" className="modal-img" />
        <p>{description}</p> {/* Utilisez la description dynamique ici */}
        <div className='icon-modal'>
          <img src={js} alt="javascript" />
          <img src={github} alt="github" />
          <img src={lien} alt="lien" />
        </div>
      </div>
    </div>
  );
};

export default Modal;