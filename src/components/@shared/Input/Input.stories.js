import React from "react";
import Input from "./index";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {},
};

const Template = (args) => <Input {...args} />;

export const basicInput = Template.bind({});

basicInput.args = {
  type: "number",
  placeHolder: "번호를 입력해주세요",
  isCenter: false,
};

export const centeredInput = Template.bind({});

centeredInput.args = {
  type: "number",
  placeHolder: "번호를 입력해주세요",
  isCenter: true,
};
