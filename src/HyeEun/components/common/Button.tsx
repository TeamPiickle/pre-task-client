import styled from "styled-components";

import theme from "../../style";

type ButtonProps = {
  children: string;
};

export default function Button({ children }: ButtonProps) {
  return <St.Button>{children}</St.Button>;
}

const St = {
  Button: styled.button`
    ${theme.fonts.small}
    color: ${theme.colors.gray3};
  `,
};
