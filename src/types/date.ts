export const DATE = {
  YEAR: 'year',
  MONTH: 'month',
} as const;

export type Date = {
  [DATE.YEAR]: string;
  [DATE.MONTH]: string;
};

export type DateItem = typeof DATE.MONTH | typeof DATE.YEAR;
