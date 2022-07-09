import { useEffect, useState } from "react";

import { LetterContent } from "../../types/webLetter/letter";
import Letter from "./components/Letter";
import { client } from "./core/api";
import { St } from "./style";

export default function WebLetter() {
  const [letters, setLetters] = useState<LetterContent[]>([]);

  useEffect(() => {
    const fetchLetters = async () => {
      try {
        const { data } = await client.get("/letter");
        setLetters(data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLetters();
  }, []);

  return (
    <St.Root>
      <St.Title>웹파트 비밀 편지함</St.Title>
      <St.WriteLetterLink to="/he/3/write">편지 쓰러가기</St.WriteLetterLink>
      <St.LetterSection>
        {letters.map((letter) => (
          <Letter key={letter._id} letterInfo={letter} />
        ))}
      </St.LetterSection>
    </St.Root>
  );
}
