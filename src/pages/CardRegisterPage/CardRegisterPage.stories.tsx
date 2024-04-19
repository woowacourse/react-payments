import type { Meta, StoryObj } from "@storybook/react";
import CardRegisterPage from "./CardRegisterPage";

const meta = {
  title: "CardRegisterPage",
  component: CardRegisterPage,
} satisfies Meta<typeof CardRegisterPage>;

export default meta;

type Story = StoryObj<typeof CardRegisterPage>;

export const Default: Story = {};
