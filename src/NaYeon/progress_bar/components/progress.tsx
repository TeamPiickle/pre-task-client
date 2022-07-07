// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";

// import Slider from "react-slick";
import { St } from "../style";
export default function progressBar() {
  return (
    <St.ProgressBar>
      <St.FullRange>
        <St.ProgressRange></St.ProgressRange>
      </St.FullRange>
    </St.ProgressBar>
  );
}
