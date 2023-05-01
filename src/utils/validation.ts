export const isNotNumber = (value: string) => !/^[0-9]+$/.test(value);

export const isNotAlphabet = (value: string) => !/^[a-zA-Z\s]*$/.test(value);
