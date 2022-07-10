import React, { useEffect, useState } from "react";

import { filterContentsArr } from "../../core/filterContents";
import { resultContentsArr } from "../../core/resultContents";
import { St } from "./style";

export default function FilterContents() {
  const [pickedContents, setPickedContents] = useState<Set<string>>(new Set()); //선택된 태그들을 담은 Set
  const [tagArr, setTagArr] = useState<string[][]>([]); // 결과 데이터의 태그들을 담은 배열

  // 태그를 선택했을 때 선택된 태그를 담는 배열을 생성
  const clickContent = (index1: number, index2: number) => {
    console.log(index1, index2);
    const clickedText = filterContentsArr[index1].contents[index2];
    const tempClickedContents = new Set([...pickedContents]);
    tempClickedContents.has(clickedText)
      ? tempClickedContents.delete(clickedText)
      : tempClickedContents.add(clickedText);
    setPickedContents(tempClickedContents);
  };

  // 태그 담는 배열이 바뀔 때마다 콘솔 찍어보기
  useEffect(() => {
    console.log(pickedContents);
  }, [pickedContents]);

  // 더미데이터의 콘텐츠에 있는 태그들이 선택한 태그랑 같은지 확인할 수 있는 배열 생성
  const createTagArr = () => {
    const tempTagArr: string[][] = [...tagArr];
    resultContentsArr.map((id) => {
      const tempText = [...id.gender, ...id.age, ...id.intimacy];
      tempTagArr.push(tempText);
      setTagArr([...tempTagArr]);
      console.log(tempTagArr);
    });
  };

  // 위의 배열을 처음 랜더링 할 때 1번만 생성하기!
  useEffect(() => {
    createTagArr();
  }, []);

  // 대실패를 확인한 부분!! tagArr을 Set으로 바꿔서 형태가 같아진다고 해도 서로 가리키는 주소값이 달라서 애초에 비교가 불가능하다는걸 이제 알아버렸다능....
  // 그리고 더미데이터(resultContentsArr)의 구조도 정말 이유없이 뇌피셜로 생성한거여서 사실 어디서부터 잘못됐는지 모르겠습니당..
  // 그냥 < 선택한 태그들에 해당되는 데이터를 선별하는 기능> 을 구현하고싶었습니다!!!
  const filterData = () => {
    tagArr.forEach((element, index) => {
      if (new Set(element) === pickedContents) {
        // 이조건에서 모든 값이 false여서 비교 불가능 ㅋㅋ
        alert(resultContentsArr[index].content);
      }
    });
  };

  return (
    <>
      {filterContentsArr.map((content, index) => {
        return (
          <>
            <St.TitleText key={index}>{content.title}</St.TitleText>
            <St.ContentsContainerWrapper>
              {content.contents.map((text, index) => {
                return (
                  <St.ContentsContainer
                    isActive={pickedContents.has(text)}
                    key={content.id}
                    onClick={() => clickContent(content.id, index)}>
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
