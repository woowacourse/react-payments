import type { Meta, StoryObj } from "@storybook/react";
import CardPreview, { CardPreviewProps } from "./CardPreview";

const meta: Meta<CardPreviewProps> = {
  title: "Components/CardPreview",
  component: CardPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "John Doe",
    cardExpiration: ["12", "23"],
    cardCompany: "",
    cardNumbers: ["1234", "5678", "9012", "3456"],
  },
};

export const MasterCard: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "MasterCard User",
    cardExpiration: ["12", "23"],
    cardCompany: "",
    cardNumbers: ["5234", "5678", "9012", "3456"],
  },
};

export const Visa: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};

export const BC카드: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "BC카드",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};

export const 신한카드: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "신한카드",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};

export const 카카오뱅크: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "카카오뱅크",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};

export const 현대카드: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "현대카드",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};

export const 우리카드: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "우리카드",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};

export const 롯데카드: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "롯데카드",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};

export const 하나카드: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "하나카드",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};

export const 국민카드: Story = {
  args: {
    isCardFlipped: false,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "국민카드",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};

export const BackCard: Story = {
  args: {
    isCardFlipped: true,
    cvc: "123",
    userName: "Visa User",
    cardExpiration: ["12", "23"],
    cardCompany: "국민카드",
    cardNumbers: ["4532", "5678", "9012", "3456"],
  },
};
