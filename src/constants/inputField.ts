import { CardNumbersType, ExpirationDateType } from '../components/Form/PaymentForm';
import { InputFieldConfig } from '../types/field';
import { detectCardBrand } from '../utils/cards';
import { getCardNumbersMaxLength, isFieldComplete } from '../utils/fields';
import { expirationDateValidator } from '../utils/validate';
import { VALIDATION_RULE } from './validation';

export const SELECT_FIELD_CONFIG = {
  cardIssuer: {
    id: 'cardIssuer',
    sectionTitle: '카드사를 선택해 주세요',
    hintText: '현재 국내 카드사만 가능합니다',
    placeholder: '카드사를 선택해 주세요',
  },
} as const;

export type InputFieldConfigType = keyof typeof INPUT_FIELD_CONFIG;
export const INPUT_FIELD_CONFIG = {
  cardNumbers: {
    id: 'cardNumbers',
    type: 'text',
    sectionTitle: '결제할 카드 번호를 입력해 주세요',
    hintText: '본인 명의의 카드만 결제 가능합니다.',
    label: '카드 번호',
    placeholder: ['1234', '1234', '1234', '1234'],
  },
  expirationDate: {
    id: 'expirationDate',
    type: 'text',
    sectionTitle: '카드 유효기간을 입력해 주세요',
    hintText: '월/년도(MMYY)를 순서대로 입력해 주세요.',
    label: '유효 기간',
    placeholder: ['MM', 'YY'],
  },
  cvc: {
    id: 'cvc',
    type: 'text',
    sectionTitle: 'CVC 번호를 입력해 주세요',
    label: 'CVC',
    placeholder: ['123'],
  },
  password: {
    id: 'password',
    type: 'password',
    sectionTitle: '비밀번호를 입력해 주세요',
    hintText: '앞의 2자리를 입력해주세요',
    label: '비밀번호 앞 2자리',
    placeholder: ['**'],
  },
} satisfies Record<string, InputFieldConfig>;

export const FIELD_STEP_SEQUENCE = [
  {
    name: 'cardNumbers',
    isComplete: (cardNumbers: CardNumbersType) => {
      const brand = detectCardBrand(cardNumbers);
      return cardNumbers.every((value, i) =>
        isFieldComplete(value, getCardNumbersMaxLength(brand, cardNumbers.length, i))
      );
    },
  },
  {
    name: 'cardIssuer',
    isComplete: (value: string | null) => !!value,
  },
  {
    name: 'expirationDate',
    isComplete: (expirationDate: ExpirationDateType) =>
      Object.values(expirationDate).every((value, i) => !expirationDateValidator(value, i).error),
  },
  {
    name: 'cvc',
    isComplete: (value: string) => isFieldComplete(value, VALIDATION_RULE.CVC_LENGTH),
  },
  {
    name: 'password',
    isComplete: (value: string) => isFieldComplete(value, VALIDATION_RULE.PASSWORD_LENGTH),
  },
];
