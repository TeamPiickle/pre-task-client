import styled, { keyframes } from "styled-components";

export default function CustomHeart() {
  return (
    <StSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680.95 583.31">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            fill="#00c078"
            className="cls-1"
            d="M680.86,210.61h0C679.06,96.32,594.87,0,491.23,0,429.77,0,375.14,32.37,340.48,82.54,305.81,32.37,251.18,0,189.72,0,86.07,0,1.89,96.32.09,210.61h0c0,4.06-.2-4,0,0,7.49,200.87,340.39,372.7,340.39,372.7s332.89-171.83,340.38-372.7c.21-4,0,4.06,0,0C680.86,210,680.87,211.23,680.86,210.61Z"></path>
        </g>
      </g>
    </StSvg>
  );
}

const startHeart = keyframes`
  0% {
    transform: scale(0);
  }
  80% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const StSvg = styled.svg`
  position: absolute;

  width: 2rem;

  z-index: 10;

  animation: ${startHeart} 0.4s ease-in-out;
`;
