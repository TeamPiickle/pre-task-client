/*
마지막 편집자: 22-07-08 joohaem
변경사항 및 참고:
  - swiper 와 motion 컴포넌트 분리
    
고민점:
  - 
*/

/* eslint-disable import/no-unresolved */
// swiper js v7 이상의 에러
import "swiper/scss";
import "./styles.scss";

import { useEffect, useRef, useState } from "react";
import SwiperType from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import { IcHeart, IcStrokeHeart } from "../../asset/icons";
import { ImgClickHeart } from "../../asset/images";
import CustomHeart from "./CustomHeart";
import CustomStrokeHeart from "./CustomStrokeHeart";
import { St } from "./styled";

export default function SwipeSlider() {
  const [swiperRef, setSwiperRef] = useState<SwiperType>();

  useEffect(() => {
    console.log(swiperRef);

    // swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <St.Root>
      <button type="button" onClick={() => swiperRef?.slideNext()}>
        sad
      </button>
      <div style={{ width: "2rem", height: "3rem" }}>
        <CustomHeart />
        <CustomStrokeHeart />
      </div>
      <Swiper
        // speed={300}
        onSwiper={setSwiperRef}
        onClick={() => console.log("sfd")}
        slidesPerView={"auto"}
        spaceBetween={44}
        centeredSlides={true}
        grabCursor={true}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, i) => {
          return (
            <div key={i} aria-hidden="true" onClick={(e) => console.log(e)}>
              <SwiperSlide key={`slidee-${i}`}>
                {/* {({ isActive }) => isActive && <div>asdf</div>} */}
                <div key={i} aria-hidden="true" onClick={(e) => console.log(e.target)}>
                  Slide {i}
                  <img style={{ width: "3rem" }} src={ImgClickHeart} alt="하트" />
                </div>
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </St.Root>
  );
}
