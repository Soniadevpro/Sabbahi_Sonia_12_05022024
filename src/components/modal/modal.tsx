import React from 'react';
import "./modal.scss"; // Assurez-vous que le chemin d'accès est correct
import cross from "../../assets/icon/icons8-croix.svg"
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
          <button onClick={onClose} className="close-button"><img src={cross} alt="" /></button>
        </div>
        <img src={photoUrl} alt="Contenu Modal" className="modal-img" />
        <p>{description}</p>
      </div>
      
    </div>
  );
};

export default Modal;