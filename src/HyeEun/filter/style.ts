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
    margin: 0.5rem;
  `,

  OptionWrapper: styled.section``,

  OptionName: styled.article`
    font-size: 3rem;
  `,

  OptionButtonWrapper: styled.div`
    display: flex;
    gap: 0.5rem;
    padding: 0.5rem;
  `,
};
