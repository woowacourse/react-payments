export const getCardNumberMaxLengths = (firstGroup: string): number[] => {
    if (firstGroup.startsWith('36')) return [4, 6, 4];
    if (firstGroup.startsWith('34') || firstGroup.startsWith('37')) return [4, 6, 5];
    return [4, 4, 4, 4];
};
