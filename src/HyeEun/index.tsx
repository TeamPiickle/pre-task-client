import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <Link to="/he/1">1. 암온어 vote</Link>
      <br />
      <br />
      <Link to="/he/2">2. 정수기 filter 갈기</Link>
    </div>
  );
}
