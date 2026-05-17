import { useCvcNumberInput } from "../../hooks/useCvcNumberInput";
import { CvcContext } from "./CvcContext";

export function CvcProvider({ children }: { children: React.ReactNode }) {
  const cvc = useCvcNumberInput();

  return <CvcContext value={cvc}>{children}</CvcContext>;
}
