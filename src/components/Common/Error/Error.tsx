import { ErrorCSS } from "./Error.styled";

export interface ErrorProps {
  errorMessage: string;
  isVisible: boolean;
}

export default function Error({ errorMessage, isVisible }: ErrorProps) {
  return isVisible && <ErrorCSS>{errorMessage}</ErrorCSS>;
}
