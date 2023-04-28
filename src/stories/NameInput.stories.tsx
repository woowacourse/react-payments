import type { Meta } from "@storybook/react";

import NameInput from "../components/CardRegistrationPage/FormContents/NameInput";
import CardItemProvider from "../components/provider/CardItemProvider";

const meta = {
  title: "Payment/FormContents",
  component: NameInput,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof NameInput>;

export default meta;

export const Name = () => {
  return (
    <CardItemProvider>
      <NameInput />
    </CardItemProvider>
  );
};
