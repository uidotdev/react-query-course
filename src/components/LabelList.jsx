import { useLabelsData } from "../helpers/useLabelsData";

export default function LabelList({ selected, toggle }) {
  const labelsQuery = useLabelsData();
  return (
    <div className="labels">
      <h3>Labels</h3>
      {labelsQuery.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {labelsQuery.data.map((label) => (
            <li key={label.id}>
              <button
                onClick={() => toggle(label.id)}
                className={`label ${
                  selected.includes(label.id) ? "selected " : ""
                }${label.color}`}
              >
                {label.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
