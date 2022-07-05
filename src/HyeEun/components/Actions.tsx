import styled from "styled-components";

import Button from "./common/Button";

export default function Actions() {
  return (
    <St.Actions>
      <Button>좋아요</Button>
      <Button>싫어요</Button>
      <Button>댓글</Button>
    </St.Actions>
  );
}

const St = {
  Actions: styled.section`
    display: flex;
    gap: 0.8rem;
  `,
};
