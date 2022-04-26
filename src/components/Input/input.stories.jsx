import React from "react";
import Input from "./index";
import CardNumberInput from "./CardNumberInput";
import ExpiredDateInput from "./ExpiredDateInput";

export default {
  title: "Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;
const CardNumberTemplate = (args) => <CardNumberInput {...args} />;
const ExpiredDateTemplate = (args) => <ExpiredDateInput {...args} />;

export const Password = Template.bind({});

Password.args = {
  width: 43,
  placeholder: "",
};

export const CardNumber = CardNumberTemplate.bind({});

export const ExpiredDate = ExpiredDateTemplate.bind({});

export const UserName = Template.bind({});

UserName.args = {
  width: 318,
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
};
