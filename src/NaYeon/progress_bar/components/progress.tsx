import React, { Component } from "react";
import Slider from "react-slick";

import { St } from "../style";
import ImageSilder from "./slider";

export default function progressBar() {
  return (
    <St.ProgressBar>
      <St.FullRange>
        <St.ProgressRange></St.ProgressRange>
      </St.FullRange>
    </St.ProgressBar>
  );
}
