import React from "react";
import Questions from "../../components/Question";
const Faq = () => {
  let faqs = [
    {
      question: "What is Metamask?",
      answer:
        "MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows users to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications.",
    },
    {
      question: "How to mint with Metamask on a mobile phone?",
      answer:
        "MetaMask allows you to display and transfer your NFTs/ERC-721 tokens directly. ... From there, you can mint, own, and manage your NFTs with seamless and complete control no matter where you are.",
    },
    {
      question: "How to mint with Metamask on a computer?",
      answer:
        <>
        1. Download and install the MetaMask extension for your browser.
        <br />
        2. Click on the “Get Started” button.
        <br />
        3. Select “Create a Wallet” and create a password.
        <br />
        4. Write down, store, or memorize your Secret Backup Phrase.
        <br />
        5. Confirm your Secret Backup Phrase to ensure you have it correct.
        </>,
    },
    {
      question: "Buying NFT for the first time?",
      answer:
        "Get the Metamask Chrome or Firefox extension. Load it with ETH through services that allow you to change your money to ETH like Coinbase, Binance or Kraken. Then, click the button MINT on the scary banner to connect your wallet and approve the transaction on Metamask. That’s it !",
    },
    {
      question: "Where does my NFT go after I purchase?",
      answer:
        "Today the company is bringing NFTs to the desktop browser. ... People who use Coinbase Wallet for desktop browsers will soon see a new tab called “NFTs,” which will let you access the non-fungible tokens (NFTs) associated with your wallet address.",
    },
  ];
  return (
    <>
      <div id="faq" className="bg-[#1B1716] md:pt-28 md:pb-28 pt-10 pb-8">
        <div className="container mx-auto 2xl:px-0 px-4 xl:max-w-[1200px] w-full">
          <h1 className="text-white md:text-[44px] text-[22px] font-normal eb uppercase">
            Frequently asked questions
          </h1>
          <p className="lg:max-w-[1022px] w-full opacity-70 text-[#C9C8C8] md:text-[23px] text-base font-normal lg:leading-[34.50px] mt-3 mb-6">
            NFTs can be generated through the deployment of smart contracts. NFT
            marketplaces such as OpenSea, x2y2 and Magic Eden make the NFT
            creation process more user-friendly
          </p>
          <div className="w-full space-y-2 md:border-t md:border-white md:border-opacity-10">
            {faqs.map((data, i) => {
              return (
                <div key={i}>
                  <Questions
                    question={data.question}
                    answer={data.answer}
                    height={data.heights}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
