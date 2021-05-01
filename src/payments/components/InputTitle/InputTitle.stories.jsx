import React from "react";
import InputTitle from "./InputTitle";

export default {
  title: "InputTitle",
  component: InputTitle,
};

const Template = args => <InputTitle {...args} />;

export const CardNumberInputTitle = Template.bind({});

CardNumberInputTitle.args = {
  innerText: "카드 번호",
};

export const ExpirationDateInputTitle = Template.bind({});

ExpirationDateInputTitle.args = {
  innerText: "만료일",
};

export const OwnerNameInputTitle = Template.bind({});

OwnerNameInputTitle.args = {
  innerText: "카드 소유자 이름(선택)",
};

export const SecurityCodeInputTitle = Template.bind({});

SecurityCodeInputTitle.args = {
  innerText: "보안코드(CVC/CVV)",
};

export const PasswordInputTitle = Template.bind({});

PasswordInputTitle.args = {
  innerText: "카드 비밀번호",
};
