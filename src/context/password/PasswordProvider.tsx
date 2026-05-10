import { usePasswordInput } from "../../hooks/usePasswordInput";
import { PasswordContext } from "./PasswordContext";

export function PasswordProvider({ children }: { children: React.ReactNode }) {
  const cvc = usePasswordInput();

  return <PasswordContext value={cvc}>{children}</PasswordContext>;
}
