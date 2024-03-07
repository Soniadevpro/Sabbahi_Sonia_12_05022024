
import logoOC from "../../assets/logo-OpenClassRooms-COM-du-SITE-WEB-9.jpg"
import figma from "../../assets/icon/icons8-figma (1).svg"
import sass from "../../assets/icon/icons8-toupet (1).svg"
import tailwind from "../../assets/icon/icons8-tailwind-css.svg"
import react from "../../assets/icon/icons8-réagir (2).svg"
// import typescript from "../../assets/icon/"
import methodeAgile from "../../assets/icon/icons8-agile-64.png"
// import creativity from "../../assets/icon/"
import sophiaB from "../../assets/sophiabluel.png"
import kasa from "../../assets/kasa.png"
import argentbank from "../../assets/argentbank.png"
import mikeform from "../../assets/mikeform.png"

const skills = () => {
    return (
        <div>
             <section className="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-design">
            <h3>Design</h3>
            <ul>
              <li><img src={figma} alt="" />Figma</li>
              <li><img src={sass} alt="" />Sass</li>
              <li><img src={tailwind} alt="" />Tailwind</li>
            </ul>
          </div>
          <div className="skills-frontend">
            <h3>Front-end</h3>
            <ul>
              <li><img src={react} alt="" />React</li>
              <li><img src="./assets/images/socialnet/typescript-svgrepo-com (1).svg" alt="" />typescript</li>
              <li></li>
            </ul>
          </div>
          <div className="skills-others">
            <h3>Soft</h3>
            <ul>
              <li><img src={methodeAgile} alt="" />Méthodes agiles</li>
              <li><img src="./assets/skills/icons8-idée-64.png" alt="" />Creativity</li>
              <li><img src="./assets/skills/icons8-question-64.png" alt="" />Curiosity</li>
            </ul>
          </div>
        
        </div>
      </section>
      <section className="projects-container">
        <h3>Projects</h3>
        <div className="categories">
          <div className="filters"><span>Top</span></div>
          <div className="filters"><span>School</span></div>
          <div className="filters"><span>Personal</span></div>
        </div>
        <div className="container">
          <div className="card">
            <img src={sophiaB} alt="Umi" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Portfolio - Sophia Bluel</h5>
              <p className="card-text">Développer un portfolio d'architecte, en commençant par la page de présentation des travaux de celle ci.</p>
              <a href="#" className="btn">More</a>
            </div>
          </div>
          <div className="card">
            <img src={kasa} alt="Umi" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Kasa</h5>
              <p className="card-text">l'entreprise Kasa hébergement entre particulier.</p>
              <a href="#" className="btn">More</a>
            </div>
          </div>
          <div className="card">
            <img src={argentbank} alt="Mori" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Argent Bank</h5>
              <p className="card-text"></p>
              <a href="#" className="btn">More</a>
            </div>
          </div>
        </div>
    
      </section>
      <section className="projects-container">
        <h3>Courses</h3>
        <div className="container">
          <div className="card">
            <img src={logoOC} alt="Sora" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Openclassrooms</h5>
              <p className="card-text">Développeur/Intégrateur web</p>
              <a href="#" className="btn">More</a>
            </div>
          </div>

          <div className="card">
            <img src={mikeform} alt="Umi" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Mike-Codeur formation</h5>
              <p className="card-text">Expert React</p>
              <a href="#" className="btn">More</a>
            </div>
          </div>
          <div className="card">
            <img src={logoOC} alt="Mori" className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">Openclassrooms</h5>
              <p className="card-text">Développeur JavaScript - React</p>
              <a href="#" className="btn">More</a>
            </div>
          </div>
        </div>
   
      </section>
        </div>
    );
};

export default skills;