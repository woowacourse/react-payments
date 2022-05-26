interface Args {
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
  ownerName: string;
  secureCode: string;
  expiredMonth: string;
  expiredYear: string;
  firstPassword: string;
  secondPassword: string;
  cardType: string;
}

interface ReturnType {
  firstCardNumber: string;
  secondCardNumber: string;
  thirdCardNumber: string;
  fourthCardNumber: string;
  ownerName: string;
  secureCode: string;
  expiredMonth: string;
  expiredYear: string;
  firstPassword: string;
  secondPassword: string;
  cardType: string;
}

export const pareCardFormState = ({
  firstCardNumber,
  secondCardNumber,
  thirdCardNumber,
  fourthCardNumber,
  ownerName,
  secureCode,
  expiredMonth,
  expiredYear,
  firstPassword,
  secondPassword,
  cardType,
}: Args): ReturnType => {
  return {
    firstCardNumber,
    secondCardNumber,
    thirdCardNumber,
    fourthCardNumber,
    ownerName,
    secureCode,
    expiredMonth,
    expiredYear,
    firstPassword,
    secondPassword,
    cardType,
  };
};
