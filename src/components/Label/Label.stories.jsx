import React from "react";

import Label from "./Label";

export default {
  title: "Payments/Label",
  component: Label,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["small", "large"],
      },
    },
  },

};

const Template = (args) => <Label {...args}></Label>;

export const Primary = Template.bind({});
Primary.args = {
  labelText: "카드등록이 완료되었습니다.",
  size: "small"
};
