import React from "react";
import { InputBasic } from "components/common/InputBasic";

export default {
  title: "Example/InputBasic",
  component: InputBasic,
};

const Template = (args) => <InputBasic {...args} />;

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
