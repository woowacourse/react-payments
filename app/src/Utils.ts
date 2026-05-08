export function sanitizeErrors(messages: string[]) {
  return [...new Set(messages.filter((item: string) => item !== ""))];
}

export function joinEachStringWithLength(
  stringValues: string[],
  eachLength: number,
) {
  return stringValues
    .map((eachString) => {
      let value = eachString;
      if (eachString.length !== eachLength) {
        const blankLength = eachLength - eachString.length;
        value += " ".repeat(blankLength);
      }
      return value;
    })
    .join("");
}
