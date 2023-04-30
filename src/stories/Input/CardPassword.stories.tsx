import React from "react";
import type { Meta } from "@storybook/react";
import CardPasswordInput from "../../component/AddCardPage/CardDetailForm/CardPasswordInput/CardPasswordInput";

const meta = {
  component: CardPasswordInput,
  title: "Input",
} satisfies Meta<typeof CardPasswordInput>;

export default meta;

export const CardPassword = () => <CardPasswordInput />;
