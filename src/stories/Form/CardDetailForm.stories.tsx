import React from "react";
import type { Meta } from "@storybook/react";
import CardDetailForm from "../../component/AddCardPage/CardDetailForm/CardDetailForm";

const meta = {
  component: CardDetailForm,
  title: "Form",
} satisfies Meta<typeof CardDetailForm>;

export default meta;

export const CardDetail = () => <CardDetailForm />;
