import React from "react";
import type { Meta } from "@storybook/react";
import CardOwnerNameInput from "../../component/AddCardPage/CardDetailForm/CardOwnerNameInput/CardOwnerNameInput";

const meta = {
  component: CardOwnerNameInput,
  title: "Input",
} satisfies Meta<typeof CardOwnerNameInput>;

export default meta;

export const CardOwnerName = () => <CardOwnerNameInput />;
