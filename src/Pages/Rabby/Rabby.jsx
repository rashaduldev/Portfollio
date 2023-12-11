import About from "../../components/About/About";
import Education from "../../components/Education/Education";
import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Navber/Nav";
import Projects from "../../components/Projects/Projects";
import Services from "../../components/Services/Services";
import Technology from "../../components/Technology/Technology";
import Time from "../../components/Time/Time";
import Touch from "../../components/Touch/Touch";


const Rabby = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-0 text-white w-full relative">
            <Time></Time>
           <div>
           <Services></Services>
           <div className="top-12 right-32 lg:right-3 navbar fixed z-10 bg-opacity-70 bg-black text-white w-[3.5%] rounded-xl">
           <Nav></Nav>
           </div>
           </div>
           
           <Projects></Projects>
           <Technology></Technology>
           <About></About>
           <Touch></Touch>
           <Education></Education>
           <Footer></Footer>
        </div>
    );
};

export default Rabby;