import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
const Banner = () => {
  const [text] = useTypewriter({
    words: ["Rashadul Islam"],
    loop: 9,
    onLoopDone: () => console.log(`loop completed after 3 runs.`),
  });
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
            <h1 className="text-5xl font-bold text-white">
              Start your Journey
            </h1>
            <div>
              <div className="App text-5xl font-bold">
                <span className="text-white">Md {text}</span>
                <Cursor cursorColor="red" />
              </div>
            </div>
            <p className="py-6 text-lg text-white">
              I’m a Junior Web Developer who is passionate about making
              error-free websites with 100% client satisfaction
            </p>
            <Link to={'/rabby'}>
              <div className="flex items-center relative">
                <button className="btn btn-secondary font-bold text-2xl h-12 w-56 pr-16">Explore Me</button>
                <div className="text-3xl text-white absolute right-28 md:left-44 lg:right-64">
                  <FaAngleDoubleRight />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
