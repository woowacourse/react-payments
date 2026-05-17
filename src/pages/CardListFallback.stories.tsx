import type { Meta, StoryObj } from "@storybook/react";
import CardListFallback from "./CardListFallback";

const meta: Meta<typeof CardListFallback> = {
  title: "Pages/EmptyCardList",
  component: CardListFallback,
};

export default meta;
type Story = StoryObj<typeof CardListFallback>;

export const Success: Story = {
  args: {
    type: "success",
    onClick: () => {},
  },
};

export const Error: Story = {
  args: {
    type: "error",
    onClick: () => {},
  },
};
