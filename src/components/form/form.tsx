import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
    // Réinitialiser les messages d'erreur et de confirmation lors de la saisie
    setErrorMessage('');
    if(isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation: vérifier si tous les champs sont remplis
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrorMessage('Veuillez compléter tous les champs du formulaire.');
      return; // Stopper la soumission si le formulaire est invalide
    }

    emailjs.sendForm('service_kxfbulk', 'template_t8ivof8', e.currentTarget, 'IaQ8qgmT3BSXl4xh7')
      .then((result) => {
        console.log(result.text);
        formRef.current?.reset();
        setIsSubmitted(true);
        // Réinitialiser le formulaire et le message d'erreur après l'envoi
        setFormValues({ name: '', email: '', message: '' });
        setErrorMessage('');
        setTimeout(() => setIsSubmitted(false), 5000);
      }, (error) => {
        console.log(error.text);
        // Gérer l'erreur ici, par exemple en définissant un message d'erreur
        setErrorMessage('Une erreur est survenue lors de l\'envoi du message.');
      });
  };

  return (
    <div className='form-container' >
      <form id="form" className="topBefore" ref={formRef} onSubmit={handleSubmit}>
        <h3 className="title-form" >Contactez moi</h3>
        <input id="name" name="name" type="text" placeholder="NAME" value={formValues.name} onChange={handleChange} />
        <input id="email" name="email" type="email" placeholder="E-MAIL" value={formValues.email} onChange={handleChange} />
        <textarea id="message" name="message" placeholder="MESSAGE" value={formValues.message} onChange={handleChange}></textarea>
        {isSubmitted && <div className="message-box success-message">Votre message a été envoyé avec succès. Merci de nous avoir contactés !</div>}
        {errorMessage && <div className="message-box error-message">{errorMessage}</div>}
        {!isSubmitted && !errorMessage && <input id="submit" type="submit" value="GO!" />}
      </form>
      <p className='number-mail'>Tel : 06-66-62-73-33 / Email : soniadevpro@gmail.com</p>
     
    </div>
  );
};

export default ContactForm;

