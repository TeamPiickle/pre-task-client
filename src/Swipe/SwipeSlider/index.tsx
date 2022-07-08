/*
마지막 편집자: 22-07-08 joohaem
변경사항 및 참고:
  - swiper 와 motion 컴포넌트 분리
    
고민점:
  - 
*/

/* eslint-disable import/no-unresolved */
// swiper js v7 이상의 에러
import "swiper/css";
import "./styles.css";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { St } from "./styled";

export default function SwipeSlider() {
  return (
    <St.Root>
      <Swiper slidesPerView={"auto"} spaceBetween={44} centeredSlides={true} grabCursor={true}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
          console.log(i);
          return (
            <div key={i} aria-hidden="true" onClick={(e) => console.log(e)}>
              <SwiperSlide key={`slidee-${i}`}>
                <div key={i} aria-hidden="true" onClick={(e) => console.log(e.target)}>
                  Slide {i}
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </St.Root>
  );
}
