import { FaAppStore } from "react-icons/fa";
import { MdWeb, MdWebStories } from "react-icons/md";

const Services = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-10 text-white">
      <h1 className="text-5xl text-center">My Services</h1>
   <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-16 mx-16 my-10">
   <div className="card bg-blue-500 shadow-xl">
        <figure className="text-9xl"> 
        <MdWeb />
        </figure>
        <div className="card-body">
          <h2 className="card-title">WEBSITE DESIGN</h2>
          <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui</p>
        </div>
      </div>
      <div className="card bg-blue-500 shadow-xl">
        <figure className="text-9xl"> 
        <MdWebStories />
        </figure>
        <div className="card-body">
          <h2 className="card-title">WEBSITE DEVELOPMENT</h2>
          <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui</p>
        </div>
      </div>
      <div className="card bg-blue-500 shadow-xl">
        <figure className="text-9xl"> 
        <FaAppStore />
        </figure>
        <div className="card-body">
          <h2 className="card-title">APP DEVELOPMENT</h2>
          <p>Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui</p>
        </div>
      </div>
   </div>
    </div>
  );
};

export default Services;
