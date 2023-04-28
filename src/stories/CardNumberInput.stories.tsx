import type { Meta } from "@storybook/react";

import CardNumberInput from "../components/CardRegistrationPage/FormContents/CardNumberInput";
import CardItemProvider from "../components/provider/CardItemProvider";

const meta = {
  title: "Payment/FormContents",
  component: CardNumberInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof CardNumberInput>;

export default meta;

export const CardNumber = () => {
  return (
    <CardItemProvider>
      <CardNumberInput />
    </CardItemProvider>
  );
};
