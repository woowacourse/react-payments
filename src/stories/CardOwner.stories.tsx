import { Meta, StoryObj } from "@storybook/react";
import CardOwner from "../components/Card/CardOwner";

const meta = {
  title: "CardOwner",
  component: CardOwner,
} satisfies Meta<typeof CardOwner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardOwner: ["HYUN SOOYEON"],
  },
};
