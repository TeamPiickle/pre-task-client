import styled from "styled-components";

import SarangHyeeun from "../asset/SarangHyeeun.png";
import ActionButtons from "./components/ActionButtons";
import Header from "./components/Header";
import Survey from "./components/Survey";
import theme from "./style";

export default function index() {
  return (
    <St.Root>
      <St.ProfileWrapper>
        <St.Profile src={SarangHyeeun} alt="프로필 사진" />
      </St.ProfileWrapper>
      <St.MainWrapper>
        <Header />
        <Survey />
        <ActionButtons />
      </St.MainWrapper>
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
    display: flex;
  `,

  ProfileWrapper: styled.span``,
  Profile: styled.img`
    width: 4rem;
    border-radius: 50%;
    background-color: white;
    margin-right: 1.6rem;
  `,
  MainWrapper: styled.span``,
};
