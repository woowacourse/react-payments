const getErrorMessageFromList = (errorMessageList: string[]) => {
  return errorMessageList.find((errorMessage) => errorMessage !== '') ?? '';
};

export default getErrorMessageFromList;
