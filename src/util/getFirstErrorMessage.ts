export const getFirstErrorMessage = (errorMessagesArray: string[]) => {
  return errorMessagesArray.filter((message) => message.length !== 0)[0];
};
