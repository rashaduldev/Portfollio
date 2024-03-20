import { FaFacebook, FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="mx-auto">
           <ul className="flex flex-col w-full text-3xl">
           <Link to={'/'}>
           <li className="flex items-center gap-4 my-3">
               <FaHome></FaHome>
                
            </li>
           </Link>
           <Link to={'https://www.facebook.com/mdrashadulislamrabby6452'}>
           <li className="flex items-center gap-4 my-3">
                <FaFacebook></FaFacebook>
                
            </li>
           </Link>
           <Link to={'https://github.com/rashaduldev'}>
           <li className="flex items-center gap-4  my-3">
               <FaGithub></FaGithub>
                
            </li>
           </Link>
          <Link to={'https://www.linkedin.com/in/md-rashadul-islam-789534236'}>
          <li className="flex items-center gap-4 my-3">
                <FaLinkedin></FaLinkedin>
                
            </li>
          </Link>
           </ul>
        </div>
    );
};

export default Nav;