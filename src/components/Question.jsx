import React, { useState } from "react";

function Question({ question, answer, height }) {
  const [showQ, setShowQ] = useState(false);

  return (
    <>
      <div className="border-b border-white border-opacity-10">
        <div
          className="flex items-center justify-between w-full cursor-pointer px-1 gap-4 py-4"
          onClick={() => setShowQ(!showQ)}
        >
          <p className="text-white md:text-[28px] text-lg font-normal uppercase eb">
            {question}
          </p>
          <div className="flex flex-shrink-0 justify-end items-center w-16 h-16">
            <svg
              className="flex-shrink-0 flex md:w-[35px] w-5 h-5 "
              width={35}
              height={32}
              viewBox="0 0 35 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                className={`duration-300 ease-in-out ${
                  showQ ? ` opacity-0 ` : `opacity-100 `
                }`}
                x1={18}
                y1="5.78908e-10"
                x2={18}
                y2={32}
                stroke="#B9AD87"
                strokeWidth={2}
              />
              <line x1={35} y1={17} y2={17} stroke="#B9AD87" strokeWidth={2} />
            </svg>
          </div>
        </div>
        <div
          className={`overflow-hidden flex items-center justify-start duration-300 ease-in-out ${
            showQ
              ? ` duration-400  pb-0 `
              : `h-0 `
          }`}
        >
          <p
            className={`md:text-lg text-base leading-6 text-[#C9C8C8] py-2 px-1 xl:pr-60 pl-2`}
          >
            {answer}
          </p>
        </div>
      </div>
    </>
  );
}

export default Question;
