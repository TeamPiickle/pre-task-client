import { Link } from "react-router-dom";
import styled from "styled-components";

export const St = {
  Root: styled.article``,
  LockButton: styled.button``,

  LetterContents: styled.div``,
  ImageList: styled.ul``,
  Image: styled.li<{ url: string }>`
    background-image: url(${({ url }) => url});
  `,
  Name: styled.h2``,
  Content: styled.p``,
  EditLink: styled(Link)``,
};
