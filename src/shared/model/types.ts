export interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export interface ErrorProps {
  cardNumberError: { errorIndex: number; errorMessage: string };
  cardExpirationDateError: { errorIndex: number; errorMessage: string };
  cardCVCError: { errorIndex: number; errorMessage: string };
}
