import React, { ReactElement } from "react";
import styled from "styled-components";

import {
  ContentsTitle,
  CreatedDate,
  ProfileImage,
  ProfileText,
  ProfileTextContainer,
  UserName,
  UserProfileContainer,
} from "./style";

export default function UserProfile(): ReactElement {
  return (
    <UserProfileContainer>
      <ProfileImage />
      <ProfileText>
        <ProfileTextContainer>
          <UserName>K-연애</UserName>
          <CreatedDate>4일전</CreatedDate>
        </ProfileTextContainer>
        <ContentsTitle>가장 바람끼 많다고 생각하는 MBTI 유형은?? </ContentsTitle>
      </ProfileText>
    </UserProfileContainer>
  );
}
