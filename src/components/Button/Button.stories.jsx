import React from "react";

import Button from "./Button";

export default {
  title: "Payments/Button",
  component: Button,
};

const Template = (args) => <Button {...args}>확인</Button>;

export const Primary = Template.bind({});
Primary.args = {};
