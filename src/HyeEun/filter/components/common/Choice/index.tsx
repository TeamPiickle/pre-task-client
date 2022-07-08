import { useState } from "react";

import { St } from "./style";

interface ChoiceProps {
  name: string;
  contents: string[];
  submitSet: Set<string>;
  setSubmitSet: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export default function Choice(props: ChoiceProps) {
  const { name, contents, submitSet, setSubmitSet } = props;
  const [isclicked, setIsClicked] = useState(false);

  const handleClick = (content: string) => {
    setIsClicked(!isclicked);
    // submitSet에 content가 있으면 submitSet에서 삭제
    if (submitSet.has(content)) {
      setSubmitSet((prev) => new Set([...prev].filter((x) => x !== content)));
    } // submitSet에 content가 없으면 submitSet에서 추가
    else {
      setSubmitSet((prev) => new Set(prev.add(content)));
    }
  };

  return (
    <St.OptionWrapper>
      <St.OptionName>{name}</St.OptionName>
      {/* <St.OptionButtonWrapper> */}
      {contents.map((content, id) => {
        return (
          <St.OptionButton isactive={isclicked} type="button" key={id} onClick={() => handleClick(content)}>
            {content}
          </St.OptionButton>
        );
      })}
      {/* </St.OptionButtonWrapper> */}
    </St.OptionWrapper>
  );
}
