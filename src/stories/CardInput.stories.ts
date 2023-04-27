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
    value: "",
    placeholder: "카드 번호를 입력해 주세요.",
    width: "318px",
    isAutoFocus: true,
    isRequired: true,
  },
};

export const ExpiredDate: Story = {
  args: {
    id: "expiredDate",
    placeholder: "MM / YY",
    width: "137px",
    value: "",
    isRequired: true,
  },
};

export const OwnerName: Story = {
  args: {
    id: "ownerName",
    placeholder: "카드에 표시된 이름과 동일하게 입력하세요.",
    value: "",
    width: "318px",
    isSecured: false,
    isRequired: true,
  },
};

export const Cvc: Story = {
  args: {
    id: "cvc",
    width: "84px",
    value: "",
    isSecured: true,
    isRequired: true,
  },
};

export const Password: Story = {
  args: {
    id: "password1",
    width: "42px",
    value: "",
    isSecured: true,
    isRequired: true,
  },
};
