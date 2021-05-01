import React from "react";
import CardExpirationInput from "./CardExpirationInput";

export default {
  title: "Payments/CardExpirationInput",
  component: CardExpirationInput,
  argTypes: {},
};

const Template = (args) => <CardExpirationInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
