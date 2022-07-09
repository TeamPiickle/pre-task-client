import { useState } from "react";

import OptionButton from "./components/common/OptionButton";
import optionList from "./core/optionList";
import { St } from "./style";

interface Option {
  id: number;
  name: string;
  contents: string[];
}

export default function WebLetter() {
  const [submitSet, setSubmitSet] = useState(new Set<string>()); // 제출할 content를 담는 Set
  // 제출하기 버튼을 눌렀을 때, alert 창 뜨게 하기
  const submitFilterOption = () => {
    const submitArr = Array.from(submitSet);
    alert(submitArr);
  };
  // setSubmitSet handling 함수 선언
  const handleSubmitSet = (content: string) => {
    // submitSet에 content가 있으면 submitSet에서 삭제, 아니면 추가
    const tempSubmitSet = new Set([...submitSet]);
    tempSubmitSet.has(content) ? tempSubmitSet.delete(content) : tempSubmitSet.add(content);
    setSubmitSet(tempSubmitSet);
  };

  return (
    <St.Root>
      {optionList.map((option: Option) => {
        return (
          <St.OptionWrapper key={option.id}>
            <St.OptionName>{option.name}</St.OptionName>
            <St.OptionButtonWrapper>
              {option.contents.map((content, id) => {
                return (
                  <OptionButton
                    key={id}
                    content={content}
                    submitSet={submitSet}
                    handleSubmitSet={() => handleSubmitSet(content)}
                  />
                );
              })}
            </St.OptionButtonWrapper>
          </St.OptionWrapper>
        );
      })}
      <St.SubmitButton type="submit" onClick={submitFilterOption}>
        제출하기
      </St.SubmitButton>
    </St.Root>
  );
}
