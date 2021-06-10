import React from "react";

import ErrorText from "./ErrorText";

export default {
  title: "Payments/ErrorText",
  component: ErrorText,
};

const Template = (args) => <ErrorText {...args}></ErrorText>;

export const Primary = Template.bind({});
Primary.args = {};
