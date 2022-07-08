/* eslint-disable import/no-unresolved */
// swiper js v7 이상의 에러
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { St } from "./styled";

export default function SwipeSlider() {
  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={21}
        centeredSlides={true}
        grabCursor={true}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
      >
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
    </div>
  );
}
