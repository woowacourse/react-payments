export const precise = {
  isNotEmpty: (value: string) => value.trim() !== '',
  isNumber: (value: string) => !Number.isNaN(Number(value)),
  isValidLength: (value: string, length: number) => value.length === length,
  isValidNumberRange: ({
    value,
    min = Number.NEGATIVE_INFINITY,
    max = Number.POSITIVE_INFINITY,
  }: {
    value: number;
    min?: number;
    max?: number;
  }) => value >= min && value <= max,
  hasNotExpired: ({ month, year }: { month: string; year: string }) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;

    const expiryYear = 2000 + Number(year);
    const expiryMonth = Number(month);

    if (expiryYear > currentYear) return true;
    if (expiryYear === currentYear && expiryMonth >= currentMonth) return true;
    return false;
  },
};
