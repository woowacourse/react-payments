export const isFirst = (index: number) => index === 0;
export const isLast = (index: number, size: number) => index === size - 1;
export const isEmptyInput = (input: string) => !input.length;
export const isFullInput = (input: string, size: number) => input.length === size;
