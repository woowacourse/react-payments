import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "./CardPreview";
import { withCustomCardProvider } from "../../../../.storybook/utils/withCustomCardProvider";

const meta = {
  title: "CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof CardPreview>;

export const Empty: Story = {
  decorators: [withCustomCardProvider({})],
};

export const VisaCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardNumbers: {
        first: "4111",
        second: "1111",
        third: "1111",
        fourth: "1111",
      },
      expirationPeriod: {
        month: "02",
        year: "25",
      },
    }),
  ],
};

export const MasterCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardNumbers: {
        first: "5111",
        second: "2222",
        third: "3333",
        fourth: "4444",
      },
      expirationPeriod: {
        month: "11",
        year: "28",
      },
    }),
  ],
};

export const PartiallyMaskedCard: Story = {
  decorators: [
    withCustomCardProvider({
      cardNumbers: {
        first: "1234",
        second: "5678",
        third: "91",
        fourth: "345",
      },
      expirationPeriod: {
        month: "05",
        year: "27",
      },
    }),
  ],
};
