export const isEXPNumber = (value: string) => {
    return value.length === 2 && !Number.isNaN(Number(value)) && value === value.trim();
};
