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
    cardNumbers: ["3155", "5678", "9012", "3456"],
  },
};

export const MasterCard: Story = {
  args: {
    cardNumbers: ["5107", "2433", "1235", "8765"],
  },
};

export const Visa: Story = {
  args: {
    cardNumbers: ["4390", "3883", "8870", "3135"],
  },
};
