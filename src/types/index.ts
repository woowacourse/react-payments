export type ObjectKey = string | number | symbol;

export type OmitIsNextStep<T> = Omit<T, "isNextStep">;
