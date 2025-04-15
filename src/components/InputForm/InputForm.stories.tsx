import type { Meta, StoryObj } from "@storybook/react";
import { INPUT_TYPE } from "../../constants/constants";
import InputForm from "./InputForm";

const meta = {
  title: "InputForm",
  component: InputForm,
} satisfies Meta<typeof InputForm>;

export default meta;

type Story = StoryObj<typeof InputForm>;

export const CardNumber: Story = {
  args: {
    title: "결제할 카드 번호를 입력해 주세요",
    description: "본인 명의의 카드만 결제 가능합니다.",
    subTitle: "카드 번호",
    type: INPUT_TYPE.cardNumber,
  },
};

export const ExpirationPeriod: Story = {
  args: {
    title: "카드 유효기간을 입력해 주세요",
    description: "월/년도(MMYY)를 순서대로 입력해 주세요.",
    subTitle: "유효기간",
    type: INPUT_TYPE.expirationPeriod,
  },
};
export const CVCNumber: Story = {
  args: {
    title: "CVC 번호를 입력해 주세요",
    subTitle: "CVC",
    type: INPUT_TYPE.cvcNumber,
  },
};
