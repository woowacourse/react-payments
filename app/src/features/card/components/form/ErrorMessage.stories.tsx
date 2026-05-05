import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorMessage } from "./ErrorMessage";

const meta = {
  title: "Card/Form/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Common: Story = {
  args: {
    messages: ["some error1"],
  },
};

export const Multiple: Story = {
  args: {
    messages: ["some error1", "some error2", "some error3"],
  },
};
