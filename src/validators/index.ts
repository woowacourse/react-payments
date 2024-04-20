export const isValidCardNumbers = (number: number) => {
  return !Number.isNaN(number);
};

export const isValidOwnerName = (name: string) => {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(name);
};

export const isValidPeriod = (number, name) => {
  const now = new Date();
  // const nowYear = Number(now.getFullYear().toString().slice(2));
  // const nowMonth = now.getMonth() + 1;
  // // if (Number.isNaN(year) || isNaN(month)) return false;

  // // if (nowYear > year || (nowYear === year && nowMonth > month) || month > 12 || month < 1) {
  // //   return false;
  // // }
  return true;
};
