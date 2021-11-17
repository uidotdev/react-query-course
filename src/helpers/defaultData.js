export const defaultLabels = [
  {
    id: "1",
    name: "bug",
    color: "red",
  },
  {
    id: "2",
    name: "feature",
    color: "blue",
  },
  {
    id: "3",
    name: "enhancement",
    color: "cyan",
  },
];

export const defaultUsers = [
  {
    id: "u_1",
    name: "Tyler",
    profilePictureUrl:
      "https://res.cloudinary.com/uidotdev/image/twitter_name/tylermcginnis",
  },
  {
    id: "u_2",
    name: "Bono",
    profilePictureUrl:
      "https://res.cloudinary.com/uidotdev/image/twitter_name/u2",
  },
];

export const defaultIssue = {
  id: "issue_1",
  title: "Test Issue",
  number: 1,
  status: "inProgress",
  assignee: "u_2",
  comments: ["comment_1"],
  createdBy: "u_1",
  createdDate: new Date(),
  labels: [{ id: "1", name: "bug", color: "red" }],
};

export const defaultComments = [
  {
    comment: "This is a test issue.",
    createdBy: "u_1",
    createdDate: new Date(),
    id: "comment_1",
    issue_id: "issue_1",
  },
];

export const possibleStatus = [
  { id: "backlog", label: "Backlog" },
  { id: "todo", label: "Todo" },
  { id: "inProgress", label: "In Progress" },
  { id: "done", label: "Done" },
  { id: "cancelled", label: "Cancelled" },
];
