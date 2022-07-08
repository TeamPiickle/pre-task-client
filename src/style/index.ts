import { DefaultTheme } from "styled-components";

const fonts = {
  small: "font-size: 1.2rem; line-height: 1.8rem; font-weight: 400;",
  medium: "font-size: 1.3rem; font-weight: 500; line-height: 1.8rem",
  large: "font-size: 1.6rem; line-height: 2.2rem; font-weight: 400;",
};

const colors = {
  gray1: "#f1f1f1",
  gray2: "#d8d8d8",
  gray3: "#606060",
  black: "#030303",
};

// theme의 타입을 지정하기 위해 DefaultTheme을 받아와야 하는가?
const theme: DefaultTheme = {
  fonts,
  colors,
  center: "display: flex; justify-content: center; align-items: center;",
  button: "border: 1px solid lightgrey; width: 6rem;",
};

export default theme;
