import styled from "styled-components";

export const St = {
  TitleText: styled.h1`
    font-size: 60px;
  `,

  ContentsContainerWrapper: styled.section`
    width: 50%;
    display: flex;
    justify-content: space-around;
  `,

  ContentsContainer: styled.article`
    border: solid 2px black;
    border-radius: 20px;
    padding: 10px;
  `,

  ContentsText: styled.strong`
    font-size: 30px;
  `,

  SubmitBtn: styled.button`
    background-color: black;
    color: white;
    font-size: 20px;
    border-radius: 20px;
    margin: 50px auto auto 230px;
    padding: 10px 10px;
  `,
};
