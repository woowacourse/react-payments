import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardNetworkBrand } from "./CardNetworkBrand";

const meta = {
  title: "CardNetworkBrand",
  component: CardNetworkBrand,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardNetworkBrand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Master: Story = {
  args: {
    networkBrand: "master",
  },
};

export const Visa: Story = {
  args: {
    networkBrand: "visa",
  },
};

export const Unknown: Story = {
  args: {
    networkBrand: "",
  },
};
