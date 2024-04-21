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
    cardNumbers: new Map<string, string>([
      ["0", ""],
      ["1", "5678"],
      ["2", "9012"],
      ["3", "3456"],
    ]),
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: new Map<string, string>([
      ["0", "4"],
      ["1", "5678"],
      ["2", "9012"],
      ["3", "3456"],
    ]),
  },
};

export const MasterCard: Story = {
  args: {
    cardNumbers: new Map<string, string>([
      ["0", "51"],
      ["1", "5678"],
      ["2", "9012"],
      ["3", "3456"],
    ]),
  },
};
