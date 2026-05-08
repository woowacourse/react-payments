import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardPreview } from "./CardPreview";

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
    "first-digits": "",
    "second-digits": "",
    "third-digits": "",
    "fourth-digits": "",
  },
  cardExpiryDate: { "expiry-month": "", "expiry-year": "" },
  cardBrand: null,
};

export const Empty: Story = {
  args: { ...defaultArgs },
};

export const CardNumberPartiallyFilled: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "",
      "fourth-digits": "",
    },
  },
};

export const CardNumberFullyFilled: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "9012",
      "fourth-digits": "3456",
    },
  },
};

export const ExpiryDateFilled: Story = {
  args: {
    ...defaultArgs,
    cardExpiryDate: {
      "expiry-month": "12",
      "expiry-year": "26",
    },
  },
};

export const ExpiryDateDisplayDivideLine: Story = {
  args: {
    ...defaultArgs,
    cardExpiryDate: {
      "expiry-month": "12",
      "expiry-year": "",
    },
  },
};

export const FullyFilled: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "9012",
      "fourth-digits": "3456",
    },
    cardExpiryDate: {
      "expiry-month": "12",
      "expiry-year": "26",
    },
  },
};

export const VisaBrand: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      "first-digits": "4111",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
  },
};

export const MasterBrand: Story = {
  args: {
    ...defaultArgs,
    cardNumber: {
      "first-digits": "5111",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
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
