export const deepCopy = (obj) => {
  try {
    const stringifiedObj = JSON.stringify(obj);
    return JSON.parse(stringifiedObj);
  } catch (error) {
    console.error(error);
  }
};
