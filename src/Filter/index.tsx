type FilterTag = {
  id: number;
  name: "남" | "여" | "10대" | "20대" | "30대";
  type: "성별" | "연령대";
};

const filterGenderTags: FilterTag[] = [
  {
    id: 1,
    name: "남",
    type: "성별",
  },
  {
    id: 2,
    name: "여",
    type: "성별",
  },
];

const filterAgeTags: FilterTag[] = [
  {
    id: 3,
    name: "10대",
    type: "연령대",
  },
  {
    id: 4,
    name: "20대",
    type: "연령대",
  },
  {
    id: 5,
    name: "30대",
    type: "연령대",
  },
];

export default function index() {
  return (
    <section>
      <em>성별</em>
      <ul>
        {filterGenderTags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
      <em>연령대</em>
      <ul>
        {filterAgeTags.map((tag) => (
          <li key={tag.id}>{tag.name}</li>
        ))}
      </ul>
    </section>
  );
}
