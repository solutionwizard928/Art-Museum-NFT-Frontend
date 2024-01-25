import React from "react";
import Artist from "../../assets/images/Home/artist.png";
import Social1 from "../../components/SocialIcon1";

const About = () => {
  return (
    <>
      <div className="bg-[#5D564C] md:py-28 py-8">
        <div className="container mx-auto 2xl:px-0 px-4 flex md:justify-between xl:gap-8 gap-5 lg:flex-nowrap flex-wrap xl:max-w-[1200px] w-full items-center">
          <div className="lg:max-w-[500px] w-full">
            <h1 className="text-white md:text-[44px] text-[22px] font-normal eb uppercase leading-[52.80px] tracking-[5px] md:mb-10 mb-6">
              About artist
            </h1>
            <img src={Artist} alt="Artist" />
            <div className="flex justify-center">
              <Social1 />
            </div>
          </div>
          <div className="lg:max-w-[630px] w-full">
            <h1 className="text-white md:text-[44px] text-[22px] font-normal eb leading-[52.80px]">
              John Nelson
            </h1>
            <p className="text-white md:text-lg text-base font-normal leading-[27px] md:mt-2 mb-4">
              Master Pencil Artist
            </p>
            <p className="text-[#C9C8C8] md:text-lg text-xs font-normal leading-[27px]">
              In the heart of Washington, D.C., during the 1950s, where the
              city's vibrant culture and struggles converged, there was a young
              African-American boy named John Nelson. <br />
              <br />
              He grew up in the heart of the inner city, surrounded by the
              challenges and hardships that came with it. <br />
              <br />
              Yet, even in those challenging times, John had a gift that set him
              apart from the rest: an uncanny talent for pencil drawing. From a
              young age, John would sit in his modest home, sketching scenes
              from his neighborhood. His eyes absorbed every detail—the vibrant
              colors of the row houses, the smiling faces of his friends, and
              the bustling streets.{" "}
            </p>
            <a href="https://palmsnegril2.wixsite.com/jnstudios" rel="noreferrer" target="_blank" className="flex md:mt-6 mt-4 items-center border border-transparent hover:border-[#CEC2AC] justify-center group md:h-[60px] md:w-[192px] w-[176px] h-11 gap-3 bg-[#CEC2AC] text-center text-[#46382D] text-lg font-medium hover:bg-[#5D564C] hover:text-[#CEC2AC] ease-in-out transform duration-300">
              Read More
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="text-[#46382D] group-hover:text-[#CEC2AC]"
                  d="M14.4297 5.92993L20.4997 11.9999L14.4297 18.0699"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="text-[#46382D] group-hover:text-[#CEC2AC]"
                  d="M3.5 12H20.33"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
