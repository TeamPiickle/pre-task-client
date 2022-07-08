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
    // submitSet에 content가 있으면 submitSet에서 삭제
    if (submitSet.has(content)) {
      setSubmitSet((prev) => new Set([...prev].filter((x) => x !== content)));
    } // submitSet에 content가 없으면 submitSet에서 추가
    else {
      setSubmitSet((prev) => new Set(prev.add(content)));
    }
  };

  return (
    <>
      <St.OptionButton isactive={isClicked} type="button" onClick={() => handleClick(content)}>
        {content}
      </St.OptionButton>
    </>
  );
}
