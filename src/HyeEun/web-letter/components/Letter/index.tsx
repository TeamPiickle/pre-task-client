import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { LetterContent } from "../../../../types/webLetter/letter";
import { St } from "./style";

interface LetterProps {
  letterInfo: LetterContent;
}

export default function Letter(props: LetterProps) {
  const { letterInfo } = props;
  const { name, password, content, images, hint } = letterInfo;
  const [isLocked, setIsLocked] = useState<boolean>(true); // 잠금여부
  const PasswordSwal = withReactContent(Swal);

  const openModal = async () => {
    const { value: tryPassword } = await PasswordSwal.fire({
      title: "비밀번호를 입력하세요",
      input: "text",
      showCancelButton: true,
      inputPlaceholder: "!비밀번호!",
      inputLabel: hint,
      inputValidator: (value) =>
        new Promise((resolve) => {
          if (value === password) resolve;
          else resolve("비번틀림 ㅋ ㅋ 는 진짜");
        }),
    });
    if (tryPassword === password) setIsLocked(false);
  };

  return (
    <St.Root>
      {isLocked ? (
        <St.LockButton onClick={openModal} />
      ) : (
        <St.LetterContents>
          <St.ImageList>
            {images?.map((url) => (
              <St.Image key={url} url={url} />
            ))}
          </St.ImageList>
          <St.Name>
            <b>{name}</b>님이 남긴 편지에요
          </St.Name>
          <St.Content>{content}</St.Content>
          <St.EditLink to="/he/3/edit" state={letterInfo}>
            내맘대로 수정하기
          </St.EditLink>
        </St.LetterContents>
      )}
    </St.Root>
  );
}
