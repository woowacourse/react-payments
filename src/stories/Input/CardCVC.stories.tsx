import React from "react";
import type { Meta } from "@storybook/react";
import CardCVCInput from "../../component/AddCardPage/CardDetailForm/CardCVCInput/CardCVCInput";

const meta = {
  component: CardCVCInput,
  title: "Input",
} satisfies Meta<typeof CardCVCInput>;

export default meta;

export const CardCVC = () => <CardCVCInput />;
