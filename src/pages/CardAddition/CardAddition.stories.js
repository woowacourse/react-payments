import React from "react";
import CardAddition from "./CardAddition";

export default {
  title: "Pages/CardAddition",
  component: CardAddition,
  argTypes: {},
};

const Template = (args) => <CardAddition {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
