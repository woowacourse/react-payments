import { Meta } from "@storybook/react";
import React from "react";
import CardCompany from ".";

const cardNumber = {
  component: CardCompany,
  title: "Card Company Input",
} satisfies Meta<typeof CardCompany>;

export default cardNumber;

export const Example = () => {
  return <CardCompany />;
};
