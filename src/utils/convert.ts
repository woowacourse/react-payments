export const convertValueFormat = (value: string | string[] | Record<string, string>): string[] => {
  if (typeof value === 'string') return [value];
  else if (Array.isArray(value)) return value;
  return Object.values(value);
};
