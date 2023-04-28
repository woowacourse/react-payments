import { StoryObj } from "@storybook/react";
import Card from "../components/Card";

const meta = {
  title: "Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const 우리카드: Story = {
  args: {
    color: "rgb(187, 223, 245)",
    cardNumber: "1111-2222-3333-4444",
    ownerName: "LIGHT",
    expiredDate: "12 / 24",
    bankName: "우리은행",
    cvc:"342",
    password: ["1", "2"]
  },
};

export const KakaoBank: Story = {
  args: {
    color: "rgb(251, 210, 77)",
    cardNumber: "3939-3939-5252-5252",
    ownerName: "PATRICK",
    expiredDate: "08 / 25",
    bankName: "카카오뱅크",
    cvc:"342",
    password: ["5", "2"]
  },
};

export const BC카드: Story = {
  args: {
    color: 'rgb(222, 84, 86)',
    cardNumber: "6464-6464-7676-7676",
    ownerName: "CLEAN",
    expiredDate: "04 / 27",
    bankName: "BC카드",
    cvc:"998",
    password: ["3", "8"]
  },
};

export const 신한카드: Story = {
  args: {
    color: 'rgb(19, 74, 245)',
    cardNumber: "3434-3434-2424-2424",
    ownerName: "Tami",
    expiredDate: "01 / 26",
    bankName: "신한카드",
    cvc:"243",
    password: ["1", "9"]
  },
};

export const 현대카드: Story = {
  args: {
    color: 'rgb(51, 51, 51)',
    cardNumber: "7677-4343-5656-4343",
    ownerName: "Rego",
    expiredDate: "03 / 29",
    bankName: "현대카드",
    cvc:"545",
    password: ["8", "0"]
  },
};

export const 롯데카드: Story = {
  args: {
    color: 'rgb(240, 130, 240)',
    cardNumber: "5454-3232-5454-3232",
    ownerName: "Goni",
    expiredDate: "09 / 30",
    bankName: "롯데카드",
    cvc:"009",
    password: ["5", "0"]
  },
};

export const 하나카드: Story = {
  args: {
    color: 'rgb(64, 146, 143)',
    cardNumber: "1414-7676-1414-7676",
    ownerName: "Dori",
    expiredDate: "03 / 30",
    bankName: "하나카드",
    cvc:"555",
    password: ["5", "5"]
  },
};

export const 국민카드: Story = {
  args: {
    color: 'rgb(85, 79, 71)',
    cardNumber: "8282-8282-1000-0999",
    ownerName: "Takumi",
    expiredDate: "09 / 99",
    bankName: "국민카드",
    cvc:"828",
    password: ["8", "2"]
  },
};