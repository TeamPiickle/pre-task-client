import styled from "styled-components";

import ActionButton from "./common/ActionButton";

export default function ActionButtons() {
  return (
    <St.ActionButtons>
      <ActionButton>좋아요</ActionButton>
      <ActionButton>싫어요</ActionButton>
      <ActionButton>댓글</ActionButton>
    </St.ActionButtons>
  );
}

const St = {
  ActionButtons: styled.section`
    display: flex;
    gap: 0.8rem;
    padding-top: 0.8rem;
    padding-right: 0.8rem;
  `,
};
