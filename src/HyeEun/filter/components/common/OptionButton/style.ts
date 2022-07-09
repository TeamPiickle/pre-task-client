import styled from "styled-components";

export const St = {
  OptionButton: styled.button<{ isactive: boolean }>`
    border: 1px solid lightgrey;
    background-color: ${({ isactive }) => (isactive ? "#afafaf" : "transparent")};
  `,
};
