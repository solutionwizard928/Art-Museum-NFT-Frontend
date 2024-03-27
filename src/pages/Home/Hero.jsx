import React, { useEffect, useMemo, useState } from "react";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useAccount,
  useNetwork,
  useContractRead,
} from "wagmi";
// import { useState } from "react";
import Nelson from "../../assets/images/Home/nelson.png";
import { NavLink } from "react-router-dom";
import Social from "../../components/SocialIcon";
import nft_abi from "./abi.json";
import erc20 from "./erc20.json";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import { ethers } from "ethers";
import {
  useConnectModal,
  useAccountModal,
  useChainModal,
} from "@rainbow-me/rainbowkit";

const Hero = () => {
  const price = 0.07;
  const { isConnected } = useAccount();
  const { chain, chains } = useNetwork();
  const [counter, setCounter] = useState(1);

  const currencies = [
    {
      name: "USDT",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      abi: erc20,
      func: 'approve',
      logo: 'https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/27/44/274408de563ccb268b2d733d0a863c6ec0ba1ecbf6151a99dbcfa5129d0925aa-MGQ4Zjc4ZjAtZjdhOS00ZDI2LWFhM2UtNTAwZjczYTMzNWEz'
    },
    {
      name: "USDC",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      abi: erc20,
      func: 'approve',
      logo: "https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/44/2b/442b80bd16af0c0d9b22e03a16753823fe826e5bfd457292b55fa0ba8c1ba213-ZWUzYjJmZGUtMDYxNy00NDcyLTg0NjQtMWI4OGEwYjBiODE2",
    },
    {
      name: "PYUSD",
      address: "0x6c3ea9036406852006290770BEdFcAbA0e23A0e8",
      abi: erc20,
      func: 'approve',
      logo: "https://d3r81g40ycuhqg.cloudfront.net/wallet/wais/fd/8f/fd8fc93c39f52579ba5cacd7a9bf6849fa5905daff047ac1b2ac081636caba24-YzdjMzU1YjItNjk1OS00NmEwLWIyMWQtNjkwMWU1YmYzOGZm"
    },
  ];

  const [token, setToken] = useState(0);

  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();

  // const { data, isError: isErrorTotalSupply, isLoading: isLoadingTotalSupply } = useContractRead(
  //   {
  //     addressOrName: currencies[token].address,
  //     contractInterface: currencies[token].abi,
  //   },
  //   currencies[token].func,
  // )

  const createNotification = (type, title, message, cb) => {
    switch (type) {
      case "info":
        NotificationManager.info(title, message, 5000, cb);
        break;
      case "success":
        NotificationManager.success(title, message, 5000, cb);
        break;
      case "warning":
        NotificationManager.warning(title, message, 5000, cb);
        break;
      case "error":
        NotificationManager.error(title, message, 5000, cb);
        break;
    }
  };

  const cost = useMemo(() => {
    return (counter * price).toLocaleString();
  }, [counter]);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: "0xc608b3B1645E5B0a75F56796aDa89270947793eD",
    abi: nft_abi,
    functionName: "mint",
    args: [counter],
    // overrides: {value: ethers.parseEther("0.5")},
    value: ethers.parseEther((price * counter).toString()),
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleClick1 = () => {
    setCounter(counter + 1);
  };
  const handleClick2 = () => {
    setCounter(counter > 1 ? counter - 1 : 1);
  };

  useEffect(() => {
    console.log(prepareError)
  }, [prepareError])

  return (
    <>
      <div className="bg-[#211C19] md:pt-48 md:pb-44 pt-16 pb-16">
        <div className="container mx-auto 2xl:px-0 px-4 flex md:justify-between xl:gap-8 gap-5 gap-y-11 lg:flex-nowrap flex-wrap xl:max-w-[1200px] w-full">
          <div className="lg:max-w-[620px] w-full">
            <h1 className="text-[#CEC2AC] xl:text-[69px] md:text-5xl text-[32px] font-normal md:leading-[96.60px] eb">
              JOHN NELSON <br />
              <span className="text-white xl:text-[69px] md:text-5xl text-[32px] font-bold">
                NFT
              </span>{" "}
              COLLECTION
            </h1>
            <p className="text-[#B9AD87] md:text-[17px] text-xs font-normal lg:leading-7 leading-5 my-5">
              John Nelson`s journey from a young boy in the inner city of
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
                {/* {isLoading}{" "} */}
                <span className="text-[#C9C8C8] md:text-base text-xs font-normal">
                  4 / 7777
                </span>
              </p>
            </div>
            <div className="flex justify-between gap-4 items-center mt-3">
              <div className="flex justify-between gap-1 items-center">
              <p className="text-white md:text-[22px] text-base font-bold">
                {cost} ETH
              </p>

              
              </div>

       

           



              <div className="flex items-center gap-4">
                <button
                onClick={handleClick2}
                >
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
                <button
                onClick={handleClick1}
                >
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
            <button
              onClick={() => {
                if (!isConnected)
                  createNotification(
                    "error",
                    "Connect your ethereum wallet",
                    "",
                    openConnectModal
                  );
                else {
                  if (chain.unsupported)
                    createNotification(
                      "warning",
                      "Switch Network",
                      "Ethereum",
                      openChainModal
                    );
                  else write();
                }
              }}
              className="flex mt-4 group items-center justify-center group h-[60px] w-full gap-3 bg-[#CEC2AC] text-center text-[#46382D] md:text-xl text-base md:font-medium font-semibold hover:bg-[#5D564C] hover:text-[#CEC2AC] ease-in-out transform duration-300"
            >
              <svg
                width={30}
                height={29}
                viewBox="0 0 30 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="text-[#46382D] group-hover:text-[#CEC2AC]"
                  d="M6.10704 16.8862C5.93982 18.8332 7.48063 20.5054 9.43951 20.5054H22.1603C23.8803 20.5054 25.3853 19.096 25.5167 17.3879L26.1617 8.42962C26.305 6.44685 24.8 4.83435 22.8053 4.83435H7.3851"
                  stroke="currentColor"
                  strokeWidth="2.14999"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="text-[#46382D] group-hover:text-[#CEC2AC]"
                  d="M2.82239 2.58878H4.90072C6.19071 2.58878 7.20598 3.6996 7.09848 4.97765L6.50126 12.204"
                  stroke="currentColor"
                  strokeWidth="2.14999"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="text-[#46382D] group-hover:text-[#CEC2AC]"
                  d="M19.8431 26.4776C20.6677 26.4776 21.3361 25.8091 21.3361 24.9845C21.3361 24.1599 20.6677 23.4915 19.8431 23.4915C19.0185 23.4915 18.35 24.1599 18.35 24.9845C18.35 25.8091 19.0185 26.4776 19.8431 26.4776Z"
                  stroke="currentColor"
                  strokeWidth="2.14999"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="text-[#46382D] group-hover:text-[#CEC2AC]"
                  d="M10.2875 26.4776C11.1121 26.4776 11.7806 25.8091 11.7806 24.9845C11.7806 24.1599 11.1121 23.4915 10.2875 23.4915C9.46295 23.4915 8.79449 24.1599 8.79449 24.9845C8.79449 25.8091 9.46295 26.4776 10.2875 26.4776Z"
                  stroke="currentColor"
                  strokeWidth="2.14999"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  className="text-[#46382D] group-hover:text-[#CEC2AC]"
                  d="M11.1834 9.7554H25.5167"
                  stroke="currentColor"
                  strokeWidth="2.14999"
                  strokeMiterlimit={10}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {isPrepareError ? "Insufficnet ETH" : "Buy Now"}
            </button>
          </div>
        </div>
      </div>
      {/* <NotificationContainer /> */}
    </>
  );
};

export default Hero;
