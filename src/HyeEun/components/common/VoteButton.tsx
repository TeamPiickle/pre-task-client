import styled from "styled-components";

import theme from "../../style";

interface GirlProps {
  id: string;
  girlName: string;
}

export default function VoteButton(props: GirlProps) {
  const { id, girlName } = props;
  return (
    <St.VoteButton>
      <St.Input type="radio" name="girls" id={id} />
      <St.Label htmlFor={id}>{girlName}</St.Label>
    </St.VoteButton>
  );
}

const St = {
  VoteButton: styled.p`
    ${theme.fonts.large}
    color: ${theme.colors.black};
  `,
  Input: styled.input`
    display: none;
  `,
  Label: styled.label``,
};
