import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

export default function Swipe() {
  const [idxVisible, setIdxVisible] = useState(1);
  const [direction, setDirection] = useState({
    back: false,
    up: false,
  });

  const prevPlease = () => {
    setDirection({
      back: true,
      up: false,
    });
    setIdxVisible((prev) => (prev === 1 ? 1 : prev - 1));
  };
  const nextPlease = () => {
    setDirection({
      back: false,
      up: false,
    });
    setIdxVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };
  const upPlease = () => {
    setDirection({
      back: false,
      up: true,
    });
    setIdxVisible((prev) => (prev === 10 ? 10 : prev + 1));
  };

  const boxVariants = {
    invisible: (direction: { back: boolean; up: boolean }) => {
      return {
        x: direction.back ? -500 : 500,
        opacity: 0,
        scale: 0,
      };
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
    exit: (direction: { back: boolean; up: boolean }) => {
      const upOrBack = direction.up ? { y: -500 } : { x: direction.back ? 500 : -500 };

      return {
        ...upOrBack,
        opacity: 0,
        scale: 0,
        transition: { duration: 0.4 },
      };
    },
  };

  return (
    <StWrapper>
      <AnimatePresence custom={direction}>
        <StBox
          whileTap={{ scale: 0.8 }}
          drag="x"
          dragSnapToOrigin
          onDragEnd={(e, info) => {
            console.log(info.velocity.y);
            if (info.offset.x < -100 && info.velocity.x < -100) nextPlease();
            else if (info.offset.x > 100 && info.velocity.x > 100) prevPlease();
            else if (info.velocity.y < -20) upPlease();
          }}
          custom={direction}
          variants={boxVariants}
          initial="invisible"
          animate="visible"
          exit="exit"
          key={idxVisible}>
          {idxVisible}
        </StBox>
      </AnimatePresence>
      <StBtnWrapper>
        <StBtn onClick={prevPlease}>prev</StBtn>
        <StBtn onClick={upPlease}>up</StBtn>
        <StBtn onClick={nextPlease}>next</StBtn>
      </StBtnWrapper>
    </StWrapper>
  );
}

const StWrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  background-color: #aaaaaa;
`;

const StBox = styled(motion.div)`
  width: 400px;
  height: 200px;

  position: absolute;
  bottom: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 30px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const StBtnWrapper = styled.div`
  position: absolute;
  top: 60%;
  display: flex;
  gap: 20px;

  width: 100%;
`;

const StBtn = styled.button`
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff4c00;
  color: white;
  outline: none;
  border-radius: 40px;
  border: none;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
