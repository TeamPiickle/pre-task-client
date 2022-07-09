import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

import { St } from "./style";
export default function ImageSlider() {
  const settings = {
    slide: "div",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <St.MultipleSlider>
      <St.Title> ⭐ 서울 야경 명소 ⭐ </St.Title>
      <Slider {...settings}>
        <St.ImageWrapper>
          <St.Image
            src="https://a.cdn-hotels.com/gdcs/production63/d50/0fde04cd-4292-4610-a90b-c9dc4eafe94d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt="남산"
          />
        </St.ImageWrapper>
        <St.ImageWrapper>
          <St.Image
            src="https://a.cdn-hotels.com/gdcs/production19/d1764/0fdc6746-e0a8-4abc-929e-e4a3e237b95b.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt="반포대교"
          />
        </St.ImageWrapper>
        <St.ImageWrapper>
          <St.Image
            src="https://a.cdn-hotels.com/gdcs/production180/d1159/18b35d95-6e59-4858-9647-998561811c63.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt="낙산공원"
          />
        </St.ImageWrapper>
        <St.ImageWrapper>
          <St.Image
            src="https://a.cdn-hotels.com/gdcs/production87/d663/2c8c7080-0d39-4e68-bfb8-c61728871732.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt="63빌딩"
          />
        </St.ImageWrapper>
        <St.ImageWrapper>
          <St.Image
            src="https://a.cdn-hotels.com/gdcs/production156/d184/673f5857-d1be-4dc7-80ea-57f303b7d7ac.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt="선유도공원"
          />
        </St.ImageWrapper>
        <St.ImageWrapper>
          <St.Image
            src="https://a.cdn-hotels.com/gdcs/production158/d1984/03144fb6-60c0-4d8b-9b11-f0f7a4bf2c4c.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"
            alt="북악팔각정"
          />
        </St.ImageWrapper>
      </Slider>
    </St.MultipleSlider>
  );
}
