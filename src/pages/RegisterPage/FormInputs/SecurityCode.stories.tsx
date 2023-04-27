import { Meta, StoryObj } from "@storybook/react";
import SecurityCodeInput from "../FormInputs/SecurityCodeInput";

const meta = {
  component: SecurityCodeInput,
  title: "Input/SecurityCode",
} satisfies Meta<typeof SecurityCodeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SecurityCodeStory: Story = {
  args: {
    code: "123",
  },
};
