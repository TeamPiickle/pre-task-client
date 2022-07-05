import styled from "styled-components";

import checked from "../../../asset/icons/checked.png";
import unchecked from "../../../asset/icons/unchecked.png";
import theme from "../../style";

interface GirlProps {
  id: string;
  girlName: string;
}

export default function VoteButton(props: GirlProps) {
  const { id, girlName } = props;
  return (
    <St.VoteButton>
      <input type="radio" name="girls" id={id} />
      <label htmlFor={id}>
        <span></span>
        <div>{girlName}</div>
      </label>
    </St.VoteButton>
  );
}

const St = {
  VoteButton: styled.article`
    ${theme.fonts.large}
    color: ${theme.colors.black};
    margin-bottom: 1.5rem;
    input {
      display: none;
    }
    input + label span {
      display: inline-block;
      width: 1.6rem;
      height: 1.6rem;
      background: url(${unchecked});
      cursor: pointer;
    }
    input:checked + label span {
      background: url(${checked});
    }
    label {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 69.6rem;
      height: 3.8rem;
    }
    div {
      width: 100%;
      border: 1px solid ${theme.colors.gray3};
      border-radius: 0.4rem;
      padding: 1rem;
    }
  `,
};
