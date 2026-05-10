export function sanitizeErrors(messages: string[]) {
  return [...new Set(messages.filter((item: string) => item !== ""))];
}

export function fillEmptyPlaceToBlank(value: string, length: number) {
  let newValue = value;
  const emptyLength = length - value.length;
  if (emptyLength) {
    newValue += " ".repeat(emptyLength);
  }
  return newValue;
}

export function joinCardNumber(stringValues: string[], eachLength: number) {
  return stringValues
    .map((eachString) => {
      return fillEmptyPlaceToBlank(eachString, eachLength);
    })
    .join("");
}
