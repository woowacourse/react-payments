import React from "react";
import BankSelector from "./BankSelector";

export default {
  title: "BankSelector",
  component: BankSelector,
};

const Template = args => <BankSelector {...args} />;

export const BankSelectorTemplate = Template.bind({});
