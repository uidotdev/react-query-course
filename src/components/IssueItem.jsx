import React from "react";
import { GoIssueOpened, GoIssueClosed } from "react-icons/go";
import { FaRegComment } from "react-icons/fa";
import { Link } from "react-router-dom";
import { relativeDate } from "../helpers/relativeDate";
import { useUserData } from "../helpers/useUserData";

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

  const userImageData = useUserData(assignee);
  const userNameData = useUserData(createdBy);

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
          # {number} opened {relativeDate(createdDate)} {userNameData.isSuccess ? `by ${userNameData.data.name}` : null}
        </small>
      </div>
      {assignee ? <img src={userImageData.isSuccess ? userImageData.data.profilePictureUrl : ""} className="assigned-to" alt="profile"/> : null}
      <span className="comment-count">
        {comments.length > 0 ? (
          <React.Fragment>
            <FaRegComment />
            {comments.length}
          </React.Fragment>
        ) : null}
      </span>
    </li>
  );
}

export default IssueItem;
