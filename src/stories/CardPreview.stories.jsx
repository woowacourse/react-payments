import React from "react";
import CardPreview from "../components/CardPreview";

export default {
  title: "CardPreview",
  component: CardPreview,
};

const Template = (args) => <CardPreview {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumber: ["1234", "5678", "9012", "3456"],
  holderName: "카드 소유자 이름",
  expireDate: ["01", "25"],
};
