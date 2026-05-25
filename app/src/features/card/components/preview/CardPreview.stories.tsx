import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardPreview } from "./CardPreview";
import { ExpiryDate } from "../../ExpiryDate";

const meta = {
  title: "Card/Preview/CardPreview",
  component: CardPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultArgs = {
  cardNumber: {
    firstDigits: "",
    secondDigits: "",
    thirdDigits: "",
    fourthDigits: "",
  },
  cardExpiryDate: new ExpiryDate("", ""),
  cardBrand: null,
};

export const Empty: Story = {
  args: { ...defaultArgs },
};

export const CardNumberPartiallyFilled: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      firstDigits: "1234",
      secondDigits: "5678",
      thirdDigits: "",
      fourthDigits: "",
    },
  },
};

export const CardNumberFullyFilled: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      firstDigits: "1234",
      secondDigits: "5678",
      thirdDigits: "9012",
      fourthDigits: "3456",
    },
  },
};

export const ExpiryDateFilled: Story = {
  args: {
    ...defaultArgs,
    cardExpiryDate: new ExpiryDate("12", "26"),
  },
};

export const ExpiryDateDisplayDivideLine: Story = {
  args: {
    ...defaultArgs,
    cardExpiryDate: new ExpiryDate("12", ""),
  },
};

export const FullyFilled: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      firstDigits: "1234",
      secondDigits: "5678",
      thirdDigits: "9012",
      fourthDigits: "3456",
    },
    cardExpiryDate: new ExpiryDate("12", "26"),
  },
};

export const VisaBrand: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      firstDigits: "4111",
      secondDigits: "",
      thirdDigits: "",
      fourthDigits: "",
    },
  },
};

export const MasterBrand: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      firstDigits: "5111",
      secondDigits: "",
      thirdDigits: "",
      fourthDigits: "",
    },
  },
};

export const BCBrand: Story = {
  args: { ...defaultArgs, cardBrand: "bc" },
};

export const SinhanBrand: Story = {
  args: { ...defaultArgs, cardBrand: "sinhan" },
};

export const KakaoBrand: Story = {
  args: { ...defaultArgs, cardBrand: "kakao" },
};

export const HyundaiBrand: Story = {
  args: { ...defaultArgs, cardBrand: "hyundai" },
};

export const WooriBrand: Story = {
  args: { ...defaultArgs, cardBrand: "woori" },
};

export const LotteBrand: Story = {
  args: { ...defaultArgs, cardBrand: "lotte" },
};

export const HanaBrand: Story = {
  args: { ...defaultArgs, cardBrand: "hana" },
};

export const KookminBrand: Story = {
  args: { ...defaultArgs, cardBrand: "kookmin" },
};
