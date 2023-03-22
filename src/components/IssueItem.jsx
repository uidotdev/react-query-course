import React from "react";

function IssueItem({ issue }) {
  const { title, labels, comments, number, createdDate, createdBy, assignee } = issue;
  return <div>IssueItem</div>;
}

export default IssueItem;
