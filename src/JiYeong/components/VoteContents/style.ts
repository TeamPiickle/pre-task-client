import styled from "styled-components";

export const VoteContentsContainer = styled.section`
  margin-left: 200px;
  margin-top: 30px;
`;
export const VoteDiscription = styled.strong`
  font-size: 20px;
  margin-left: 20px;
`;
export const VoterCount = styled.p`
  font-size: 15px;
  color: gray;
  margin-top: 10px;
  margin-left: 20px;
`;

export const OptionListContainer = styled.ul`
  border: solid 1px black;
  padding: 20px;
  margin: 20px;
`;
export const OptionListContent = styled.div`
  display: flex;
  align-items: center;
`;
export const OptionContentWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  border: solid 1px black;
  height: 100px;
  margin: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: solid 3px #ffcdd2;
  }
  background-color: ${(props) => props.color || "white"};
`;
export const OptionListMark = styled.span`
  margin-right: 20px;
  margin-left: 20px;
  font-size: 15px;
`;
export const OptionListText = styled.strong`
  font-size: 30px;
`;
export const VotedPercent = styled.div`
  margin-right: 20px;
  font-size: 20px;
`;
