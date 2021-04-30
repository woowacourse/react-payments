import { ERROR_TYPE } from "./constants";

const throwError = (message, type) => {
  if (!Object.values(ERROR_TYPE).includes(type)) {
    throw new Error("Invalid error type: ", type);
  }

  const error = new Error(message);

  error.type = type;

  throw error;
};

export default throwError;
