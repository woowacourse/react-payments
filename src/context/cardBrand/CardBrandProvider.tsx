import { useCardBrand } from "../../hooks/useCardBrand";
import { CardBrandContext } from "./CardBrandContext";

export function CardBrandProvider({ children }: { children: React.ReactNode }) {
  const cardBrand = useCardBrand();

  return <CardBrandContext value={cardBrand}>{children}</CardBrandContext>;
}
