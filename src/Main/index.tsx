import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <Link to="/he">헤은이 페이지 </Link>
      <br />
      <Link to="/ny">나연이 페이지 </Link>
      <br />
      <Link to="/jy">지영이 페이지 </Link>
    </div>
  );
}
