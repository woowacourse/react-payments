import CreditCardInfo from '../@types/creditCardInfo';

export interface CreditCardInfoWithId extends CreditCardInfo {
  cardId: number;
}

export const isCreditCardInfoType = (dataList: any[]): dataList is CreditCardInfoWithId[] => {
  return dataList.every((data) => {
    return (
      'cardNumber' in data &&
      'expirationDate' in data &&
      'ownerName' in data &&
      'password' in data &&
      'cardCompany' in data &&
      'cardAlias' in data &&
      'cardId' in data
    );
  });
};
