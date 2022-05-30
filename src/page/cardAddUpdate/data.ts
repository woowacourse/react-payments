import { v4 as uuid } from 'uuid';
import { COMPANY_LIST, THEME } from 'constants/index';

export const cardNumberInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    className: 'mr-n15 tracking-wide',
    name: 'first',
    autoFocus: true,
  },
  {
    id: uuid(),
    type: 'text',
    className: 'mr-n15 tracking-wide',
    name: 'second',
  },
  {
    id: uuid(),
    type: 'password',
    className: 'mr-n15 tracking-wide',
    name: 'third',
  },
  {
    id: uuid(),
    type: 'password',
    className: 'tracking-wide',
    name: 'fourth',
  },
];

export const expiryDateInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    placeholder: 'MM',
    className: 'mr-n15',
    name: 'month',
  },
  {
    id: uuid(),
    type: 'text',
    placeholder: 'YY',
    name: 'year',
  },
];

export const cardOwnerNameInputInfoList = [
  {
    id: uuid(),
    type: 'text',
    placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
    className: 'text-left',
  },
];

export const privacyCodeInputInfoList = [
  {
    id: uuid(),
    type: 'password',
    className: 'w-25 tracking-wide',
  },
];

export const cardPasswordInputInfoList = [
  {
    id: uuid(),
    type: 'password',
    className: 'w-5',
    name: 'first',
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5',
    name: 'second',
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5 input-disabled',
    disabled: true,
    name: 'third',
  },
  {
    id: uuid(),
    type: 'password',
    className: 'w-5 input-disabled',
    disabled: true,
    name: 'fourth',
  },
];

export const cardCompanyList = [
  { id: uuid(), company: COMPANY_LIST.VALLISTA1, theme: THEME.RED },
  { id: uuid(), company: COMPANY_LIST.VALLISTA2, theme: THEME.BLUE },
  { id: uuid(), company: COMPANY_LIST.VALLISTA3, theme: THEME.GREEN },
  { id: uuid(), company: COMPANY_LIST.VALLISTA4, theme: THEME.HOT_PINK },
  { id: uuid(), company: COMPANY_LIST.VALLISTA5, theme: THEME.MINT },
  { id: uuid(), company: COMPANY_LIST.VALLISTA6, theme: THEME.PINK },
  { id: uuid(), company: COMPANY_LIST.VALLISTA7, theme: THEME.ORANGE },
  { id: uuid(), company: COMPANY_LIST.VALLISTA8, theme: THEME.YELLOW },
];
