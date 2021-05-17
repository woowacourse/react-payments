import React from "react";
import SimpleButton from "./index";

export default {
  title: "Example/Button",
  component: SimpleButton,
  argTypes: {},
};

const Template = (args) => <SimpleButton {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  innerText: "확인",
  onClick: () => console.log("확인"),
};
