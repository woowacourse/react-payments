const toOnlyNumber = (value: string) => {
  return value.replace(/[^\d]/g, "");
};

const toHiddenNumber = (value: string) => {
  return value.replace(/[^\d•]/g, "");
};

export { toOnlyNumber, toHiddenNumber };
