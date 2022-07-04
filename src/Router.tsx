import { BrowserRouter, Route, Routes } from "react-router-dom";

import HyeEun from "./HyeEun";
import JiYeong from "./JiYeong";
import NaYeon from "./NaYeon";
import Error404 from "./pages/Error404";
import Main from "./pages/Main";

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
