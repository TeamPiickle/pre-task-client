import Choice from "./components/common/Choice";
import optionList from "./core/optionList";
import { St } from "./style";

interface Option {
  id: number;
  name: string;
  contents: string[];
}

export default function Filter() {
  return (
    <St.Root>
      {optionList.map((option: Option) => {
        return <Choice key={option.id} name={option.name} contents={option.contents} />;
      })}
      <St.SubmitButton type="submit">제출하기</St.SubmitButton>
    </St.Root>
  );
}
