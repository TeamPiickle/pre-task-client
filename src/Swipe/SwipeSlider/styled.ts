/* eslint-disable import/no-unresolved */
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

export const St = {
  Root: styled.main`
    max-width: 48rem;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
  `,

  Swiper: styled(Swiper)`
    height: 40rem;

    display: flex;
    align-items: center;

    margin-top: 11.5rem;
  `,

  SwiperSlide: styled(SwiperSlide)`
    width: 27rem;
    height: 33.8rem;

    background-color: #e5e5e5;
    background: rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(1rem);

    border-radius: 1.4rem;
  `,
};
