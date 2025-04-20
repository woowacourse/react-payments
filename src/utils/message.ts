export const getErrorMessageFromObject = <T extends string>(errorMessage: Record<T, string>): string => {
  for (const [_, errorMassage] of Object.entries<string>(errorMessage)) {
    if (errorMassage !== '') return errorMassage;
  }
  return '';
};
