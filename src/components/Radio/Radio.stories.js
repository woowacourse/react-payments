import "./style.css";
import React from "react";
import Radio from "./index";

export default {
  title: "Components/Radio",
  component: Radio,
  argTypes: {},
};

const Template = (args) => <Radio {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  name: "card-type",
  value: "카드",
  checked: false,
  onChange: (event) => {
    console.log(event.target);
  },
  children: <span>라디오버튼</span>,
};
