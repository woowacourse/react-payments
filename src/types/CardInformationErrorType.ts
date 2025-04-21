export type CardInformationErrorType = {
  uniqueNumber: [boolean, boolean, boolean, boolean];
  expirationDate: [boolean, boolean];
  cvcNumber: [boolean];
};

export type ErrorMessageType = {
  uniqueNumber: string;
  expirationDate: string;
  cvcNumber: string;
};
