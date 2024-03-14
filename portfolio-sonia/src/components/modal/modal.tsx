import React from 'react';
import "./modal.scss"; // Assurez-vous que le chemin d'accès est correct

interface ModalProps {
  isOpen: boolean;
  photoUrl: string;
  description: string;
  onClose: () => void; // Fonction pour fermer la modale
}

const Modal: React.FC<ModalProps> = ({ isOpen, photoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
   
    <div className="overlay">
      <div className="modal">
        <button onClick={onClose} className="close-button">Close</button>
        <img src={photoUrl} alt="Modal Content" className="modal-img" />
        <p>Description plus important</p>
        <button onClick={onClose} className="close-button">Close</button>
      </div>
    </div>
  );
};

export default Modal;