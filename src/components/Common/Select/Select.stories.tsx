import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const cardCompanyOptions = [
  { value: "bc", text: "BC카드" },
  { value: "shinhan", text: "신한카드" },
  { value: "kakaobank", text: "카카오뱅크" },
  { value: "hyundai", text: "현대카드" },
  { value: "woori", text: "우리카드" },
  { value: "lotte", text: "롯데카드" },
  { value: "hana", text: "하나카드" },
  { value: "kb", text: "국민카드" },
];

const meta = {
  title: "Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof Select>;

const defaultArgs = {
  options: cardCompanyOptions,
};

export const Default: Story = {
  args: {
    ...defaultArgs,
    placeholder: "카드사를 선택해주세요",
  },
};

export const WithoutPlaceholder: Story = {
  args: {
    ...defaultArgs,
  },
};

export const WithError: Story = {
  args: {
    ...defaultArgs,
    isError: true,
  },
};
