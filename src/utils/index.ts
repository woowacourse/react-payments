const isNumber = (value: string) => /^[0-9]*$/g.test(value);

const isEnglishName = (value: string) => /^[A-Z ]*$/g.test(value);

export { isNumber, isEnglishName };
