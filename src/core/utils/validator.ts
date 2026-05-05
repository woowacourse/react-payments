export const isNumericString = (str: string) => {
  const regex = /^\d+$/;
  return regex.test(str);
};

export const isValidMonth = (month: string) => {
  // ^0[1-9] : 0으로 시작하고 뒤에 1~9가 오거나 (01~09)
  // | : 또는
  // ^1[0-2] : 1로 시작하고 뒤에 0~2가 오는 경우 (10~12)
  const regex = /^(0[1-9]|1[0-2])$/;
  return regex.test(month);
};
