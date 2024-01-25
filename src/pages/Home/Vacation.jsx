import React, { useState, useRef } from "react";
import V1 from "../../assets/images/Home/v1.png";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import airbnb from "./airbnb.mp4";
import airbnb_poster from "./poster_airbnb.png";
import "swiper/css";
import "swiper/css/navigation";
const Vacation = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSvgClick = () => {
    const video = videoRef.current;

    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }

      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <div id="airbnb" className="md:pt-28 pt-8 md:pb-28 pb-9 bg-[#B9AD87]">
        <h1 className="text-center md:text-[#46382D] text-white md:text-[44px] text-[22px] font-normal eb uppercase lg:leading-[57.20px]">
          WIN A FREE VACATION IN
        </h1>
        <p className="text-center text-white md:text-base text-xs font-normal capitalize lg:leading-relaxed md:mt-3 mt-2 md:mb-4 mb-3">
          Airfare, accommodations and all expenses paid
        </p>
        <p className="lg:max-w-[714px] w-full mx-auto text-center text-[#5D564C] md:text-base text-xs font-normal leading-relaxed px-5">
          Purchase any NFT in our collection and be automatically entered to win
          a free vacation to our exclusive properties Florida One lucky winner
          will be chosen at random each. Get ready for the vacation of a
          lifetime!
        </p>
        <div className="md:py-0 py-8 2xl:px-0 md:px-16 px-4 relative md:mt-11 mt-6 lg:max-w-[1240px] w-full mx-auto">
          <div className="md:px-12 px-0 relative md:py-20 py-6">
            <div className="xl:max-w-[1300px] md:px-0  w-full mx-auto relative group duration-300 ease-in-out">
              <video
               className="border-4 border-[#CEC2AC]"
                ref={videoRef}
                // autoPlay
                muted
                loop
                id="myVideo"
                onClick={handleSvgClick}
                poster={airbnb_poster}
                
              >
                <source src={airbnb} type="video/mp4" />
                {/* <source
                  src="https://jnelson.web.app/assets/airbnb-73a974e9.mp4"
                  type="video/mp4"
                /> */}
              </video>
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto z-20 cursor-pointer opacity-0 group-hover:opacity-100"
                  width={56}
                  height={56}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#ffffff"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  onClick={handleSvgClick}
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                  <path d="M14 5m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v12a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z" />
                </svg>
              ) : (
                <img
                  className="w-[80px] absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto z-20"
                  onClick={handleSvgClick}
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/photo1706024586.jpeg"
                  alt="Play"
                />

                // <svg
                //   xmlns="http://www.w3.org/2000/svg"
                //   className="absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto z-20 cursor-pointer opacity-0 group-hover:opacity-100"
                //   width={60}
                //   height={60}
                //   viewBox="0 0 24 24"
                //   strokeWidth="1.5"
                //   stroke="#ffffff"
                //   fill="none"
                //   strokeLinecap="round"
                //   strokeLinejoin="round"
                //   onClick={handleSvgClick}
                // >
                //   <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                //   <path d="M7 4v16l13 -8z" />
                // </svg>
              )}
            </div>
            {/* <Swiper
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
                <div className="lg:max-w-[774px] md:px-0 px-12 w-full mx-auto">
                  <img src={V1} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:max-w-[774px] md:px-0 px-12 w-full mx-auto">
                  <img src={V1} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="lg:max-w-[774px] md:px-0 px-12 w-full mx-auto">
                  <img src={V1} alt="Up" className="w-full" />
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
        <button className="flex items-center justify-center group md:h-[60px] md:w-[295px] w-[230px] mx-auto md:mt-11 mt-6 h-[40px] gap-3 bg-[#46382D] text-center text-white md:text-lg text-sm font-medium hover:bg-[#B9AD87] hover:text-[#46382D] group border border-transparent hover:border-[#46382D] ease-in-out transform duration-300">
          Enter the contest to win
          <svg
            className="text-white group-hover:text-[#46382D]"
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
