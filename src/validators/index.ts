export const isValidCardNumbers = (arr: number[][]) => {
  console.log(arr);
  return arr.every((arr2) => arr2.every((value: number) => !isNaN(value)));
};
