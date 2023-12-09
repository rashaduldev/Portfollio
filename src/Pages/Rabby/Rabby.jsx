import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Technology from "../../components/Technology/Technology";


const Rabby = () => {
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-10 text-white">
           <Services></Services>
           <Technology></Technology>
           <About></About>
        </div>
    );
};

export default Rabby;