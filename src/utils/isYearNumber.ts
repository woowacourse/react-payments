export const isYearNumber = (value: string) => {
    return value.length === 2 && !Number.isNaN(value) && value === value.trim();
};
