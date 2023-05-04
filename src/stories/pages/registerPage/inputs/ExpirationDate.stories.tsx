import { Meta, StoryObj } from "@storybook/react";
import ExpirationDateInput from "pages/RegisterPage/FormInputs/ExpirationDateInput";

const meta = {
  component: ExpirationDateInput,
  title: "Input/ExpirationDate",
} satisfies Meta<typeof ExpirationDateInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ExpirationDate: Story = {
  args: {
    date: {
      month: "11",
      year: "26",
    },
  },
};
