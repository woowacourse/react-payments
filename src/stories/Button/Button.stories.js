import React from "react";
import Button from "./index";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  innerText: "확인",
  onClick: () => console.log("확인"),
};
