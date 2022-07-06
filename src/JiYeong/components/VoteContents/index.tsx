import React, { useState } from "react";

import { St } from "./style";

export default function VoteContents(): JSX.Element {
  const candidateArr: { id: number; name: string; votedNumber: number }[] = [
    {
      id: 0,
      name: "ESFJ",
      votedNumber: 1000,
    },
    {
      id: 1,
      name: "ENFP",
      votedNumber: 2000,
    },
    {
      id: 2,
      name: "ENTP",
      votedNumber: 3000,
    },
    {
      id: 3,
      name: "ESFP",
      votedNumber: 4000,
    },
    {
      id: 4,
      name: "ESTP",
      votedNumber: 5000,
    },
  ];

  //퍼센트 구하기 위해서 투표자 전체 수 계산.
  const sumOfVoter: number = candidateArr.reduce(
    (accumulator: number, currentObj: { id: number; name: string; votedNumber: number }) => {
      return accumulator + currentObj.votedNumber;
    },
    0,
  );
  const [voterSum, setVoterSum] = useState(sumOfVoter); //투표자 전체 수.
  const [votedNum, setVotedNum] = useState(candidateArr); //선지를 담은 객체배열.
  const [isVoted, setISVoted] = useState(false); //투표한 상태인지 안한상태인지 판단.
  const [currentCandidate, setCurrentCandidate] = useState(0); //현재 클릭했던 보기의 index를 기억.

  const showResult = (key: number) => {
    // isVoted가 false 일 때, 클릭 해당 보기와 전체 투표자수에 +1, 다음 클릭을 위해 현재 클릭된 index를 기억.
    if (isVoted === false) {
      votedNum[key].votedNumber += 1;
      setVotedNum([...votedNum]);
      setVoterSum(voterSum + 1);
      setISVoted(true);
      setCurrentCandidate(key);
      console.log(votedNum[key].votedNumber);
      // isVoted가 true 일 때,
    } else {
      // 방금 클릭했던 걸 다시 클릭했다면 단순 클릭 취소처리.
      setISVoted(false);
      if (currentCandidate === key) {
        votedNum[key].votedNumber -= 1;
        setVotedNum([...votedNum]);
        setVoterSum(voterSum - 1);
        console.log(votedNum[key].votedNumber);

        // 다른걸 클릭한다면 방금클릭했던 보기에 -1 클릭한 보기에 +1.
      } else {
        votedNum[currentCandidate].votedNumber -= 1;
        votedNum[key].votedNumber += 1;
        setVotedNum([...votedNum]);
        console.log(votedNum[key].votedNumber);
      }
    }
  };

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
