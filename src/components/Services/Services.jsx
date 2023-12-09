import { useState } from 'react';
import { FaAppStore } from "react-icons/fa";
import { MdWeb, MdWebStories } from "react-icons/md";

const Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleHover = (cardNumber) => {
    setTimeout(() => {
      setHoveredCard(cardNumber);
    }, 100); // Fixed delay for all cards (3000 milliseconds)
  };

  const handleLeave = () => {
    setHoveredCard(null);
  };

  const renderOverlay = (cardNumber) => {
    if (hoveredCard === cardNumber) {
      return (
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-90 rounded-lg flex items-center justify-center gap-7">
          <button className="btn btn-warning">Purchess</button>
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
        <div
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
        </div>
        
        <div
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
        </div>
        
        <div
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
        </div>
      </div>
    </div>
  );
};

export default Services;
