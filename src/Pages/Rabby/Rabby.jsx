import About from "../../components/About/About";
import Nav from "../../components/Navber/Nav";
import Services from "../../components/Services/Services";
import Technology from "../../components/Technology/Technology";
import Touch from "../../components/Touch/Touch";


const Rabby = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-10 text-white relative">
           <div>
           <Services></Services>
           <div className="top-12 right-32 lg:right-0 navbar fixed z-10 bg-opacity-70 bg-black text-white w-[6%] lg:w-[13%] rounded-xl">
           <Nav></Nav>
           </div>
           </div>
           <Technology></Technology>
           <About></About>
           <Touch></Touch>
        </div>
    );
};

export default Rabby;