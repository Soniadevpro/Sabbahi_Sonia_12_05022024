import React from 'react';
import "./modal.scss"; // Assurez-vous que le chemin d'accès est correct

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
          <button onClick={onClose} className="close-button">Fermer</button>
        </div>
        <img src={photoUrl} alt="Contenu Modal" className="modal-img" />
        <p>{description}</p>
      </div>
      
    </div>
  );
};

export default Modal;