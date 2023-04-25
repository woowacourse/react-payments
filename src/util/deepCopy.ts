export const deepCopyObject = (origin: object, key: string, value: any) => {
  const updateResult = JSON.parse(JSON.stringify(origin));

  updateResult[key] = value;
  return updateResult;
};
