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
    cardNumbers: new Map<string, string>([
      ["0", "4"],
      ["1", "5678"],
      ["2", "9012"],
      ["3", "3456"],
    ]),
    expirationDate: new Map<string, string>([
      ["0", "04"],
      ["1", "26"],
    ]),
    userName: new Map<string, string>([["0", "JOHN DOE"]]),
  },
};
