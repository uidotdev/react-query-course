import IssuesList from "../components/IssuesList";
import LabelList from "../components/LabelList";
import { useState } from "react";
import { StatusSelect } from "../components/StatusSelect";

export default function Issues() {
  const [labels, setLabels] = useState([]);
  const [status, setStatus] = useState("");
  return (
    <div>
      <main>
        <section>
          <IssuesList labels={labels} status={status} />
        </section>
        <aside>
          <LabelList
            selected={labels}
            toggle={(label) =>
              setLabels((currentLabels) =>
                currentLabels.includes(label)
                  ? currentLabels.filter(
                      (currentLabel) => currentLabel !== label
                    )
                  : currentLabels.concat(label)
              )
            }
          />
          <h3>Status</h3>
          <StatusSelect
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          />
        </aside>
      </main>
    </div>
  );
}
