import React from "react";
import type { Meta } from "@storybook/react";
import CardDateInput from "../../component/AddCardPage/CardDetailForm/CardDateInput/CardDateInput";

const meta = {
  component: CardDateInput,
  title: "Input",
} satisfies Meta<typeof CardDateInput>;

export default meta;

export const CardDate = () => <CardDateInput />;
