import Navbar from "../components/home/navbar";
import Hero from "../components/home/hero";
import Skill from "../components/home/skills";
import About from "../components/home/about";
import Education from "../components/home/education";
import Projects from "../components/home/projects";
import Contact from "../components/home/contact";
import Footer from "../components/home/footer";

const Home = () => {
    return ( 
        <>
            <div className="header-container">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Education />
            <Skill />
            <Projects />
            <Contact />
            <Footer />
        </>
     );
}
 
export default Home;