import React from 'react';
import Input from '../Input/Input';

import InputBox from './InputBox';

export default {
  title: 'Component/InputBox',
  component: InputBox,
};

const Template = ({ children, ...args }) => (
  <InputBox {...args}>{children}</InputBox>
);

export const Default = Template.bind({});
Default.args = {
  children: <Input placeholder="placeholder" />,
};

export const CardNumber = Template.bind({});
CardNumber.args = {
  children: (
    <>
      <Input
        type="text"
        minLength="4"
        maxLength="4"
        pattern="[0-9]{4}"
        required
      />
      <p>-</p>
      <Input
        type="text"
        minLength="4"
        maxLength="4"
        pattern="[0-9]{4}"
        required
      />
      <p>-</p>
      <Input
        type="password"
        name="thirdCardNumber"
        minLength="4"
        maxLength="4"
        pattern="[0-9]{4}"
        required
      />
      <p>-</p>
      <Input
        type="password"
        name="fourthCardNumber"
        minLength="4"
        maxLength="4"
        pattern="[0-9]{4}"
        required
      />
    </>
  ),
};

export const ExpiredDate = Template.bind({});
ExpiredDate.args = {
  children: (
    <>
      <Input
        type="text"
        name="expiredMonth"
        placeholder="MM"
        className="input-expired-date"
        minLength="2"
        maxLength="2"
        pattern="0[1-9]|1[0-2]"
        required
      />
      <p>/</p>
      <Input
        type="text"
        name="expiredYear"
        placeholder="YY"
        className="input-expired-date"
        minLength="2"
        maxLength="2"
        pattern="[0-9][0-9]"
        required
      />
    </>
  ),
};

export const PasswordDigit = Template.bind({});
PasswordDigit.args = {
  children: (
    <Input
      type="password"
      name="passwordDigit"
      className="input-password"
      minLength="1"
      maxLength="1"
      pattern="[0-9]"
      required
    />
  ),
};
