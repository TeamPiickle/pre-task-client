import styled from "styled-components";

export const St = {
  Section: styled.section`
    height: 100vh;
    background-color: black;
  `,

  MultipleSlider: styled.section`
    text-align: center;
    padding: 0 4rem;
  `,

  Title: styled.h1`
    padding: 3rem;

    font-size: 3rem;
    font-weight: bold;
    color: white;
  `,

  //silde-image
  ImageWrapper: styled.div`
    width: 50%;

    border: 20px solid black;
    box-sizing: border-box;
  `,

  Image: styled.img`
    margin: auto;
    height: 450px;
    width: 50%;

    object-fit: cover;
    box-sizing: border-box;
  `,

  //slide_bar
  SliderWrapper: styled.div`
    .slider-container {
      text-align: center;
      position: relative;

      margin-left: auto;
      width: 100%;
      max-width: 800px;
    }

    .slider-container .range-slider {
      position: absolute;
      top: 10px;

      padding: 2px;
      width: 78%;
      border: none;
      box-shadow: none;
    }

    .slick-dots {
      align-items: center;
      display: flex;
      justify-content: center;

      list-style: none;

      padding: 0;
      margin: auto;
      min-height: auto;
    }

    .slick-dots li {
      margin: 0 -3px;
      height: 1rem;
      width: 13rem;

      background-color: gray;
      border-radius: 4px;
    }

    .slick-dots button {
      border: none;
      width: 100%;
    }

    .slick-dots .slick-active button {
      width: 100%;
      height: 1rem;

      background: white;
      border-radius: 4px;
    }

    .slick-dots li button:before {
      width: 100%;
      content: "";
    }
  `,
};
