export function getCardBrand(
  cardNumberSegments: [string, string, string, string],
) {
  if (/^4/.test(cardNumberSegments[0])) return "VISA";
  if (/^5[1-5]/.test(cardNumberSegments[0])) return "MasterCard";
}
