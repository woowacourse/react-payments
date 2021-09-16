import React from "react";

import AddBoxButton from "./AddBoxButton";

export default {
  title: "Payments/AddBoxButton",
  component: AddBoxButton,
};

const Template = (args) => <AddBoxButton {...args}></AddBoxButton>;

export const Primary = Template.bind({});
Primary.args = {};
