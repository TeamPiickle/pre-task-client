import styled from "styled-components";

import girls from "../core/girls";
import VoteButton from "./common/VoteButton";

interface Girl {
  id: string;
  girlName: string;
  votersNum: number;
}

export default function Survey() {
  return (
    <St.Survey>
      <St.Total>421명 투표</St.Total>

      {girls.map((girl: Girl) => {
        return <VoteButton id={girl.id} girlName={girl.girlName} votersNum={girl.votersNum} key={girl.id} />;
      })}
    </St.Survey>
  );
}

const St = {
  Survey: styled.section`
    display: flex;
    flex-direction: column;
  `,
  Total: styled.p`
    margin: 1.2rem 0;
  `,
};
