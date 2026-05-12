export const isAMEXCardNumber = (firstGroup: string) => {
    return firstGroup.startsWith('34') || firstGroup.startsWith('37');
};
