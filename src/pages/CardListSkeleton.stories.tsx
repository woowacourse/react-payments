import type { Meta, StoryObj } from "@storybook/react";
import CardListSkeleton from "./CardListSkeleton";

const meta: Meta<typeof CardListSkeleton> = {
  title: "Components/CardListSkeleton",
  component: CardListSkeleton,
};

export default meta;
type Story = StoryObj<typeof CardListSkeleton>;

export const Default: Story = {};
