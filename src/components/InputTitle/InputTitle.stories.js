import React from "react";
import InputTitle from "./InputTitle";

export default {
  title: "InputTitle",
  component: InputTitle,
};

const Template = args => <InputTitle {...args} />;

export const PlainInputTitle = Template.bind({});

PlainInputTitle.args = {
  innerText: "카드 번호",
};
