import type { Meta } from "@storybook/react";

import PasswordInput from "../../components/CardRegistrationPage/FormContents/PasswordInput";
import CardItemProvider from "../../components/provider/CardItemProvider";

const meta = {
  title: "Payment/FormContents",
  component: PasswordInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof PasswordInput>;

export default meta;

export const Password = () => {
  return (
    <CardItemProvider>
      <PasswordInput />
    </CardItemProvider>
  );
};
