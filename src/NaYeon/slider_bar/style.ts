import styled from "styled-components";

export const St = {
  Section: styled.section`
    height: 100vh;
    background-color: black;
  `,

  //silder
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
    //height: 350px;
    width: 50%;
    border: 20px solid black;
    box-sizing: border-box;
  `,

  Image: styled.img`
    margin: auto;
    object-fit: cover;
    height: 450px;
    width: 50%;
    box-sizing: border-box;
  `,
};
