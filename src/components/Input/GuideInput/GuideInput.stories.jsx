import React from "react";
import GuideInput from "./GuideInput";

export default {
  title: "Payments/GuideInput",
  component: GuideInput,
  argTypes: {},
};

const Template = (args) => <GuideInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  labelText: "보안코드",
};
