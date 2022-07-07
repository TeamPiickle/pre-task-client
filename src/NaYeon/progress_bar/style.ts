import styled from "styled-components";

export const St = {
  Section: styled.section`
    height: 100vh;
    background-color: black;
  `,

  ProgressBar: styled.section`
    margin: auto;
    width: 50%;
    border: 0.1rem;
  `,

  FullRange: styled.div`
    text-align: center;
    width: 100%;
    height: 1rem;

    background-color: lightgray;
    border-radius: 4px;
  `,

  ProgressRange: styled.div`
    height: 100%;
    width: 33%;

    background-color: white;
    border-radius: 4px;
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
    object-fit: cover;
    height: 450px;
    width: 50%;
    box-sizing: border-box;
  `,
};
