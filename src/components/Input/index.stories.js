import React from 'react';
import { Input } from '.';

export default {
  title: 'Component/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const CardNumberInput = Template.bind({});
CardNumberInput.args = {
  type: 'number',
  value: '1111',
  width: '4.8rem',
};

export const CardNumberMaskedInput = Template.bind({});
CardNumberMaskedInput.args = {
  type: 'password',
  value: '1111',
  width: '4.8rem',
};

export const ExpirationMonthInput = Template.bind({});
ExpirationMonthInput.args = {
  type: 'number',
  value: '04',
  placeholder: 'MM',
  width: '2.4rem',
};

export const CardOwnerNameInput = Template.bind({});
CardOwnerNameInput.args = {
  value: 'SUN',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
  width: '18rem',
};

export const SecurityCodeInput = Template.bind({});
SecurityCodeInput.args = {
  type: 'password',
  value: '123',
  width: '3.6rem',
};

export const CardPasswordInput = Template.bind({});
CardPasswordInput.args = {
  type: 'password',
  value: '3',
  width: '1.2rem',
  textAlign: 'center',
};

export const CardPasswordDisabledInput = Template.bind({});
CardPasswordDisabledInput.args = {
  type: 'password',
  value: '3',
  width: '1.2rem',
  textAlign: 'center',
  disabled: true,
};

export const UserCardNicknameInput = Template.bind({});
UserCardNicknameInput.args = {
  value: '엄카',
  width: '15rem',
  textAlign: 'center',
  color: '#383838',
};
