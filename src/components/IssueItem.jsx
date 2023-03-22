import React from "react";
import { GoIssueOpened, GoIssueClosed } from "react-icons/go";
import { Link } from "react-router-dom";

function IssueItem({ issue }) {
  const { title, labels, comments, number, createdDate, createdBy, assignee, status } = issue;
  return <li>
    <div>
      {status === "done" || status === "cancelled" ? <GoIssueOpened style={{color: "red"}}/> : <GoIssueClosed style={{color: "green"}}/>}
    </div>
    <div className="issue-content">
      <span>
        <Link to={`/issue/${number}`}>{title}</Link>
      </span>
    </div>
  </li>;
}

export default IssueItem;
