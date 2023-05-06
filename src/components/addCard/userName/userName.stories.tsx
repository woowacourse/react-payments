import { Meta, StoryObj } from "@storybook/react";
import { UserName } from "./userName";

const meta: Meta<typeof UserName> = {
  component: UserName,
  title: "UserName",
};

export default meta;

type Story = StoryObj<typeof UserName>;

export const Default: Story = {
  args: {},
};
