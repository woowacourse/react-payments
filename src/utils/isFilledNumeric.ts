export const isFilledNumeric = (value: string, length: number) => {
    return value.length === length && !Number.isNaN(Number(value)) && value === value.trim();
};
