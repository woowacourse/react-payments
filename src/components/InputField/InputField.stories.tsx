import type { Meta, StoryObj } from "@storybook/react";
import InputField from "./InputField";
import Input from "../Input/Input";

const meta = {
  title: "InputField",
  component: InputField,
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "소유자 이름",
    children: <Input onChange={() => {}} placeholder="JADE" isError={false} />,
    errorMessage: "유효한 이름이 아닙니다.",
  },
};

export const TwoInput: Story = {
  args: {
    label: "유효기간",
    children: (
      <>
        <Input onChange={() => {}} placeholder="MM" isError={false} />
        <Input onChange={() => {}} placeholder="YY" isError={false} />
      </>
    ),
    errorMessage: "유효한 날짜가 아닙니다.",
  },
};

export const FourInput: Story = {
  args: {
    label: "카드 번호",
    children: (
      <>
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
        <Input onChange={() => {}} placeholder="1234" isError={false} />
      </>
    ),
    errorMessage: "유효한 카드번호가 아닙니다.",
  },
};
