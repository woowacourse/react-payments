import { useMemo } from "react";

export function useCardBrand(CardNumberSegments: [string, string, string, string]) {
  const cardBrand = useMemo(() => {
    if (CardNumberSegments[0].startsWith('4')) return 'VISA';
    if (/^(51|52|53|54|55)/.test(CardNumberSegments[0])) return 'MasterCard';
    return null;
  }, [CardNumberSegments]);

  return cardBrand;
}