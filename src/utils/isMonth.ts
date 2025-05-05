const MONTH_MIN = 1;
const MONTH_MAX = 12;

const isMonth = (v: number) => {
  return v >= MONTH_MIN && v <= MONTH_MAX;
};

export default isMonth;
