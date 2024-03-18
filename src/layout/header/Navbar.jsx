import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import BurgerM from "../../assets/icons/burger.svg";
import { NavbarList } from "../../data/NavbarList";
import Cross from "../../assets/icons/cross.svg";
import Wuser from "../../assets/icons/wuser.svg";
import Wallet from "../../assets/icons/wallet.svg";
import Wallet2 from "../../assets/icons/wallet2.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { goerli } from "viem/chains";

function Navbar() {
  const currentPath = useLocation().pathname;
  const [navToggle, setNavToggle] = useState(false);
  // const [loginclick, setLoginclick] = useState(false);
  const toggleNavigation = () => {
    setNavToggle(!navToggle);
  };
  const headeritems = () => {
    setNavToggle(false);
  };
  return (
    <nav className="pt-[0px] w-full z-[500] bg-[#211C19] fixed">
      <div className="container mx-auto lg:max-w-[1200px] w-full">
        <div className="flex items-center justify-between container mx-auto 2xl:px-0 px-4 md:py-2 py-4">
          <a href="#" className="text-lu-secondary font-medium text-[18px]">
            <img src={Logo} alt="logo" className="md:w-[91px] w-[65px]" />
          </a>
          {/* navlist */}
          <ul
            className={`fixed w-full lg:pt-0 pt-10 bg-lu-secondary h-[100vh] top-0 sidebar overflow-auto lg:overflow-visible duration-200 z-[100] ${navToggle ? "left-0" : "-left-[1350px]"
              } lg:h-[auto] lg:bg-[transparent] xl:w-[auto] lg:static lg:flex items-center gap-[20px]`}
          >
            <div className="lg:hidden flex justify-end mr-20 absolute top-5 left-0 right-0 w-full mx-auto ">
              <button onClick={toggleNavigation}>
                <img src={Cross} alt="Close" className="mx-auto w-full" />
              </button>
            </div>
            {NavbarList.map((v, i) => {
              return (
                <li
                  key={i}
                  className="lg:h-[80px] lg:leading-[80px] leading-[50px] xl:mr-[20px] relative group px-[15px] xl:px-0 text-center"
                >
                  <a
                    onClick={headeritems}
                    href={v.link}
                    target={v.target}
                    className={`text-[#797164] hover:text-[#CEC2AC] border-b border-transparent lg:text-lu-secondary lg:font-[500] xl:text-base md:text-sm text-base hover:text-lu-primary-2 font-normal lg:hover:text-lu-dark ${currentPath === v.link ? "clickcolor pb-2" : ""
                      }`}
                  >
                    {v.name}
                  </a>

                  {v?.list && (
                    <ul className="dropdown_list nav_arrow text-[#797164] lg:hidden group-hover:block box-shadow-dropdown static lg:absolute lg:top-[70px] lg:bg-lu-white lg:shadow-dropdown">
                      {v?.list.map((j) => {
                        return (
                          <li key={j.id} className="lg:hover:bg-lu-primary-2">
                            <Link
                              to={j.link}
                              className="block text-xs leading-[50px] lg:leading-[80px] px-[25px] lg:px-[50px] whitespace-nowrap text-lu-white lg:text-lu-dark hover:text-lu-primary-2 lg:hover:text-lu-white  durartion-200 text-white"
                            >
                              {j.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}


          </ul>

       

          <ul className="flex items-center gap-[20px] relative z-10">
            <div className="flex gap-5 items-center md:px-4 px-0 relative">
            <ConnectButton.Custom>
              {({
                account,
                chain,
                openAccountModal,
                openChainModal,
                openConnectModal,
                authenticationStatus,
                mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== "loading";
                const connected =
                  ready &&
                  account &&
                  chain &&
                  (!authenticationStatus ||
                    authenticationStatus === "authenticated");

                return (
                  <div
                    {...(!ready && {
                      "aria-hidden": true,
                      style: {
                        opacity: 0,
                        pointerEvents: "none",
                        userSelect: "none",
                      },
                    })}
                  >
                    {(() => {
                      if (!connected) {
                        return (
                          // <button onClick={openConnectModal} type="button">
                          //   Connect Wallet
                          // </button>
                          <button
                            onClick={openConnectModal}
                            className="flex items-center justify-center group md:h-[60px] md:w-[230px] w-[150px] h-[32px] gap-3 bg-[#CEC2AC] text-center text-[#46382D] md:text-lg text-sm font-medium hover:bg-[#5D564C] hover:text-[#CEC2AC] ease-in-out transform duration-300"
                          >
                            <img
                              src={Wallet}
                              alt="Wallet"
                              className="block group-hover:hidden"
                            />
                            <img
                              src={Wallet2}
                              alt="Wallet2"
                              className="hidden group-hover:block"
                            />
                            Connect Wallet
                          </button>
                        );
                      }

                      if (chain.unsupported) {
                        return (
                          // <button onClick={openChainModal} type="button">
                          //   Wrong network
                          // </button>
                          <button
                            onClick={openChainModal}
                            className="flex items-center justify-center group md:h-[60px] md:w-[230px] w-[150px] h-[32px] gap-3 bg-[#CEC2AC] text-center text-[#46382D] md:text-lg text-sm font-medium hover:bg-[#5D564C] hover:text-[#CEC2AC] ease-in-out transform duration-300"
                          >
                            <img
                              src={Wallet}
                              alt="Wallet"
                              className="block group-hover:hidden"
                            />
                            <img
                              src={Wallet2}
                              alt="Wallet2"
                              className="hidden group-hover:block"
                            />
                            Wrong Network
                          </button>
                        );
                      }

                      return (
                        <div style={{ display: "flex", gap: 12 }}>
                          {/* <button
                              onClick={openChainModal}
                              style={{ display: 'flex', alignItems: 'center' }}
                              type="button"
                            >
                              {chain.hasIcon && (
                                <div
                                  style={{
                                    background: chain.iconBackground,
                                    width: 12,
                                    height: 12,
                                    borderRadius: 999,
                                    overflow: 'hidden',
                                    marginRight: 4,
                                  }}
                                >
                                  {chain.iconUrl && (
                                    <img
                                      alt={chain.name ?? 'Chain icon'}
                                      src={chain.iconUrl}
                                      style={{ width: 12, height: 12 }}
                                    />
                                  )}
                                </div>
                              )}
                              {chain.name}
                            </button> */}

                          {/* <button onClick={openAccountModal} type="button">
                              {account.displayName}
                              {account.displayBalance
                                ? ` (${account.displayBalance})`
                                : ''}
                            </button> */}

                          <button
                            onClick={openAccountModal}
                            className="flex items-center justify-center group md:h-[60px] md:w-[230px] w-[150px] h-[32px] gap-3 bg-[#CEC2AC] text-center text-[#46382D] md:text-lg text-sm font-medium hover:bg-[#5D564C] hover:text-[#CEC2AC] ease-in-out transform duration-300"
                          >
                            <img
                              src={Wallet}
                              alt="Wallet"
                              className="block group-hover:hidden"
                            />
                            <img
                              src={Wallet2}
                              alt="Wallet2"
                              className="hidden group-hover:block"
                            />
                            {account.displayName}
                          </button>
                        </div>
                      );
                    })()}
                  </div>
                );
              }}
            </ConnectButton.Custom>
            </div>
            <li className="mr-[1px] flex xl:hidden ">
              <button onClick={toggleNavigation}>
                {navToggle ? (
                  <img src={Cross} alt="Close" />
                ) : (
                  <img src={BurgerM} alt="Open" />
                )}
              </button>
              {/* </button> */}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
