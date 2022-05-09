import React from "react";

import CardExpirationDate from "../components/add/CardInfoForm/CardExpirationDate";

export default {
  component: CardExpirationDate,
  title: "CardExpirationDate",
};

const Template = args => <CardExpirationDate {...args} />;

export const Default = Template.bind({});
