import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <Link to="/jy/vote">투표하쉴?</Link>
      <br />
      <br />
      <Link to="/jy/filter">필터하쉴?</Link>
    </div>
  );
}
