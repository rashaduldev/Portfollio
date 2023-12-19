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
    <div>
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
            <h2 className="text-4xl font-bold lg:text-left text-center">About me</h2>
            <div className="divider divider-accent lg:mx-0 mx-20 lg:mr-96"></div>
            <h1 className="text-2xl text-center lg:text-left lg:text-5xl my-5">Transforming visions into exceptional portfolios</h1>
            <p className="py-6 te">
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
            </p>
           <div className="flex items-center relative justify-center lg:justify-start">
           <button onClick={handleDownload}  className="btn btn-warning pr-11 text-white">Download CV</button>
           <div className="text-2xl absolute right-[33%] lg:left-28">
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
