import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";

const meta = {
  title: "InputField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "",
    onChange: () => {},
    value: "",
    errorMessage: "",
  },
};
