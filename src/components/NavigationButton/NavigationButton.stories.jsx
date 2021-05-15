import React from "react";

import NavigationButton from "./NavigationButton";

export default {
  title: "Payments/NavigationButton",
  component: NavigationButton,
};

const Template = (args) => <NavigationButton {...args}></NavigationButton>;

export const Primary = Template.bind({});

Primary.args = {
  buttonText: "카드 추가"
};
