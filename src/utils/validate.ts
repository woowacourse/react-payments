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
};

export default validate;
