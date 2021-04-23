import React from "react";
import Bank from "./Bank";

export default {
  title: "Bank",
  component: Bank,
};

const Template = args => <Bank {...args} />;

export const BankTemplate = Template.bind({});

BankTemplate.args = {
  backgroundColor: "bg-custom-gradient-mint",
  name: "국민",
};
