import React from "react";

import InputBoxList from "./InputBoxList";

export default {
  title: "Payments/InputBoxList",
  component: InputBoxList,
};

const Template = (args) => <InputBoxList {...args}></InputBoxList>;

export const Primary = Template.bind({});
Primary.args = {
  labelText: "카드 비밀번호", 
  numbers: [1,2], 
  dotCount:2
};
