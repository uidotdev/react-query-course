import { Link } from "react-router-dom";

export default function IssuesList() {
  return (
    <div>
      <h1>Issues List</h1>
      <ul>
        <li>
          <Link to="/issue/1">Issue 1</Link>
        </li>
      </ul>
    </div>
  );
}
