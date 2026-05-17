export interface FormWrapperValue<T extends Record<string, unknown>> {
  getValue: <K extends keyof T>(key: K) => T[K];
  setValue: <K extends keyof T>(key: K, value: T[K]) => void;
}
