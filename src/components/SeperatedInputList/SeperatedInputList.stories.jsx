import React from "react";
import CardNumberInput from "./SeperatedInputList";

export default {
  title: "Payments/SeperatedInputList",
  component: CardNumberInput,
  argTypes: {},
};

const Template = (args) => <SeperatedInputList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
