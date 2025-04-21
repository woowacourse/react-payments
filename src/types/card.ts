export type CardLogo = 'visa' | 'master' | '';

export type Expiration = {
  month: string;
  year: string;
};

export type CardNumber = {
  first: string;
  second: string;
  third: string;
  fourth: string;
};
