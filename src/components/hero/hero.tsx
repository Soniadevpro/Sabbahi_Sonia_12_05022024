import photo from "../../assets/photos/IMG_1636.jpg";

const Hero = () => {
    return (
        <div className="hero">
            <h1 className="style-name">
                Sonia Sabbahi
            </h1>
            <div className="photo-container">
                <div className="p-photo">
                    <img src={photo} alt="Sonia Sabbahi" />
                    <p className="descript-me">
                        Développeuse Front-end. Inspirée par mon expérience avec RPG Maker et fascinée par la création numérique, je me spécialise dans l'intégration de maquettes, la conception de landing pages et de sites vitrines. Mon parcours unique forge une approche créative et détaillée dans chaque projet.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;