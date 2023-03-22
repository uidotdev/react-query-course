import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import IssueItem from "./IssueItem";

export default function IssuesList() {
  const issuesQuery = useQuery(["issues"], () =>
    fetch("/api/issues").then((res) => res.json())
  );

  return (
    <div>
      <h2>Issues List</h2>
      {issuesQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {issuesQuery.data?.map((issue) => (
            <IssueItem key={issue?.id} issue={issue}/>
          ))}
        </ul>
      )}
    </div>
  );
}
