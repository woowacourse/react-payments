import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "../components/common/Card";

const meta = {
  title: "Card",
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Empty: Story = {
  args: {
    cardNumber: "",
    validityPeriod: { month: "", year: "" },
    brand: null,
  },
};

export const Filled: Story = {
  args: {
    cardNumber: "1234567812345678",
    validityPeriod: { month: "04", year: "26" },
    brand: null,
  },
};

export const Visa: Story = {
  args: {
    cardNumber: "4111111111111111",
    validityPeriod: { month: "04", year: "26" },
    brand: "Visa",
  },
};

export const MasterCard: Story = {
  args: {
    cardNumber: "5123456789012346",
    validityPeriod: { month: "12", year: "28" },
    brand: "MasterCard",
  },
};

export const Diners: Story = {
  args: {
    cardNumber: "36123456789012",
    validityPeriod: { month: "07", year: "27" },
    brand: "Diners",
  },
};

export const AMEX: Story = {
  args: {
    cardNumber: "371234567890123",
    validityPeriod: { month: "09", year: "29" },
    brand: "AMEX",
  },
};

export const UnionPay: Story = {
  args: {
    cardNumber: "6221261234567890",
    validityPeriod: { month: "11", year: "30" },
    brand: "UnionPay",
  },
};

export const WithCompanyBC: Story = {
  args: {
    cardNumber: "4111111111111111",
    validityPeriod: { month: "04", year: "26" },
    brand: "Visa",
    company: "BC",
  },
};

export const WithCompanyShinhan: Story = {
  args: {
    cardNumber: "5123456789012346",
    validityPeriod: { month: "04", year: "26" },
    brand: "MasterCard",
    company: "sinhan",
  },
};

export const WithCompanyKakaoBank: Story = {
  args: {
    cardNumber: "4111111111111111",
    validityPeriod: { month: "04", year: "26" },
    brand: "Visa",
    company: "kakaobank",
  },
};

export const WithCompanyHyundai: Story = {
  args: {
    cardNumber: "5123456789012346",
    validityPeriod: { month: "04", year: "26" },
    brand: "MasterCard",
    company: "hyundai",
  },
};

export const WithCompanyWoori: Story = {
  args: {
    cardNumber: "4111111111111111",
    validityPeriod: { month: "04", year: "26" },
    brand: "Visa",
    company: "woori",
  },
};

export const WithCompanyLotte: Story = {
  args: {
    cardNumber: "5123456789012346",
    validityPeriod: { month: "04", year: "26" },
    brand: "MasterCard",
    company: "lotte",
  },
};

export const WithCompanyHana: Story = {
  args: {
    cardNumber: "4111111111111111",
    validityPeriod: { month: "04", year: "26" },
    brand: "Visa",
    company: "hana",
  },
};

export const WithCompanyKookmin: Story = {
  args: {
    cardNumber: "5123456789012346",
    validityPeriod: { month: "04", year: "26" },
    brand: "MasterCard",
    company: "kookmin",
  },
};
