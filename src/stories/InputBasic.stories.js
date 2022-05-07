import React from "react";
import { InputBasic } from "components/common/InputBasic";
import { RULE_INPUT } from "constants/constants";

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
  maxLength: "4",
  width: "100%",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  type: "password",
  placeholder: "test holder",
  value: "1234",
  maxLength: "4",
  width: "100%",
};

export const InvalidTextInput = Template.bind({});
InvalidTextInput.args = {
  type: "text",
  placeholder: "test holder",
  pattern: RULE_INPUT.CARD_NUMBER_RULE,
  value: "123d",
  maxLength: "4",
  width: "100%",
};
