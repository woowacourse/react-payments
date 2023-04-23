export const objectValueToString = (obj: { [key: string]: string }) => {
  return Object.values(obj).reduce((acc, cur) => acc + cur, "");
};
