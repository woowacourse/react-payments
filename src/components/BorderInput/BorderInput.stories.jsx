import React from "react";

import BorderInput from "./BorderInput";

export default {
  title: "Payments/BorderInput",
  component: BorderInput,
};

const Template = (args) => <BorderInput {...args}></BorderInput>;

export const Primary = Template.bind({});
Primary.args = {};
