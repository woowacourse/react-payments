import React from "react";
import { within, userEvent } from "@storybook/testing-library";

import { InputBasic } from "components/common/InputBasic";
import { RULE_INPUT } from "constants/constants";

export default {
  title: "Example/InputBasic",
  component: InputBasic,
};

const Template = (args) => <InputBasic dataTestId="input-0" {...args} />;

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
  maxLength: "4",
  width: "100%",
};

InvalidTextInput.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId("input-0"), "123d", {
    delay: 100,
  });
};
