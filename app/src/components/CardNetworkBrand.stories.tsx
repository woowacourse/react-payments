import type { Meta, StoryObj } from "@storybook/react-vite";

import { CardNetworkBrand } from "./CardNetworkBrand";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "CardNetworkBrand",
  component: CardNetworkBrand,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof CardNetworkBrand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Master: Story = {
  args: {
    brand: "master",
  },
};

export const Visa: Story = {
  args: {
    brand: "visa",
  },
};

export const Unknown: Story = {
  args: {
    brand: "",
  },
};
