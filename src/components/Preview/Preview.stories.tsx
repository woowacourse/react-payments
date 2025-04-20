import type { Meta, StoryObj } from "@storybook/react";
import Preview from "./Preview";
import { withCustomCardProvider } from "../../../.storybook/CardProviderDecorator";

const meta = {
  title: "Preview",
  component: Preview,
  tags: ["autodocs"],
} satisfies Meta<typeof Preview>;

export default meta;

type Story = StoryObj<typeof Preview>;

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
