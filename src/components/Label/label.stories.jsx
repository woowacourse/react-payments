import React from "react";
import Label from "./index";

export default {
  title: "Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  description: "호프샐리 페어입니다.",
};
