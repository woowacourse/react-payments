import type { CardInputProps } from '../types/CardInputTypes';
import { CARD_BRANDS } from './cardConstants';

interface CardInputConfig {
  id: string;
  label: string;
  InputKeys: (keyof CardInputProps)[];
  placeholder: string;
  maxLength: number;
}

interface CardSelectConfig {
  id: string;
  label: string;
  options: string[];
  defaultMessage: string;
}

interface CardLabeledInputConfig {
  cardNumber: CardInputConfig;
  cardBrand: CardSelectConfig;
  expirationDate: CardInputConfig;
  CVC: CardInputConfig;
  password: CardInputConfig;
}

const CARD_LABEL_INPUT_CONFIG: CardLabeledInputConfig = {
  cardNumber: {
    id: 'card-number',
    label: '카드 번호',
    InputKeys: ['first', 'second', 'third', 'fourth'],
    placeholder: '1234',
    maxLength: 4,
  },
  cardBrand: {
    id: 'card-brand',
    label: '카드브랜드',
    options: CARD_BRANDS,
    defaultMessage: '카드사를 선택해 주세요',
  },
  expirationDate: {
    id: 'expiration-date',
    label: '유효기간',
    InputKeys: ['MM', 'YY'],
    placeholder: 'MM/YY',
    maxLength: 2,
  },
  CVC: {
    id: 'CVC',
    label: 'CVC',
    InputKeys: ['CVC'],
    placeholder: '123',
    maxLength: 3,
  },
  password: {
    id: 'password',
    label: '비밀번호',
    InputKeys: ['password'],
    placeholder: '**',
    maxLength: 2,
  },
};

export default CARD_LABEL_INPUT_CONFIG;
