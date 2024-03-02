import Intro from "../Intro/intro";
import UiUx from "../UI/uiux";
import FrontEnd from "../Front-end/frontend";
import Graphics from "../Graphics/graphics";
import { Route, Routes } from "react-router-dom";

function Samples() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/UIUX" element={<UiUx />} />
        <Route path="front-end" element={<FrontEnd />} />
        <Route path="/graphics" element={<Graphics />} />
      </Routes>
    </>
  );
}

export default Samples;
