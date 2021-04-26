import { ERROR_TYPE } from "./constants";

const throwError = (message, type) => {
  const error = new Error(message);

  if (!(type in ERROR_TYPE)) {
    throw new Error("Invalid error type");
  }

  error.type = type;

  throw error;
};

export default throwError;
