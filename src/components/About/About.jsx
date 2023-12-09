import { MdDownload } from "react-icons/md";

const About = () => {
  return (
    <div>
      <div className="hero py-12">
        <div className="hero-content flex flex-col lg:flex-row-reverse">
          <div className="flex-1 justify-center flex">
            <img
              src="https://i.ibb.co/bW9g4dj/Hello-2.png"
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-4xl font-bold lg:text-left text-center">About me</h2>
            <div className="divider divider-accent lg:mx-0 mx-20 lg:mr-96"></div>
            <h1 className="text-2xl text-center lg:text-left lg:text-5xl my-5">Transforming visions into exceptional portfolios</h1>
            <p className="py-6 te">
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit auting fugit sed thisnquia consequuntur magni dolores eos designer heresm qui ratione
            </p>
           <div className="flex items-center relative justify-center lg:justify-start">
           <button className="btn btn-warning pr-11">Download CV</button>
           <div className="text-2xl absolute right-[33%] lg:left-28">
           <MdDownload />
           </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
