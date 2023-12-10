import { FaFacebook, FaGithub, FaHome, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="">
           <ul className="flex flex-col w-full text-2xl">
           <Link to={'/'}>
           <li className="flex items-center gap-4 my-3">
               <FaHome></FaHome>
                Home
            </li>
           </Link>
           <Link to={'https://www.facebook.com/mdrashadulislamrabby6452'}>
           <li className="flex items-center gap-4 my-3">
                <FaFacebook></FaFacebook>
                Facebook
            </li>
           </Link>
           <Link to={'https://github.com/rashaduldev'}>
           <li className="flex items-center gap-4  my-3">
               <FaGithub></FaGithub>
                Github
            </li>
           </Link>
          <Link to={'https://www.linkedin.com/in/md-rashadul-islam-789534236'}>
          <li className="flex items-center gap-4 my-3">
                <FaLinkedin></FaLinkedin>
                FaLinkedin
            </li>
          </Link>
           </ul>
        </div>
    );
};

export default Nav;