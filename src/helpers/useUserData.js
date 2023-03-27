import { useQuery } from "react-query";

export function useUserData(userId) {
  return useQuery(
    ["user", userId],
    ()=> fetch(`api/users/${userId}`).then(res => res.json())
  )
}