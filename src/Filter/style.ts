import styled from "styled-components";

export const St = {
  FilterTitle: styled.em`
    font-size: 6rem;
  `,

  FilterTagsWrapper: styled.ul`
    display: flex;
    gap: 5rem;
  `,

  FilterTag: styled.li<{ isactive: boolean }>`
    border: 0.5rem solid #eeeeee;

    font-size: 3rem;

    background-color: ${({ isactive }) => (isactive ? "#afafaf" : "transparent")};
  `,

  SubmitBtn: styled.button`
    border: 0.5rem solid red;

    font-size: 3rem;
  `,
};
