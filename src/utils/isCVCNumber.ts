export const isCVCNumber = (CVCNumber: string) => {
    if (Number.isNaN(CVCNumber)) return false;
    return CVCNumber.length === 3;
};
