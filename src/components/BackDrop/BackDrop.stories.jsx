import React from "react";

import BackDrop from "./BackDrop";
import Card from "../Card/Card"

export default {
  title: "Payments/BackDrop",
  component: BackDrop,
};

// TEST CODE
const cardArgs = {
  cardName: "포코카드",
  backgroundColor: "#547CE4",
  cardNumberList: [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  cardOwner: "SUN",
  cardExpiration: "04/21",
}

const Template = (args) => (
  <>
    <BackDrop {...args}></BackDrop>
    <Card {...cardArgs} />
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  zIndex: -1
};
