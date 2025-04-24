import {
  cardNumberValidator,
  cardExpirationDateValidator,
  cardCVCValidator,
} from '../../../entities/cardInfo/model/cardInfoValidator';
import { ErrorKey } from '../../../entities/cardInfo/constants/cardErrorConstants';

type InputConfig = {
  type: string;
  placeholder: string;
  name: string;
};

type CardInfoSectionConfig = {
  id: string;
  title: string;
  description: string;
  subTitle: string;
  inputArr: InputConfig[];
  maxLength: number;
  validator: any;
  errorKey: string;
};

export const cardInfoSectionConfig: CardInfoSectionConfig[] = [
  {
    id: 'cardNumber',
    title: '결제할 카드 번호를 입력해 주세요',
    description: '본인 명의의 카드만 결제 가능합니다.',
    subTitle: '카드 번호',
    inputArr: [
      { type: 'text', placeholder: '1234', name: 'cardNumber-0' },
      { type: 'text', placeholder: '1234', name: 'cardNumber-1' },
      { type: 'text', placeholder: '1234', name: 'cardNumber-2' },
      { type: 'text', placeholder: '1234', name: 'cardNumber-3' },
    ],
    maxLength: 4,
    validator: cardNumberValidator,
    errorKey: ErrorKey.CARD_NUMBER,
  },
  {
    id: 'cardExpirationDate',
    title: '카드 유효기간을 입력해 주세요',
    description: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    subTitle: '유효기간',
    inputArr: [
      { type: 'text', placeholder: 'MM', name: 'cardExpirationDate-month' },
      { type: 'text', placeholder: 'YY', name: 'cardExpirationDate-year' },
    ],
    maxLength: 2,
    validator: cardExpirationDateValidator,
    errorKey: ErrorKey.CARD_EXPIRATION_DATE,
  },
  {
    id: 'cardCVC',
    title: 'CVC 번호를 입력해 주세요',
    description: '',
    subTitle: 'CVC',
    inputArr: [{ type: 'text', placeholder: '123', name: 'cardCVC' }],
    maxLength: 3,
    validator: cardCVCValidator,
    errorKey: ErrorKey.CARD_CVC,
  },
];
