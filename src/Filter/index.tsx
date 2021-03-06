import React, { useState } from "react";

import { St } from "./style";

type FilterTag = {
  id: string;
  name: string;
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
  {
    type: "술자리 유형",
    tags: [
      {
        id: "6",
        name: "개인",
      },
      {
        id: "7",
        name: "커플",
      },
      {
        id: "8",
        name: "친구",
      },
      {
        id: "9",
        name: "단체",
      },
    ],
  },
  {
    type: "연령대",
    tags: [
      {
        id: "10",
        name: "반가워요",
      },
      {
        id: "11",
        name: "친군해요",
      },
      {
        id: "12",
        name: "가까워요",
      },
    ],
  },
];

// 위의 객체는 단순 필터 정보 나열! "core 폴더로 빼 놓을 객체"
// 여기부터 컴포넌트 !!!
export default function Filter() {
  // 체크한 태그들을 저장할 state
  const [checkedTags, setCheckedTags] = useState<Set<string>>(new Set());

  // 태그를 눌렀을 때 함수, state 에 있으면 delete, 없으면 add 시켜서 setState
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
