import React from "react";
import BinarySelectButton from "./index";

export default {
  title: "Example/BinarySelectButton",
  component: BinarySelectButton,
  argTypes: {},
};

const Template = (args) => (
  <div style={{width: "400px" }}>
    <BinarySelectButton {...args} />
  </div>
);

export const Basic = Template.bind({});

Basic.args = {
  firstOption: {
    name: "수정",
    handler: () => alert("수정 버튼"),
  },
  secondOption: {
    name: "삭제",
    handler: () => alert("삭제 버튼"),
  },
};
