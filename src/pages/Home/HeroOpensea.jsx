import React, { useState } from "react";
import Nelson from "../../assets/images/Home/nelson.png";
import Sea from "../../assets/icons/sea.svg";
import { NavLink } from "react-router-dom";
import Social from "../../components/SocialIcon";
const HeroOpensea = () => {
  return (
    <>
      <div className="bg-[#211C19] md:pt-48 md:pb-44 pt-16 pb-16">
        <div className="container mx-auto 2xl:px-0 px-4 flex md:justify-between xl:gap-8 gap-5 gap-y-11 lg:flex-nowrap flex-wrap xl:max-w-[1200px] w-full">
          <div className="lg:max-w-[620px] w-full">
            <h1 className="text-[#CEC2AC] xl:text-[69px] md:text-5xl text-[32px] font-normal leading-[96.60px] eb">
              JOHN NELSON <br />
              <span className="text-white xl:text-[69px] md:text-5xl text-[32px] font-bold">
                NFT
              </span>{" "}
              COLLECTION
            </h1>
            <p className="text-[#B9AD87] md:text-[17px] text-xs font-normal lg:leading-7 leading-5 my-5">
              John Nelson's journey from a young boy in the inner city of
              Washington DC. to a renowned and compassionate artist was a
              testament to the power of passion, perseverance, and the belief
              that art can be a force for change
            </p>
            <p className="text-[#CEC2AC] md:text-[26px] text-sm font-normal eb leading-[33.80px]">
              DISCOVER A RARE COLLECTION OF NFT WORLD IN JOHN NELSON ARTIST 40
              YEARS OF PENCIL DRAWINGS
            </p>
            <div className="md:-mt-0 -mt-4">
              <Social />
            </div>
          </div>
          <div className="lg:max-w-[500px] w-full py-4 px-4 bg-[#46382D]">
            <img src={Nelson} alt="Nelson" className="w-full" />
            <h1 className="text-center text-white text-[40px] font-semibold my-6 leading-7">
              All Sold Out
            </h1>
            <button className="flex mt-4 group items-center justify-center group h-[60px] w-full gap-3 bg-[#CEC2AC] text-center text-[#46382D] md:text-xl text-base font-semibold hover:bg-[#5D564C] hover:text-[#CEC2AC] ease-in-out transform duration-300">
              <img src={Sea} alt="Sea" />
              Buy on Opensea{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroOpensea;
