const INPUT_REGEX = {
  period: {
    month: /^(0?[1-9]|1[0-2])$/,
    year: /^[0-9]{2}$/,
  },
  userName: /^[a-zA-Z\s]*$/,
  CVCNumber: /^\d{3}$/,
  password: /^\d{2}$/,
};

export default INPUT_REGEX;
