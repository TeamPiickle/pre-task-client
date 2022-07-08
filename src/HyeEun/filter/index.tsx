import { useState } from "react";

import Choice from "./components/common/Choice";
import optionList from "./core/optionList";
import { St } from "./style";

interface Option {
  id: number;
  name: string;
  contents: string[];
}

export default function Filter() {
  const [submitSet, setSubmitSet] = useState(new Set<string>()); // 제출할 content를 담는 Set
  // 제출하기 버튼을 눌렀을 때, alert 창 뜨게 하기
  const handleSubmit = () => {
    const submitArr = Array.from(submitSet);
    alert(submitArr);
  };

  return (
    <St.Root>
      {optionList.map((option: Option) => {
        return (
          <Choice
            key={option.id}
            name={option.name}
            contents={option.contents}
            submitSet={submitSet}
            setSubmitSet={setSubmitSet}
          />
        );
      })}
      <St.SubmitButton type="submit" onClick={() => handleSubmit()}>
        제출하기
      </St.SubmitButton>
    </St.Root>
  );
}
