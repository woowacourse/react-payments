import React from "react";

import CardNumber from "../components/CardInfoForm/CardNumber";

export default {
  component: CardNumber,
  title: "CardNumber",
};

const Template = args => <CardNumber {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumbers: ["", "", "", ""],
  onChange: () => {},
};
