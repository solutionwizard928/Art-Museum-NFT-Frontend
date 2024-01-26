import { BrowserRouter, Routes, Route } from "react-router-dom";
import Base from "../layout/base/Base";
import Home from "../pages/Home/Main";
import HeroCounter from "../pages/Home/HeroCounter";
import HeroMint from "../pages/Home/HeroMint";
import HeroOpensea from "../pages/Home/HeroOpensea";
function MyRoutes() {
  return (
    <>
      <BrowserRouter>
        <Base>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            {/* <Route path="/counter" element={<HeroCounter></HeroCounter>}></Route>
            <Route path="/mint" element={<HeroMint></HeroMint>}></Route>
            <Route path="/sea" element={<HeroOpensea></HeroOpensea>}></Route> */}
          </Routes>
        </Base>
      </BrowserRouter>
    </>
  );
}

export default MyRoutes;
