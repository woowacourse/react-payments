import { ChangeEvent } from "react";

export const isAllDone = (
  inputData: Record<
    string,
    { value: string; isError: boolean; isDone: boolean }
  >
) => Object.values(inputData).every(({ isDone }) => isDone);

export const getInputAttributes = (
  event: ChangeEvent<HTMLInputElement>,
  KEYS: readonly string[]
) => {
  const { name, value } = event.target as {
    name: (typeof KEYS)[number];
    value: string;
  };
  if (!KEYS.includes(name)) {
    throw Error("input name이 변경됨");
  }
  return { name, value };
};
