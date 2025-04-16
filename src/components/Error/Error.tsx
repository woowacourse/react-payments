import { ErrorCSS } from "./Error.styled";

export interface ErrorProps {
  errorMessage: string;
  isVisible: boolean;
}

function Error({ errorMessage, isVisible }: ErrorProps) {
  return isVisible ? <ErrorCSS>{errorMessage}</ErrorCSS> : null;
}

export default Error;
