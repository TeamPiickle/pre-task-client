import { useState } from "react";
import styled from "styled-components";

import girls from "../core/girls";
import Option from "./common/Option";

interface Girl {
  id: number;
  name: string;
  votedNumber: number;
}

export default function Survey() {
  const sumOfVoter: number = girls.reduce(
    (accumulator: number, currentObj: { id: number; name: string; votedNumber: number }) => {
      return accumulator + currentObj.votedNumber;
    },
    0,
  );
  const [voterSum, setVoterSum] = useState(sumOfVoter); // 투표자 전체수
  const [isVoted, setIsVoted] = useState(false); // 투표 여부
  const [currentCandidate, setCurrentCandidate] = useState(0); // 현재 클릭했던 보기의 index를 기억

  return (
    <St.Survey>
      <St.Total>{voterSum}명 투표</St.Total>
      <St.OptionContainer>
        {girls.map((girl: Girl) => {
          return (
            <Option
              id={girl.id}
              name={girl.name}
              votedNumber={girl.votedNumber}
              voterSum={voterSum}
              setVoterSum={setVoterSum}
              isVoted={isVoted}
              setIsVoted={setIsVoted}
              currentCandidate={currentCandidate}
              setCurrentCandidate={setCurrentCandidate}
              key={girl.id}
            />
          );
        })}
      </St.OptionContainer>
    </St.Survey>
  );
}

const St = {
  Survey: styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
  `,
  Total: styled.p`
    margin: 1.2rem 0;
  `,
  OptionContainer: styled.ul``,
};
