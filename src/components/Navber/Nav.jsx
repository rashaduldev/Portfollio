import { FaFacebook, FaGithub, FaHome, FaLinkedin } from "react-icons/fa";


const Nav = () => {
    return (
        <div className="">
           <ul className="flex flex-col w-full text-2xl">
            <li className="flex items-center gap-4 my-3">
               <FaHome></FaHome>
                Home
            </li>
            <li className="flex items-center gap-4 my-3">
                <FaFacebook></FaFacebook>
                Facebook
            </li>
            <li className="flex items-center gap-4  my-3">
               <FaGithub></FaGithub>
                Github
            </li>
            <li className="flex items-center gap-4 my-3">
                <FaLinkedin></FaLinkedin>
                FaLinkedin
            </li>
           </ul>
        </div>
    );
};

export default Nav;