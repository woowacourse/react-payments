export const isMonthNumber = (monthNumber: string) => {
    if (Number.isNaN(Number(monthNumber))) return false;
    if (Number(monthNumber) > 12 || Number(monthNumber) < 1) return false;
    return true;
};
