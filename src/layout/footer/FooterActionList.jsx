import React, { useEffect } from "react";
import { FooterMenuList } from "../../data/FooterMenuList";
import { FooterMenuListSecond } from "../../data/FooterMenuListSecond";
import FLogo from "../../assets/icons/Flogo.svg";
import { Link } from "react-router-dom";
import Social from "../../components/SocialIcon";
function FooterActionList() {
  return (
    <div className="w-full mx-auto relative h-full md:py-20 bg-[rgb(27,23,22)] border-t border-white border-opacity-10">
      <div className="container relative z-50 mx-auto 2xl:px-0 px-4 xl:max-w-[1200px] w-full pt-8">
        <div className="flex md:justify-between gap-5 flex-wrap lg:flex-nowrap w-full">
          <div className="xl:min-w-[220px] md:w-[220px] w-[170px] md:block hidden">
            <Link>
              <img src={FLogo} alt="logo" className="mt-3" />
            </Link>
            <p className="w-full mt-9 text-[#5D564C] md:text-base text-xs font-normal lg:leading-normal">
              Copyright@JNStudios 2023
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 lg:flex-nowrap flex-wrap lg:justify-between w-full">
            <div className="flex gap-5 lg:justify-end justify-between w-full">
          <div className="md:w-[220px] w-[170px] md:hidden block">
            <Link>
              <img src={FLogo} alt="logo" className="mt-3" />
            </Link>
            <p className="md:max-w-[211.81px] w-full md:mt-9 mt-2 text-[#5D564C] md:text-base text-xs font-normal lg:leading-normal">
              Copyright@JNStudios 2023
            </p>
          </div>
              {FooterMenuList.map((v, i) => {
                return (
                  <ul
                    key={v.id}
                    className={`${
                      i === 0
                        ? "flex-wrap md:w-[220px] w-[100px]"
                        : "flex-wrap md:w-[350px] w-full"
                    } `}
                  >
                    <li className="text-white md:text-[23px] text-base font-medium md:py-3 py-1 w-full">
                      {v.name}
                    </li>
                    {v.name && (
                      <li>
                        <ul
                          className={
                            v.list.some((j) => j.name.endsWith(".svg"))
                              ? "flex gap-6"
                              : ""
                          }
                        >
                          {v.list.map((j, index2) => {
                            return (
                              <li key={j.id}>
                                {j.name.endsWith(".svg") ? (
                                  <Link to={j.link} className="block py-2">
                                    <img
                                      src={j.name}
                                      alt="Icon"
                                      className="w-6 h-6"
                                    />
                                  </Link>
                                ) : (
                                  <Link
                                    to={j.link}
                                    className="block md:py-2 py-1 text-white md:text-base text-xs hover:underline"
                                  >
                                    {j.name}
                                  </Link>
                                )}
                              </li>
                            );
                          })}
                        </ul>
                      </li>
                    )}
                  </ul>
                );
              })}
            </div>
            <div className="flex md:flex-row flex-col-reverse">
              <div className="w-[200px]">
                <div className="text-white md:text-[23px] text-base font-medium py-3 w-full">
                  Get In Touch
                  <div className="md:-mt-0 -mt-4">
                    <Social />
                  </div>
                </div>
              </div>
              <div className="md:w-[360px] w-full">
                <div className="text-white md:text-[23px] text-base font-medium py-3 w-full">
                  Get In Touch
                  <div className="flex md:mt-8 mt-4 w-full">
                    <input
                      type="email"
                      placeholder="Enter you email"
                      className="text-[#C9C8C8] w-full md:text-base text-xs font-normal outline-none leading-snug pl-4 h-[50px] flex border-[#5D564C] bg-transparent border items-center"
                    />
                    <button className="flex items-center justify-center md:w-[144px] w-[135px] h-[50px] gap-3 bg-[#CEC2AC] text-center text-[#46382D] md:text-base text-sm font-medium hover:bg-[#5D564C] hover:text-[#CEC2AC] ease-in-out transform duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterActionList;
