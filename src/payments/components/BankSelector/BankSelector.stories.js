import React from "react";
import Bank from "../Bank/Bank";
import { Baemin, BC, Jeju, Kakao, KB, NH, Samsung, Shinhan } from "../Bank/Bank.stories";
import BankSelector from "./BankSelector";

export default {
  title: "BankSelector",
  component: BankSelector,
};

const Template = args => <BankSelector {...args} />;

export const BankSelectorTemplate = Template.bind({});

BankSelectorTemplate.args = {
  children: [KB, Samsung, NH, BC, Baemin, Shinhan, Jeju, Kakao].map(({ args }) => <Bank {...args} />),
};
