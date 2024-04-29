export const sliceOverMaxLength = (value: string, maxLength: number) => {
  if (value.length > maxLength) return value.slice(0, maxLength);
  return value;
};

export const sliceInvalidValueWithRegex = (value: string, regex: RegExp) => {
  if (!regex.test(value)) return value.slice(0, -1);
  return value;
};

export const hasInactiveInputError = <T extends object>(errors: T) =>
  !!Object.entries(errors).find(([inputName, error]) => {
    const activeElement = document.activeElement as HTMLInputElement;
    const activeInputName = activeElement.name;
    return !activeElement || (inputName !== activeInputName && error);
  });
