

const form: React.FC /* <FormProps> */ = () => {
    return (
        <div>
            <h3 className="title-form"id= 'contact-section'>Contactez moi</h3>
            <form id="form" className="topBefore">
                <input id="name" type="text" placeholder="NAME" />
                <input id="email" type="email" placeholder="E-MAIL" /> {/* Changement du type en 'email' pour une validation appropriée */}
                <textarea id="message" placeholder="MESSAGE"></textarea>
                <input id="submit" type="submit" value="GO!" />
            </form>
        </div>
    );
};

export default form;