import { Meta, StoryObj } from "@storybook/react";
import CardPasswordSection from "./CardPasswordSection";

const meta = {
  title: "CardPasswordSection",
  component: CardPasswordSection,
} satisfies Meta<typeof CardPasswordSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
