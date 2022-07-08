import { useState } from "react";

import OptionButton from "../OptionButton";
import { St } from "./style";

interface ChoiceProps {
  name: string;
  contents: string[];
  submitSet: Set<string>;
  setSubmitSet: React.Dispatch<React.SetStateAction<Set<string>>>;
}

export default function Choice(props: ChoiceProps) {
  const { name, contents, submitSet, setSubmitSet } = props;

  return (
    <St.OptionWrapper>
      <St.OptionName>{name}</St.OptionName>
      <St.OptionButtonWrapper>
        {contents.map((content, id) => {
          return <OptionButton key={id} content={content} submitSet={submitSet} setSubmitSet={setSubmitSet} />;
        })}
      </St.OptionButtonWrapper>
    </St.OptionWrapper>
  );
}
