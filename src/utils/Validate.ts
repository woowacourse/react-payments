const Validation = {
  isNumeric(value: string) {
    return !Number.isNaN(Number(value));
  },

  isNumberInRange({ min, max, number }: { min: number; max: number; number: number }) {
    return number >= min && number <= max;
  },

  hasLength(value: string, length: number) {
    return value.length === length;
  },

  isEnglishWithSpace(value: string) {
    return /^[a-zA-Z][a-zA-Z ]*$/.test(value);
  },

  isNotEmpty(value: string) {
    return value !== '';
  },
};

export default Validation;
