import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "./Error404";
import Filter from "./Filter";
import HyeEun from "./HyeEun";
import HyeEun_2 from "./HyeEun/filter";
import HyeEun_1 from "./HyeEun/vote";
import JiYeong from "./JiYeong";
import FilterJY from "./JiYeong/filterJY";
import VoteJY from "./JiYeong/voteJY";
import Main from "./Main";
import NaYeon from "./NaYeon";
import NaYeon_1 from "./NaYeon/ImageSlider";
import NaYeon_2 from "./NaYeon/SliderBar";
import Swipe from "./Swipe";
import SwipeSlider from "./Swipe/SwipeSlider";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/he" element={<HyeEun />} />
        <Route path="/he/1" element={<HyeEun_1 />} />
        <Route path="/he/2" element={<HyeEun_2 />} />
        <Route path="/jy" element={<JiYeong />} />
        <Route path="/jy/vote" element={<VoteJY />} />
        <Route path="/jy/filter" element={<FilterJY />} />
        <Route path="/ny" element={<NaYeon />} />
        <Route path="/ny/1" element={<NaYeon_1 />} />
        <Route path="/ny/2" element={<NaYeon_2 />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="/swipe-slider" element={<SwipeSlider />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
