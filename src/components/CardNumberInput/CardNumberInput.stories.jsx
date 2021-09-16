import React from "react";
import CardNumberInput from "./CardNumberInput";

export default {
  title: "Payments/CardNumberInput",
  component: CardNumberInput,
  argTypes: {},
};

const Template = (args) => <CardNumberInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
