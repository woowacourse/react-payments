import React from "react";
import Selector from "./Selector";

export default {
  title: "Selector",
  component: Selector,
};

const Template = (args) => <Selector {...args} />;

export const Example = Template.bind({});

Example.args = {
  color: "red",
  name: "포코카드",
};
