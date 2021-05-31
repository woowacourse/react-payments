import React from "react";
import AddCardButton from "./index";

export default {
  title: "Example/AddCardButton",
  component: AddCardButton,
  argTypes: {},
};

const Template = (args) => <AddCardButton {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  onClick: () => console.log("test"),
};
