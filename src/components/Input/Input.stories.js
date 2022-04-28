import React from 'react';
import { uid } from 'react-uid';

import Input from './';

export default {
  component: Input,
  title: 'Input',
};

const Template = args => <Input {...args} />;

export const CardNumberInput = Template.bind({});

CardNumberInput.args = {
  labelTitle: '카드번호',
  children: Object.keys({ first: '', second: '', third: '', forth: '' }).map(stateKey => (
    <input
      key={uid(stateKey)}
      className="input-basic"
      type={stateKey === 'first' || stateKey === 'second' ? 'text' : 'password'}
      maxLength={4}
      required
    />
  )),
};

export const ExpirationDateInput = Template.bind({});

ExpirationDateInput.args = {
  labelTitle: '만료일',
  inputSize: 'w-50',
  children: Object.keys({ month: '', year: '' }).map(stateKey => (
    <input
      key={uid(stateKey)}
      className="input-basic"
      type="text"
      placeholder={stateKey === 'month' ? 'MM' : 'YY'}
      maxLength={2}
      required
    />
  )),
};

export const OwnerNameInput = Template.bind({});

OwnerNameInput.args = {
  labelTitle: '카드 소유자 이름(선택)',
  children: (
    <input
      type="text"
      className="input-basic"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      maxLength={30}
    />
  ),
};

export const SecurityCodeInput = Template.bind({});

SecurityCodeInput.args = {
  labelTitle: '보안코드(CVC/CVV)',
  inputSize: 'w-25',
  children: <input className="input-basic" type="password" maxLength={3} required />,
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  labelTitle: '카드 비밀번호',
  inputSize: 'w-25',
  children: Object.keys({ first: '', second: '' }).map(stateKey => (
    <input key={uid(stateKey)} className="input-basic" type="text" maxLength={1} required />
  )),
};
