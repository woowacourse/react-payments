import React from "react";

import Input from "../components/Input";

export default {
  component: Input,
  title: "Input",
};

const Template = args => <Input {...args} />;

export const CardNumber = Template.bind({});
CardNumber.args = {
  type: "number",
  width: "",
  onChange: () => {},
  maxLength: 4,
  placeholder: "",
};

export const CardSecretNumber = Template.bind({});
CardSecretNumber.args = {
  type: "password",
  width: "",
  onChange: () => {},
  maxLength: 4,
  placeholder: "",
};

export const ExpiredDate = Template.bind({});
ExpiredDate.args = {
  type: "text",
  width: "",
  onChange: () => {},
  maxLength: 0,
  placeholder: "",
};

export const CardUserName = Template.bind({});
CardUserName.args = {
  type: "text",
  width: "",
  onChange: () => {},
  maxLength: 0,
  placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
};

export const SecurityCode = Template.bind({});
SecurityCode.args = {
  type: "text",
  width: "w-25",
  onChange: () => {},
  maxLength: 0,
  placeholder: "",
};

export const CardPassword = Template.bind({});
CardPassword.args = {
  type: "text",
  width: "w-15",
  onChange: () => {},
  maxLength: 0,
  placeholder: "",
};
