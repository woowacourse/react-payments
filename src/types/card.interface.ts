interface card {
  name: string;
  color: string;
}

interface cardNumbers {
  firstNumber: string;
  secondNumber: string;
  thirdNumber: string;
  fourthNumber: string;
}

interface expireDate {
  month: string;
  year: string;
}

type ownerName = string;

export type { card, cardNumbers, expireDate, ownerName };
