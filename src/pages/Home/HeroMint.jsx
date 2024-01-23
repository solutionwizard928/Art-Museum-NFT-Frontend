import React, { useState } from "react";
import Nelson from "../../assets/images/Home/nelson.png";
import { NavLink } from "react-router-dom";
import Social from "../../components/SocialIcon";
const HeroMint = () => {
  const [counter, setCounter] = useState(0);
  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter - 1);
  };
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
            <div className="flex justify-between gap-4 items-center mt-5">
              <p className="text-[#C9C8C8] md:text-base text-xs font-normal">
                John Nelson NFT
              </p>
              <p className="text-[#EBEDF0] md:text-base text-xs font-normal">
                452{" "}
                <span className="text-[#C9C8C8] md:text-base text-xs font-normal">
                  / 2000
                </span>
              </p>
            </div>
            <div className="flex justify-between gap-4 items-center mt-3">
              <p className="text-white md:text-[22px] text-base font-bold">
                0.05 ETH
              </p>
              <div className="flex items-center gap-4">
                <button onClick={handleClick2}>
                  <svg
                    className="cursor-pointer"
                    width={31}
                    height={31}
                    viewBox="0 0 31 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.45018 0.889484H30.0169L30.0169 29.4562H1.45018L1.45018 0.889484Z"
                      stroke="#CEC2AC"
                      strokeWidth="1.43333"
                    />
                    <path
                      opacity="0.5"
                      d="M22.5522 15.1709H8.91583"
                      stroke="#CEC2AC"
                      strokeWidth="1.89094"
                    />
                  </svg>
                </button>
                <p className="text-center text-white md:text-[22px] text-base font-normal">
                  {counter}
                </p>
                <button onClick={handleClick1}>
                  <svg
                    className="cursor-pointer"
                    width={30}
                    height={31}
                    viewBox="0 0 30 31"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.716663 0.889484H29.2833L29.2833 29.4562H0.716663L0.716663 0.889484Z"
                      stroke="#CEC2AC"
                      strokeWidth="1.43333"
                    />
                    <path
                      d="M20.167 15.4424H9.08838"
                      stroke="#CEC2AC"
                      strokeWidth="1.89094"
                    />
                    <path
                      d="M14.6276 21.3446L14.6276 9.54587"
                      stroke="#CEC2AC"
                      strokeWidth="1.89094"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <button className="flex mt-4 group items-center justify-center group h-[60px] w-full gap-3 bg-[#CEC2AC] text-center text-[#46382D] md:text-xl text-base font-semibold hover:bg-[#5D564C] hover:text-[#CEC2AC] ease-in-out transform duration-300">
              Mint
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroMint;
