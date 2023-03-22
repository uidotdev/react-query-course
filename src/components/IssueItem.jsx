import React from "react";
import { GoIssueOpened, GoIssueClosed } from "react-icons/go";
import { Link } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";

function IssueItem({ issue }) {
  const {
    title,
    labels,
    comments,
    number,
    createdDate,
    createdBy,
    assignee,
    status,
  } = issue;
  return (
    <li>
      <div>
        {status === "done" || status === "cancelled" ? (
          <GoIssueOpened style={{ color: "red" }} />
        ) : (
          <GoIssueClosed style={{ color: "green" }} />
        )}
      </div>
      <div className="issue-content">
        <span>
          <Link to={`/issue/${number}`}>{title}</Link>
          {labels?.map((label) => (
            <span key={label} className={`label red`}>
              {label}
            </span>
          ))}
        </span>
        <small>
          # {number} opened {relativeDate(createdDate)}
        </small>
      </div>
    </li>
  );
}

export default IssueItem;
