import React from "react";
import Input from "./index";
import CardNumberInput from "./CardNumberInput";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;
const CardNumberTemplate = (args) => <CardNumberInput {...args} />;

export const Password = Template.bind({});

Password.args = {
  width: 43,
  placeholder: "",
};

export const CardNumber = CardNumberTemplate.bind({});

CardNumber.args = {};

export const UserName = Template.bind({});

UserName.args = {
  width: 318,
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
};

export const ExpiredNumber = Template.bind({});

ExpiredNumber.args = {
  width: 137,
  placeholder: "MM/YY",
};
