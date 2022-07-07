import { Link } from "react-router-dom";

export default function index() {
  return (
    <div>
      <Link to="/ny/1">1. 이미지 슬라이더 기능</Link>
      <br />
      <br />
      <Link to="/ny/2">2. progress바 기능</Link>
    </div>
  );
}
