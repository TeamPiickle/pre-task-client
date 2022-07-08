import React, { useEffect, useState } from "react";

import { filterContentsArr } from "../../core/filterContents";
import { resultContentsArr } from "../../core/resultContents";
import { St } from "./style";

export default function FilterContents() {
  // const filterValue = useRef(null);
  const [pickedContents, setPickedContents] = useState<Set<string>>(new Set());
  const [tagArr, setTagArr] = useState(new Set());

  const clickContent = (index1: number, index2: number) => {
    console.log(index1, index2);
    const clickedText = filterContentsArr[index1].contents[index2];
    const tempClickedContents = new Set([...pickedContents]);
    tempClickedContents.has(clickedText)
      ? tempClickedContents.delete(clickedText)
      : tempClickedContents.add(clickedText);
    setPickedContents(tempClickedContents);
  };

  useEffect(() => {
    console.log(pickedContents);
  }, [pickedContents]);

  const tempTagArr: any = [];
  const createTagArr = () => {
    resultContentsArr.map((id) => {
      const tempText = [...id.gender, ...id.age, ...id.intimacy];
      tempTagArr.push(tempText);
      // setTagArr(tempTagArr);
    });
  };

  useEffect(() => {
    createTagArr();
    console.log(tempTagArr, "******");
  }, []);

  const result: any = [];
  const filterData = () => {
    console.log(tempTagArr);
    for (let i: any = 0; i < tempTagArr.length; i++) {
      if (new Set(tempTagArr[i]) === pickedContents) {
        result.push(resultContentsArr[i].content);
        console.log(tempTagArr, "***");
      }
    }
  };

  return (
    <>
      {filterContentsArr.map((content) => {
        return (
          <>
            <St.TitleText>{content.title}</St.TitleText>
            <St.ContentsContainerWrapper>
              {content.contents.map((text, index) => {
                return (
                  <St.ContentsContainer key={content.id} onClick={() => clickContent(content.id, index)}>
                    <St.ContentsText>{text}</St.ContentsText>;
                  </St.ContentsContainer>
                );
              })}
            </St.ContentsContainerWrapper>
          </>
        );
      })}
      <St.SubmitBtn onClick={filterData}>Show Result</St.SubmitBtn>
    </>
  );
}
