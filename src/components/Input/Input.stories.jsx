import React from "react";
import Input from "./Input";

export default {
  title: "Payments/Input",
  component: Input,
  argTypes: {
    textAlign: {
      control: {
        type: "radio",
        options: ["left", "center"],
      },
    },
  },
};

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  textAlign: "left",
  placeHolder: "입력해주세요",
};
