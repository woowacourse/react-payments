export const isValidCardNumbers = (arr: number[][]) => {
  return arr.every((arr2) => arr2.every((value: number) => !isNaN(value)));
};

export const isValidOwnerName = (name: string) => {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(name);
};

export const isValidPeriod = ({ month, year }: { month: number; year: number }) => {
  const now = new Date();
  const nowYear = Number(now.getFullYear().toString().slice(2));
  const nowMonth = now.getMonth() + 1;
  if (isNaN(year) || isNaN(month)) return false;

  if (nowYear > year || (nowYear === year && nowMonth > month) || month > 12 || month < 1) {
    return false;
  }
  return true;
};
