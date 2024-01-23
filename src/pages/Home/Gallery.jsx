import React from "react";
import metaverse1 from "./1.png";
import metaverse2 from "./2.png";
import metaverse3 from "./3.png";
import metaverse4 from "./4.png";
import metaverse5 from "./5.png";
import metaverse6 from "./6.png";
import metaverse7 from "./7.png";
import metaverse8 from "./8.png";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
const Vacation = () => {
  return (
    <>
      <div id="metaverse" className="md:pt-28 pt-8 md:pb-28 pb-9 bg-[#46382D]">
        <h1 className="text-center text-white md:text-[44px] text-[22px] font-normal eb uppercase lg:leading-[57.20px]">
          JOHN NELSON’S NFT Metaverse Gallery
        </h1>
        <p className="lg:max-w-[1088px] w-full mx-auto text-center text-[#C9C8C8] md:text-base text-xs font-normal capitalize leading-relaxed mt-3 md:mb-10 px-3">
          Step into the future of art at John Nelson's Metaverse Fine Art
          Gallery. Witness digital masterpieces and experience immersive
          creativity. Join us and redefine art's boundaries. Your journey
          awaits!" "Experience art's evolution at John Nelson's Metaverse Fine
          Art Gallery. Dive into immersive digital masterpieces and redefine
          your understanding of artistic boundaries. Don't miss out!
        </p>
        <div className="md:py-0 py-8 2xl:px-0 md:px-16 px-0  relative md:mt-11 lg:max-w-[1240px] w-full mx-auto">
          <div className="md:px-12 px-0 relative ">
            <Swiper
              className="myswiper1"
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
                <div className="md:px-0 px-0 w-full mx-auto">
                  <img src={metaverse1} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:px-0 px-0 w-full mx-auto">
                  <img src={metaverse2} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:px-0 px-0 w-full mx-auto">
                  <img src={metaverse3} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:px-0 px-0 w-full mx-auto">
                  <img src={metaverse4} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:px-0 px-0 w-full mx-auto">
                  <img src={metaverse5} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:px-0 px-0 w-full mx-auto">
                  <img src={metaverse6} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:px-0 px-0 w-full mx-auto">
                  <img src={metaverse7} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="md:px-0 px-0 w-full mx-auto">
                  <img src={metaverse8} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <button onClick={() => {
                        window.open("https://www.spatial.io/s/John-Nelson-Art-Gallery-658c0c2f26c2e969a865461c?share=2794887871533244838", "_blank")
                    }} className="flex items-center justify-center group md:h-[60px] md:w-[265px] w-[230px] mx-auto md:mt-12 mt-1 h-[40px] gap-3 bg-[#CEC2AC] text-center text-[#46382D] md:text-lg text-sm font-medium hover:bg-[#46382D] hover:text-[#CEC2AC] group border border-transparent hover:border-[#CEC2AC] ease-in-out transform duration-300">
        Enter the  Metaverse
          <svg
            className="text-[#46382D] group-hover:text-[#CEC2AC]"
            width={25}
            height={24}
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9297 5.92993L20.9997 11.9999L14.9297 18.0699"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20.83"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeMiterlimit={10}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Vacation;
