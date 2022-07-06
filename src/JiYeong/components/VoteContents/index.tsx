import React, { useEffect, useState } from "react";

import { candidateArr } from "../../core/candidate";
import { St } from "./style";

export default function VoteContents(): JSX.Element {
  //퍼센트 구하기 위해서 투표자 전체 수 계산.
  const sumOfVoter: number = candidateArr.reduce(
    (accumulator: number, currentObj: { id: number; name: string; votedNumber: number }) => {
      return accumulator + currentObj.votedNumber;
    },
    0,
  );
  const [voterSum, setVoterSum] = useState(sumOfVoter); //투표자 전체 수.
  const [votedNum, setVotedNum] = useState(candidateArr); //선지를 담은 객체배열.
  const [isVoted, setIsVoted] = useState(false); //투표한 상태인지 안한상태인지 판단.
  const [currentCandidate, setCurrentCandidate] = useState(0); //현재 클릭했던 보기의 index를 기억.

  const showResult = (key: number) => {
    // isVoted가 false 일 때, 클릭 해당 보기와 전체 투표자수에 +1, 다음 클릭을 위해 현재 클릭된 index를 기억.
    if (isVoted === false) {
      const tempCanditate = [...votedNum];
      tempCanditate[key].votedNumber += 1;
      setVotedNum(tempCanditate);
      setVoterSum(voterSum + 1);
      setIsVoted(true);
      setCurrentCandidate(key);
      // isVoted가 true 일 때,
    } else {
      // 방금 클릭했던 걸 다시 클릭했다면 단순 클릭 취소처리.
      if (currentCandidate === key) {
        setIsVoted(false);
        const tempCanditate = [...votedNum];
        tempCanditate[key].votedNumber -= 1;
        setVotedNum(tempCanditate);
        setVoterSum(voterSum - 1);

        // 다른걸 클릭한다면 방금클릭했던 보기에 -1 클릭한 보기에 +1.
      } else {
        const tempCanditate = [...votedNum];
        tempCanditate[currentCandidate].votedNumber -= 1;
        tempCanditate[key].votedNumber += 1;
        setVotedNum(tempCanditate);
        setCurrentCandidate(key);
      }
    }
  };

  useEffect(() => {
    console.log(votedNum);
  }, [votedNum]);

  return (
    <St.VoteContentsContainer>
      <St.VoteDiscription>영상에 참고용 자료로 들어갈 예정이에요!</St.VoteDiscription>
      <St.VoterCount>4.5천 명</St.VoterCount>
      <St.OptionListContainer>
        {candidateArr.map((candidate) => {
          if (isVoted === false) {
            return (
              <St.OptionContentWrapper key={candidate.id} onClick={() => showResult(candidate.id)}>
                <St.OptionListContent>
                  <St.OptionListMark>○</St.OptionListMark>
                  <St.OptionListText>{candidate.name}</St.OptionListText>
                </St.OptionListContent>
              </St.OptionContentWrapper>
            );
          } else {
            return (
              <St.OptionContentWrapper color="#ffcdd2" key={candidate.id} onClick={() => showResult(candidate.id)}>
                <St.OptionListContent>
                  <St.OptionListMark>○</St.OptionListMark>
                  <St.OptionListText>{candidate.name}</St.OptionListText>
                </St.OptionListContent>
                <St.VotedPercent>{Math.floor((candidate.votedNumber / voterSum) * 100)}%</St.VotedPercent>
              </St.OptionContentWrapper>
            );
          }
        })}
      </St.OptionListContainer>
    </St.VoteContentsContainer>
  );
}
