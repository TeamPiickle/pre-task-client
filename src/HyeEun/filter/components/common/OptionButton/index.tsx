import { useState } from "react";

import { St } from "./style";

interface OptionbuttonProps {
  content: string;
  submitSet: Set<string>;
  setSubmitSet: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export default function OptionButton(props: OptionbuttonProps) {
  const { content, submitSet, setSubmitSet } = props;
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = (content: string) => {
    setIsClicked(!isClicked);
    // submitSet에 content가 있으면 submitSet에서 삭제, 아니면 추가
    const tempSubmitSet = new Set([...submitSet]);
    tempSubmitSet.has(content) ? tempSubmitSet.delete(content) : tempSubmitSet.add(content);
  };

  return (
    <>
      <St.OptionButton isactive={isClicked} type="button" onClick={() => handleClick(content)}>
        {content}
      </St.OptionButton>
    </>
  );
}
