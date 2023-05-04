import { Meta, StoryObj } from "@storybook/react";
import NameInput from "pages/RegisterPage/FormInputs/NameInput";

const meta = {
  component: NameInput,
  title: "Input/Name",
} satisfies Meta<typeof NameInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Name: Story = {
  args: {
    name: "YUMMY",
  },
};
