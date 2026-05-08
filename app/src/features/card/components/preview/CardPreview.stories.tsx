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

const defaultCardNumber = {
  "first-digits": "",
  "second-digits": "",
  "third-digits": "",
  "fourth-digits": "",
};
const defaultCardExpiryDate = { "expiry-month": "", "expiry-year": "" };
const defaultCardBrand = null;

export const Empty: Story = {
  args: {
    cardNumber: defaultCardNumber,
    cardExpiryDate: defaultCardExpiryDate,
    cardBrand: defaultCardBrand,
  },
};

export const CardNumberPartiallyFilled: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "",
      "fourth-digits": "",
    },
    cardExpiryDate: defaultCardExpiryDate,
    cardBrand: defaultCardBrand,
  },
};

export const CardNumberFullyFilled: Story = {
  args: {
    cardNumber: {
      "first-digits": "1234",
      "second-digits": "5678",
      "third-digits": "9012",
      "fourth-digits": "3456",
    },
    cardExpiryDate: defaultCardExpiryDate,
    cardBrand: defaultCardBrand,
  },
};

export const ExpiryDateFilled: Story = {
  args: {
    cardNumber: defaultCardNumber,
    cardExpiryDate: {
      "expiry-month": "12",
      "expiry-year": "26",
    },
    cardBrand: defaultCardBrand,
  },
};

export const ExpiryDateDisplayDivideLine: Story = {
  args: {
    cardNumber: defaultCardNumber,
    cardExpiryDate: {
      "expiry-month": "12",
      "expiry-year": "",
    },
    cardBrand: defaultCardBrand,
  },
};

export const FullyFilled: Story = {
  args: {
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
    cardBrand: defaultCardBrand,
  },
};

export const VisaBrand: Story = {
  args: {
    cardNumber: {
      "first-digits": "4111",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
    cardExpiryDate: defaultCardExpiryDate,
    cardBrand: defaultCardBrand,
  },
};

export const MasterBrand: Story = {
  args: {
    cardNumber: {
      "first-digits": "5111",
      "second-digits": "",
      "third-digits": "",
      "fourth-digits": "",
    },
    cardExpiryDate: defaultCardExpiryDate,
    cardBrand: defaultCardBrand,
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
