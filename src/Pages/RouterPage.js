import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bound_eye_siora from "./Bound_eye_siora";
import Chapter2 from "./Chapters/ballon_dream/Chapter2";
import Chapter3 from "./Chapters/ballon_dream/Chapter3";
import Bound2 from "./Chapters/bound_eye_siora/Bound2";
import Bound3 from "./Chapters/bound_eye_siora/Bound3";
import Bound4 from "./Chapters/bound_eye_siora/Bound4";
import Rasetsugari2 from "./Chapters/rasetsugari/Rasetsugari2";
import Rasetsugari3 from "./Chapters/rasetsugari/Rasetsugari3";
import Rasetsugari4 from "./Chapters/rasetsugari/Rasetsugari4";
import Home from "./Home";
import Rasetsugari from "./Rasetsugari";

export default function RouterPage() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rasetsugari" element={<Rasetsugari />} />
          <Route exact path="/bound_eye_siora" element={<Bound_eye_siora />} />
          <Route exact path="/ballon_dream/2/" element={<Chapter2 />} />
          <Route exact path="/ballon_dream/3/" element={<Chapter3 />} />
          <Route exact path="/bound_eye_siora/2/" element={<Bound2 />} />
          <Route exact path="/bound_eye_siora/3/" element={<Bound3 />} />
          <Route exact path="/bound_eye_siora/4/" element={<Bound4 />} />
          <Route exact path="/rasetsugari/2/" element={<Rasetsugari2 />} />
          <Route exact path="/rasetsugari/3/" element={<Rasetsugari3 />} />
          <Route exact path="/rasetsugari/4/" element={<Rasetsugari4 />} />
         
        </Routes>
      </Router>
    </div>
  );
}
