const validate = {
  isNumberInRange: ({
    min,
    max,
    compareNumber,
  }: {
    min: number;
    max: number;
    compareNumber: number;
  }) => {
    return compareNumber >= min && compareNumber <= max;
  },

  isValidDigit: (value: string) => {
    return /^\d+$/.test(value);
  },

  isVisa: (value: string) => {
    return /\b4\d{15}\b/.test(value);
  },

  isMasterCard: (value: string) => {
    return /\b5[1-5]\d{14}\b/.test(value);
  },

  isEnglish: (value: string) => {
    return /^[a-zA-Z ]*$/.test(value);
  },

  isEmptyValue: (value: string) => {
    return value.length === 0;
  },
};

export default validate;
