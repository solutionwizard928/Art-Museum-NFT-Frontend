import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useLocation } from "react-router-dom";
function Base(props) {
  const location = useLocation();

  const except_base_list = [
    // "/signup",
  ];

  const shouldRenderBase = !except_base_list.some((value) =>
    location?.pathname?.includes(value)
  );
  return (
    <div>
      {shouldRenderBase && <Header />}

      {props.children}

      {shouldRenderBase && <Footer />}
    </div>
  );
}

export default Base;
