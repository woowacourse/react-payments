import { CardCompany } from './cardCompany';

interface CreditCardInfo {
  cardNumber: string[];
  expirationDate: string[];
  ownerName: string;
  securityCode: string;
  password: string[];
  cardCompany: CardCompany;
  cardAlias: string;
}

export default CreditCardInfo;
