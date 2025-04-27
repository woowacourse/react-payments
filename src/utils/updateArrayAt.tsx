import React from "react";

export function updateArrayAt<T>({
  array,
  newValue,
  index,
  setState,
}: {
  array: T[];
  newValue: T;
  index: number;
  setState: React.Dispatch<React.SetStateAction<T[]>>;
}) {
  const newArray = [...array];
  newArray[index] = newValue;
  setState(newArray);
}
