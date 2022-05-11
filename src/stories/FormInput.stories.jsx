import React from 'react';

import FormInput from 'components/common/FormInput';

import 'css/input.css';
import 'css/utils.css';

import { INPUT_MAX_LENGTH, THEME, CRYPTO_STRING } from 'constants';

export default {
  title: 'Components/common/FormInput',
  component: FormInput,
  argTypes: {
    className: { control: false },
    item: { control: false },
    inputValue: { control: false },
    onChange: { action: 'input-value-changed' },
    theme: {
      control: 'inline-radio',
      options: [
        'defalut',
        THEME.RED,
        THEME.BLUE,
        THEME.GREEN,
        THEME.HOT_PINK,
        THEME.MINT,
        THEME.PINK,
        THEME.ORANGE,
        THEME.YELLOW,
      ],
    },
  },
};

const Template = (args) => <FormInput {...args} />;

export const CardNumberFormInput = Template.bind({});
CardNumberFormInput.args = {
  item: 'number',
  inputTitle: '카드 번호',
  inputInfoList: [
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
  ],
  inputRef: { current: [] },
};

export const ExpiryDateFormInput = Template.bind({});
ExpiryDateFormInput.args = {
  item: 'expiryDate',
  className: 'w-50',
  inputTitle: '만료일',
  inputInfoList: [
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
  ],
  inputRef: { current: [] },
};

export const CardOwnerNameFormInput = Template.bind({});
CardOwnerNameFormInput.args = {
  item: 'ownerName',
  inputTitle: '카드 소유자 이름(선택)',
  inputInfoList: [
    {
      id: 6,
      type: 'text',
      placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
      className: 'text-left',
      maxLength: INPUT_MAX_LENGTH.OWNER_NAME,
    },
  ],
  children: <div className="owner-name-length">/ {INPUT_MAX_LENGTH.OWNER_NAME}</div>,
  inputRef: { current: [] },
};

export const PrivacyCodeFormInput = Template.bind({});
PrivacyCodeFormInput.args = {
  item: 'privacyCode',
  inputTitle: '보안코드(CVC/CVV)',
  inputInfoList: [
    {
      id: 7,
      type: 'password',
      className: 'w-25 tracking-wide',
      maxLength: INPUT_MAX_LENGTH.PRIVACY_CODE,
    },
  ],
  inputRef: { current: [] },
};

export const CardPasswordFormInput = Template.bind({});
CardPasswordFormInput.args = {
  item: 'password',
  inputTitle: '카드 비밀번호',
  inputInfoList: [
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
  ],
  inputValue: { third: CRYPTO_STRING, fourth: CRYPTO_STRING },
  inputRef: { current: [] },
};
