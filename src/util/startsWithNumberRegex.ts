export const startsWithNumberRegex = (start: number, end?: number) => {
  const patternParts: string[] = [];
  if (end) {
    for (let i = start; i <= end; i++) {
      patternParts.push(i.toString());
    }
  } else {
    patternParts.push(start.toString());
  }
  const pattern = patternParts.join('|');
  const regex = new RegExp(`^(${pattern})\\d*$`);
  return regex;
};
