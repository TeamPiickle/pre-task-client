import { St } from "./style";

interface ChoiceProps {
  name: string;
  contents: string[];
}

export default function Choice(props: ChoiceProps) {
  const { name, contents } = props;

  return (
    <St.OptionWrapper>
      <St.OptionName>{name}</St.OptionName>
      <St.OptionButtonWrapper>
        {contents.map((content, id) => {
          return (
            <St.OptionButton type="button" key={id}>
              {content}
            </St.OptionButton>
          );
        })}
      </St.OptionButtonWrapper>
    </St.OptionWrapper>
  );
}
