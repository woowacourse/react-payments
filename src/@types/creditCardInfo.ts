import { CardCompanyEng } from './cardCompany';

interface CreditCardInfo {
  cardNumber: string[];
  expirationDate: string[];
  ownerName: string;
  securityCode: string;
  password: string[];
  cardCompany: CardCompanyEng;
  cardAlias: string;
}

export default CreditCardInfo;
