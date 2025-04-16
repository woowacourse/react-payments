import type { Meta } from "@storybook/react";
import CardCVCForm from "../components/CardCVCForm";
import { useState } from "react";

const meta = {
  title: "CardCVCForm",
  component: CardCVCForm,
} satisfies Meta<typeof CardCVCForm>;

export default meta;

export const Default = () => {
  const [cvc, setCvc] = useState("");

  return <CardCVCForm cvc={cvc} setCvc={setCvc} maxLength={3} />;
};
