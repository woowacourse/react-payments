import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

const Template = args => <Button {...args} />;

export const PlainButton = Template.bind({});

PlainButton.args = {
  children: "다음",
};
