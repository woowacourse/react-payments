import { StoryObj } from "@storybook/react";
import CardInput from "../components/CardInput";

const meta = {
  title: "CardInput",
  component: CardInput,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const CardNumber: Story = {
  args: {
    id: "cardNumber",
    placeholder: "카드 번호를 입력해 주세요.",
    value: "",
    isSecured: false,
    isAutoFocus: true,
    isRequired: true,
    maxLength: 25,
  },
};

export const ExpiredDate: Story = {
  args: {
    id: "expiredDate",
    placeholder: "MM / YY",
    width: "137px",
    value: 0,
    isSecured: false,
    isAutoFocus: false,
    isRequired: true,
    maxLength: 7,
  },
};
