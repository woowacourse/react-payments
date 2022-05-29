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

interface ErrorChecker {
  state: CardStateType;
  validate: (state: CardStateType) => void;
  isAnyValueEmpty: boolean;
}

interface Payload {
  type: string;
  contents: string | ArrayContents;
}

export { ArrayContents, CardState, CardStateType, ErrorChecker, ExpireDate, Payload };
