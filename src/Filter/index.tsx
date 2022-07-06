import React, { useState } from "react";

import { St } from "./style";

type FilterTag = {
  id: string;
  name: "남" | "여" | "10대" | "20대" | "30대";
};

type FilterTags = {
  type: string;
  tags: FilterTag[];
};

const filterTags: FilterTags[] = [
  {
    type: "성별",
    tags: [
      {
        id: "1",
        name: "남",
      },
      {
        id: "2",
        name: "여",
      },
    ],
  },
  {
    type: "연령대",
    tags: [
      {
        id: "3",
        name: "10대",
      },
      {
        id: "4",
        name: "20대",
      },
      {
        id: "5",
        name: "30대",
      },
    ],
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
      {filterTags.map((filterTag, idx) => (
        <React.Fragment key={`filter-${idx}`}>
          <St.FilterTitle>{filterTag.type}</St.FilterTitle>
          <St.FilterTagsWrapper>
            {filterTag.tags.map((tag) => (
              <St.FilterTag key={tag.id} isactive={checkedTags.has(tag.id)} onClick={() => toggleTagButton(tag.id)}>
                {tag.name}
              </St.FilterTag>
            ))}
          </St.FilterTagsWrapper>
        </React.Fragment>
      ))}

      <St.SubmitBtn onClick={() => window.alert([...checkedTags])}>제출하기</St.SubmitBtn>
    </section>
  );
}
