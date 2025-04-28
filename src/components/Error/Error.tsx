import { ErrorCSS } from "./Error.styled";

export interface ErrorProps {
  errorMessage: string | null;
}

function Error({ errorMessage }: ErrorProps) {
  return errorMessage !== "" && <ErrorCSS>{errorMessage}</ErrorCSS>;
}

export default Error;
