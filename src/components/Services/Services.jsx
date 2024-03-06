import { useState } from 'react';
import { FaAppStore } from "react-icons/fa";
import { MdOutlineDesignServices, MdWeb, MdWebStories } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from '../../variants';
import Swal from 'sweetalert2';

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (cardNumber) => {
    setTimeout(() => {
      setHoveredCard(cardNumber);
    }, 100); 
  };
  const handlePurches=()=>{
    Swal.fire({
      title: "Submit This Form",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
            https://api.github.com/users/${login}
          `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  }
  const handleLeave = () => {
    setHoveredCard(null);
  };

  const renderOverlay = (cardNumber) => {
    if (hoveredCard === cardNumber) {
      return (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 rounded-lg flex items-center justify-center gap-7">
          <button className="btn btn-warning">Purchase</button>
          <button className="btn btn-outline btn-secondary">View Details</button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="py-5">
      <h1 className="text-5xl text-center font-bold">My Services</h1>
      <div className="divider divider-accent mx-14 lg:mx-96"></div>
      <h3 className='text-2xl lg:text-4xl text-center my-5'>Crafting stories through 
            design and <br /> innovation with  development</h3>
      <div className="grid grid-cols-1 lg:grid-cols-4 justify-center gap-16 lg:mx-16 my-10">
       <div>
       <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="relative card shadow-2xl"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleLeave()}
        >
          <figure className="text-8xl mt-8"> 
            <MdWeb />
          </figure>
          <div className="card-body">
            <h2 className="card-title">WEBSITE DESIGN</h2>
            <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui</p>
          </div>
          {renderOverlay(1)}
        </motion.div>
       </div>
        
        <motion.div
         variants={fadeIn("up", 0.1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.9 }}
          className="relative card shadow-xl"
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleLeave()}
        >
          <figure className="text-8xl mt-8"> 
            <MdWebStories />
          </figure>
          <div className="card-body">
            <h2 className="card-title">WEBSITE DEVELOPMENT</h2>
            <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui</p>
          </div>
          {renderOverlay(2)}
        </motion.div>
        
        <motion.div
         variants={fadeIn("down", 0.1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.9 }}
          className="relative card shadow-xl"
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleLeave()}
        >
          <figure className="text-8xl mt-8"> 
            <FaAppStore />
          </figure>
          <div className="card-body">
            <h2 className="card-title">APP DEVELOPMENT</h2>
            <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui</p>
          </div>
          {renderOverlay(3)}
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="relative card shadow-xl"
          onMouseEnter={() => handleHover(4)}
          onMouseLeave={() => handleLeave()}
        >
          <figure className="text-8xl mt-8"> 
          <MdOutlineDesignServices />
          </figure>
          <div className="card-body">
            <h2 className="card-title">DESIGN SUPPORT</h2>
            <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui</p>
          </div>
          {renderOverlay(4)}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
