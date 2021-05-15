import React from "react";

import BackDrop from "./BackDrop";
import Card from "../Card/Card";

export default {
  title: "Payments/BackDrop",
  component: BackDrop,
};

// TEST CODE
const cardArgs = {
  cardCompany: "포코카드",
  backgroundColor: "#547CE4",
  cardNumber: {
    firstCardNumber: "1234",
    secondCardNumber: "1234",
    thirdCardNumber: "1234",
    fourthCardNumber: "1234",
  },
  cardOwner: "SUN",
  cardExpiration: ["04", "21"],
  cardNickName: "카드 별칭",
};

const Template = (args) => (
  <>
    <BackDrop {...args}></BackDrop>
    <Card {...cardArgs} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  zIndex: -1,
};
