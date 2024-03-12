import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Skills from "../skills/skills";
import Form from "../../components/form/form"
import Badge from "../../components/badge/badge"
import Footer from "../../components/footer/footer"
const home = () => {
    return (
        <div>
            <header>
            <Header/>

            </header>
            <main>
               <Hero/> 
<Badge/>
            </main>
           <Skills/>
<Form/>
<Footer/>
        </div>
    );
};

export default home;