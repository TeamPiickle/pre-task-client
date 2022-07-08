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
    font-size: 3rem;
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

  SliderWrapper: styled.div`
    .slider-container {
      text-align: center;
      width: 100%;
      max-width: 800px;
      margin-left: auto;
      position: relative;
    }

    .slider-container .range-slider {
      width: 78%;
      border: none;
      box-shadow: none;
      position: absolute;
      top: 10px;
      padding: 2px;
    }
    .slick-dots {
      list-style: none;
      padding: 0;
      margin: auto;
      align-items: center;
      display: flex;
      justify-content: center;
      min-height: auto;
    }
    .slick-dots li {
      margin: 0 -3px;
      height: 1rem;
      background-color: lightgray;
      width: 13rem;
      border-radius: 4px;
    }
    .slick-dots button {
      border: none;
      background: gray;
      width: 100%;
      font-size: 0;
      border-radius: 4px;
    }
    .slick-dots .slick-active button {
      background: white;
      width: 100%;
      border-radius: 4px;
    }

    .slick-dots li button:before {
      width: 100%;
      height: 1rem;
      content: "";
      line-height: 0px;
    }
  `,
};
