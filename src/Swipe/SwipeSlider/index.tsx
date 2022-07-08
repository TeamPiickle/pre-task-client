/* eslint-disable import/no-unresolved */
// swiper js v7 이상의 에러
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import { useState } from "react";
// import "./styles.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { St } from "./styled";

export default function SwipeSlider() {
  const [swiper, setSwiper] = useState<any>(null);
  const [idx, setIdx] = useState(0);

  // SwiperCore.use([Navigation]);

  // const swiperParams = {
  //   navigation: true,
  //   onSwiper: setSwiper,
  //   onSlideChange: (e: any) => setIdx(e.activeIndex),
  // };

  return (
    <St.Root>
      s
      {/* <Swiper {...swiperParams}>
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper> */}
    </St.Root>
  );
}
