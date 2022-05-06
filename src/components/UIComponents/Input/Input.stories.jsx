import React from "react";
import Input from "./Input";

export default {
  title: "UI Components/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "placeholder",
  name: "default-input",
  type: "text",
};
