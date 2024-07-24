import { useQuery } from "react-query";
import { client } from "./client";

export function QueryCache() {
  useQuery("plans", fetchPlans, {
    cacheTime: 60 * 60 * 1000, // 60 minutes
    staleTime: 60 * 60 * 1000, // 60 minutes
  });
}
function fetchPlans() {
  return client("plans").then((res) => res.data);
}
