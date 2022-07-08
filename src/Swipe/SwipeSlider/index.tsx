/* eslint-disable import/no-unresolved */
// swiper js v7 이상의 에러
import "swiper/css";
import "./styles.css";

import { Swiper, SwiperSlide } from "swiper/react";

import { St } from "./styled";

export default function SwipeSlider() {
  return (
    <St.Root>
      <Swiper slidesPerView={"auto"} spaceBetween={44} centeredSlides={true} grabCursor={true}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </St.Root>
  );
}
