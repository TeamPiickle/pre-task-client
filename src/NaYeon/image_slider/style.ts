import styled from "styled-components";

export const St = {
  Section: styled.section`
    background-color: black;
    height: 100vh;
  `,

  MultipleSlider: styled.section`
    text-align: center;
    padding: 0 4rem;
  `,

  Title: styled.h1`
    font-size: 2rem;
    font-weight: bold;
    color: white;
    padding: 3rem;
  `,

  ImageWrapper: styled.div`
    height: 350px;
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
