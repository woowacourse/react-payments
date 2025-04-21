import type { Meta, StoryObj } from "@storybook/react";
import PreviewCard from "./PreviewCard";

const meta = {
  title: "MyComponent/MyPreviewCard",
  component: PreviewCard,
  tags: ["autodocs"],
} satisfies Meta<typeof PreviewCard>;

export default meta;

type Story = StoryObj<typeof PreviewCard>;

export const NoneCard: Story = {
  args: {
    cardInformationState: {
      uniqueNumber: ["1234", "1234", "1234", "1234"],
      expirationDate: ["12", "25"],
      cvcNumber: ["123"],
    },
  },
};

export const VisaCard: Story = {
  args: {
    cardInformationState: {
      uniqueNumber: ["4234", "1234", "1234", "1234"],
      expirationDate: ["12", "25"],
      cvcNumber: ["123"],
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardInformationState: {
      uniqueNumber: ["5134", "1234", "1234", "1234"],
      expirationDate: ["12", "25"],
      cvcNumber: ["123"],
    },
  },
};
