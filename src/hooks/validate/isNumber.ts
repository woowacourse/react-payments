const isNumber = (value: any): boolean => {
  if (value === null || value === undefined) return false;

  return !isNaN(Number(value));
};

export default isNumber;
