import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
  Root: styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  Title: styled.h1``,
  WriteLetterLink: styled(Link)``,
  LetterSection: styled.section`
    display: flex;
    flex-direction: column;
  `,
};
