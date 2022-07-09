import styled from "styled-components";

import ImageSilder from "./components/index";

export default function SliderBar() {
  return (
    <St.Section>
      <ImageSilder />
    </St.Section>
  );
}

export const St = {
  Section: styled.section`
    height: 100vh;
    background-color: black;
  `,
};
