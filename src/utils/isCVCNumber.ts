export const isCVCNumber = (CVCNumber: string) => {
    if (Number.isNaN(Number(CVCNumber))) return false;
    return CVCNumber.length >= 4;
};
