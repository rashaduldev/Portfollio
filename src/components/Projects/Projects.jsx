
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './projects.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className="mx-16">
            <h1 className="text-6xl font-bold text-center my-11">Projects</h1>
            <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
           <Link to={'https://travel-and-adventure.web.app/'}>
           <div>
                <img src="https://i.ibb.co/4s0qG3t/travel.png" alt="" />
                travel
            </div>
           </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link to={'https://odd-self.surge.sh/'}>
          <div>
                <img src="https://i.ibb.co/sRLcnJL/11.png" alt="" />
            </div>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
           <Link to={'https://scintillating-flavor.surge.sh/'}>
           <div>
                <img src="https://i.ibb.co/GJ3njmx/10.png" alt="" />
            </div>
           </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link to={'https://sturdy-support.surge.sh/'}>
        <div>
                <img src="https://i.ibb.co/tQP3GYS/boss.png" alt="" />
            </div>
        </Link>
        </SwiperSlide>
    
      <SwiperSlide>
      <Link to={'https://event-management-project-ddf5a.web.app/'}>
            <div>
                <img src="https://i.ibb.co/XVqJJP9/educative.png" alt="" />
            </div>
            </Link>
        </SwiperSlide>
      
      </Swiper>
    </>
        </div>
    );
};

export default Projects;