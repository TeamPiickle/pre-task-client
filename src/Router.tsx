import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "./Error404";
import Filter from "./Filter";
import HyeEun from "./HyeEun";
import JiYeong from "./JiYeong";
import Main from "./Main";
import NaYeon from "./NaYeon";
import NaYeon_1 from "./NaYeon/image_slider";
import NaYeon_2 from "./NaYeon/slider_bar";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/he" element={<HyeEun />} />
        <Route path="/jy" element={<JiYeong />} />
        <Route path="/ny" element={<NaYeon />} />
        <Route path="/ny/1" element={<NaYeon_1 />} />
        <Route path="/ny/2" element={<NaYeon_2 />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
