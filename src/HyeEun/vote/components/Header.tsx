import styled from "styled-components";

import theme from "../../../style";

export default function Header() {
  return (
    <St.Header>
      <St.InfomationWrapper>
        <St.NicknameInfo>헤롱해랑사</St.NicknameInfo>
        <St.DateInfo>4일 전</St.DateInfo>
      </St.InfomationWrapper>
      <St.Content>
        혜은이랑 가장 닮았다고 생각하는 사람은 누구 ??
        <br />
        <br />
        (솔직하게 답해주쎄용^^)
      </St.Content>
    </St.Header>
  );
}

const St = {
  Header: styled.header`
    display: flex;
    flex-direction: column;
  `,

  InfomationWrapper: styled.div`
    display: flex;
    gap: 0.8rem;
    margin-bottom: 0.2rem;
  `,
  NicknameInfo: styled.strong`
    ${theme.fonts.medium}
    color: ${theme.colors.black};
  `,

  DateInfo: styled.p`
    ${theme.fonts.small}
    color: ${theme.colors.gray3};
  `,

  Content: styled.p`
    ${theme.fonts.large}
    color: ${theme.colors.black};
  `,
};
