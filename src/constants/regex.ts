export const INPUT_REGEX = {
  cardNumber: /^\d{4}$/,
  period: {
    month: /^(0?[1-9]|1[0-2])$/,
    year: /^[0-9]{2}$/,
  },
  userName: /^[a-zA-Z\s]*$/,
  CVCNumber: /^\d{3}$/,
  password: /^\d{2}$/,
};

export const CARD_MARK_REGEX = {
  visa: /^4[0-9]{15}$/,
  master: /^(5[1-5][0-9]{14})$/,
};
