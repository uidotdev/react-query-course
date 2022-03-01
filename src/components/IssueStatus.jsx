import { useMutation, useQueryClient } from "react-query";
import { StatusSelect } from "./StatusSelect";
export default function IssueStatus({ status, issueNumber }) {
  const queryClient = useQueryClient();

  const setStatus = useMutation(
    (status) => {
      fetch(`/api/issues/${issueNumber}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ status }),
      }).then((res) => res.json());
    },
    {
      onMutate: (status) => {
        const oldStatus = queryClient.getQueryData([
          "issues",
          issueNumber,
        ]).status;
        queryClient.setQueryData(["issues", issueNumber], (data) => ({
          ...data,
          status,
        }));

        return function rollback() {
          queryClient.setQueryData(["issues", issueNumber], (data) => ({
            ...data,
            status: oldStatus,
          }));
        };
      },
      onError: (error, variables, rollback) => {
        rollback();
      },
      onSettled: () => {
        queryClient.invalidateQueries(["issues", issueNumber], { exact: true });
      },
    }
  );
  return (
    <div className="issue-options">
      <div>
        <span>Status</span>
        <StatusSelect
          noEmptyOption
          value={status}
          onChange={(event) => setStatus.mutate(event.target.value)}
        />
      </div>
    </div>
  );
}
