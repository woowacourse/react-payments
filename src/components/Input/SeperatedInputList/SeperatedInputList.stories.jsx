import React from "react";
import SeperatedInputList from "./SeperatedInputList";

export default {
  title: "Payments/SeperatedInputList",
  component: SeperatedInputList,
  argTypes: {},
};

const Template = (args) => <SeperatedInputList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
