import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = args => <Input {...args} />;

export const CardNumberInput = Template.bind({});

CardNumberInput.args = {
  id: "card-number-input-0",
  type: "text",
  className: "w-full outline-none",
  name: 0,
  minLength: "4",
  maxLength: "4",
  inputmode: "numeric",
  value: "1234",
  label: "카드 번호 입력란 0",
  required: true,
};

export const ExpirationDateInput = Template.bind({});

ExpirationDateInput.args = {
  id: "expiration-date-input",
  type: "text",
  placeholder: "MM/YY",
  className: "w-36",
  minLength: "5",
  maxLength: "5",
  inputmode: "numeric",
  value: "1234",
  label: "만료일",
  required: true,
};

export const OwnerNameInput = Template.bind({});

OwnerNameInput.args = {
  id: "owner-name-input",
  type: "text",
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
  className: "w-full",
  label: "카드 소유자 이름 입력란",
  value: "동동",
  minLength: "0",
  maxLength: "30",
  required: false,
};

export const SecurityCodeInput = Template.bind({});

SecurityCodeInput.args = {
  id: "security-code-input",
  type: "password",
  className: "w-20",
  label: "보안 코드 입력란",
  inputmode: "numeric",
  minLength: "3",
  maxLength: "4",
  value: "123",
  required: true,
};

export const PasswordInput = Template.bind({});

PasswordInput.args = {
  id: "password-input-0",
  name: "0",
  type: "password",
  className: "w-10 text-center",
  label: "카드 비밀번호1",
  inputmode: "numeric",
  value: "1",
  minLength: "1",
  maxLength: "1",
  required: true,
};
