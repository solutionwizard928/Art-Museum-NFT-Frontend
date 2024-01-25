// import React from "react";
import Ione from "../../assets/images/Home/i1.png";
import Itwo from "../../assets/images/Home/i2.png";
import Ithree from "../../assets/images/Home/i3.png";
import s0 from "./s0.png";
// import s1 from "./s1.png";
import s2 from "./s2.png";
// import s3 from "./s3.png";

// import { Navigation, Autoplay } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";

const Jazz = () => {
  return (
    <>
      <div id="collection" className="bg-[#797164] md:pt-28 pt-8 md:pb-20 pb-8">
        <div className="container mx-auto 2xl:px-0 px-4 xl:max-w-[1450px] w-full">
          <h1 className="text-white md:text-[44px] text-[22px] font-normal eb text-center uppercase lg:leading-[57.20px] md:mb-4 mb-3">
            {" "}
            JAZZ Collection of NFT
          </h1>
          <p className="lg:max-w-[654px] w-full mx-auto text-center text-[#C9C8C8] md:text-base text-xs font-normal leading-relaxed">
            JAZZ Collection of NFTs, an innovative fusion of art and music that
            encapsulates the spirit of improvisation and creative expression.
          </p>
          <div className="md:mt-14 mt-6 flex justify-center xl:gap-8 gap-5 md:p-4">
            <div className="overflow-hidden w-full lg:block hidden">
              <CarouselProvider
                naturalSlideWidth={0}
                naturalSlideHeight={125}
                totalSlides={2}
                infinite={true}
                isIntrinsicHeight={true}
              >
                <div>
                  <Slider>
                    <Slide className="w-full" index={0}>
                      <div className="flex justify-center gap-10 flex-wrap">
                        <div aria-label="Image" className="xl:w-[349px] md:w-[270px]">
                          <img src={Ione} alt="One" />
                        </div>
                        <div aria-label="Image" className="xl:w-[349px] md:w-[270px]">
                          <img src={Itwo} alt="Two" />
                        </div>
                        <div aria-label="Image" className="xl:w-[349px] md:w-[270px]">
                          <img src={Ithree} alt="Three" />
                        </div>
                      </div>
                    </Slide>
                    <Slide className="w-full" index={1}>
                      <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap">
                        <div aria-label="Image" className="xl:w-[549px] md:w-[500px]">
                          <img src={s0} alt="Forth" />
                        </div>
                        <div aria-label="Image" className="xl:w-[549px] md:w-[500px]">
                          <img src={s2} alt="sda" />
                        </div>
                      </div>
                    </Slide>
                    {/* <Slide className="w-full" index={5}>
                      <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap">
                        <div aria-label="Image" className="w-[549px]">
                          <img src={s0} alt="Forsssth" />
                        </div>
                        <div aria-label="Image" className="w-[549px]">
                          <img src={s1} alt="ddd" />
                        </div>
                      </div>
                    </Slide> */}

                    {/* <Slide className="w-full" index={2}>
                      <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap">
                        <div aria-label="Image" className="w-[749px]">
                          <img src={s1} alt="Forth" />
                        </div>
                      </div>
                    </Slide> */}

                    {/* <Slide className="w-full" index={3}>
                      <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap">
                        <div aria-label="Image" className="w-[749px]">
                          <img src={s0} alt="Forth" />
                        </div>
                      </div>
                    </Slide> */}
                  </Slider>

                  <div
                    aria-label="button"
                    className=" relative z-40 xl:top-[-250px] lg:top-[-200px]"
                  >
                    <div className="flex lg:gap-4 gap-10 justify-between">
                      <ButtonBack>
                        <div className="z-10 flex flex-shrink-0  justify-center items-center lg:w-16 lg:h-16 w-9 h-9 border border-[#b9ad87] hover:border-[#cec2ac] rounded-full">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/arrow-right-john1.png"
                            alt="Image"
                            className=" flex flex-shrink-0 w-6 h-6"
                          />
                        </div>
                      </ButtonBack>
                      <ButtonNext>
                        <div className="z-10 flex flex-shrink-0 justify-center items-center  lg:w-16 lg:h-16 w-9 h-9 border border-[#b9ad87] hover:border-[#cec2ac] rounded-full">
                          <img
                            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/arrow-right-nelson-1.png"
                            alt="Image"
                            className="flex flex-shrink-0 w-6 h-6"
                          />
                        </div>
                      </ButtonNext>
                    </div>
                  </div>
                </div>
              </CarouselProvider>
            </div>
            <div className="overflow-hidden w-full lg:hidden block">
              <CarouselProvider
                naturalSlideWidth={0}
                // naturalSlideHeight={125}
                totalSlides={4}
                infinite={true}
                isIntrinsicHeight={true}
              >
                <div>
                  <Slider>
                    <Slide className="w-full" index={0}>
                      <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap">
                        <div aria-label="Image" className="w-[353px]">
                          <img src={Ione} alt="One" />
                        </div>
                      </div>
                    </Slide>
                    <Slide className="w-full" index={1}>
                      <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap">
                        <div aria-label="Image" className="w-[353px]">
                          <img src={Itwo} alt="Two" />
                        </div>
                      </div>
                    </Slide>
                    <Slide className="w-full" index={2}>
                      <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap">
                        <div aria-label="Image" className="w-[353px]">
                          <img src={Ithree} alt="Three" />
                        </div>
                      </div>
                    </Slide>
                    <Slide className="w-full" index={3}>
                      <div className="flex justify-center gap-10 flex-wrap lg:flex-nowrap">
                        <div aria-label="Image" className="w-[353px] ">
                          <img src={s0} alt="Four" />
                          <img src={s2} alt="Four" />
                        </div>
                      </div>
                    </Slide>
                  </Slider>
                </div>
                <div
                  aria-label="button"
                  className=" relative z-40 w-[90px] mx-auto mt-6"
                >
                  <div className="flex lg:gap-4 gap-4 justify-between">
                    <ButtonBack>
                      <div className="z-10 flex flex-shrink-0  justify-center items-center lg:w-16 lg:h-16 w-9 h-9 border border-[#b9ad87] rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/arrow-right-john1.png"
                          alt="Image"
                          className=" flex flex-shrink-0 w-6 h-6"
                        />
                      </div>
                    </ButtonBack>
                    <ButtonNext>
                      <div className="z-10 flex flex-shrink-0 justify-center items-center  lg:w-16 lg:h-16 w-9 h-9 border border-[#b9ad87] rounded-full">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/arrow-right-nelson-1.png"
                          alt="Image"
                          className="flex flex-shrink-0 w-6 h-6"
                        />
                      </div>
                    </ButtonNext>
                  </div>
                </div>
              </CarouselProvider>
            </div>
            {/* <Swiper
              className="jazz"
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
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 2,
                },
                1200: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div aria-label="Image" className="w-[353px]">
                  <img src={Ione} alt="One" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div aria-label="Image" className="w-[353px]">
                  <img src={Itwo} alt="Two" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div aria-label="Image" className="w-[353px]">
                  <img src={Ithree} alt="Three" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div aria-label="Image" className="w-[353px]">
                  <img src={Ione} alt="One" />
                </div>
              </SwiperSlide>
            </Swiper> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jazz;
