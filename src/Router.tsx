import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "./Error404";
import Filter from "./Filter";
import HyeEun from "./HyeEun";
import HyeEun_2 from "./HyeEun/filter";
import HyeEun_1 from "./HyeEun/vote";
import HyeEun_3 from "./HyeEun/web-letter";
import JiYeong from "./JiYeong";
import Main from "./Main";
import NaYeon from "./NaYeon";
import Swipe from "./Swipe";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/he" element={<HyeEun />} />
        <Route path="/he/1" element={<HyeEun_1 />} />
        <Route path="/he/2" element={<HyeEun_2 />} />
        <Route path="/he/3" element={<HyeEun_3 />} />
        <Route path="/jy" element={<JiYeong />} />
        <Route path="/ny" element={<NaYeon />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/swipe" element={<Swipe />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
