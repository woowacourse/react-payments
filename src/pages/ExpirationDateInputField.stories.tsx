import { Meta, StoryObj } from "@storybook/react";
import ExpirationDateInputField from "./ExpirationDateInputField";

const meta = {
  title: "ExpirationDateInputField",
  component: ExpirationDateInputField,
} satisfies Meta<typeof ExpirationDateInputField>;

export default meta;

type Story = StoryObj<typeof ExpirationDateInputField>;

export const Default: Story = {
  render: () => <ExpirationDateInputField />,
};
