import styled from "styled-components";

import SarangHyeeun from "../../asset/SarangHyeeun.png";
import theme from "../style";

export default function Header() {
  return (
    <St.Header>
      <St.ProfileWrapper>
        <St.Profile src={SarangHyeeun} alt="프로필 사진" />
      </St.ProfileWrapper>
      <St.ContentsWrapper>
        <St.InfomationWrapper>
          <strong>헤롱해랑사</strong>
          <p>4일 전</p>
        </St.InfomationWrapper>
        <St.Content>
          혜은이랑 가장 닮았다고 생각하는 사람은 누구 ??
          <br />
          <br />
          (솔직하게 답해주쎄용^^)
        </St.Content>
      </St.ContentsWrapper>
    </St.Header>
  );
}

const St = {
  Header: styled.header`
    display: flex;
  `,

  ProfileWrapper: styled.span``,

  Profile: styled.img`
    /* ${theme.center} */
    width: 4rem;
    border-radius: 50%;
    background-color: white;
    margin-right: 1.6rem;
  `,

  ContentsWrapper: styled.span``,

  InfomationWrapper: styled.div`
    display: flex;
    gap: 0.8rem;
    margin-bottom: 0.2rem;
    strong {
      ${theme.fonts.medium}
      color: ${theme.colors.black};
    }

    p {
      ${theme.fonts.small}
      color: ${theme.colors.gray3};
    }
  `,

  Content: styled.p`
    ${theme.fonts.large}
    color: ${theme.colors.black};
  `,
};
