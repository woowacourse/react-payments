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

  isSatisfiedLength: (standardLength: number, compareLength: number) => {
    return standardLength === compareLength;
  },

  isOverYear: (year: number) => {
    const currentYear = Number(new Date().getFullYear().toString().slice(2));
    console.log(currentYear, year);
    return currentYear <= year;
  },
};

export default validate;
