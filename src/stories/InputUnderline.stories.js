import React from "react";
import { InputUnderline } from "components/common/InputUnderline";

export default {
  title: "Example/InputUnderline",
  component: InputUnderline,
};

const Template = (args) => <InputUnderline {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {
  type: "text",
  placeholder: "test holder",
  value: "1234",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "test holder",
  value: "1234",
};
