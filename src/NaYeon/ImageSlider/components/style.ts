import styled from "styled-components";

export const St = {
  MultipleSlider: styled.section`
    text-align: center;
    padding: 0 4rem;
  `,

  Title: styled.h1`
    font-size: 3rem;
    font-weight: bold;
    color: white;
    padding: 3rem;
  `,

  ImageWrapper: styled.div`
    height: 550px;
    border: 20px solid black;
    box-sizing: border-box;
  `,

  Image: styled.img`
    object-fit: cover;
    height: 450px;
    width: 100%;
    box-sizing: border-box;
  `,
};
