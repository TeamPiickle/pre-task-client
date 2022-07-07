import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "./Error404";
import Filter from "./Filter";
import HyeEun from "./HyeEun";
import JiYeong from "./JiYeong";
import FilterJY from "./JiYeong/filterJY";
import VoteJY from "./JiYeong/voteJY";
import Main from "./Main";
import NaYeon from "./NaYeon";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/he" element={<HyeEun />} />
        <Route path="/jy" element={<JiYeong />} />
        <Route path="/jy/vote" element={<VoteJY />} />
        <Route path="/jy/filter" element={<FilterJY />} />
        <Route path="/ny" element={<NaYeon />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
