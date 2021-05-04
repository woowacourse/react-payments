import React from "react";
import VirtualKeyboardInput from "./index";

export default {
  title: "Components/VirtualKeyboardInput",
  component: VirtualKeyboardInput,
  argTypes: {},
};

const Template = (args) => <VirtualKeyboardInput {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  isCenter: "true",
  valueByState: "1111",
  maxLength: 5,
  onInputFullfilled: () => {
    console.log("채워짐");
  },
};
