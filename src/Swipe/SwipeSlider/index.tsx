/* eslint-disable import/no-unresolved */
// swiper js v7 이상의 에러
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { St } from "./styled";

export default function SwipeSlider() {
  return (
    <div>
      <St.Swiper
        slidesPerView="auto"
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <St.SwiperSlide>Slide 1</St.SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperSlide>Slide 2</St.SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperSlide>Slide 3</St.SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperSlide>Slide 4</St.SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperSlide>Slide 5</St.SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperSlide>Slide 6</St.SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperSlide>Slide 7</St.SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperSlide>Slide 8</St.SwiperSlide>
        </SwiperSlide>
        <SwiperSlide>
          <St.SwiperSlide>Slide 9</St.SwiperSlide>
        </SwiperSlide>
      </St.Swiper>
    </div>
  );
}
