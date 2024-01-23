import React from "react";
import Aup from "../../assets/images/Home/artup.png";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import johnvideo from "./Draft_2.mp4";
const Art = () => {
  return (
    <>
      <div className="bgimg md:py-0 py-8 2xl:px-0 md:px-16 px-4 relative">
        <div className="md:px-12 px-0 relative">
          <Swiper
            className="myswiper"
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            navigation
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <div className="xl:max-w-[1300px] md:px-0  w-full mx-auto">
                <video autoPlay muted id="myVideo" controls>
                  <source src={johnvideo} type="video/mp4" />
                </video>
              </div>
            </SwiperSlide>
            {/* <SwiperSlide>
              <div className="xl:max-w-[1300px] md:px-0 px-12 w-full mx-auto">
                <img src={Aup} alt="Up" className="w-full" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="xl:max-w-[1300px] md:px-0 px-12 w-full mx-auto">
                <img src={Aup} alt="Up" className="w-full" />
              </div>
            </SwiperSlide> */}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Art;
