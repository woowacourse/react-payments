import { StoryObj } from "@storybook/react";
import type { Meta } from "@storybook/react";
import { Card } from "../components/common/Card";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Purple: Story = {
  args: {
    backgroundColor: "#BA55D3",
  },
};

export const Green: Story = {
  args: {
    backgroundColor: "green",
  },
};

export const Pink: Story = {
  args: {
    backgroundColor: "pink",
  },
};
