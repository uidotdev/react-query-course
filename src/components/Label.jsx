import { useLabelsData } from "../helpers/useLabelsData";

export function Label({ label }) {
  const labelsQuery = useLabelsData();
  if (labelsQuery.isLoading) return null;
  const labelObj = labelsQuery.data.find(
    (queryLabel) => queryLabel.id === label
  );
  if (!labelObj) return null;
  return <span className={`label ${labelObj.color}`}>{labelObj.name}</span>;
}
