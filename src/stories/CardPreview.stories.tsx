import type { Meta, StoryObj } from "@storybook/react";
import CardPreview from "../pages/add-card/payment-input/components/cardPreview/CardPreview";
import { TCardBrand } from "../pages/add-card/payment-input/components/cardPreview/constants/DisplayData"; // 필요시 타입 불러오기

const meta = {
  title: "Components/CardPreview",
  component: CardPreview,
  parameters: {
    layout: "centered",
  },
  args: {
    cardInfo: {
      cardNumbers: ["", "", "", ""],
      expirationDate: ["", ""],
      brandName: "" as TCardBrand | "",
    },
  },
} satisfies Meta<typeof CardPreview>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Default Preview",
  args: {
    cardInfo: {
      cardNumbers: ["1234", "1234", "1234", "1234"],
      expirationDate: ["12", "25"],
      brandName: "",
    },
  },
};

export const VisaUI: Story = {
  name: "Visa 카드 스타일",
  args: {
    cardInfo: {
      cardNumbers: ["4111", "1234", "1234", "1234"],
      expirationDate: ["12", "25"],
      brandName: "국민카드",
    },
  },
};

export const MasterUI: Story = {
  name: "Master 카드 스타일",
  args: {
    cardInfo: {
      cardNumbers: ["5111", "1234", "1234", "1234"],
      expirationDate: ["12", "25"],
      brandName: "국민카드",
    },
  },
};
