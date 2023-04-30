import React from "react";
import type { Meta } from "@storybook/react";
import CardNumberInput from "../../component/AddCardPage/CardDetailForm/CardNumberInput/CardNumberInput";

const meta = {
  component: CardNumberInput,
  title: "Input",
} satisfies Meta<typeof CardNumberInput>;

export default meta;

export const CardNumber = () => <CardNumberInput />;
