import styled from "styled-components";

export const St = {
  OptionWrapper: styled.section``,

  OptionName: styled.article`
    font-size: 3rem;
  `,

  OptionButtonWrapper: styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
  `,

  OptionButton: styled.button<{ isactive: boolean }>`
    border: 1px solid lightgrey;
    background-color: ${({ isactive }) => (isactive ? "#afafaf" : "transparent")};
  `,
};
