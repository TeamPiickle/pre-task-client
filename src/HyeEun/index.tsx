import styled from "styled-components";

import ActionButtons from "./components/ActionButtons";
import Header from "./components/Header";
import Survey from "./components/Survey";
import theme from "./style";

export default function index() {
  return (
    <St.Root>
      <Header />
      <Survey />
      <ActionButtons />
    </St.Root>
  );
}

const St = {
  Root: styled.main`
    font-size: 62.5%;
    width: 85.2rem;
    height: auto;
    background-color: ${theme.colors.gray1};
    border: 1px solid ${theme.colors.gray2};
    padding: 1.2rem 1.6rem;
  `,
};
