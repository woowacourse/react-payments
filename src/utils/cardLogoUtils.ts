export function handleCardLogoChange(firstValue: string) {
  if (firstValue.startsWith('4')) {
    return 'visa';
  }
  if (51 <= Number(firstValue.slice(0, 2)) && Number(firstValue.slice(0, 2)) <= 55) {
    return 'master';
  }
  return '';
}
