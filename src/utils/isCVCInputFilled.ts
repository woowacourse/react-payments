export const isCVCInputFilled = (value: string) => {
    return value.length === 3 && !Number.isNaN(Number(value)) && value === value.trim();
};
