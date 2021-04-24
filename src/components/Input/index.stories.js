import React from 'react';
import { Input } from '..';

export default {
  title: 'Component/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const CardNumberInput = Template.bind({});
CardNumberInput.args = {
  container: 'CardInfoForm__Input__Filler--filled CardNumberInput__Filler',
  className: 'CardNumberInput__Field',
  type: 'number',
  value: '1111',
};

export const CardNumberMaskedInput = Template.bind({});
CardNumberMaskedInput.args = {
  container: 'CardInfoForm__Input__Filler--filled CardNumberInput__Filler',
  className: 'CardNumberInput__Field',
  type: 'password',
  value: '1111',
};

export const ExpirationMonthInput = Template.bind({});
ExpirationMonthInput.args = {
  container: 'CardInfoForm__Input__Filler--filled ExpirationDateInput__Filler',
  className: 'ExpirationDateInput__Field',
  type: 'number',
  value: '04',
  placeholder: 'MM',
};

export const CardOwnerNameInput = Template.bind({});
CardOwnerNameInput.args = {
  container: 'CardInfoForm__Input__Filler--filled CardOwnerInput__Filler',
  className: 'CardOwnerInput__Field',
  value: 'SUN',
  placeholder: '카드에 표시된 이름과 동일하게 입력하세요.',
};

export const SecurityCodeInput = Template.bind({});
SecurityCodeInput.args = {
  container: 'CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler',
  className: 'SecurityCodeInput__Field',
  type: 'password',
  value: '123',
};

export const CardPasswordInput = Template.bind({});
CardPasswordInput.args = {
  container: 'CardInfoForm__Input__Filler--filled CardPasswordInput__Filler',
  className: 'CardPasswordInput__Field',
  type: 'password',
  value: '3',
};

export const CardPasswordDisabledInput = Template.bind({});
CardPasswordDisabledInput.args = {
  container: 'CardInfoForm__Input__Filler--transparent CardPasswordInput__Filler',
  className: 'CardPasswordInput__Field',
  type: 'password',
  value: '3',
  disabled: true,
};

export const CardNicknameInput = Template.bind({});
CardNicknameInput.args = {
  container: 'CardNicknameInput__Filler--transparent',
  className: 'CardNicknameInput__Field',
  value: '엄카',
};
