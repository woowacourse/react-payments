import React from "react";
import Label from "./index";

export default {
  title: "Label",
  component: Label,
};

const Template = (args) => <Label {...args} />;

export const Example = Template.bind({});

Example.args = {
  id: "inputLabel",
  description: "호프샐리 페어입니다.",
};
