import { Meta, StoryObj } from "@storybook/react";
import CardLogo from "../components/Card/CardLogo";

const meta = {
  title: "CardLogo",
  component: CardLogo,
} satisfies Meta<typeof CardLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: [
      { index: 0, currentValue: "4" },
      { index: 1, currentValue: "5678" },
      { index: 2, currentValue: "9012" },
      { index: 3, currentValue: "3456" },
    ],
  },
};
