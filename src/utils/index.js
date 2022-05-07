export const pareCardFormState = (state) => {
  const parsedState = { ...state };
  delete parsedState.isInitialCardNumber;
  delete parsedState.isCardNumberError;
  delete parsedState.isInitialOwnerName;
  delete parsedState.isOwnerNameError;
  delete parsedState.isInitialSecureCode;
  delete parsedState.isSecureCodeError;
  delete parsedState.isInitialExpiredDate;
  delete parsedState.isExpiredDateError;
  delete parsedState.isInitialPassword;
  delete parsedState.isPasswordError;
  delete parsedState.isCardTypeSelected;
  delete parsedState.firstPassword;
  delete parsedState.secondPassword;

  return parsedState;
};
