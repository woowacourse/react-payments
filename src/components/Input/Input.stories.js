import React from "react";
import Input from "./Input";

export default {
  title: "Input",
  component: Input,
};

const Template = args => <Input {...args} />;

export const PlainInput = Template.bind({});

PlainInput.args = {
  type: "number",
  min: "1",
  max: "2",
  className: "w-full",
  required: true,
  placeholder: "테스트",
};
