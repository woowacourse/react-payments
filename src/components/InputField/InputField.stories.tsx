import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import Input from "../Input/Input";

const meta = {
  title: "InputField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Input placeholder="" isError={false} />,
    errorMessage: "",
  },
};
