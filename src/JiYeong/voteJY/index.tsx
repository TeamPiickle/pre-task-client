import styled from "styled-components";

import UserProfile from "./components/UserProfile";
import VoteContents from "./components/VoteContents";

export default function index() {
  return (
    <>
      <UserProfile></UserProfile>
      <VoteContents></VoteContents>
    </>
  );
}
