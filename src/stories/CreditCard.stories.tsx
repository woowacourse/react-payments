import type { Meta, StoryObj } from "@storybook/react";
import CreditCard from "../components/creditCard";

const meta = {
  title: "Components/CreditCard",
  component: CreditCard,
  argTypes: {
    creditCardNumber: {
      control: "object",
      description: "신용카드 번호",
    },
    expirationPeriod: {
      control: "text",
      description: "신용카드 유효기간",
    },
    ownerName: {
      control: "text",
      description: "카드 소유자 이름",
    },
  },
} satisfies Meta<typeof CreditCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "기본 UI",
  args: {
    creditCardNumber: ["", "", "", ""],
    expirationPeriod: "",
    ownerName: "",
  },
};

export const DummyInfo: Story = {
  name: "임의의 데이터 값",
  args: {
    creditCardNumber: ["1234", "1234", "1234", "1234"],
    expirationPeriod: "12/25",
    ownerName: "KANG DABIN",
  },
};

export const VisaInfo: Story = {
  name: " 4로 시작하는 숫자라면 Visa 카드 이미지가 나온다. ",
  args: {
    creditCardNumber: ["40", "", "", ""],
    expirationPeriod: "12/25",
    ownerName: "KANG DABIN",
  },
};

export const MasterInfo: Story = {
  name: " 51~55로 시작하는 숫자라면 Master 카드 이미지가 나온다. ",
  args: {
    creditCardNumber: ["51", "", "", ""],
    expirationPeriod: "12/25",
    ownerName: "KANG DABIN",
  },
};
