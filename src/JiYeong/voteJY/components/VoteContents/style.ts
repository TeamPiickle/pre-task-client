import styled from "styled-components";

export const St = {
  VoteContentsContainer: styled.section`
    margin-left: 200px;
    margin-top: 30px;
  `,
  VoteDiscription: styled.strong`
    font-size: 20px;
    margin-left: 20px;
  `,
  VoterCount: styled.p`
    font-size: 15px;
    color: gray;
    margin-top: 10px;
    margin-left: 20px;
  `,

  OptionListContainer: styled.ul`
    border: solid 1px black;
    padding: 20px;
    margin: 20px;
  `,
  OptionListContent: styled.div`
    display: flex;
    align-items: center;
  `,
  OptionContentWrapper: styled.li<{ isactive: boolean }>`
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
    background-color: ${({ isactive }) => (isactive ? "#ffcdd2" : "white")};
  `,
  OptionListMark: styled.span`
    margin-right: 20px;
    margin-left: 20px;
    font-size: 15px;
  `,
  OptionListText: styled.strong`
    font-size: 30px;
  `,
  VotedPercent: styled.div`
    margin-right: 20px;
    font-size: 20px;
  `,
};
