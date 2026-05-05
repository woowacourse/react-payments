import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardNetworkBrand } from "./CardNetworkBrand";

const meta = {
  title: "Card/Preview/CardNetworkBrand",
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
    cardNumber: {
      "first-digits": "54",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
  },
};

export const Visa: Story = {
  args: {
    cardNumber: {
      "first-digits": "4",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
  },
};

export const Unknown: Story = {
  args: {
    cardNumber: {
      "first-digits": "",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
  },
};
