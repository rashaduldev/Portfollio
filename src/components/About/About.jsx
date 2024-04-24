import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  const handleDownload = () => {
    const pdfFilePath = '../../../public/Md Rashadul Islam_1.6.pdf';
    const anchorElement = document.createElement('a');
    anchorElement.href = pdfFilePath;
    anchorElement.download = '';
    anchorElement.click();
  };
  return (
    <div className="py-10">
          <div className="mx-auto text-center">
          <h2 className="text-4xl font-bold  text-center">About me</h2>
          <div className="divider divide-gray-400 mx-14 lg:mx-[450px]"></div>
          </div>
      <div className="hero py-12">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
          <motion.div 
               variants={fadeIn("down", 0.1)}
               initial="hidden"
               whileInView={"show"}
               viewport={{ once: false, amount: 0.9 }}
          className="flex-1 justify-center flex">
            <img
              src="https://i.ibb.co/M7HK01N/rashadul.png"
              className="rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.div 
           variants={fadeIn("up", 0.1)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.9 }}
          className="flex-1 text-center lg:text-left">
            <h1 className="text-2xl text-center lg:text-left lg:text-5xl my-5 text-gray-700">Web Designer & Developer <span className="text-4xl">App Development also</span></h1>
            <p className="pb-6 text-gray-700 text-xl">
            I’m a Frontend web Developer passionate about making error-free websites with Laravel and React.js Framework—a self-taught fast-learner full-stack developer from Dhaka. I have a passion for learning and sharing my knowledge with others as publicly as possible. Now I'm working at Bangladesh Outsourcing Company (BDOSC) as a Full-Stack Web Developer.
            </p>
           <div className="flex items-center relative justify-center lg:justify-start">
           <button onClick={handleDownload}  className="btn bg-[#4c4c4ce3] hover:bg-[#4C4C4C] pr-11 text-white">Download CV</button>
           <div className="text-2xl text-white absolute right-[33%] lg:left-28">
           <MdDownload />
           </div>
           </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
