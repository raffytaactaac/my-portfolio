import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/effect-cards";
import 'swiper/css';
import { EffectCards } from "swiper";

const Projects = () => {
    const [cardHover, setCardHover] = useState(false);

    const handleHover = () => {
        setCardHover(true);
    }

    const handleOut = () => {
        setCardHover(false);
    }


    return ( 
        <div id='projects' className='mb-20'>
            <h2 id="about" className="text-white text-4xl font-semibold mb-3">Projects</h2>
            <div className="w-56 h-1 bg-blue-600 m-auto mb-14"></div>
        <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
        >
            <SwiperSlide onMouseOver={handleHover} onMouseOut={handleOut}>
                <div className={cardHover ? "slider flex justify-center items-center" : "slider-1 slider flex justify-center items-center hide"} >
                    <a href="https://raffytaactaac.github.io/mini-project-1/" className='bg-blue-600 py-2 px-5 rounded-2xl text-center w-44'>Demo <i className="fa-solid fa-share-from-square"></i></a>
                </div>
            </SwiperSlide>
            <SwiperSlide onMouseOver={handleHover} onMouseOut={handleOut}>
                <div className={cardHover ? "slider flex justify-center items-center" : "slider-1 slider flex justify-center items-center hide"} >
                    <a href="https://raffytaactaac.github.io/mini-project-2/" className='bg-blue-600 py-2 px-5 rounded-2xl text-center w-44'>Demo <i className="fa-solid fa-share-from-square"></i></a>
                </div>
            </SwiperSlide>
            <SwiperSlide onMouseOver={handleHover} onMouseOut={handleOut}>
                <div className={cardHover ? "slider flex justify-center items-center" : "slider-1 slider flex justify-center items-center hide"} >
                    <a href="https://ridexchangesys.web.app/" className='bg-blue-600 py-2 px-5 rounded-2xl text-center w-44'>Demo <i className="fa-solid fa-share-from-square"></i></a>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
     );
}
 
export default Projects;