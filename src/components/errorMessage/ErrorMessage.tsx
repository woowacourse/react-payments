interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <span>{message}</span>;
};

export default ErrorMessage;
