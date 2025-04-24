import { ErrorCSS } from "./Error.styled";

export interface ErrorProps {
  errorMessage: string | null;
  isVisible: boolean;
}

export default function Error({ errorMessage, isVisible }: ErrorProps) {
  return isVisible && errorMessage && <ErrorCSS>{errorMessage}</ErrorCSS>;
}
