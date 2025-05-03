export const addItemToRecordArray = <T extends string, U extends string>(
  prev: Record<T, U[]>,
  key: T,
  item: U
) => ({
  ...prev,
  [key]: [...prev[key], item],
});

export const removeItemFromRecordArray = <T extends string, U extends string>(
  prev: Record<T, U[]>,
  key: T,
  item: U
) => ({
  ...prev,
  [key]: prev[key].filter((e) => e !== item),
});
