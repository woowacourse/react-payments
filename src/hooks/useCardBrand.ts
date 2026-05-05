export function useCardBrand(
  CardNumberSegments: [string, string, string, string],
) {
  if (CardNumberSegments[0].startsWith("4")) return "VISA";
  if (/^(51)|(52)|(53)|(54)|(55)/.test(CardNumberSegments[0]))
    return "MasterCard";
}
