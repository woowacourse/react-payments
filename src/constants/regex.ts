const INPUT_REGEX = {
  period: {
    month: /^(0?[1-9]|1[0-2])$/,
    year: /^[0-9]{2}$/,
  },
  userName: /^[a-zA-Z\s]*$/,
};

export default INPUT_REGEX;
