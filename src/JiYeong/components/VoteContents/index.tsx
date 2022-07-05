import React, { useState } from "react";

import {
  OptionListContainer,
  OptionListContent,
  OptionListMark,
  OptionListText,
  VoteContentsContainer,
  VoteDiscription,
  VotedPercent,
  VoterCount,
} from "./style";

export default function VoteContents(): JSX.Element {
  const candidateArr: { name: string; votedNumber: number }[] = [
    {
      name: "ESFJ",
      votedNumber: 1000,
    },
    {
      name: "ENFP",
      votedNumber: 2000,
    },
    {
      name: "ENTP",
      votedNumber: 3000,
    },
    {
      name: "ESFP",
      votedNumber: 4000,
    },
    {
      name: "ESTP",
      votedNumber: 5000,
    },
  ];
  const sumOfVoter: number = candidateArr.reduce(
    (accumulator: number, currentObj: { name: string; votedNumber: number }) => {
      return accumulator + currentObj.votedNumber;
    },
    0,
  );
  const [voterSum, setVoterSum] = useState<number>(sumOfVoter);
  const [votedNum, setVotedNum] = useState(candidateArr);
  const [isVoted, setISVoted] = useState(false);
  const [currentCandidate, setCurrentCandidate] = useState<number>(0);

  const showResult = (key: number) => {
    if (isVoted === false) {
      votedNum[key].votedNumber += 1;
      setVotedNum([...votedNum]);
      setVoterSum(voterSum + 1);
      setISVoted(true);
      setCurrentCandidate(key);
    } else {
      setISVoted(false);
      if (currentCandidate === key) {
        votedNum[key].votedNumber -= 1;
        setVotedNum([...votedNum]);
        setVoterSum(voterSum - 1);
      } else {
        votedNum[currentCandidate].votedNumber -= 1;
        votedNum[key].votedNumber += 1;
        setVotedNum([...votedNum]);
      }
    }
  };

  return (
    <VoteContentsContainer>
      <VoteDiscription>영상에 참고용 자료로 들어갈 예정이에요!</VoteDiscription>
      <VoterCount>4.5천 명</VoterCount>
      <OptionListContainer>
        {candidateArr.map((candidate, key: number) => {
          if (isVoted === false) {
            return (
              <OptionListContent key={key} onClick={() => showResult(key)}>
                <OptionListMark>○</OptionListMark>
                <OptionListText>{candidate.name}</OptionListText>
              </OptionListContent>
            );
          } else {
            return (
              <OptionListContent key={key} onClick={() => showResult(key)}>
                <OptionListMark>○</OptionListMark>
                <OptionListText>{candidate.name}</OptionListText>
                <VotedPercent>{Math.floor((candidate.votedNumber / voterSum) * 100)}%</VotedPercent>
              </OptionListContent>
            );
          }
        })}
      </OptionListContainer>
    </VoteContentsContainer>
  );
}
