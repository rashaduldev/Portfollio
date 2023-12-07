import AnimatedCursor from "react-animated-cursor";
import Banner from "../../components/Banner/Banner";


const Home = () => {
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
                '.link'
              ]}
             />
            <Banner></Banner>
        </div>
    );
};

export default Home;