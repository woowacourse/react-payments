export const isMonthNumber = (monthNumber: string) => {
    if (Number.isNaN(monthNumber)) return false;
    if (Number(monthNumber) > 13 || Number(monthNumber) < 0) return false;
    return Number(monthNumber);
};
