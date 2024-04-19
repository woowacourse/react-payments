import { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../components/Card/CardPreview";

const meta = {
  title: "CardPreview",
  component: CardPreview,
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    cardNumbers: [
      { index: 0, currentValue: "1234" },
      { index: 1, currentValue: "5678" },
      { index: 2, currentValue: "9012" },
      { index: 3, currentValue: "3456" },
    ],
    expirationDate: [
      { index: 0, currentValue: "12" },
      { index: 1, currentValue: "25" },
    ],
    userName: [{ index: 0, currentValue: "JOHN DOE" }],
  },
};
