import { useCardNumberInput } from "../../hooks/useCardNumberInput";
import { CardNumberContext } from "./CardNumberContext";

export function CardNumberProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const cardNumber = useCardNumberInput();
  return <CardNumberContext value={cardNumber}>{children}</CardNumberContext>;
}
