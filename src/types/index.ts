export type SetCallback<T> = (prevState: T[]) => T[];

export type SetCardList<T> = (callback: SetCallback<T>) => void;
