// 타스에서 style 파일을 따로 만들면 style.d.ts 파일을 무조건 만들어줘야 한다
// 타입 선언 파일이며 TS코드의 타입 추론을 돕는 파일
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      small: string;
      medium: string;
      large: string;
    };
    colors: {
      gray1: string;
      gray2: string;
      gray3: string;
      black: string;
    };
    center: string;
  }
}
