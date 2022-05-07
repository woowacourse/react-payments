import { COMPANY, INPUT_MAX_LENGTH, THEME } from 'constants';

export const cardNumberInputInfoList = [
  {
    id: 0,
    type: 'text',
    className: 'mr-n15 tracking-wide',
    name: 'first',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
    autoFocus: true,
  },
  {
    id: 1,
    type: 'text',
    className: 'mr-n15 tracking-wide',
    name: 'second',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
  },
  {
    id: 2,
    type: 'password',
    className: 'mr-n15 tracking-wide',
    name: 'third',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
  },
  {
    id: 3,
    type: 'password',
    className: 'tracking-wide',
    name: 'fourth',
    maxLength: INPUT_MAX_LENGTH.NUMBER,
  },
];

export const expiryDateInputInfoList = [
  {
    id: 4,
    type: 'text',
    placeholder: 'MM',
    className: 'mr-n15',
    name: 'month',
    maxLength: INPUT_MAX_LENGTH.EXPIRY_DATE,
  },
  {
    id: 5,
    type: 'text',
    placeholder: 'YY',
    name: 'year',
    maxLength: INPUT_MAX_LENGTH.EXPIRY_DATE,
  },
];

export const cardOwnerNameInputInfoList = [
  {
    id: 6,
    type: 'text',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    className: 'text-left',
    maxLength: INPUT_MAX_LENGTH.OWNER_NAME,
  },
];

export const privacyCodeInputInfoList = [
  {
    id: 7,
    type: 'password',
    className: 'w-25 tracking-wide',
    maxLength: INPUT_MAX_LENGTH.PRIVACY_CODE,
  },
];

export const cardPasswordInputInfoList = [
  {
    id: 8,
    type: 'password',
    className: 'w-5',
    name: 'first',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
  {
    id: 9,
    type: 'password',
    className: 'w-5',
    name: 'second',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
  {
    id: 10,
    type: 'password',
    className: 'w-5 input-disabled',
    disabled: true,
    name: 'third',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
  {
    id: 11,
    type: 'password',
    className: 'w-5 input-disabled',
    disabled: true,
    name: 'fourth',
    maxLength: INPUT_MAX_LENGTH.PASSWORD,
  },
];

export const cardCompanyList = [
  { company: COMPANY.VALLISTA, theme: THEME.RED },
  { company: COMPANY.YULIE, theme: THEME.BLUE },
  { company: COMPANY.ASA, theme: THEME.GREEN },
  { company: COMPANY.ROY, theme: THEME.HOT_PINK },
  { company: COMPANY.AUSTIN, theme: THEME.MINT },
  { company: COMPANY.YB, theme: THEME.PINK },
  { company: COMPANY.NOS, theme: THEME.ORANGE },
  { company: COMPANY.WALTER, theme: THEME.YELLOW },
];
