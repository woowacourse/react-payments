import { ERROR_TYPE } from "./constants";

const throwError = (message, type) => {
  const error = new Error(message);

  if (!Object.values(ERROR_TYPE).includes(type)) {
    throw new Error("Invalid error type: ", type);
  }

  error.type = type;

  throw error;
};

export default throwError;
