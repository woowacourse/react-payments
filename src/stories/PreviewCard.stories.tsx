import type { Meta, StoryObj } from "@storybook/react";
import PreviewCardLayout from "../components/PreviewCard/PreviewCardLayout";

const meta: Meta<typeof PreviewCardLayout> = {
  title: "Example/PreviewCardLayout",
  component: PreviewCardLayout,
};

export default meta;
type Story = StoryObj<typeof PreviewCardLayout>;

const cardNumbers = {
  FIRST: "4234",
  SECOND: "5678",
  THIRD: "1234",
  FOURTH: "5678",
};

const cardExpirationDate = {
  MONTH: "12",
  YEAR: "25",
};

export const DEFAULT: Story = {
  args: {
    cardNumbers,
    cardBrand: "",
    cardExpirationDate,
  },
};

export const VISA: Story = {
  args: {
    cardNumbers,
    cardBrand: "신한카드",
    cardExpirationDate,
  },
};

export const MASTER: Story = {
  args: {
    cardNumbers: {
      FIRST: "5134",
      SECOND: "5678",
      THIRD: "1234",
      FOURTH: "5678",
    },
    cardBrand: "우리카드",
    cardExpirationDate,
  },
};
