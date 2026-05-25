export function formatCardExpiryDate(cardExpiryDate: string[]): string {
  const [month, year] = cardExpiryDate;

  return `${month.padStart(2, '0')}/${year}`;
}
