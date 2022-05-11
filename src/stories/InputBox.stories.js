import React from "react";
import { within, userEvent } from "@storybook/testing-library";

import { InputBox } from "components/common/InputBox";
import { InputBasic } from "components/common/InputBasic";
import { RULE_INPUT } from "constants/constants";

export default {
  title: "Example/InputBox",
  component: InputBox,
};

const Template = (args) => (
  <InputBox {...args}>
    <InputBasic
      type="text"
      placeholder="test holder"
      maxLength="4"
      pattern={RULE_INPUT.CARD_NUMBER_RULE}
      dataTestId="card-number-0"
    />
    <InputBasic
      type="text"
      placeholder="test holder"
      maxLength="4"
      pattern={RULE_INPUT.CARD_NUMBER_RULE}
      dataTestId="card-number-1"
    />
    <InputBasic
      type="password"
      placeholder="test holder"
      maxLength="4"
      pattern={RULE_INPUT.CARD_NUMBER_RULE}
      dataTestId="card-number-2"
    />
    <InputBasic
      type="password"
      placeholder="test holder"
      maxLength="4"
      pattern={RULE_INPUT.CARD_NUMBER_RULE}
      dataTestId="card-number-3"
    />
  </InputBox>
);

const InputBoxArgs = {
  width: "100%",
  color: "#04c09e",
  backgroundColor: "#ecebf1",
  justifyContent: "unset",
  padding: "0",
};

export const EmptyInputBox = Template.bind({});
EmptyInputBox.args = InputBoxArgs;

export const FilledInputBox = Template.bind({});
FilledInputBox.args = InputBoxArgs;

FilledInputBox.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByTestId("card-number-0"), "1234", {
    delay: 100,
  });

  await userEvent.type(canvas.getByTestId("card-number-1"), "5678", {
    delay: 100,
  });

  await userEvent.type(canvas.getByTestId("card-number-2"), "1234", {
    delay: 100,
  });

  await userEvent.type(canvas.getByTestId("card-number-3"), "5678", {
    delay: 100,
  });
};
