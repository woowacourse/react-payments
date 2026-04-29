export const isMonthMatch = (value: string) => {
    if (Number(value) > 12 || Number(value) < 1) return false;
    if (2 !== value.length) return false;
    return true;
};
