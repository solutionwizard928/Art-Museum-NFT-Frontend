import React, { useState, useRef } from "react";
import Aup from "../../assets/images/Home/artup.png";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import johnvideo from "./Draft_2.mp4";
import poster_logo from "./poster_logo.png"


const Art = () => {
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
              <div className="xl:max-w-[1300px] md:px-0  w-full mx-auto relative group duration-300 ease-in-out">
                <video
                className="border-4 border-[#B9AD87]"
                  ref={videoRef}
                  // autoPlay
                  // controls
                  muted
                  loop
                  id="myVideo"
                  poster={poster_logo}
                  onClick={handleSvgClick}
                >
                  <source src={johnvideo} type="video/mp4" />
                  {/* <source
                    src="https://jnelson.web.app/assets/Draft_2-afbda3b1.mp4"
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
                    className="w-[80px] absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto z-20 cursor-pointer"
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
