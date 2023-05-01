import { Meta, StoryObj } from "@storybook/react";
import { SecurityCode } from "./securityCode";

const meta: Meta<typeof SecurityCode> = {
  component: SecurityCode,
  title: "SecurityCode",
};

export default meta;

type Story = StoryObj<typeof SecurityCode>;

export const Default: Story = {
  args: {},
};
