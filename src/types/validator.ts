export interface Validator {
  firstCardNumbers: (value: string) => string;
  secondCardNumbers: (value: string) => string;
  thirdCardNumbers: (value: string) => string;
  fourthCardNumbers: (value: string) => string;
  expirationMonth: (value: string) => string;
  expirationYear: (value: string) => string;
  ownerName: (value: string) => string;
  securityNumbers: (value: string) => string;
  firstPassword: (value: string) => string;
  secondPassword: (value: string) => string;
  [key: string]: (value: string) => string;
}
