
import Hero from "../../components/hero/hero";
import Badge from "../../components/badge/badge"
import Skills from "../skills/skills";
import Contact from "../contact/contact";
import Card from "../card/card";

const home = () => {
    return (
        <div>
        
            <Hero/> 
            <Badge/>
            <Skills/>
            <Card/>
            <Contact/>
  
        </div>
    );
};

export default home;