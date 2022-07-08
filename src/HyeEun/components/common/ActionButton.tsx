import styled from "styled-components";

import theme from "../../style";

type ActionButtonProps = {
  children: string;
};

export default function ActionButton({ children }: ActionButtonProps) {
  return <St.ActionButton type="button">{children}</St.ActionButton>;
}

const St = {
  ActionButton: styled.button`
    ${theme.fonts.small}
    color: ${theme.colors.gray3};
  `,
};
