export const changeArrayElement = <T>({
  array,
  index,
  value,
}: {
  array: T[];
  index: number;
  value: T;
}) => {
  const newArray = [...array];
  newArray[index] = value;
  return newArray;
};
