const PATTERN = {
  CARD_NUMBER: '^d{4} d{4} •{4} •{4}$',
  EXPIRATION_DATE: '^(0[1-9]|1[0-2])/(2[3-8]|[4-9][0-9])$',
  SECURITY_CODE: '^\\d{3,4}$',
  PASSWORD: '^\\d$',
};

export { PATTERN };
