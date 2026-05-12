export const isMasterCardNumber = (firstGroup: string) => {
    if (firstGroup.length < 2) return false;
    const secondDigit = Number(firstGroup[1]);
    return firstGroup.startsWith('5') && secondDigit >= 1 && secondDigit <= 5;
};
