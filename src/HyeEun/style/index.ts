import { DefaultTheme } from "styled-components";

const colors = {
  gray: "#f1f1f1",
  darkGray: "#d8d8d8",
};

// theme의 타입을 지정하기 위해 DefaultTheme을 받아와야 하는가?
const theme: DefaultTheme = {
  colors,
  center: "display: flex; justify-content: center; align-items: center;",
};

export default theme;
