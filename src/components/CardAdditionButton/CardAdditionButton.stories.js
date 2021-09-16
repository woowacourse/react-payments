import React from "react";
import CardAdditionButton from "./index";
import { CARD_SIZE } from "../../constants";

export default {
  title: "Components/CardAdditionButton",
  component: CardAdditionButton,
  argTypes: {},
};

const Template = (args) => <CardAdditionButton {...args} />;

export const Small = Template.bind({});

Small.args = {
  size: CARD_SIZE.SMALL,
  onClick: () => {
    console.log("클릭됨");
  },
};
