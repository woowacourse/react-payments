import { ErrorCSS } from "./Error.styled";

export interface ErrorProps {
  errorMessage: string;
  isVisible: boolean;
}

function Error({ errorMessage, isVisible }: ErrorProps) {
  return isVisible && <ErrorCSS>{errorMessage}</ErrorCSS>;
}

export default Error;
