import { useState } from "react";
import styled from "styled-components";

import checked from "../../../asset/icons/checked.png";
import unchecked from "../../../asset/icons/unchecked.png";
import theme from "../../style";

interface VoteButtonProps {
  id: string;
  girlName: string;
  votersNum: number;
}

export default function VoteButton(props: VoteButtonProps) {
  const { id, girlName, votersNum } = props;
  const [myVotes, setMyVotes] = useState<number>(votersNum);

  const handleVotersNum = () => {
    setMyVotes(myVotes + 1);
  };

  return (
    <St.VoteButton>
      <input type="radio" name="girls" id={id} onClick={handleVotersNum} />
      <St.Label htmlFor={id}>
        <span></span>
        <St.Infomation>
          {girlName}
          <p>{myVotes}명</p>
        </St.Infomation>
      </St.Label>
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
  `,

  Label: styled.label`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 69.6rem;
    height: 3.8rem;
  `,

  Infomation: styled.div`
    width: 100%;
    border: 1px solid ${theme.colors.gray3};
    border-radius: 0.4rem;
    padding: 1rem;

    display: flex;
    gap: 0.8rem;
  `,
};
