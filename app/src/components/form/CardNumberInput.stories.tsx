import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardNumberInputContainer } from "./CardNumberInput";

const meta = {
  title: "CardNumberInputContainer",
  component: CardNumberInputContainer,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNumberInputContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const base: Story = {};
