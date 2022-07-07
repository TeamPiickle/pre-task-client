import ProgressBar from "./components/progress";
import ImageSilder from "./components/slider";
import { St } from "./style";

export default function progress_bar() {
  return (
    <St.Section>
      <ImageSilder />
      <ProgressBar />
    </St.Section>
  );
}
