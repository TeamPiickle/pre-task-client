import styled from "styled-components";

interface Profile {
  url: string;
}

export default function Header() {
  return (
    <St.Header>
      <St.ImgWrapper>
        <img src="SarangHyeeun" alt="프로필 사진" />
      </St.ImgWrapper>
      <St.InfomationWrapper>
        <St.Name>헤롱해랑사</St.Name>
        <St.Date>4일 전</St.Date>
        <St.Content>혜은이랑 가장 닮았다고 생각하는 사람은 누구 ??</St.Content>
      </St.InfomationWrapper>
    </St.Header>
  );
}

const St = {
  Header: styled.header``,
  ImgWrapper: styled.span``,
  InfomationWrapper: styled.span``,
  Name: styled.strong``,
  Date: styled.p``,
  Content: styled.p``,
};
