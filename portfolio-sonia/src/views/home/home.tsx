import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Skills from "../skills/skills";
import Projects from "../../views/projects/projects"
import Form from "../../components/form/form"
import Badge from "../../components/badge/badge"
import Footer from "../../components/footer/footer"
const home = () => {
    return (
        <div>
            <Header />
            <Hero/> 
            <Badge/>
            <Skills/>
            <Projects/>
            <Form/>
            <Footer/>
        </div>
    );
};

export default home;