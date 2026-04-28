export const isYearNumber = (yearNumber: string) => {
    if (Number.isNaN(yearNumber)) return false;
    return yearNumber.length === 2;
};
