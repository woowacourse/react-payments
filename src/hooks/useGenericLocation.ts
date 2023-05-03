import { Location } from "react-router-dom";

export function useGenericLocation<T>(useLocation: Location) {
  const location = useLocation;
  const state: T = location.state;

  return state;
}
