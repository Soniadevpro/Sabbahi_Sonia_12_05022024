

import figma from "../../assets/icon/icon-figma.svg"
import sass from "../../assets/icon/icon-sass.svg"
import tailwind from "../../assets/icon/icons8-tailwind-css.svg"
import react from "../../assets/icon/icon-react.svg"
import typescript from "../../assets/icon/icon-typescript.svg"
import methodeAgile from "../../assets/icon/icons8-agile-64.png"
import curiosity from "../../assets/icon/icon-curiosity.png"
import creativity from "../../assets/icon/icon-crea.png"
import html from "../../assets/icon/icons8-html.svg"
import css from "../../assets/icon/icon-css.svg"
const skills = () => {
    return (
        <div>
             <section className="skills" id="skills-section">
        <h2>Skills</h2>
        <div className="skills-container">
          <div className="skills-design">
            <h3>Design</h3>
            <ul>
              <li><img src={figma} alt="" />Figma</li>
              <li><img src={css} alt="" />CSS</li>
              <li><img src={sass} alt="" />Sass</li>
              <li><img src={tailwind} alt="" />Tailwind</li>
            </ul>
          </div>
          <div className="skills-frontend">
            <h3>Front-end</h3>
            <ul>
              <li><img src={react} alt="" />React</li>
              <li><img src={typescript} alt="" />Typescript</li>
              <li><img src={html} alt="" />HTML</li>
              <li></li>
            </ul>
          </div>
          <div className="skills-others">
            <h3>Soft</h3>
            <ul>
              <li><img src={methodeAgile} alt="" />Méthodes agiles</li>
              <li><img src={curiosity} alt="" />Curiosity</li>
              <li><img src={creativity} alt="" />Creativity</li>
            </ul>
          </div>
        
        </div>
      </section>
    
      
        </div>
    );
};

export default skills;