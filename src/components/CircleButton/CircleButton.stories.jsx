import React from "react";

import CircleButton from "./CircleButton";

export default {
  title: "Payments/CircleButton",
  component: CircleButton,
};

const Template = (args) => <CircleButton {...args}></CircleButton>;

export const Primary = Template.bind({});
Primary.args = {
  buttonText: '포코카드',
  circleColor: '#E24141'
};
