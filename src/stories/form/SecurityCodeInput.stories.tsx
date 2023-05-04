import type { Meta } from "@storybook/react";

import SecurityCodeInput from "../../components/CardRegistrationPage/FormContents/SecurityCodeInput";
import CardItemProvider from "../../components/provider/CardItemProvider";

const meta = {
  title: "Payment/FormContents",
  component: SecurityCodeInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;

export const SecurityCode = () => {
  return (
    <CardItemProvider>
      <SecurityCodeInput />
    </CardItemProvider>
  );
};
