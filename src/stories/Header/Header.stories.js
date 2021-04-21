import React from "react";
import Header from "./index";

export default {
  title: "Example/Header",
  component: Header,
  argTypes: {},
};

const Template = (args) => <Header {...args} />;

export const HeaderWithButton = Template.bind({});

HeaderWithButton.args = {
  title: "카드 추가",
  onPageBack: () => {
    console.log("뒤로가기");
  },
};
