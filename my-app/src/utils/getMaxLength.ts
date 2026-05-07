const MAX_LENGTH = {
    amex: 15,
    diners: 14,
    default: 16,
} as const

export const getMaxLength = (brand: string): number => {
    return MAX_LENGTH[brand as keyof typeof MAX_LENGTH] ?? MAX_LENGTH.default;
};