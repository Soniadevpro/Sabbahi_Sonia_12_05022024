import Header from "../../components/header/header";
import Hero from "../../components/hero/hero";
import Skills from "../../components/skills/skills";
import Form from "../../components/form/form"
const home = () => {
    return (
        <div>
            <header>
            <Header/>

            </header>
            <main>
               <Hero/> 
            </main>
           <Skills/>
<Form/>
        </div>
    );
};

export default home;