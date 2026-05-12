import type { Meta, StoryObj } from "@storybook/react-vite";

import CardPreview from "./CardPreview";

const meta = {
  title: "feature/CardRegister/components/CardPreview",
  component: CardPreview,
  tags: ["autodocs"],
  args: {
    cardInfo: {
      cardNumbers: ["", "", "", ""],
      expiryMonth: "",
      expiryYear: "",
      selectedCardCompany: null,
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {};

export const Visa: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["4123", "5678", "1234", "5678"],
      expiryMonth: "12",
      expiryYear: "30",
      selectedCardCompany: "신한카드",
    },
  },
};

export const MasterCard: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["5123", "5678", "1234", "5678"],
      expiryMonth: "12",
      expiryYear: "30",
      selectedCardCompany: "현대카드",
    },
  },
};

export const UnknownBrand: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["3123", "5678", "1234", "5678"],
      expiryMonth: "12",
      expiryYear: "30",
      selectedCardCompany: null,
    },
  },
};

export const Partial: Story = {
  args: {
    cardInfo: {
      cardNumbers: ["4123", "56", "", ""],
      expiryMonth: "1",
      expiryYear: "",
      selectedCardCompany: "카카오뱅크",
    },
  },
};
