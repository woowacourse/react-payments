export const isMonthNumberRange = (monthNumber: string) => {
    console.log(monthNumber);
    if (Number(monthNumber) > 12 || Number(monthNumber) < 1) return false;
    return true;
};
