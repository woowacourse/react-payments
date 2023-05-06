import { Meta, StoryObj } from "@storybook/react";
import { BankMenu } from "./bankMenu";

const meta: Meta<typeof BankMenu> = {
  component: BankMenu,
  title: "BankMenu",
};

export default meta;

type Story = StoryObj<typeof BankMenu>;

export const Default: Story = {
  args: {},
};
