export const isNotNumber = (value: string) =>
  Number.isNaN(Number(value)) || value.includes(' ') || value.includes('.');

export const isNotAlphabet = (value: string) => !/^[a-zA-Z\s]*$/.test(value);
