import styled from "styled-components";

import SarangHyeeun from "../../asset/images/SarangHyeeun.png";
import ActionButtons from "./components/ActionButtons";
import Header from "./components/Header";
import Survey from "./components/Survey";
import theme from "./style";

export default function index() {
  return <St.Root>뿡랑해</St.Root>;
}

const St = {
  Root: styled.div`
    font-size: 62.5%;

    height: auto;
    background-color: ${theme.colors.gray1};
    border: 1px solid ${theme.colors.gray2};
    padding: 1.2rem 1.6rem;
    display: flex;
    box-sizing: border-box;
    width: 100%;
  `,

  ProfileWrapper: styled.span``,
  Profile: styled.img`
    width: 4rem;
    border-radius: 50%;
    background-color: white;
    margin-right: 1.6rem;
  `,
  MainWrapper: styled.main`
    width: 100%;
  `,
};
