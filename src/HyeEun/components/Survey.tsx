import styled from "styled-components";

import girls from "../core/Girls";
import VoteButton from "./common/VoteButton";

interface Girl {
  id: string;
  girlName: string;
}

export default function Survey() {
  return (
    <St.Survey>
      <St.Total>42.1만명 투표</St.Total>

      {girls.map((girl: Girl) => {
        return <VoteButton id={girl.id} girlName={girl.girlName} key={girl.id} />;
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
