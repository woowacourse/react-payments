import { Meta, StoryObj } from "@storybook/react";
import CardTypeSection from "./CardTypeSection";

const meta = {
  title: "CardTypeSection",
  component: CardTypeSection,
} satisfies Meta<typeof CardTypeSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
