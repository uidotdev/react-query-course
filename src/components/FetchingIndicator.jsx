import { useIsFetching } from "react-query";
import Loader from "./Loader";

export default function FetchingIndicator() {
  const isFetching = useIsFetching();
  if (!isFetching) return null;

  return (
    <div className="fetching-indicator">
      <Loader />
    </div>
  );
}
