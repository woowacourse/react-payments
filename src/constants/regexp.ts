export const REG_EXP = {
  cardNumberLimit: /[^0-9]/g,
  cardExpiredYearForm: /^[0-9]{2}/g,
  cardExpiredMonthForm: /^(0[1-9]|1[0-2])/g,
  cardNameForm: /[^A-Za-z\s]+$/,
};
