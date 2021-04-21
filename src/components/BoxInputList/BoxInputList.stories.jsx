import React from "react";

import BoxInputList from "./BoxInputList";

export default {
  title: "Payments/BoxInputList",
  component: BoxInputList,
};

const Template = (args) => <BoxInputList {...args}></BoxInputList>;

export const Primary = Template.bind({});
Primary.args = {
  labelText: "카드 비밀번호", 
  numbers: [1,2], 
  dotCount:2
};
