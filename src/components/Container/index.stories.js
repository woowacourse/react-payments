import React from 'react';
import { Container } from '.';
import { Input, Text } from '..';

export default {
  title: 'Component/Container',
  component: Container,
};

const Template = (args) => <Container {...args} />;

export const CardNumberInputContainer = Template.bind({});
CardNumberInputContainer.args = {
  className: 'CardInfoForm__Input__Filler--filled CardNumberInput__Filler',
  children: (
    <>
      <Input className="CardNumberInput__Field" type="number" value="1111" />
      <Text fontSize="0.75rem" textAlign="start" width="1rem">
        -
      </Text>
      <Input className="CardNumberInput__Field" type="number" value="1111" />
      <Text fontSize="0.75rem" textAlign="start" width="1rem">
        -
      </Text>
      <Input className="CardNumberInput__Field" type="password" value="1111" />
      <Text fontSize="0.75rem" textAlign="start" width="1rem">
        -
      </Text>
      <Input className="CardNumberInput__Field" type="password" value="1111" />
    </>
  ),
};

export const ExpirationDateInputContainer = Template.bind({});
ExpirationDateInputContainer.args = {
  className: 'CardInfoForm__Input__Filler--filled ExpirationDateInput__Filler',
  children: (
    <>
      <Input className="ExpirationDateInput__Field" placeholder="MM" type="number" value="04" />
      <Text fontSize="0.75rem" textAlign="start" width="1rem">
        /
      </Text>
      <Input className="ExpirationDateInput__Field" placeholder="YY" type="number" value="21" />
    </>
  ),
};

export const OwnerNameInputContainer = Template.bind({});
OwnerNameInputContainer.args = {
  className: 'CardInfoForm__Input__Filler--filled OwnerNameInput__Filler',
  children: (
    <Input
      className="OwnerNameInput__Field"
      placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      value="SUN"
    />
  ),
};

export const SecurityCodeInputContainer = Template.bind({});
SecurityCodeInputContainer.args = {
  className: 'CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler',
  children: <Input className="SecurityCodeInput__Field" type="password" value="123" />,
};

export const PasswordInputContainer = Template.bind({});
PasswordInputContainer.args = {
  className: 'CardInfoForm__Input__Filler--filled CardPasswordInput__Filler',
  children: <Input className="CardPasswordInput__Field" type="password" value="3" />,
};

export const PasswordDisabledInputContainer = Template.bind({});
PasswordDisabledInputContainer.args = {
  className: 'CardInfoForm__Input__Filler--transparent CardPasswordInput__Filler',
  children: <Input className="CardPasswordInput__Field" disabled type="password" value="3" />,
};

export const NicknameInputContainer = Template.bind({});
NicknameInputContainer.args = {
  className: 'CardNicknameInput__Filler--transparent',
  children: <Input className="CardNicknameInput__Field" value="엄카" />,
};
