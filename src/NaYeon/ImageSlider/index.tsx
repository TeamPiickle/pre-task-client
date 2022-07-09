import styled from "styled-components";

import MultipleSlide from "./components/index";

export default function ImageSlider() {
  return (
    <St.Section>
      <MultipleSlide />
    </St.Section>
  );
}

export const St = {
  Section: styled.section`
    background-color: black;
    height: 100vh;
  `,
};
