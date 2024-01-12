import { useState } from 'react';
import { FaAppStore } from "react-icons/fa";
import { MdWeb, MdWebStories } from "react-icons/md";
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
    console.log('ok');
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
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
          <button onClick={handlePurches} className="btn btn-warning">Purchess</button>
          <button className="btn btn-outline btn-secondary">View Details</button>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="py-5 text-white">
      <h1 className="text-5xl text-center font-bold">My Services</h1>
      <div className="divider divider-accent mx-14 lg:mx-96"></div>
      <h3 className='text-2xl lg:text-4xl text-center my-5'>Crafting stories through 
            design and <br /> innovation with  development</h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-16 mx-16 my-10">
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.9 }}
          className="relative card bg-blue-500 shadow-xl"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleLeave()}
        >
          <figure className="text-9xl"> 
            <MdWeb />
          </figure>
          <div className="card-body">
            <h2 className="card-title">WEBSITE DESIGN</h2>
            <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui</p>
          </div>
          {renderOverlay(1)}
        </motion.div>
        
        <motion.div
         variants={fadeIn("up", 0.1)}
         initial="hidden"
         whileInView={"show"}
         viewport={{ once: false, amount: 0.9 }}
          className="relative card bg-blue-500 shadow-xl"
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleLeave()}
        >
          <figure className="text-9xl"> 
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
          className="relative card bg-blue-500 shadow-xl"
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleLeave()}
        >
          <figure className="text-9xl"> 
            <FaAppStore />
          </figure>
          <div className="card-body">
            <h2 className="card-title">APP DEVELOPMENT</h2>
            <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui</p>
          </div>
          {renderOverlay(3)}
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
