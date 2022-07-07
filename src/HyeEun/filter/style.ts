import styled from "styled-components";

import theme from "../../style";

export const St = {
  Root: styled.div`
    font-size: 62.5%;
    display: flex;
    flex-direction: column;
  `,

  SubmitButton: styled.button`
    ${theme.button}
  `,
};
