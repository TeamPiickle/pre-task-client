import styled from "styled-components";

export const UserProfileContainer = styled.header`
  display: flex;
  margin: 20px auto auto 200px;
  align-items: center;
`;
export const ProfileImage = styled.article`
  height: 100px;
  width: 100px;
  background-color: #ffcdd2;
  border-radius: 50px;
`;
export const ProfileText = styled.article`
  margin-left: 20px;
`;
export const ProfileTextContainer = styled.div`
  display: flex;
`;
export const UserName = styled.p`
  font-size: 20px;
  margin-right: 10px;
  padding: 0;
`;
export const CreatedDate = styled.p`
  font-size: 15px;
  color: gray;
  margin-top: 2px;
`;
export const ContentsTitle = styled.p`
  font-size: 30px;
  margin-top: 10px;
`;
