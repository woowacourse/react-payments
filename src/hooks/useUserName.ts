import { useContext } from "react";
import { ERROR_MESSAGE } from "../constants/inputInfo";
import { NameContext } from "../contexts/cardInfo";

export function useUserName() {
  const nameContext = useContext(NameContext);

  if (!nameContext) throw new Error(ERROR_MESSAGE.SCOPE);

  return nameContext;
}
