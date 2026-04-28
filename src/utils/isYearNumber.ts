export const isYearNumber = (yearNumber: string) => {
    if (Number.isNaN(Number(yearNumber))) return false;
    return yearNumber.length < 3;
};
