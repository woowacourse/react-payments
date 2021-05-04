import React from "react";

import Header from "./Header";

export default {
  title: "Header",
  component: Header,
};

const Template = args => <Header {...args} />;

export const CardAdder = Template.bind({});

CardAdder.args = {
  hasBackButton: true,
  title: "카드 추가",
};

export const CardConfirm = Template.bind({});

CardConfirm.args = {
  hasBackButton: false,
};

export const CardList = Template.bind({});

CardList.args = {
  hasBackButton: false,
  title: "보유카드",
};
