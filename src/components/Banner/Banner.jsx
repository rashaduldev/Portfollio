import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { motion } from "framer-motion";
const Banner = () => {
    const [text] = useTypewriter({
        words: ['Rashadul Islam'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:mx-10">
          <div className="flex-1 lg:ml-48">
          <motion.div
      className="box"
      /**
       * Setting the initial keyframe to "null" will use
       * the current value to allow for interruptable keyframes.
       */
      whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.3 }}
    />
            <img
            
              src="https://i.ibb.co/Cvhzv2g/login.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1 ">
            <h1 className="text-5xl font-bold">Start your Journey</h1>
            <div>
              <div className="App text-5xl font-bold">
                <span>Md {text}</span>
                <Cursor cursorColor="red" />
              </div>
            </div>
            <p className="py-6 text-lg">
              I’m a Junior Web Developer who is passionate about making
              error-free websites with 100% client satisfaction
            </p>
            <button className="btn btn-primary">Contact me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
