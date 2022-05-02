import React from 'react';

import FormInput from '../components/common/FormInput';

import '../css/input.css';
import '../css/utils.css';

export default {
  title: 'Components/common/FormInput',
  component: FormInput,
};

const Template = (args) => <FormInput {...args} />;

export const CardNumberFormInput = Template.bind({});
CardNumberFormInput.args = {
  item: 'number',
  inputTitle: '카드 번호',
  inputInfoList: [
    { type: 'text', className: 'mr-n15' },
    { type: 'text', className: 'mr-n15' },
    { type: 'password', className: 'mr-n15' },
    { type: 'password' },
  ],
};

export const ExpiryDateFormInput = Template.bind({});
ExpiryDateFormInput.args = {
  item: 'expiryDate',
  className: 'w-50',
  inputTitle: '만료일',
  inputInfoList: [
    { type: 'text', placeholder: 'MM', className: 'mr-n15' },
    { type: 'text', placeholder: 'YY' },
  ],
};

export const CardOwnerNameFormInput = Template.bind({});
CardOwnerNameFormInput.args = {
  item: 'ownerName',
  inputTitle: '카드 소유자 이름(선택)',
  inputInfoList: [{ type: 'text', placeholder: '카드에 표시된 이름과 동일하게 입력하세요.' }],
};

export const PrivacyCodeFormInput = Template.bind({});
PrivacyCodeFormInput.args = {
  item: 'privacyCode',
  inputTitle: '보안코드(CVC/CVV)',
  inputInfoList: [{ type: 'password', className: 'w-25' }],
};

export const CardPasswordFormInput = Template.bind({});
CardPasswordFormInput.args = {
  item: 'password',
  inputTitle: '카드 비밀번호',
  inputInfoList: [
    { type: 'password', className: 'w-15' },
    { type: 'password', className: 'w-15' },
    { type: 'password', className: 'w-15' },
    { type: 'password', className: 'w-15' },
  ],
};
