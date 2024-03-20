import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight, FaDownload } from "react-icons/fa";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Rashadul Islam"],
    loop: 9,
    onLoopDone: () => console.log(`loop completed after 9 runs.`),
  });
  const handleDownload = () => {
    const pdfFilePath = '../../../public/Resume of Md Rashadul Islam.pdf';
    const anchorElement = document.createElement('a');
    anchorElement.href = pdfFilePath;
    anchorElement.download = 'Rashadul Islam CV';
    anchorElement.click();
  };
  return (
    <div>
      <Particle></Particle>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:mx-10">
          <motion.div
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:ml-48"
          >
            <img
              src="https://i.ibb.co/jZKkSZB/rashadul.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 ml-20"
          >
            <h1 className="lg:text-4xl text-2xl font-bold text-white">
              Start your Journey With
            </h1>
            <div>
              <div className="App lg:text-4xl text-2xl font-bold">
                <span className="text-white">Md {text}</span>
                <Cursor cursorColor="red" />
              </div>
            </div>
            <p className="py-6 text-lg text-white">
              I’m a Junior Web Developer who is passionate about making
              error-free websites with 100% client satisfaction
            </p>
           <div className="flex flex-col lg:flex-row lg:gap-9 gap-3">
           <div className="relative">
            <button  onClick={handleDownload}  className="btn btn-active btn-primary font-bold text-2xl h-12 w-56 pr-24">Resume</button>
            <div className="text-2xl lg:text-3xl text-white absolute top-3 right-24 md:left-44 lg:right-64">
                 <FaDownload></FaDownload>
                </div>
            </div>
           <Link to={'/rabby'}>
              <div className="flex items-center relative">
                <button className="btn btn-secondary font-bold text-2xl h-12 w-56 pr-16">Explore Me</button>
                <div className="text-3xl text-white absolute right-20 md:left-44 lg:right-64">
                  <FaAngleDoubleRight />
                </div>
              </div>
            </Link>
          
           </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
