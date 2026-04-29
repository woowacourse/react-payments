export const isLengthMatch = (length: number, value: string) => {
    console.log(length, value);
    if (length !== value.length) return false;
    return true;
};
