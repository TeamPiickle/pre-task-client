import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import { St } from "./style";
export default function SliderBar() {
  const settings = {
    slide: "div",
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dotsClass: "slick-dots",
  };

  return (
    <St.MultipleSlider>
      <St.Title> ⭕ 킹받는 넌센스 퀴즈 ❌ </St.Title>
      <St.SliderWrapper>
        <Slider {...settings}>
          <St.ImageWrapper>
            <St.Image
              src="https://every7hing.com/wp-content/uploads/2022/02/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B32-4.jpeg"
              alt="1번문제"
            />
          </St.ImageWrapper>
          <St.ImageWrapper>
            <St.Image
              src="https://every7hing.com/wp-content/uploads/2022/02/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B33-4.jpeg"
              alt="1번정답"
            />
          </St.ImageWrapper>
          <St.ImageWrapper>
            <St.Image
              src="https://every7hing.com/wp-content/uploads/2022/02/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B34-2.jpeg"
              alt="2번문제"
            />
          </St.ImageWrapper>
          <St.ImageWrapper>
            <St.Image
              src="https://every7hing.com/wp-content/uploads/2022/02/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B35-2.jpeg"
              alt="2번정답"
            />
          </St.ImageWrapper>
          <St.ImageWrapper>
            <St.Image
              src="https://every7hing.com/wp-content/uploads/2022/02/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B36-2.jpeg"
              alt="3번문제"
            />
          </St.ImageWrapper>
          <St.ImageWrapper>
            <St.Image
              src="https://every7hing.com/wp-content/uploads/2022/02/%E1%84%89%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%83%E1%85%B37-1.jpeg"
              alt="3번정답"
            />
          </St.ImageWrapper>
        </Slider>
      </St.SliderWrapper>
    </St.MultipleSlider>
  );
}
