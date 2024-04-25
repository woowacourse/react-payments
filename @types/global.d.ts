declare module 'types' {
  export type RegisterStepProps = {
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    isError: boolean;
    onEnter: (e: React.KeyboardEvent) => void;
    onBlur: React.FocusEventHandler<HTMLInputElement>;
  };

  export type InitialCardNumberState = {
    value: string;
    isError: boolean;
  };

  export type RegisterStep =
    | 'cardNumbers'
    | 'cardIssuer'
    | 'cardExpirationDate'
    | 'cardOwnerName'
    | 'cardCvc'
    | 'cardPassword';

  export type RegisterComponentProps = {
    step: RegisterStepType;
  };

  export type UseDetectCompleteHookProps = {
    cardNumbers: InitialCardNumberState[];
    month: string;
    year: string;
    cvc: string;
    password: string;
    name: string;
  };
}
