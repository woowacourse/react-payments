import React from "react";

import BoxButton from "./BoxButton";

export default {
  title: "Payments/BoxButton",
  component: BoxButton,
};

const Template = (args) => <BoxButton {...args}></BoxButton>;

export const Primary = Template.bind({});
Primary.args = {};
