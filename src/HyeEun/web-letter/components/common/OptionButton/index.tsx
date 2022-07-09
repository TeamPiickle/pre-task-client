import { St } from "./style";

interface OptionbuttonProps {
  content: string;
  submitSet: Set<string>;
  handleSubmitSet: (content: string) => void;
}

export default function OptionButton(props: OptionbuttonProps) {
  const { content, submitSet, handleSubmitSet } = props;

  return (
    <>
      <St.OptionButton isactive={submitSet.has(content)} type="button" onClick={() => handleSubmitSet(content)}>
        {content}
      </St.OptionButton>
    </>
  );
}
