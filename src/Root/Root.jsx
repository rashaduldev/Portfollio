import { Outlet } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
// import Navber from "../components/Navber/Navber";
// import Footer from "../components/Footer/Footer";


const Root = () => {
    return (
        <div>
                         <AnimatedCursor 
             
             innerSize={8}
      outerSize={8}
      color='193, 11, 111'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',
        {
          target: '.custom',
          options: {
            innerSize: 12,
            outerSize: 12,
            color: '255, 255, 255',
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5
          }
        }
      ]}
             
             />
            {/* <Navber></Navber> */}
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;