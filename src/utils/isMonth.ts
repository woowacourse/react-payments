const MONTH_MIN = 1;
const MONTH_MAX = 12;

const isMonth = (v: number) => {
  if (v >= MONTH_MIN && v <= MONTH_MAX) {
    return true;
  }

  return false;
};

export default isMonth;
