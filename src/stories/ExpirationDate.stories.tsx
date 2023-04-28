import type { Meta } from "@storybook/react";

import ExpirationDateInput from "../components/CardRegistrationPage/FormContents/ExpirationDateInput";
import CardItemProvider from "../components/provider/CardItemProvider";

const meta = {
  title: "Payment/FormContents",
  component: ExpirationDateInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

export const ExpirationDate = () => {
  return (
    <CardItemProvider>
      <ExpirationDateInput />
    </CardItemProvider>
  );
};
