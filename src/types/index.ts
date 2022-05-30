interface ArrayContents {
  index: number;
  value: string;
}

interface CardState {
  cardNumber: string[];
  cardPassword: string;
  expireMonth: string;
  expireYear: string;
  securityCode: string;
  userName: string;
}

interface ExpireDate {
  expireMonth: string;
  expireYear: string;
}

type CardStateType = string | string[] | ExpireDate;

interface Children {
  children: JSX.Element;
}

interface ErrorChecker {
  state: CardStateType;
  validate: (state: CardStateType) => void;
  isAnyValueEmpty?: boolean;
}

interface Option {
  index: number;
}

interface Payload {
  type: string;
  contents: string | ArrayContents;
}

interface TextFieldEventTarget {
  name: string;
  value: string;
}

interface TextFieldEvent {
  target: TextFieldEventTarget;
}

interface InputCardState extends CardState {
  isComplete: boolean;
  onChangeTextField: ({ target }: TextFieldEvent, option: Option) => void;
}

export {
  ArrayContents,
  CardState,
  CardStateType,
  Children,
  ErrorChecker,
  ExpireDate,
  Option,
  Payload,
  TextFieldEvent,
  TextFieldEventTarget,
  InputCardState,
};
