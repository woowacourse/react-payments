export const isMonthNumberLength = (monthNumber: string) => {
    if (Number.isNaN(Number(monthNumber))) return false;
    return true;
};
