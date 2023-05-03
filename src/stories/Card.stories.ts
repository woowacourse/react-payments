import { StoryObj } from "@storybook/react";
import Card from "../components/Card";

const meta = {
  title: "Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const EmptyCard: Story = {
  args: {
    cardNumber: "",
    ownerName: "",
    expiredDate: "",
    cardCompany: "카드사선택필요",
    name: "빈카드",
    cvc: "",
    password: ["", ""],
  },
};

export const BcCard: Story = {
  args: {
    cardNumber: "1111-2222-3333-4444",
    ownerName: "light",
    expiredDate: "12 / 24",
    cardCompany: "BC카드",
    name: "엄카",
    cvc: "123",
    password: ["1", "2"],
  },
};

export const ShinhanCard: Story = {
  args: {
    cardNumber: "1111-2222-3333-4444",
    ownerName: "light",
    expiredDate: "12 / 24",
    cardCompany: "신한카드",
    name: "학생증",
    cvc: "123",
    password: ["1", "2"],
  },
};

export const KakaoCard: Story = {
  args: {
    cardNumber: "1111-2222-3333-4444",
    ownerName: "light",
    expiredDate: "12 / 24",
    cardCompany: "카카오뱅크",
    name: "교통카드",
    cvc: "123",
    password: ["1", "2"],
  },
};

export const HyundaiCard: Story = {
  args: {
    cardNumber: "1111-2222-3333-4444",
    ownerName: "light",
    expiredDate: "12 / 24",
    cardCompany: "현대카드",
    name: "학생증",
    cvc: "123",
    password: ["1", "2"],
  },
};

export const WooriCard: Story = {
  args: {
    cardNumber: "1111-2222-3333-4444",
    ownerName: "light",
    expiredDate: "12 / 24",
    cardCompany: "우리카드",
    name: "학생증",
    cvc: "123",
    password: ["1", "2"],
  },
};

export const LotteCard: Story = {
  args: {
    cardNumber: "1111-2222-3333-4444",
    ownerName: "light",
    expiredDate: "12 / 24",
    cardCompany: "롯데카드",
    name: "학생증",
    cvc: "123",
    password: ["1", "2"],
  },
};

export const HanaCard: Story = {
  args: {
    cardNumber: "1111-2222-3333-4444",
    ownerName: "light",
    expiredDate: "12 / 24",
    cardCompany: "하나카드",
    name: "학생증",
    cvc: "123",
    password: ["1", "2"],
  },
};

export const KbCard: Story = {
  args: {
    cardNumber: "1111-2222-3333-4444",
    ownerName: "light",
    expiredDate: "12 / 24",
    cardCompany: "국민카드",
    name: "학생증",
    cvc: "123",
    password: ["1", "2"],
  },
};
