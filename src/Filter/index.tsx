import { useState } from "react";

import { St } from "./style";

type FilterTag = {
  id: string;
  name: "남" | "여" | "10대" | "20대" | "30대";
  type: "성별" | "연령대";
};

const filterGenderTags: FilterTag[] = [
  {
    id: "1",
    name: "남",
    type: "성별",
  },
  {
    id: "2",
    name: "여",
    type: "성별",
  },
];

const filterAgeTags: FilterTag[] = [
  {
    id: "3",
    name: "10대",
    type: "연령대",
  },
  {
    id: "4",
    name: "20대",
    type: "연령대",
  },
  {
    id: "5",
    name: "30대",
    type: "연령대",
  },
];

export default function Filter() {
  const [checkedTags, setCheckedTags] = useState<Set<string>>(new Set());

  const toggleTagButton = (_id: string) => {
    const tempCheckedTags = new Set([...checkedTags]);
    tempCheckedTags.has(_id) ? tempCheckedTags.delete(_id) : tempCheckedTags.add(_id);
    setCheckedTags(tempCheckedTags);
  };

  return (
    <section>
      <St.FilterTitle>성별</St.FilterTitle>
      <St.FilterTagsWrapper>
        {filterGenderTags.map((tag) => (
          <St.FilterTag key={tag.id} isactive={checkedTags.has(tag.id)} onClick={() => toggleTagButton(tag.id)}>
            {tag.name}
          </St.FilterTag>
        ))}
      </St.FilterTagsWrapper>
      <St.FilterTitle>연령대</St.FilterTitle>
      <St.FilterTagsWrapper>
        {filterAgeTags.map((tag) => (
          <St.FilterTag key={tag.id} isactive={checkedTags.has(tag.id)} onClick={() => toggleTagButton(tag.id)}>
            {tag.name}
          </St.FilterTag>
        ))}
      </St.FilterTagsWrapper>
      <St.SubmitBtn onClick={() => window.alert([...checkedTags])}>제출하기</St.SubmitBtn>
    </section>
  );
}
