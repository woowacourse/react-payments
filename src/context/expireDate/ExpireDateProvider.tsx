import { useExpireDateInput } from "../../hooks/useExpireDateInput";
import { ExpireDateContext } from "./ExpireDateContext";

export function ExpireDateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const expireDate = useExpireDateInput();

  return <ExpireDateContext value={expireDate}>{children}</ExpireDateContext>;
}
