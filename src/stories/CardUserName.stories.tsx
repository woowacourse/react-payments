import React from "react";

import CardUserName from "../components/add/CardInfoForm/CardUserName";

export default {
  component: CardUserName,
  title: "CardUserName",
};

const Template = args => <CardUserName {...args} />;

export const Default = Template.bind({});
