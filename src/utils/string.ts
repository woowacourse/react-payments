export const generateUpperCase = (string: string) => {
  if (!string) return string;

  return string.charAt(0).toUpperCase() + string.slice(1);
};
