export type CardObject = {
  id: number;
  nickName: string;
  ownerName: string;
  cardType: {
    color: string;
    name: string;
  };
  cardNumber: Array<string>;
  expiredDate: {
    expiredMonth: string;
    expiredYear: string;
  };
  secureCode: string;
  password: Array<string>;
};
