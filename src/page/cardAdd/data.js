import { v4 as uuid } from 'uuid';
import { COMPANY, INPUT_MAX_LENGTH, THEME } from '../../constants';

export const cardNumberInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    className: 'mr-n15 tracking-wide',
    name: 'first',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
    autoFocus: true,
  },
  {
    id: uuid(),
    type: 'text',
    className: 'mr-n15 tracking-wide',
    name: 'second',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'mr-n15 tracking-wide',
    name: 'third',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'tracking-wide',
    name: 'fourth',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
  },
];

export const expiryDateInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    placeholder: 'MM',
    className: 'mr-n15',
    name: 'month',
    maxLength: INPUT_MAX_LENGTH.EXPIRY_DATE,
  },
  {
    id: uuid(),
    type: 'text',
    placeholder: 'YY',
    name: 'year',
    maxLength: INPUT_MAX_LENGTH.EXPIRY_DATE,
  },
];

export const cardOwnerNameInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    className: 'text-left',
    maxLength: INPUT_MAX_LENGTH.OWNER_NAME,
  },
];

export const privacyCodeInputInfoList = [
  {
    id: uuid(),
    type: 'password',
    className: 'w-25 tracking-wide',
    maxLength: INPUT_MAX_LENGTH.PRIVACY_CODE,
  },
];

export const cardPasswordInputInfoList = [
  {
    id: uuid(),
    type: 'password',
    className: 'w-5',
    name: 'first',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5',
    name: 'second',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5 input-disabled',
    isDisabled: true,
    name: 'third',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5 input-disabled',
    isDisabled: true,
    name: 'fourth',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
];

export const cardCompanyList = [
  { id: uuid(), company: COMPANY.VALLISTA, theme: THEME.RED },
  { id: uuid(), company: COMPANY.YULIE, theme: THEME.BLUE },
  { id: uuid(), company: COMPANY.ASA, theme: THEME.GREEN },
  { id: uuid(), company: COMPANY.ROY, theme: THEME.HOT_PINK },
  { id: uuid(), company: COMPANY.AUSTIN, theme: THEME.MINT },
  { id: uuid(), company: COMPANY.YB, theme: THEME.PINK },
  { id: uuid(), company: COMPANY.NOS, theme: THEME.ORANGE },
  { id: uuid(), company: COMPANY.WALTER, theme: THEME.YELLOW },
];
