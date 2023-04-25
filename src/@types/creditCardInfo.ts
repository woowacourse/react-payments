import { Banks } from './banks';

interface CreditCardInfo {
  cardNumber: string[];
  expirationDate: string[];
  ownerName: string;
  securityCode: string;
  password: string[];
  bank: Banks;
}

export default CreditCardInfo;
