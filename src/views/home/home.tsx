import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Badge from "../../components/badge/badge"
import Skills from "../skills/skills";
import Projects from "../../views/projects/projects"

import Contact from "../contact/contact";
import Footer from "../../components/footer/footer"
const home = () => {
    return (
        <div>
            <Header />
            <Hero/> 
            <Badge/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default home;