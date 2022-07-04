import { BrowserRouter, Route, Routes } from "react-router-dom";

import Error404 from "./Error404";
import HyeEun from "./HyeEun";
import JiYeong from "./JiYeong";
import Main from "./Main";
import NaYeon from "./NaYeon";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/he" element={<HyeEun />} />
        <Route path="/jy" element={<JiYeong />} />
        <Route path="/ny" element={<NaYeon />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
