export type BaseError = 'notNumber';
export type CardError = BaseError | 'notExistBrand' | 'cardNumberCount';
export type DateError = 'emptyBoth';
export type MonthError = 'emptyMonth' | 'notMonthRange' | 'notMonthNumber';
export type YearError = 'emptyYear' | 'notYearNumber';
export type CvcError = BaseError | 'cvcCount';

export type CardErrorType = {
  [key in CardError]: string;
};

export type DateErrorType = {
  [key in DateError]: string;
};

export type MonthErrorType = {
  [key in MonthError]: string;
};

export type YearErrorType = {
  [key in YearError]: string;
};

export type CvcErrorType = {
  [key in CvcError]: string;
};
