import { Meta, StoryObj } from "@storybook/react";
import CardNumbers from "../components/Card/CardNumbers";

const meta = {
  title: "CardNumbers",
  component: CardNumbers,
} satisfies Meta<typeof CardNumbers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: ["4444", "5555", "6666", "7777"],
  },
};
