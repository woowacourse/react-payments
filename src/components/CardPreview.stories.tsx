import { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";

const meta = {
  component: CardPreview,
  title: "Preview/CardPreview",
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardPreviewStory: Story = {
  args: {
    cardInfo: {
      cardCompany: "현대카드",
      number1: "1234",
      number2: "1234",
      number3: "1234",
      number4: "1234",
      month: "02",
      year: "24",
      name: "YUMMY",
    },
  },
};
