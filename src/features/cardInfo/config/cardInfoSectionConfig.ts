import {
  cardNumberValidator,
  cardExpirationDateValidator,
  cardCVCValidator,
  cardPasswordValidator,
} from '../../../entities/cardInfo/model/cardInfoValidator';
import { ErrorKey, NO_ERROR } from '../../../entities/cardInfo/constants/cardErrorConstants';
import {
  CardInfoType,
  CARD_INFO_VALID_RULE,
} from '../../../entities/cardInfo/constants/cardInfoTypeConstants';
import { CARD_COMPANIES_ARRAY } from '../../../entities/cardInfo/constants/cardCompanyConstants';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
  SELECT = 'select',
}

type InputConfig = {
  type: string;
  placeholder: string;
  name: string;
  options?: string[];
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
  inputType: InputType;
};

export const cardInfoSectionConfig: CardInfoSectionConfig[] = [
  {
    id: CardInfoType.NUMBER,
    title: '결제할 카드 번호를 입력해 주세요',
    description: '본인 명의의 카드만 결제 가능합니다.',
    subTitle: '카드 번호',
    inputArr: [
      { type: 'text', placeholder: '1234', name: `${CardInfoType.NUMBER}-0` },
      { type: 'text', placeholder: '1234', name: `${CardInfoType.NUMBER}-1` },
      { type: 'text', placeholder: '1234', name: `${CardInfoType.NUMBER}-2` },
      { type: 'text', placeholder: '1234', name: `${CardInfoType.NUMBER}-3` },
    ],
    maxLength: CARD_INFO_VALID_RULE[CardInfoType.NUMBER].MAX_LENGTH,
    validator: cardNumberValidator,
    errorKey: ErrorKey.CARD_NUMBER,
    inputType: InputType.TEXT,
  },
  {
    id: CardInfoType.COMPANY,
    title: '카드사를 선택해 주세요',
    description: '현재 국내 카드사만 가능합니다.',
    subTitle: '',
    inputArr: [
      {
        type: 'select',
        placeholder: '카드사를 선택해주세요',
        name: CardInfoType.COMPANY,
        options: CARD_COMPANIES_ARRAY,
      },
    ],
    maxLength: 0,
    validator: () => NO_ERROR,
    errorKey: ErrorKey.CARD_COMPANY,
    inputType: InputType.SELECT,
  },
  {
    id: CardInfoType.EXPDATE,
    title: '카드 유효기간을 입력해 주세요',
    description: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    subTitle: '유효기간',
    inputArr: [
      { type: 'text', placeholder: 'MM', name: `${CardInfoType.EXPDATE}-month` },
      { type: 'text', placeholder: 'YY', name: `${CardInfoType.EXPDATE}-year` },
    ],
    maxLength: CARD_INFO_VALID_RULE[CardInfoType.EXPDATE].MAX_LENGTH,
    validator: cardExpirationDateValidator,
    errorKey: ErrorKey.CARD_EXPIRATION_DATE,
    inputType: InputType.TEXT,
  },
  {
    id: CardInfoType.CVC,
    title: 'CVC 번호를 입력해 주세요',
    description: '',
    subTitle: 'CVC',
    inputArr: [{ type: 'text', placeholder: '123', name: CardInfoType.CVC }],
    maxLength: CARD_INFO_VALID_RULE[CardInfoType.CVC].MAX_LENGTH,
    validator: cardCVCValidator,
    errorKey: ErrorKey.CARD_CVC,
    inputType: InputType.TEXT,
  },
  {
    id: CardInfoType.PASSWORD,
    title: '비밀번호를 입력해 주세요',
    description: '앞의 2자리를 입력해주세요',
    subTitle: '비밀번호 앞 2자리',
    inputArr: [{ type: 'password', placeholder: '**', name: CardInfoType.PASSWORD }],
    maxLength: CARD_INFO_VALID_RULE[CardInfoType.PASSWORD].MAX_LENGTH,
    validator: cardPasswordValidator,
    errorKey: ErrorKey.CARD_PASSWORD,
    inputType: InputType.PASSWORD,
  },
];
