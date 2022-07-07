import { useState } from "react";
import styled from "styled-components";

import checked from "../../../asset/icons/checked.png";
import unchecked from "../../../asset/icons/unchecked.png";
import girls from "../../core/girls";
import theme from "../../style";

interface OptionProps {
  id: number;
  name: string;
  votedNumber: number;
  voterSum: number;
  setVoterSum: React.Dispatch<React.SetStateAction<number>>;
  isVoted: boolean;
  setIsVoted: React.Dispatch<React.SetStateAction<boolean>>;
  currentCandidate: number;
  setCurrentCandidate: React.Dispatch<React.SetStateAction<number>>;
}

export default function Option(props: OptionProps) {
  const { id, name, votedNumber, voterSum, setVoterSum, isVoted, setIsVoted, currentCandidate, setCurrentCandidate } =
    props;
  const [votedNum, setVotedNum] = useState(girls); // 선지를 담은 객체 배열
  const votedPercent = Math.floor((votedNumber / voterSum) * 100); // 투표비율 계산

  const showResult = (key: number) => {
    // isVoted가 false일 때 클릭 해당 보기의 전체 투표자수에 +1, 다음 클릭을 위해 현재 클릳괸 index를 기억
    if (isVoted === false) {
      const tempCandidate = [...votedNum];
      tempCandidate[key].votedNumber += 1;
      setVotedNum(tempCandidate);
      setVoterSum(voterSum + 1);
      setIsVoted(true);
      setCurrentCandidate(key);
    }
    // isVoted가 true일 때,
    else {
      // 방금 클릭했던 걸 다시 클릭했다면 단순 클릭 취소 처리
      if (currentCandidate === key) {
        const tempCandidate = [...votedNum];
        tempCandidate[key].votedNumber -= 1;
        setVotedNum(tempCandidate);
        setIsVoted(false);
        setVoterSum(voterSum - 1);
      }
      // 방금 클릭했던 것과 다른 걸 클릭한다면 방금 클릭했던 보기에 -1, 현재 클릭한 보기에 +1
      else {
        const tempCandidate = [...votedNum];
        tempCandidate[currentCandidate].votedNumber -= 1;
        tempCandidate[key].votedNumber += 1;
        setVotedNum(tempCandidate);
        setCurrentCandidate(key);
      }
    }
  };

  return (
    <St.OptionList onClick={() => showResult(id)}>
      <St.OptionListMark isactive={isVoted && id === currentCandidate}></St.OptionListMark>

      <St.OptionListContent isactive={isVoted && id === currentCandidate}>
        <St.VotedPercentBox
          isactive={isVoted && id === currentCandidate}
          ispicked={isVoted}
          votedPercent={votedPercent}></St.VotedPercentBox>
        <St.OptionListContentWrapper>
          <St.OptionListText>{name}</St.OptionListText>
          {isVoted === true && <St.VotedPercent>{votedPercent}%</St.VotedPercent>}
        </St.OptionListContentWrapper>
      </St.OptionListContent>
    </St.OptionList>
  );
}

const St = {
  OptionList: styled.li`
    display: flex;
    align-items: center;
    gap: 0.2rem;
    width: 100%;
  `,

  OptionListMark: styled.span<{ isactive: boolean }>`
    width: 2rem;
    height: 2rem;
    background: url(${unchecked});
    background: url(${({ isactive }) => (isactive ? checked : unchecked)});

    background-repeat: no-repeat;
    cursor: pointer;
  `,

  OptionListContent: styled.article<{ isactive: boolean }>`
    display: flex;
    position: relative;

    border: 1px solid ${({ isactive }) => (isactive ? "#065fd4" : "#606060")};

    border-radius: 0.4rem;
    width: 100%;

    margin-bottom: 0.5rem;

    ${theme.fonts.large}
    color: ${theme.colors.black};

    cursor: pointer;
  `,

  VotedPercentBox: styled.div<{ isactive: boolean; votedPercent: number; ispicked: boolean }>`
    width: ${({ ispicked, votedPercent }) => (ispicked ? votedPercent : 0)}%;
    height: 100%;
    background-color: ${({ isactive }) => (isactive ? "skyblue" : "#d8d8d8")};
    position: absolute;
  `,

  OptionListContentWrapper: styled.div`
    margin: 1rem;
    display: flex;
    gap: 0.8rem;
    z-index: 99;
  `,

  OptionListText: styled.p``,
  VotedPercent: styled.p``,
};
