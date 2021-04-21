import React from "react";
import TextLimitInput from "./TextLimitInput";

export default {
  title: "Payments/TextLimitInput",
  component: TextLimitInput,
  argTypes: {},
};

const Template = (args) => <TextLimitInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "입력해주세요",
  labelText: "라벨 테스트",
  lengthLimit: 30,
};
