import { useState } from 'react';
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { fadeIn } from '../../variants';
import { motion } from "framer-motion";

const Technology = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const technologyData = [
    { id: 1, icon: <SiTailwindcss />, name: "Tailwind", link: "https://tailwindcss.com/" },
    { id: 2, icon: <FaReact />, name: "React", link: "https://reactjs.org/" },
    { id: 3, icon: <SiExpress />, name: "Express JS", link: "https://expressjs.com/" },
    { id: 4, icon: <TbBrandNextjs />, name: "NextJS", link: "https://nextjs.org/" },
    { id: 5, icon: <SiMongodb />, name: "MongoDB", link: "https://www.mongodb.com/" },
  ];

  const handleHover = (cardNumber) => {
    setHoveredCard(cardNumber);
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };

  const handleDetailsClick = (link) => {
    window.open(link, '_blank');
  };

  const renderOverlay = (cardNumber, link) => {
    if (hoveredCard === cardNumber) {
      return (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 flex items-center justify-center">
          <button className="btn btn-active btn-secondary font-bold" onClick={() => handleDetailsClick(link)}>Details</button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mx-16 my-10">
      <h1 className="text-5xl py-3 font-bold text-center lg:mt-24 pt-9">Technologies</h1>
      <div className="divider divider-accent mx-14 lg:mx-96"></div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 my-10">
        {technologyData.map((tech) => (
          <motion.div
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
            key={tech.id}
            className={`text-center relative transition duration-300 shadow-2xl rounded-lg ${
              hoveredCard === tech.id ? 'rounded-lg overflow-hidden' : ''}`}
            onMouseEnter={() => handleHover(tech.id)}
            onMouseLeave={() => handleLeave()}
          >
            <div className="text-9xl flex justify-center rounded-lg py-3" >
              {tech.icon}
            </div>
            <h3 className="text-2xl py-2">{tech.name}</h3>
            {renderOverlay(tech.id, tech.link)}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
