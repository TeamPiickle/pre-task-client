import styled from "styled-components";

import SingleSlide from "./components/single";

export default function index() {
  return (
    <St.Section>
      <SingleSlide />
    </St.Section>
  );
}
const St = {
  Section: styled.section``,
};
